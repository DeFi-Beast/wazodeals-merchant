import {FETCH_ORDERS_BY_MERCHANT ,START_LOADING, END_LOADING, NOTIFY} from "../constants"
import * as api from "../api"
import {toast} from "react-toastify"

export const getAllMerchantOrders = (id, page) => async(dispatch) => {
    try {
        console.log("=======order===========")
    
        dispatch({type:START_LOADING})
        const {data} = await api.fetchAllMerchantOrders(id, page)
        console.log("======dataorder===========")
        console.log(data)
        dispatch({type:END_LOADING})
        dispatch({type:FETCH_ORDERS_BY_MERCHANT, payload:data})
        // data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))


        
    } catch (error) {
        
    }
    
}
export const postOrder = (order, navigate) => async(dispatch) => {
    try {
        console.log("=======order===========")
        console.log(order)
        dispatch({type:START_LOADING})
        const {data} = await api.postOrder(order)
        console.log("======dataorder===========")
        console.log(data)
        dispatch({type:END_LOADING})
        data.success && navigate(`/`)
        window.location.reload(false);
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))


        
    } catch (error) {
        
    }
    
}
export const createPDF= (pdf) => async(dispatch) => {
    try {
       
        dispatch({type:START_LOADING})
        const {data} = await api.createPDF(pdf)
      


        
    } catch (error) {
        
    }
    
}
