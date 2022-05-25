import { Grid, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllDiscountByMerchant } from "../../actions";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from '@mui/icons-material/Visibility';
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CampaignMenu from "../../Components/CampaignMenu";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { PrintLogic } from "../../Components/PrintLogic";
import "./styles.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Orders = ({ id }) => {
  //   const { id } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.merchants?.orders);
  const discounts = useSelector((state) => state.merchants?.discounts);
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorModalEl, setAnchorModalEl] = useState(false);
  const [option, setOption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeModalIndex, setActiveModalIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  console.log(orders);
  console.log(id);

  const handleToggle = (e) => {
    setActive(!active);
  };

  const handleClick = (event, index) => {
    console.log("=============index==================");
    console.log(index);
    setActiveIndex(index);
    setAnchorEl(!anchorEl);
  };
  const handleModalClick = (event, index) => {
    console.log("=============index==================");
    console.log(index);
    setActiveModalIndex(index);
    setAnchorModalEl(!anchorEl);
    setOpen(true);
  };
  const handleClose = (index) => {
    setAnchorEl(null);
    setActiveIndex(index);
  };
  const handleModalClose = (index) => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllDiscountByMerchant(id));
  }, [id]);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
 

  const handleOrderItem = (id) => {
    console.log(discounts.discounts);
    const discount = discounts?.discounts?.filter(
      (discount) => discount?._id === id
    )[0]?.title;
    console.log(discount);
    return discount;
  };

  const handleOption = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  console.log(option);

  console.log(activeModalIndex);
  return (
    <LayoutDefault>
      <Grid container sm={11} m="0 auto">
        <h1>Manage Orders</h1>
        <Grid container justifyContent="space-between" my={3}>
          <Grid container sm={6} alignItems="center">
            <Grid>
              <Checkbox {...label} onChange={handleChange} />
            </Grid>
            <Grid>
              <div class="input-group">
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  disabled={!option}
                >
                  <option selected>Print Documents</option>
                </select>
              </div>
            </Grid>
            <Grid ml={3}>
              <Link to="#" onChange={handleOption} className="actionBtn">
                Go
              </Link>
            </Grid>
          </Grid>
          <Grid>{/* <Link to="/create-campaign">Add</Link> */}</Grid>
        </Grid>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Order Number</th>
              <th>Order Date </th>
              <th>Order Details </th>
              <th>Paystack Reference </th>
              <th>Ordered By </th>
              <th>Item Price( &#8358;)</th>
              <th>Qty</th>
              <th>Order Total ( &#8358;)</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders?.orders?.length === 0 || orders?.orders === "undefined" || orders?.orders?.length === "undefined" ? (
          <>
            <tr
              style={{ margin: "0 auto", padding: "20px", width: "100%" }}
            
            >
              <td colSpan={10} style={{ margin: "0 auto", paddingTop: "100px" }}>
               <p>No Order Yet</p> 
              </td>
            </tr>
         
          </>
        ) :(
          <tbody>
            {orders?.orders?.map((item, index) => (
              <tr className="campaign-row" key={index}>
                <td>
                  <Checkbox {...label} onChange={handleChange} />
                </td>
                <td>
                  <Link to={`/campaign/details/${item._id}`}>
                    {item.order_ref}
                  </Link>
                </td>
                <td>
                  {moment(item.createdAt).format("MMM Do YYYY , h:mm:ss a")}
                </td>

                <td>{handleOrderItem(item.order[0].productId)}</td>
                <td>{item.pay_stack_ref_id}</td>

                <td>{item.email}</td>
                <td>{item.order[0].orderPrice?.toLocaleString("en-US")}</td>
                <td>{item.order[0].orderQty}</td>
                <td>
                  {item.order[0].orderProductTotal?.toLocaleString("en-US")}
                </td>
                <td>{item?.payment_method?.join(",")}</td>
                <td style={{ padding: "10px 20px" }}>
                  <div style={{ position: "relative" }}>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      variant="contained"
                      disableElevation
                      onClick={(event) => handleClick(event, index)}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      Options
                    </Button>
                    {activeIndex === index ? (
                      <>
                        {anchorEl && (
                          <div
                            id="demo-customized-menu"
                            className="options-menu"
                            onClose={handleClose}
                            style={{
                              background: "white",
                              zIndex: "100",
                              boxShadow: "1px 3px 8px black",
                            }}
                          >
                            <MenuItem
                              disableRipple
                              // onClick={() =>
                              //   handleDelete(item._id, item.campaignType)
                              // }

                              onClick={(event) =>
                                handleModalClick(event, index)
                              }
                            >
                              <VisibilityIcon />
                              View Order
                            </MenuItem>
                            
                          </div>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                {activeModalIndex === index && (
                  <Modal
                    open={open}
                    onClose={handleModalClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                    <Box sx={{ ...style, width: "auto" }}>
                      <PrintLogic item={item} id={item.order[0].productId}  />
                    </Box>
                  </Modal>
                )}
              </tr>
            ))}
          </tbody>)}
        </table>
      </Grid>
    </LayoutDefault>
  );
};
export default Orders;
