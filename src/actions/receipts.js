import { CREATE_RECEIPT,FETCH_RECEIPTS_BY_ID,FETCH_ALL_RECEIPTS,FETCH_RECEIPTS_BY_MERCHANT, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'
import {toast} from "react-toastify"

export const getreceipts = (page)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchreceipts(page)

        dispatch({type:FETCH_ALL_RECEIPTS, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}

export const createReceipt = (receipt, navigate)=> async(dispatch) => {
    

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.createReceipt(receipt)

        dispatch({type:CREATE_RECEIPT, payload:data})
        console.log(data)
        dispatch({type:END_LOADING})
        navigate(`/user/${data.receipt.user}`)
        // window.location.reload(false);
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
        
    } catch (error) {
        
    }

}

export const getReceiptById = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchReceiptById(id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_RECEIPTS_BY_ID, payload:data})
        
    } catch (error) {
        
    }

}
export const getAllMerchantReceipts = (id, page)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllMerchantReceipts(id, page)

        console.log(data)

        dispatch({type:FETCH_ALL_RECEIPTS, payload:data})
        dispatch({type:END_LOADING})


        
    } catch (error) {
        
    }

}
export const updateReceiptStatus = (id, receiptData)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})
console.log("=========id, receiptData============")
console.log(id, receiptData)
        const {data} = await api.updateReceiptStatus(id, receiptData)
        dispatch({type:END_LOADING})
        data.success && dispatch( toast.success(<>{data.message}</>) && window.location.reload(false))
        data.error && dispatch( toast.error(<>{data.message}</>))
        console.log(data)

        // dispatch({type:FETCH_RECEIPTS_BY_ID, payload:data})
        
    } catch (error) {
        
    }

}



export const getAllReceiptsByMerchant = (id)=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllReceiptsByMerchant(id)

        console.log(data)

        dispatch({type:FETCH_RECEIPTS_BY_MERCHANT, payload:data})
        
    } catch (error) {
        
    }

}

export const createMerchantReceipt = (receipt, navigate)=> async(dispatch) => {
   

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.createMerchantReceipt(receipt)
   console.log("============new coupondata=============")

        console.log(data)

        // dispatch({type:CREATE_DISCOUNT, payload:data})
        // campaign/create-campaign/upload-images

        navigate(`upload-images/${data.merchantReceipts._id}?type=${data.merchantReceipts.campaignType}`)


   data.success && dispatch( toast.success(<>{data.message}</>)  && window.location.reload())
   data.error && dispatch( toast.error(<>{data.message}</>))

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}
export const updateMerchantReceipt = (id, discount)=> async(dispatch) => {

    try {

        const {data} = await api.updateMerchantReceipt(id, discount)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const updateReceiptCampaignImages = (id, formData, Navigate)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        console.log("=======updateReceiptCampaignImagesformData==========")
        console.log(formData)
        const {data} = await api.updateReceiptCampaignImages(id, formData)
        dispatch({type:END_LOADING})

        data.success && dispatch( toast.success(<>{data.message}</>) && Navigate("/") && window.location.reload(false))
        window.location.reload(false)
        console.log(data)

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}

export const updateMerchantReceiptStatus = (id, status)=> async(dispatch) => {

    try {

        const {data} = await api.updateMerchantReceiptStatus(id, status)

        console.log(data)
        // dispatch({type:FETCH_ALL, payload:data})
        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}

export const deleteReceipt = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.deleteReceipt(id)
        data.success && dispatch( toast.success(<>{data.message}</>) && window.location.reload())

        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_RECEIPTS_BY_MERCHANT, payload:data})
        
    } catch (error) {
        
    }

}