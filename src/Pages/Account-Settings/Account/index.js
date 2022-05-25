import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateMerchantDetails } from "../../../actions";
import AccountMenu from "../../../Components/AccountMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";

import "./styles.css";

const initialState = {
  phone: "",
  registerName: "",
  address: "",
  city:"",
  ownerFirstName:"",
  ownerLastName:"",
  cacNo:"",
  selectedFile:[],
  bank:'',
  bankAcctName:'',
  bankAcctNo:'',
  bankIban:'',
  bankcode:'',
  bankswift:'',
  customercareName:'',
  customercareEmail:'',
  customercarePhone:'',
  customercareLocation:'',

};

const Account = ({ id }) => {
  const [formData, setFormData] = useState(initialState)
  const merchant = JSON.parse(localStorage.getItem("merchant"))
const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    
  
    
  }, [])
  

  console.log(formData)

const  handleSubmit = (e) => {
  e.preventDefault()
  dispatch(updateMerchantDetails(merchant?.merchant?._id, formData))

}

  return (
    <LayoutDefault>
      <Grid container sm={11} m="0 auto">
        <h1>Your Profile</h1>
        <AccountMenu />

        <Grid sm={12} justifyContent="space-between" my={3}>
          <form   onSubmit={handleSubmit}>
            <Grid sm={12}>
              <Grid sm={12} className="account-section-hero">
                <h5>Merchant Account Information</h5>
              </Grid>
              <Grid px={5} py={3}>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Merchant ID
                  </label>
                  <div class="col-sm-5">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="merchant ID"
                      readOnly="true"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Merchant Name
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="merchantName"
                      readOnly="true"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                    required
                  >
                    Email Address
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="email"
                    readOnly='true'

                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Merchant Phone Number
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                  label="Password"
                  onChange={handleChange}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid sm={12}>
              <Grid sm={12} className="account-section-hero">
                <h5>Business Information</h5>
              </Grid>
              <Grid px={5} py={3}>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Company Registered Name
                  </label>
                  <div class="col-sm-5">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="merchantRegisteredName"
                      name="registerName"
                      value={formData.registerName}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Address 1
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="merchantAddress"
                      name="address"
                      value={formData.address}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    City/Town
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="city"
                      name="city"
                      value={formData.city}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Business Owner/ Legal representative First Name
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="firstName"
                      name="ownerFirstName"
                      value={formData.ownerFirstName}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Business Owner/ Legal representative Last Name
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="lastName"
                      name="ownerLastName"
                      value={formData.ownerLastName}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    CAC Registration Number
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="cac"
                      name="cacNo"
                      value={formData.cacNo}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Upload A copy of CAC certificate
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="file"
                      class="form-control form-control-sm"
                      id="cert"
                      name="selectedFile"
                      value={formData.selectedFile}
                  onChange={handleChange}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid sm={12}>
              <Grid sm={12} className="account-section-hero">
                <h5>Merchant Bank Details</h5>
              </Grid>
              <Grid px={5} py={3}>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Bank
                  </label>
                  <div class="col-sm-5">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="bank"
                      name="bank"
                      value={formData.bank}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Account Name
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="accountName"
                      name="bankAcctName"
                      value={formData.bankAcctName}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Account Number
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="accountNumber"
                      name="bankAcctNo"
                      value={formData.bankAcctNo}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    IBAN
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="iban"
                      name="bankIban"
                      value={formData.bankIban}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Bank Code
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="bankcode"
                      name="bankcode"
                      value={formData.bankcode}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    SWIFT
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="swift"
                      name="bankswift"
                      value={formData.bankswift}
                  onChange={handleChange}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid sm={12}>
              <Grid sm={12} className="account-section-hero">
                <h5>Merchant HelpLine</h5>
              </Grid>
              <Grid px={5} py={3}>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Customer Care Contact Name
                  </label>
                  <div class="col-sm-5">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="customerName"
                      name="customercareName"
                      value={formData.customercareName}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Customer Care Email
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="customerEmail"
                      name="customercareEmail"
                      value={formData.customercareEmail}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Customer Care Phone Number
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="tel"
                      class="form-control form-control-sm"
                      id="customerNumber"
                      name="customercarePhone"
                      value={formData.customercarePhone}
                  onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="colFormLabelSm"
                    class="col-sm-2 col-form-label col-form-label-sm text-right"
                  >
                    Location
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="customercareLocation"
                      name="customercareLocation"
                      value={formData.customercareLocation}
                  onChange={handleChange}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container sm={6} justifyContent="right">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </LayoutDefault>
  );
};
export default Account;
