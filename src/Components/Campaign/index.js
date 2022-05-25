import { Grid, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  deleteDiscount,
  getAllDiscountByMerchant,
  getMerchant,
  updateCampaignStatus,
} from "../../actions";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CampaignMenu from "../CampaignMenu";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { UPDATE_CAMPAIGN_STATUS, UPDATE_COUPON_STATUS, UPDATE_RECEIPT_STATUS } from "../../constants";

import "./styles.css";
import { deleteCoupon, updateCouponStatus } from "../../actions/coupon";
import { deleteReceipt, updateMerchantReceiptStatus } from "../../actions/receipts";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Campaign = ({ value, status }) => {
  //   const { id } = useParams();
  const dispatch = useDispatch();
  // const discounts = useSelector((state) => state.merchants?.discounts);
  const coupons = useSelector((state) => state?.merchants.coupons);

  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [option, setOption] = useState(false);
  const [alert, setAlert] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const merchant = JSON.parse(localStorage.getItem("merchant"));
  const stateMerchant = useSelector((state) => state.merchants.merchant);

  useEffect(() => {
    dispatch(getMerchant(merchant?.merchant?._id));
  }, []);

  const Location = useLocation();

  console.log("c==================oupons;;;;;;;;;--------2");
  console.log(coupons);
  let total = null;

  useEffect(() => {
    total = coupons?.coupons?.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue?.clicks?.length;
    }, 0);
    console.log(total);
    setClickCount(total);
  }, [merchant]);

  console.log("====clickstotal========");
  console.log(total);
  console.log(coupons?.coupons?.coupons);
  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleToggle = (id, status, index) => {
    console.log(status);
    console.log(id);
    switch (Location.pathname) {
      case "/campaign/coupons":
        dispatch({
          type: UPDATE_COUPON_STATUS,
          payload: { id: id, status: status, index: index },
        });
        dispatch(updateCouponStatus(id, { status: status }));
        break;
      case "/campaign/receipts":
        dispatch({
          type: UPDATE_RECEIPT_STATUS,
          payload: { id: id, status: status, index: index },
        });
        dispatch(updateMerchantReceiptStatus(id, { status: status }));
        break;
      case "/campaign/discounts":
        dispatch({
          type: UPDATE_CAMPAIGN_STATUS,
          payload: { id: id, status: status, index: index },
        });
        dispatch(updateCampaignStatus(id, { status: status }));
        break;
    
      default:
        break;
    }
    if (Location.pathname === "/campaign/coupons") {
      console.log("coupon");
      
    } else {
     
    }
  };

  const handleClick = (event, index) => {
    console.log("=============index==================");
    console.log(index);
    setActiveIndex(index);
    setAnchorEl(!anchorEl);
  };
  const handleClose = (index) => {
    setAnchorEl(null);
    setActiveIndex(index);
  };
  console.log("=============activeIndex==================");
  console.log(activeIndex);

  // let campaignStatus =[]
  // useEffect(() => {
  //   // campaignStatus.push("himan")
  //   discounts?.discounts?.map((discount, index) => campaignStatus.push({index:index,id:discount._id, status:discount.active}) )
  //   console.log("==============campaignStatus============")
  //   console.log(campaignStatus)
  //   localStorage.setItem("campaignStatusArr", JSON.stringify(campaignStatus))

  // }, [discounts]);

  console.log(merchant);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };

  console.log(
    "=======================index, startDate, endDate==============="
  );
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  console.log(today);

  // active || ((today >= item.startDate) && (today <= item.endDate))

  const handleOption = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };

  const onCancel = () => {
    setAlert(false);
  };
  const handleAlert = () => {
    setAlert(true);
  };
  const handleDelete = (id, type) => {
    console.log(id, type);
    switch (type) {
      case "discount":
      dispatch(deleteDiscount(id));
        
        break;
      case "coupon":
      dispatch(deleteCoupon(id));
        
        break;
      case "receipt":
      dispatch(deleteReceipt(id));
        
        break;
    
      default:
        break;
    }
    
  };
  console.log(option);
  console.log(merchant?.merchant?.points);
  console.log(clickCount);
  return (
    <Grid container sm={11} m="0 auto" className="mb-5">
      <Grid container justifyContent="space-between">
        <Grid>
          <h1>Manage Campaigns</h1>
          <CampaignMenu />
        </Grid>
        <Grid
          style={{
            background: "#80808042",
            borderRadius: "50%",
            paddingTop: "50px",
            paddingBottom: "20px",
            color: "yellow",
            padding: "20px",
          }}
        >
          <h1
            style={{
              background: "#d21944",
              borderRadius: "50%",
              paddingTop: "50px",
              paddingBottom: "20px",
              padding: "20px",
            }}
          >
            {stateMerchant?.merchant?.points - (clickCount* 7) ||
              merchant?.merchant?.points - (clickCount*7)}{" "}
            <span>WP</span>
          </h1>
        </Grid>
      </Grid>

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
                <option selected>Please Choose an Option...</option>
                <option value="1">Delete Campaigns</option>
                <option value="2">Set To Active</option>
                <option value="3">Set To Inactive</option>
              </select>
            </div>
          </Grid>
          <Grid ml={3}>
            <Link to="#" onChange={handleOption} className="actionBtn">
              Go
            </Link>
          </Grid>
        </Grid>
        <Grid>
          <Link to="/campaign/create-campaign">Add</Link>
        </Grid>
      </Grid>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Created </th>
            <th>Campaign Start Date </th>
            <th>Campaign End Date </th>
            <th>Price( &#8358;)</th>
            <th>Discount ( % )</th>
            <th> Sale Price( &#8358;)</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        {value?.length === 0 ? (
          <>
            <tr
              style={{ margin: "0 auto", padding: "20px", width: "100%" }}
            
            >
              <td colSpan={10} style={{ margin: "0 auto", paddingTop: "100px" }}>
               <p>No Campaign</p> 
              </td>
            </tr>
            <tr
              style={{ margin: "0 auto", padding: "10px", width: "100%" }}
             
            >
              <td colSpan={10} style={{ margin: "0 auto", padding: "0px" }}>
                Start A New Campaign
              </td>
            </tr>
          </>
        ) : (
          <tbody>
            {value?.map((item, index) => (
              <tr className="campaign-row" key={index}>
                <td>
                  <Checkbox {...label} onChange={handleChange} />
                </td>
                <td>
                  <Link to={`/campaign/edit/${item._id}`}>{item.title}</Link>
                </td>
                <td>{moment(item.createdAt).format("MMM Do YYYY")}</td>
                <td>
                  {moment(item.startDate).format("MMM Do YYYY , h:mm:ss a")}
                </td>
                <td>{moment(item.endDate).format("MMM Do YYYY, h:mm:ss a")}</td>
                <td>{Number(item.price).toLocaleString("en-US")}</td>
                <td>{item.discount}</td>
                <td>
                  {Number(
                    item.price - (item.price * item.discount) / 100
                  ).toLocaleString("en-US")}
                </td>

                <td>
                  <div
                    className={
                      status?.[index]?.active
                        ? "toggle-container-active"
                        : "toggle-container"
                    }
                    onClick={() =>
                      handleToggle(item._id, !status?.[index]?.active, index)
                    }
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      style={{ width: "100%" }}
                    >
                      <p>ON</p>
                      <p>OFF</p>
                    </Grid>
                    <div
                      // (startingDate.getTime())>= (today.getTime())
                      className={
                        status?.[index]?.active ? "toggle-right" : "toggle-ball"
                      }
                    ></div>
                  </div>
                </td>
                {alert && (
                  <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => handleDelete(item._id, item.campaignType)}
                    onCancel={onCancel}
                    focusCancelBtn
                  ></SweetAlert>
                )}
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
                            <MenuItem disableRipple>
                              <Link to={`/campaign/edit/${item._id}`}>
                                <EditIcon />
                                Edit Campaign
                              </Link>
                            </MenuItem>

                            <MenuItem
                              disableRipple
                              // onClick={() =>
                              //   handleDelete(item._id, item.campaignType)
                              // }
                              onClick={() => handleAlert()}
                            >
                              <DeleteIcon />
                              Delete Campaign
                            </MenuItem>
                          </div>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </Grid>
  );
};
export default Campaign;
