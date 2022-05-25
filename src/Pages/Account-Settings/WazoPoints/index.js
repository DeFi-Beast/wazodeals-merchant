

  import { Button, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMerchant, updateMerchantLogo, wazoPointOrder } from "../../../actions";
import AccountMenu from "../../../Components/AccountMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";
import { PaystackButton } from "react-paystack";

// import "./styles.css";
import { useNavigate } from "react-router-dom";

const initialOrderState = {
    
    amount_paid_in_card: null,
    id: JSON.parse(localStorage.getItem("merchant"))?.merchant?._id,
    email: JSON.parse(localStorage.getItem("merchant"))?.merchant?.email,
    pay_stack_ref: "",
    pay_stack_ref_id: "",
    orderTotal: null,
    payment_method: null,
    new_merchant_point_balance: null,
  };


const Wazopoints= ({ id }) => {
  const merchant = JSON.parse(localStorage.getItem("merchant"));
  const stateMerchant = useSelector(state => state.merchants.merchant)
  
  const [orderData, setOrderData] = useState(initialOrderState);
  const [value, setValue] = useState(null);
  const coupons = useSelector((state) => state?.merchants.coupons);
  const [clickCount, setClickCount] = useState(0);
  const isLoading = useSelector(state => state.auth.isLoading)


  let total = null
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    total = coupons?.coupons?.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue?.clicks?.length;
    }, 0);
    console.log(total);
    setClickCount(total);
  }, [merchant]);
  const config = {
    reference: new Date().getTime().toString(),
    email: merchant?.merchant?.email,
    amount: Number(orderData?.amount_paid_in_card * 100)?.toFixed(2),
    metadata: {
      amount_paid_in_card: Number(orderData?.amount_paid_in_card)?.toFixed(2),
    },
  publicKey: "pk_live_82bde11c458f4742f21b07d93ee6c5567a8ce755",

  };

  // publicKey: "pk_test_350f98a7c9674e816f407d23956b66f2b8b7f8e7",

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setOrderData({ ...orderData, pay_stack_ref_id: reference?.reference });
    if (reference?.reference) {
      console.log(orderData);
      dispatch(wazoPointOrder(orderData, navigate));
      
    }
  
    // let message = 'Payment complete! Reference: ' + reference.reference;
    // dispatch( toast.success(<>{message}</>))

    // localStorage.removeItem("cart");
    // localStorage.removeItem("cartTotal");
    // navigate("/");

    console.log(reference);
  };
  // publicKey: "pk_live_82bde11c458f4742f21b07d93ee6c5567a8ce755",



  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log('closed')
  };

  const componentProps = {
    ...config,
    text: "Top Up",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
  };

  useEffect(() => {
    
  dispatch(getMerchant(merchant?.merchant?._id))
    
  }, [])
  const handlePlan = (event) => {
    setValue(event.target.value);
    setOrderData({ ...orderData, plan: event.target.value });
  };

  useEffect(() => {
    
    switch (value) {
      case value:
        setOrderData({
          ...orderData,
          id:merchant?.merchant?._id,
          point:Number(value),
          email: merchant?.merchant?.email,
          new_merchant_point_balance: stateMerchant?.merchant?.points + Number(value),
          orderTotal: Number(value)* 30,
          amount_paid_in_card: (Number(value)*30)?.toFixed(2),
          pay_stack_ref_id: config?.reference,
          pay_stack_ref: config?.reference,
          payment_method: ["card"],
        });
        break;
    
      default:
        break;
    }
    
  }, [value])

  console.log(value)
  console.log(orderData)
console.log(value)
console.log(config)
  return (
    <LayoutDefault>
      <Grid container sm={11} m="0 auto">
        <h1>Your Profile</h1>
        <AccountMenu />

        <Grid container sm={12} justifyContent="center"  direction='column' alignItem="center"  my={3}>
        <Grid
          style={{
            background: "#80808042",
            borderRadius: "50%",
            paddingTop: "50px",
            paddingBottom: "20px",
            color: "yellow",
            padding: "20px",
            margin:"0 auto",
            width:"200px"
          }}
          
        >
          <h1
            style={{
              background: "#d21944",
              borderRadius: "50%",
              paddingTop: "50px",
              paddingBottom: "20px",
            margin:"0 auto",

              padding: "20px",
            }}
          >
            {(stateMerchant?.merchant?.points - (clickCount*7)) || (merchant?.merchant?.points - (clickCount*7))} <span>WP</span>
          </h1>
        </Grid>
        <Grid style={{margin:"0 auto"}}>
        Your Wazo Point Balance

        </Grid>
            </Grid>
        <Grid sm={12} justifyContent="space-between" my={3}>
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center">
            <Grid px={5} sm={8}>
          
                <h2>Choose Plan</h2>
                <Grid px={5} >
                <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={orderData.plan}
        
            onChange={handlePlan}
          >
            <FormControlLabel
              value="100"
              control={<Radio />}
              label="Buy 100 Wazo Points for 3000 NGN"
            />
            <FormControlLabel
              value="200"
              control={<Radio />}
              label="Buy 200 Wazo Points for 6000 NGN"
            />
            <FormControlLabel
              value="500"
              control={<Radio />}
              label="Buy 500 Wazo Points for 15000 NGN"
            />
            <FormControlLabel
              value="1000"
              control={<Radio />}
              label="Buy 1000 Wazo Points for 30000 NGN"
            />
            <FormControlLabel
              value="2000"
              control={<Radio />}
              label="Buy 2000 Wazo Points for 60000 NGN"
            />
            <FormControlLabel
              value="5000"
              control={<Radio />}
              label="Buy 5000 Wazo Points for 150000 NGN"
            />
          </RadioGroup>
                    </Grid>
            
            </Grid>
            <Grid sm={4}>
            <Grid>
                {value ?  <PaystackButton
                      className="cart-checkout"
                      {...componentProps}
                    />: <h2>Wanna Get Wazo Points? <br></br>Choose A Plan to Continue</h2>}
                   
                  </Grid>

            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </LayoutDefault>
  );
};
export default Wazopoints;
