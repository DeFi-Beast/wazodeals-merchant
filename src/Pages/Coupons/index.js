import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Campaign from "../../Components/Campaign";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";

const Coupons = ({ setCurrentId }) => {
  const classes = useStyles();
  const coupons = useSelector((state) => state.merchants?.coupons);
  const couponStatusArr = useSelector((state) => state.merchants?.couponStatusArray);

  console.log(coupons);

  if (!coupons) {
    return <>No Coupons</>;
  }

  return (
    <LayoutDefault>
   <Grid container spacing={2} className={classes.mainContainer}>
      <Campaign value={coupons?.coupons} status={couponStatusArr} />
    </Grid>
    </LayoutDefault>
 
  );
};

export default Coupons;
