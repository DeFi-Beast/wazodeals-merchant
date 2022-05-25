import { FETCH_ALL_COUPON, FETCH_COUPON,FETCH_COUPONS_BY_MERCHANT, FETCH_ALL_MERCHANTS, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'
import {toast} from "react-toastify"


export const createCoupon = (coupon, navigate)=> async(dispatch) => {
   

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.createCoupon(coupon)
   console.log("============new coupondata=============")

        console.log(data)

        // dispatch({type:CREATE_DISCOUNT, payload:data})
        // campaign/create-campaign/upload-images

        navigate(`upload-images/${data.coupon._id}?type=${data.coupon.campaignType}`)


   data.success && dispatch( toast.success(<>{data.message}</>)  && window.location.reload())
   data.error && dispatch( toast.error(<>{data.message}</>))

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}

export const getAllCoupons = (page)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllCoupons(page)

        dispatch({type:FETCH_ALL_COUPON, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}
export const getCouponById = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchCouponById(id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_COUPON, payload:data})
        
    } catch (error) {
        
    }

}
export const getCouponsBySearch = (searchQuery)=> async(dispatch) => {
    
    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchCouponsBySearch(searchQuery)

        
        dispatch({type:END_LOADING})


        dispatch({type:FETCH_ALL_COUPON, payload:data})
       
        
    } catch (error) {
        
    }

}

export const getAllCouponsByMerchant = (id)=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllCouponsByMerchant(id)

        console.log(data)

        dispatch({type:FETCH_COUPONS_BY_MERCHANT, payload:data})
        
    } catch (error) {
        
    }

}

export const updateClick = (couponId, userData)=> async(dispatch) => {

    try {

        const {data} = await api.updateCouponClick(couponId, userData)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}

export const updateCouponCampaignImages = (id, formData, Navigate)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        console.log("=======updateCouponCampaignImagesformData==========")
        console.log(formData)
        const {data} = await api.updateCouponCampaignImages(id, formData)

        dispatch({type:END_LOADING})

        data.success && dispatch( toast.success(<>{data.message}</>) && Navigate("/") && window.location.reload(false))
        window.location.reload(false)
        console.log(data)

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const updateCoupon = (id, coupon)=> async(dispatch) => {

    try {

        const {data} = await api.updateCoupon(id, coupon)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const updateCouponStatus = (id, status)=> async(dispatch) => {

    try {

        const {data} = await api.updateCouponStatus(id, status)

        console.log(data)
        // dispatch({type:FETCH_ALL, payload:data})
        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}

export const deleteCoupon = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.deleteCoupon(id)
        data.success && dispatch( toast.success(<>{data.message}</>) && window.location.reload())

        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_COUPON, payload:data})
        
    } catch (error) {
        
    }

}