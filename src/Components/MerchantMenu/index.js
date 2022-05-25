import React,{ useEffect }from "react";
import { useLocation } from "react-router-dom";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import "./styles.css";



const MerchantMenu = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

 
  const Location = useLocation()
    const [location, setLocation] = useState()

    useEffect(() => {
      
    setLocation(Location.pathname)
      
    }, [Location])

    console.log(location)
    console.log(Location)


  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class={`nav-item dropdown ${location==="/"  || location==="/campaign/****" ? 'active' : ''}`}>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Campaign
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/">
                Manage Campaign
              </a>
              <a class="dropdown-item" href="/campaign/create-campaign">
                Create A New Campaign
              </a>
            </div>
          </li>
          <li class={`nav-item dropdown ${location==="/manage-receipts"  ? 'active' : ''}`}>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Receipts
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/manage-receipts">
                Manage Receipts
              </a>
             
            </div>
          </li>

          <li class={`nav-item dropdown ${location==="/orders" ? 'active' : ''}`}>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Order
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/orders">
                Manage Orders
              </a>
            </div>
          </li>
          <li class={`nav-item dropdown ${location==="/reports" ? 'active' : ''}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Report
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/report">
                Report
              </a>
              
            </div>
          </li>
          <li class={`nav-item dropdown ${location==="/account-settings" ? 'active' : ''}`}>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Accounts Settings
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/account-settings/profile">
                Profile
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MerchantMenu;
