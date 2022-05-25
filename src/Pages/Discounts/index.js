
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import StyledCoupon from "../../Components/StyledCoupon";
import useStyles from "./styles";
import Campaign from "../../Components/Campaign";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";




const Discounts = ({ setCurrentId }) => {

  const classes = useStyles();
  const discounts = useSelector((state) => state.merchants?.discounts);


  console.log(discounts);
  

  if (!discounts) {
    return <>No Discounts</>;
  }



  return (
    <LayoutDefault>
   <Grid container spacing={2} className={classes.mainContainer}>
      <Campaign value={discounts?.discounts}/>
    </Grid>
    </LayoutDefault>
    
 
  );
};

export default Discounts;
