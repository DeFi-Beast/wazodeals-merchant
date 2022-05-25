import axios from "axios";

// const API = axios.create({baseURL:'http://localhost:5000'})
const API = axios.create({baseURL:'https://wazodeal.herokuapp.com'})


export const fetchAllDiscounts =(page) => API.get(`/discounts?page=${page}`)
export const createDiscount =(discount) => API.post(`/discounts`, discount)
export const fetchDiscountById =(id) => API.get(`/discounts/${id}`)
export const updateDiscount =(id, discount) => API.patch(`/discounts/${id}`, discount)
export const updateDiscountStatus =(id, status) => API.patch(`/discounts/status/${id}`, status)
export const fetchDiscountsBySearch =(searchQuery) => API.get(`/discountsSearch/search?merchant=${searchQuery.merchant || ''}&category=${searchQuery.category || ''}&discount=${searchQuery.discount || ''}`)
export const deleteDiscount =(id) => API.patch(`/discounts/delete/${id}`)


export const updateMerchant =(id) => API.patch(`/merchant/${id}`)
export const fetchMerchant =(id) => API.get(`/merchant/${id}`)
export const fetchAllMerchants =() => API.get('/merchant')
export const fetchAllDiscountsByMerchant =(merchant_id) => API.get(`/merchant/discounts/${merchant_id}`)
export const fetchAllCouponsByMerchant =(merchant_id) => API.get(`/merchant/coupons/${merchant_id}`)
export const fetchAllMerchantOrders = (merchant_id, page) => API.get(`/merchant/orders/${merchant_id}?page=${page}`);
export const updateMerchantLogo =(id, formData) => API.patch(`/admin/merchantLogo/${id}`, formData)
export const updateDiscountCampaignImages =(id, formData) => API.patch(`/discounts/campaignImages/${id}`, formData)
export const updateMerchantDetails =(id, formData) => API.patch(`/merchant/otherDetails/${id}`, formData)
export const wazoPointOrder = (order) => API.post(`/buypoint`, order);


// export const fetchDiscount = (id) =>  API.get(`/discount/${id}`)

export const userSignIn =(user) => API.post(`/user/login`, user)
export const userSignup =(user) => API.post(`/user/signup`, user)
export const userActivate =(user) => API.patch(`/activate`, user)
export const userForgot =(email) => API.patch(`/forgot`, email)
export const verifyCode =(code,email) => API.patch(`/merchant/verify?code=${code}&email=${email}`)
export const userReset =(user) => API.patch(`/reset`, user)
export const merchantSignIn =(merchant) => API.post(`/merchant/login`, merchant)
export const merchantSignup =(merchant) => API.post(`/merchant/signup`, merchant)

export const createCoupon =(coupon) => API.post(`/coupons`, coupon)
export const fetchAllCoupons = (page) => API.get(`/coupons?page=${page}`);
export const fetchCouponById = (id) => API.get(`/coupons/${id}`);
// export const fetchAllCouponsByMerchant = (id) => API.get(`/coupons/merchant/${id}`);
export const fetchCouponsBySearch = (searchQuery) =>
  API.get(
    `/discountsSearch/search?merchant=${searchQuery.merchant || ""}&category=${
      searchQuery.category || ""
    }&coupons=${searchQuery.coupons || ""}`
  );
export const updateCoupon = (id, coupons) =>
  API.patch(`/coupons/${id}`, coupons);
  export const updateCouponClick = (couponId, userData) =>
  API.patch(`/coupons/click/${couponId}`, userData);
export const updateCouponCampaignImages =(id, formData) => API.patch(`/coupons/campaignImages/${id}`, formData)
export const deleteCoupon =(id) => API.patch(`/coupons/delete/${id}`)
export const updateCouponStatus =(id, status) => API.patch(`/coupons/status/${id}`, status)




export const postOrder = (order) => API.post(`/order`, order);
export const createPDF = (pdf) =>
  API.post(`/create-pdf`, pdf).then(() =>
    axios.get("fetch-pdf", { responseType: "blob" })
  ).then((res) => {
    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

  })


  export const fetchreceipts =(page) => API.get(`/receipts?page=${page}`)
  export const fetchAllMerchantReceipts =(id, page) => API.get(`/receipts/merchants/${id}?page=${page}`)
export const createReceipt =(receipt) => API.post(`/receipts`, receipt)
export const fetchReceiptById =(id) => API.get(`/receipts/${id}`)
export const updateReceiptStatus =(id,receiptData) => API.patch(`/receipts/status/${id}`, receiptData)
export const fetchAllReceiptsByMerchant =(merchant_id) => API.get(`/merchant/merchantReceipts/${merchant_id}`)
export const createMerchantReceipt =(receipt) => API.post(`/merchant/receipts`, receipt)
export const updateMerchantReceipt =(id, receipt) => API.patch(`/merchant/receipts/${id}`, receipt)
export const updateReceiptCampaignImages =(id, formData) => API.patch(`/merchant/receipts/campaignImages/${id}`, formData)
export const updateMerchantReceiptStatus=(id, status) => API.patch(`/merchant/receipts/status/${id}`, status)
export const deleteReceipt =(id) => API.patch(`/merchant/receipts/delete/${id}`)


