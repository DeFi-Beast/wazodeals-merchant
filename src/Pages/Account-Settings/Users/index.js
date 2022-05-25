import { Grid, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import "./styles.css";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Users = ({ id }) => {
  //   const { id } = useParams();
  const dispatch = useDispatch();
  const merchant = useSelector((state) => state.merchants?.merchant);
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [option, setOption] = useState(false);


  console.log(merchant)

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  
  console.log(id);

  const handleToggle = (e) => {
    setActive(!active);
  };

  const handleClick = (event) => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };

  const handleOption = (e) => {
    console.log(e.target.checked);
    setOption(e.target.checked);
  };
  console.log(option);
  return (
    <LayoutDefault>
      <Grid container sm={11} m="0 auto" className='mb-5'>
        <h1>Manage User</h1>

        <Grid container justifyContent="space-between" my={3}>
          <Grid container sm={6} alignItems="center">
            <Grid>
              <Checkbox {...label} onChange={handleChange} />
            </Grid>
            <Grid>
              <div class="input-group">
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  disabled={!option}
                >
                  <option selected>Please Choose an Option...</option>
                  <option value="delete-user">Delete User</option>
                  <option value="suspend-user">Suspend User Account</option>
                  <option value="restore-user">Restore User Account</option>
                </select>
              </div>
            </Grid>
            <Grid ml={3}>
              <Link to="#" onChange={handleOption} className="actionBtn">
                Go
              </Link>
            </Grid>
          </Grid>
          <Grid>
            <Link to="/account-settings/manage-user/add">Add User</Link>
          </Grid>
        </Grid>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>role </th>
              <th>Admin Name </th>
              <th>Status </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {merchant?.users.map((item, index) => (
              <tr className="campaign-row" key={index}>
                <td>
                  <Checkbox {...label} onChange={handleChange} />
                </td>
                <td>
                  <Link to={`/campaign/details/${item._id}`}>{item.title}</Link>
                </td>
                <td>{moment(item.createdAt).format("MMM Do YYYY")}</td>
                <td>
                  {moment(item.startDate).format("MMM Do YYYY , h:mm:ss a")}
                </td>
                <td>{moment(item.endDate).format("MMM Do YYYY, h:mm:ss a")}</td>
                <td>{Number(item.price).toLocaleString("en-US")}</td>
                <td>{item.discount}</td>
                <td>
                  {Number(
                    item.price - (item.price * item.discount) / 100
                  ).toLocaleString("en-US")}
                </td>
                <td>
                  <div
                    className={
                      active ? "toggle-container-active" : "toggle-container"
                    }
                    onClick={handleToggle}
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      style={{ width: "100%" }}
                    >
                      <p>ON</p>
                      <p>OFF</p>
                    </Grid>
                    <div
                      className={active ? "toggle-right" : "toggle-ball"}
                    ></div>
                  </div>
                </td>
                <td style={{ padding: "10px 20px" }}>
                  <div style={{ position: "relative" }}>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      Options
                    </Button>
                    {anchorEl && (
                      <div
                        id="demo-customized-menu"
                        className="options-menu"
                        onClose={handleClose}
                      >
                        <MenuItem disableRipple>
                          <Link to={`/campaign/edit/${item._id}`}>
                            <EditIcon />
                            Edit Campaign
                          </Link>
                        </MenuItem>
                        <MenuItem disableRipple>
                          <DeleteIcon />
                          Delete Campaign
                        </MenuItem>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
    </LayoutDefault>
  );
};
export default Users;
