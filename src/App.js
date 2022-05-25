import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import Food from "./Pages/Food";
import Home from "./Pages/Home";

import Activate from "./Pages/Activate";

import Forgot from "./Pages/Forgot";
import Reset from "./Pages/Reset";
import MerchantForm from "./Pages/Become-A-Merchant";
import Merchants from "./Pages/Merchants";
import About from "./Pages/AboutUs";
import Faq from "./Pages/Faq";
import Terms from "./Pages/terms";
import Privacy from "./Pages/privacy";
import Merchant from "./Pages/Merchants/Merchant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Discounts from "./Pages/Discounts";
import Coupons from "./Pages/Coupons";
import Cart from "./Pages/Cart";
import Deals from "./Pages/Deals";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Relevant Merchant Routes

import Campaign from "../src/Components/Campaign";
import CampaignDetails from "../src/Components/CampaignDetails";
import Orders from "./Pages/Orders";
import Account from "./Pages/Account-Settings/Account";
import Users from "./Pages/Account-Settings/Users";
import NewUser from "./Pages/Account-Settings/Users/User";
import MerchantLogo from "./Pages/Account-Settings/MerchantLogo";
import Settlements from "./Pages/Account-Settings/Settlements";
import WazoPoints from "./Pages/Account-Settings/WazoPoints";
import CreateCampaign from "./Pages/CreateCampaign";
import CreateCampaignImage from "./Pages/CreateCampaign/Image";
import CreateCampaignOtherDetails from "./Pages/CreateCampaign/OtherDetails";
import { getAllCoupons, getAllCouponsByMerchant } from "./actions/coupon";
import { getAllDiscountByMerchant } from "./actions";
import { getAllMerchantOrders } from "./actions/order";
import Report from "./Pages/Report";
import ManageReceipts from "./Pages/ManageReceipts";
import Receipts from "./Pages/Receipts";
import {
  getreceipts,
  getAllMerchantReceipts,
  getAllReceiptsByMerchant,
} from "./actions/receipts";
import MerchantFaq from "./Pages/MerchantFaq";
import MerchantTerms from "./Pages/MerchantTerms";
import Verify from "./Pages/Verify";

const App = () => {
  let merchant = JSON.parse(localStorage.getItem("merchant"));
  const state = useSelector((state) => state);

  console.log(state);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getAllMerchants());
    // dispatch(getAllDiscounts(1));
    dispatch(getAllCouponsByMerchant(merchant?.merchant?._id));
    dispatch(getAllReceiptsByMerchant(merchant?.merchant?._id));
    dispatch(getAllDiscountByMerchant(merchant?.merchant?._id));
    dispatch(getAllMerchantOrders(merchant?.merchant?._id, 1));
    dispatch(getAllMerchantReceipts(merchant?.merchant?._id, 1));
    // dispatch(getreceipts(1));
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <button onClick={notify}>Notify !</button> */}
        <ToastContainer />

        <Routes>
          <Route
            path="/"
            element={merchant ? <Home /> : <MerchantForm />}
            // element={<Home />}
          ></Route>
          <Route
            path="login"
            exact
            element={!merchant ? <MerchantForm /> : <Navigate to="/" />}
          />
          <Route
            path="signup"
            element={!merchant ? <MerchantForm /> : <Navigate to="/" />}
          />
          <Route path="/activate" element={<Activate />}></Route>
          <Route path="/campaign/discounts">
            <Route index element={<Discounts />} />
          </Route>
          <Route path="/campaign/coupons">
            <Route index element={<Coupons />} />
          </Route>
          <Route path="/campaign/receipts">
            <Route index element={<Receipts />} />
          </Route>
          <Route path="/manage-receipts">
            <Route index element={<ManageReceipts />} />
          </Route>
          <Route path="/merchant" element={<merchants />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/merchant/:id" element={<merchant />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/verify-email" element={<Verify />} />
          <Route path="/merchant" element={<Merchant />} />

          <Route path="/deals">
            <Route index element={<Deals />} />
            <Route path="discounts">
              <Route index element={<Deals />} />
              <Route path="search" exact element={<Deals />} />
            </Route>
            <Route path="coupons" element={<Deals />} />
          </Route>
          <Route path="/about-us" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-condition/general" element={<Terms />} />
          <Route path="/terms-and-condition/merchant" element={<MerchantTerms />} />

          <Route path="/merchants/dashboard/:id" element={<Campaign />} />

          <Route path="/campaign/edit">
            <Route index element={<CreateCampaign />} />
            <Route path=":id" element={<CreateCampaign />} />
            <Route path="upload-images" element={<CreateCampaignImage />}>
              <Route path=":id" element={<CreateCampaignImage />} />
            </Route>
            <Route
              path="other-details"
              element={<CreateCampaignOtherDetails />}
            />
          </Route>
          <Route path="/campaign/create-campaign">
            <Route index element={<CreateCampaign />} />
            <Route path="upload-images" element={<CreateCampaignImage />}>
              <Route path=":id" element={<CreateCampaignImage />} />
            </Route>
            <Route
              path="other-details"
              element={<CreateCampaignOtherDetails />}
            />
          </Route>
          <Route path="/orders" element={<Orders />} />
          <Route path="/report" element={<Report />} />
          <Route path="faq/users" element={<Faq />} />
          <Route path="faq/merchants" element={<MerchantFaq />} />
          <Route path="/account-settings">
            <Route index element={<Account />} />
            <Route path="profile" element={<Account />} />
            <Route path="merchant-logo" element={<MerchantLogo />} />
            <Route path="wazo-points" element={<WazoPoints />} />

            <Route path="settlements" element={<Settlements />} />
            <Route path="manage-user">
              <Route index element={<Users />} />
              <Route path="add" element={<NewUser />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
