import { useEffect } from "react";
import { Grid } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";


const CreateCampaignMenu = () => {

    const Location = useLocation()
    const [location, setLocation] = useState()
    const {id} = useParams()

    useEffect(() => {
      
    setLocation(Location.pathname)
      
    }, [Location])

    console.log(location)
  return (
    <Grid container pb={4}>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class={`nav-link ${location === "/campaign/create-campaign/information" || location === "/campaign/create-campaign" || location=== `/campaign/edit/${id}` ? "active" : ""}`} href={id ? `/campaign/edit/${id}` : `/campaign/create-campaign/`}>
            Campaign Information
          </a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${location === `/campaign/create-campaign/upload-images/${id}` || location===`/campaign/edit/upload-images/${id}`  ? "active" : ""}`} href={id ? `/campaign/edit/upload-images/${id}` : "/campaign/create-campaign/upload-images"}>
           Campaign Images
          </a>
        </li>
        {/* <li class="nav-item">
          <a class={`nav-link ${location === "/campaign/create-campaign/other-details" ? "active" : ""}`} href="/campaign/create-campaign/other-details">
          Campaign Other Details
          </a>
        </li> */}
      </ul>
    </Grid>
  );
};

export default CreateCampaignMenu;
