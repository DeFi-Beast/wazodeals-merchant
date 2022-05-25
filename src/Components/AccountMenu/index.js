import { useEffect } from "react";
import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const CampaignMenu = () => {

  const Location = useLocation()
  return (
    <Grid container pb={4}>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname === "/account-settings/profile" || Location.pathname === "/account-settings"  ? "active" : ''}`} href="/account-settings/profile">
            General
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname === "/account-settings/wazo-points" ? "active" : ''}`} href="/account-settings/wazo-points">
            Your Wazo Point
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname === "/account-settings/merchant-logo" ? "active" : ''}`} href="/account-settings/merchant-logo">
          Merchant Logo
           
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${Location.pathname === "/account-settings/settlements" ? "active" : ''}`} href="/account-settings/settlements">
            Settlements
          </a>
        </li>
      </ul>
    </Grid>
  );
};

export default CampaignMenu;
