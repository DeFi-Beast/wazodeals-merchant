import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMerchant, updateMerchantLogo } from "../../../actions";
import AccountMenu from "../../../Components/AccountMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";
import FileBase from "react-file-base64";

import "./styles.css";

const MerchantLogo = ({ id }) => {
  const merchant = JSON.parse(localStorage.getItem("merchant"));
  const selectedCampaign = useSelector((state) =>
    merchant?.merchant?._id
      ? state.merchants?.merchant?.merchant
      : null
  );
  console.log(selectedCampaign)
  const [postData, setPostData] = useState({
    selectedFiles: [],
  });
  
  const dispatch = useDispatch();
  const uploadImages = (files) => {
    setPostData({ ...postData, selectedFiles: files });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateMerchantLogo(merchant?.merchant?._id, postData));
  };

  useEffect(() => {
    
  dispatch(getMerchant(merchant?.merchant?._id))
    
  }, [])
  useEffect(() => {
    if (selectedCampaign)
      setPostData({
      selectedFiles : selectedCampaign?.logo
      });
  }, [selectedCampaign]);
  
console.log(postData)
  return (
    <LayoutDefault>
      <Grid container sm={11} m="0 auto">
        <h1>Your Profile</h1>
        <AccountMenu />

        <Grid sm={12} justifyContent="space-between" my={3}>
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center">
            <Grid sm={6}>
            <FileBase type="file" multiple={true} onDone={uploadImages} />

            <Grid container style={{ margin: "0 auto" }} >
              {postData.selectedFiles.length > 0 ? (
                <>
                  {postData.selectedFiles.map((file, i) => {
                    return (
                      <Grid sm={6} m={5}>
                        <img
                          style={{ width: "100%" }}
                          key={i}
                          src={file.base64}
                        />
                      </Grid>
                    );
                  })}
                </>
              ) : (
                <p style={{ color: "black" }}>
                  Add Some Images to kick start your Campaign
                </p>
              )}
            </Grid>
            </Grid>
            <Grid sm={6}>
            <Button
              //   className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              style={{ margin: "10px 0px" }}
            >
              Save
            </Button>

            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </LayoutDefault>
  );
};
export default MerchantLogo;
