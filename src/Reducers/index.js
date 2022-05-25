import { combineReducers } from "redux";

import discounts from "./discountReducers";
import coupons from "./couponReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";
import notify from "./notifyReducers"
import addToCart from "./CartReducers"
import receipts from "./receiptReducers";

const reducers = combineReducers({
    discounts, merchants, auth, notify, addToCart, coupons, receipts

})

export default reducers