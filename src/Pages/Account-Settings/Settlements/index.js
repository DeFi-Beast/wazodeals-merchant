import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AccountMenu from "../../../Components/AccountMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";

import "./styles.css";

const Settlements = ({ id }) => {
  return (
    <LayoutDefault>
      <Grid container sm={11} m="0 auto">
        <h1>Your Profile</h1>
        <AccountMenu />

        <Grid sm={12} justifyContent="space-between" my={3}>
          <form>
            <Grid sm={12}>
              <Grid sm={12} className="account-section-hero">
                <h5>Settlements</h5>
              </Grid>
              <Grid px={5} py={3}>
                All your Settlements will appear here 
                &nbsp;
                <Link to="/Faq/merchants">Learn More</Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </LayoutDefault>
  );
};
export default Settlements;
