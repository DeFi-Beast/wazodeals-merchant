import LayoutDefault from "../../Components/Layouts/LayoutDefault";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Campaign from "../../Components/Campaign";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const discounts = useSelector((state) => state.merchants?.discounts);
  const coupons = useSelector((state) => state.merchants?.coupons);
// const [campaigns, setCampaigns] = useState()
  const statusArr = useSelector((state) => state.merchants?.statusArray);
 
    
  const campaigns = [...discounts?.discounts || [], ...coupons?.coupons || []]
    

  
 
  console.log("=======allCampaigns=============")
  console.log(campaigns)
  console.log(discounts?.discounts)
  const merchant = JSON.parse(localStorage.getItem("merchant"))
  return (
    <LayoutDefault>
      <Campaign value={campaigns} status={statusArr}/>
    </LayoutDefault>
  );
};

export default Home;
