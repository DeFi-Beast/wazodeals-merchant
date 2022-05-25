import { FETCH_ALL_COUPON, FETCH_COUPON } from "../constants";



const couponReducers = (state={coupons:[], coupon:[]}, action) => {
    switch (action.type) {
        case FETCH_ALL_COUPON:
        return {...state, coupons:action.payload}
        case FETCH_COUPON:
        return {...state, coupon:action.payload}
    
        default:
            return state;
    }
}

export default couponReducers