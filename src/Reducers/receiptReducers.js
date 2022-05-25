import { FETCH_ALL,FETCH_RECEIPTS_BY_ID,FETCH_ALL_RECEIPTS, FETCH_DISCOUNT } from "../constants";



const receiptReducers = (state={receipt:[], receipts:[]}, action) => {
    switch (action.type) {
        case FETCH_ALL_RECEIPTS:
        return {...state, receipts:action.payload}
        case FETCH_RECEIPTS_BY_ID:
        return {...state, receipt:action.payload}
        default:
            return state;
    }
}

export default receiptReducers