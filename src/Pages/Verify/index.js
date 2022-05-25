import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyCode } from "../../actions/auth";
import UserLayout from "../../Components/Layouts/UserLayout";
import ProductLoader from "../../Components/Loader/ProductLoader";
import CheckMark from "./Checkmark";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const query = useQuery();
  const code = query.get("code") || null;
  const email = query.get("email") || null;
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const verify = useSelector((state) => state.auth.verify);
const navigate = useNavigate()
  console.log(code, email);
  useEffect(() => {
    dispatch(verifyCode(code, email, navigate));
  }, []);

  return (
    <UserLayout>
      <div style={{ marginBottom: "30px !important" }}>
        <div
          className="Row"
          style={{
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <Grid container flexDirection='column' alignItems="center" justifyContent="center">
              <Grid>
              <p>Verifying...</p>
                  
              </Grid>
              <Grid>
              <ProductLoader />

              </Grid>
            </Grid>
          ) : (
            <Grid container flexDirection='column' alignItems='center' justifyContent="center">
             <Grid>

              <CheckMark />

             </Grid>
             <Grid>
                 Your Email is Activated!
             </Grid>
            
            </Grid>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

export default Verify;
