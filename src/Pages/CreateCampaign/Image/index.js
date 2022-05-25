import React, { useState } from "react";
import CreateCampaignMenu from "../../../Components/CreateCampaignMenu";
import LayoutDefault from "../../../Components/Layouts/LayoutDefault";
import FileBase from "react-file-base64";
import { updateDiscountCampaignImages } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { updateCouponCampaignImages } from "../../../actions/coupon";
import { updateReceiptCampaignImages } from "../../../actions/receipts";
import Loader from "../../../Components/Loader";

const CreateCampaignImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.isLoading)

  const selectedCampaign = useSelector((state) =>
    id
      ? state.merchants?.discounts?.discounts?.find((p) => p._id === id) ||
        state.merchants?.coupons?.coupons?.find((p) => p._id === id)
      : null
  );

  console.log(selectedCampaign);
  const [postData, setPostData] = useState({
    selectedFiles: [],
  });

  const campaign = useSelector((state) => state);
console.log(selectedCampaign)
  console.log(campaign);
  useEffect(() => {
    if (selectedCampaign)
      setPostData({
        selectedFiles: selectedCampaign?.campaignFiles,
      });
  }, [selectedCampaign]);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

    switch (selectedCampaign?.campaignType) {
      case "coupon":
      dispatch(updateCouponCampaignImages(id, postData, navigate));
        
        break;
      case "discount":
      dispatch(updateDiscountCampaignImages(id, postData, navigate));
        
        break;
      case "receipt":
      dispatch(updateReceiptCampaignImages(id, postData, navigate));
        
        break;
    
      default:
      dispatch(updateDiscountCampaignImages(id, postData, navigate));

        break;
    }
    console.log(postData);
    

    // clear();
  };
  console.log(postData);

  const uploadImages = (files) => {
    setPostData({ ...postData, selectedFiles: files });
  };
  const clear = () => {
    setPostData({
      selectedFiles: "",
    });
    window.location.reload(false);
  };
  return (
    <LayoutDefault>
      <Grid container sm={11} style={{ margin: "0 auto" }}>
        <h1>Upload Campaign Images</h1>
        <CreateCampaignMenu />
        <p>Note: Always select one or more images to upload at once </p>
        <Grid
          container
          xs={12}
          sm={6}
          md={6}
          style={{ margin: "0 auto" }}
          className="mb-5"
        >
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <FileBase type="file" multiple={true} onDone={uploadImages} />
            <Grid container style={{ margin: "0 auto" }} className="my-5">
              {postData.selectedFiles.length > 0 ? (
                <>
                  {postData.selectedFiles.map((file, i) => {
                    return (
                      <div className="col-sm-4" m={5}>
                        <img
                          style={{ width: "100%" }}
                          key={i}
                          src={file.base64}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <p style={{ color: "black" }}>
                  Add Some Images to kick start your Campaign
                </p>
              )}
            </Grid>

            <Button
              //   className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              
            {isLoading ? <Loader/> : "Submit"}

            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
              className="mt-3"
            >
              Clear
            </Button> */}
          </form>
        </Grid>
      </Grid>
    </LayoutDefault>
  );
};

export default CreateCampaignImage;
