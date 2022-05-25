import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import Pagination from "../../Pagination/Pagination";

import { useSelector } from "react-redux";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { updateReceiptStatus } from "../../../actions/receipts";
import { useDispatch } from "react-redux";
import "./styles.css";
import SweetAlert from "react-bootstrap-sweetalert";
import { useEffect } from "react";
import { getMerchant } from "../../../actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Table = ({ value }) => {
  const [option, setOption] = useState(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const query = useQuery();
  const [alert, setAlert] = useState(false);

  const stateMerchant = useSelector((state) => state.merchants.merchant);
  const [clickCount, setClickCount] = useState(0);
  const merchant = JSON.parse(localStorage.getItem("merchant"));

  const coupons = useSelector((state) => state?.merchants.coupons);

  const [receiptData, setReceiptData] = useState({
    merchantId: JSON.parse(localStorage.getItem("merchant"))?.merchant?._id,
    receiptId: "",
    awardedPoint: "",
    newMerchantPoint:null,
  });
  const merchantReceipts = useSelector(
    (state) => state.merchants?.merchantReceipts
  );
  const page = query.get("page") || 1;
  const dispatch = useDispatch();
  const handleOpen = (imageSrc) => {
    setOpen(true);
    setImage(imageSrc);
  };
  const handleClose = () => setOpen(false);

  // const {receipt} = useSelector(state => state.receipts)
  const handleOption = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };

  let total = 0;
  useEffect(() => {
    total = coupons?.coupons?.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue?.clicks?.length;
    }, 0);
    console.log(total);
    setClickCount(total);
  }, []);
  const onCancel = () => {
    setAlert(false);
  };
  console.log("================receipts===============");
  console.log(image);
  // console.log(receipt)
  const handleReceiptChange = (e) => {
    setReceiptData({ ...receiptData, receiptId: e.target.value });
  };
  useEffect(() => {
    dispatch(getMerchant(merchant?.merchant?._id));
  }, []);
  useEffect(() => {
    const selectedReceipt = merchantReceipts?.merchantReceipts?.find(
      (receipt) => receipt._id === receiptData?.receiptId
    );
    console.log(selectedReceipt);

    const awardedPoint =
      (selectedReceipt?.price * selectedReceipt?.discount) / 3000;
    setReceiptData({ ...receiptData, awardedPoint: awardedPoint });

    console.log(awardedPoint);
  }, [receiptData?.receiptId]);
  useEffect(() => {
    const selectedReceipt = merchantReceipts?.merchantReceipts?.find(
      (receipt) => receipt._id === receiptData?.receiptId
    );
    console.log(selectedReceipt);
console.log(stateMerchant?.merchant?.points)
    const newMerchantPoint =Number(stateMerchant?.merchant?.points) - Number(receiptData?.awardedPoint)
    setReceiptData({ ...receiptData, newMerchantPoint: newMerchantPoint });

  }, [receiptData?.awardedPoint]);


  console.log(receiptData);
  console.log(alert)

  const handleReceiptStatus = (id) => {
   console.log("==============receiptData=============")
   console.log(receiptData)

   if(!receiptData.receiptId){
     setAlert(true)
     console.log(alert)
   } else {
     if(Number(stateMerchant?.merchant?.points) < Number(receiptData?.awardedPoint)){
     console.log(alert)

     setAlert(true)
     console.log("true")
     console.log(Number(stateMerchant?.merchant?.points) ,Number(receiptData?.awardedPoint) )
     } else {
      dispatch(updateReceiptStatus(id, receiptData));
      console.log("false")

     }

   }
  
  };
  console.log("==============receiptData=============")
  console.log(alert)

   console.log(receiptData)
  return (
    <Grid sm={12}>
      <Grid xs={9} md={9}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid container justifyContent="space-between">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                View Receipt
              </Typography>
              <CloseIcon style={{ cursor: "pointer" }} onClick={handleClose} />
            </Grid>
            <Grid
              className="modal-pic"
              container
              justifyContent="center"
              alignItems="center"
            >
              <img style={{ width: "100%" }} src={image} alt="receipt" />
            </Grid>
          </Box>
        </Modal>
      </Grid>

      <Grid container sm={12} alignItems="center">
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
                <option value="2">Set To Completed</option>
                <option value="3">Set To Processing</option>
              </select>
            </div>
          </Grid>
          <Grid ml={3}>
            <Link to="#" onChange={handleOption} className="actionBtn">
              Go
            </Link>
          </Grid>
        </Grid>
        <Grid sm={6}>
          <Grid>
            <FormControl fullWidth>
              <InputLabel>Set Default Campaign *</InputLabel>
              <Select
                labelId="discount-label"
                variant="outlined"
                id="receipt"
                required
                value={receiptData.receiptId}
                label="Discount"
                onChange={handleReceiptChange}
              >
                {merchantReceipts?.merchantReceipts?.map((receipt) => (
                  <MenuItem value={receipt._id}>{receipt.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <table style={{ width: "100%" }}>
        <tr>
          <th></th>
          <th>S/N</th>
          <th>Receipt</th>
          <th>Date</th>
          <th>User</th>
          <th>Status</th>
          <th>Point</th>
          <th>info</th>
          <th>Action</th>
        </tr>
        {value?.length === 0 ? (
          <>
            <tr style={{ margin: "0 auto", padding: "20px", width: "100%" }}>
              <td
                colSpan={10}
                style={{ margin: "0 auto", paddingTop: "100px" }}
              >
                <p style={{ fontSize: "30px" }}>&#8987;</p>
              </td>
            </tr>
          </>
        ) : (
          <>
            {value?.map((val, index) => (
              <tr>
                <td>
                  <Checkbox {...label} onChange={handleChange} />
                </td>
                <td>{index + 1}</td>
                <td>
                  <img
                    onClick={() => handleOpen(val.selectedFiles)}
                    style={{ width: "50px" }}
                    src={val.selectedFiles}
                    alt="receipt"
                  />
                </td>
                <td>{moment(val.createdAt).format("MMM Do YYYY")}</td>
                <td>{val.user}</td>
                <td>{val.status}</td>
                <td>{val.point}</td>
                <td> - </td>
                <td>
                  <Grid container>
                    <Button
                      className="viewBtn btn"
                      onClick={() => handleOpen(val.selectedFiles)}
                    >
                      View
                    </Button>
                    <Button
                      className={
                        val.status === "processing" ? "btn viewStatus" : ""
                      }
                      onClick={() => handleReceiptStatus(val._id)}
                      disabled={val.status === "processing" ? false : true}
                    >
                      {val.status === "processing"
                        ? "Set To Complete"
                        : "Completed"}
                    </Button>
                  </Grid>
                </td>
              </tr>
            ))}
          </>
        )}
      </table>
      {alert  && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Ok"
          confirmBtnBsStyle="danger"
          title={receiptData?.receiptId ? "Your Wazo Point Balance is not enough":"Set A Receipt campaign before you continue"}
          focusCancelBtn
          onCancel={onCancel}
          onConfirm={onCancel}
        ></SweetAlert>
      )}
      <Grid container justifyContent="flex-end">
        <Grid container md={4} justifyContent="flex-end">
          <Paper elevation={6} className="pagination">
            <Pagination page={page} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Table;
