import {
  FETCH_ALL_MERCHANTS,
  FETCH_DISCOUNTS_BY_MERCHANT,
  UPDATE_CAMPAIGN_STATUS,
  FETCH_COUPONS_BY_MERCHANT,
  FETCH_ORDERS_BY_MERCHANT,
  UPDATE_COUPON_STATUS,
  FETCH_MERCHANT,
  FETCH_RECEIPTS_BY_MERCHANT,
  UPDATE_RECEIPT_STATUS
} from "../constants";

let campaignStatus = [];
let campaignCouponStatus = [];
let refCart = null;

const merchantReducers = (
  state = {
    merchants: [],
    discounts: [],
    statusArray: [],
    coupons: [],
    couponStatusArray: [],
    orders: [],
    merchant:[],
    merchantReceipts:[],
    receiptStatusArray:[]
  },
  action
) => {
  switch (action.type) {
    case FETCH_ALL_MERCHANTS:
      return { ...state, merchants: action.payload };
    case FETCH_MERCHANT:
      return { ...state, merchant: action.payload };
    case FETCH_DISCOUNTS_BY_MERCHANT:
      console.log("===========action.payload====");
      console.log(action.payload);
      campaignStatus = action?.payload?.statusArr;
      localStorage.setItem("campaignStatus", JSON.stringify(campaignStatus));

      return {
        ...state,
        discounts: action.payload,
        statusArray: campaignStatus,
      };
    case FETCH_RECEIPTS_BY_MERCHANT:
      console.log("===========action.payload====");
      console.log(action.payload);
      campaignStatus = action?.payload?.statusArr;
      localStorage.setItem("campaignReceiptStatus", JSON.stringify(campaignStatus));

      return {
        ...state,
        merchantReceipts: action.payload,
        receiptStatusArray: campaignStatus,
      };
    case FETCH_COUPONS_BY_MERCHANT:
      console.log("===========action.payload====");
      console.log(action.payload);
      campaignCouponStatus = action?.payload?.couponStatusArr;
      localStorage.setItem(
        "campaignCouponStatus",
        JSON.stringify(campaignCouponStatus)
      );

      return {
        ...state,
        coupons: action.payload,
        couponStatusArray: campaignCouponStatus,
      };
    case FETCH_ORDERS_BY_MERCHANT:
      console.log("===========action.payload====");
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload,
      };
    case UPDATE_CAMPAIGN_STATUS:
      console.log("===update campaign status action.payload=========");
      console.log(action.payload);
      campaignStatus = JSON.parse(localStorage.getItem("campaignStatus"));
      refCart = campaignStatus?.find((item) => item._id === action.payload.id);
      console.log(refCart);
      if (action.payload.status === "true") {
        console.log("====satatustrue========");
        console.log("true");
      } else {
        console.log("====satatusfalse========");

        console.log("false");
      }
      refCart.active = action.payload.status;

      console.log(campaignStatus);
      return { ...state, statusArray: campaignStatus };
    case UPDATE_COUPON_STATUS:
      console.log("===update campaign status action.payload=========");
      console.log(action.payload);
      campaignStatus = JSON.parse(localStorage.getItem("campaignCouponStatus"));
      refCart = campaignStatus?.find((item) => item._id === action.payload.id);
      console.log(refCart);
      if (action.payload.status === "true") {
        console.log("====satatustrue========");
        console.log("true");
      } else {
        console.log("====satatusfalse========");

        console.log("false");
      }
      refCart.active = action.payload.status;

      console.log(campaignStatus);
      return { ...state, couponStatusArray: campaignStatus };
    case UPDATE_RECEIPT_STATUS:
      console.log("===update campaign status action.payload=========");
      console.log(action.payload);
      campaignStatus = JSON.parse(localStorage.getItem("campaignReceiptStatus"));
      refCart = campaignStatus?.find((item) => item._id === action.payload.id);
      console.log(refCart);
      if (action.payload.status === "true") {
        console.log("====satatustrue========");
        console.log("true");
      } else {
        console.log("====satatusfalse========");

        console.log("false");
      }
      refCart.active = action.payload.status;

      console.log(campaignStatus);
      return { ...state, receiptStatusArray: campaignStatus };

    default:
      return state;
  }
};

export default merchantReducers;
