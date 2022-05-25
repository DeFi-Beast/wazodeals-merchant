import { useEffect } from "react";
import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const CampaignMenu = () => {

    const Location = useLocation()
    const [location, setLocation] = useState()

    useEffect(() => {
      
    setLocation(Location.pathname)
      
    }, [Location])

    console.log(location)
  return (
    <Grid container pb={4}>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname==="/" ? "active": ""}`} href="/">
            All
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname==="/campaign/discounts" ? "active": ""}`} href="/campaign/discounts">
            Discount
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname==="/campaign/coupons" ? "active": ""}`}href="/campaign/coupons">
            Coupon
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname==="/campaign/receipts" ? "active": ""}`}href="/campaign/receipts">
            Receipt
          </a>
        </li>
       
       

        
      </ul>
    </Grid>
  );
};

export default CampaignMenu;
