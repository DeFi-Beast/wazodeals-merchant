import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Campaign from "../../Components/Campaign";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";

const Receipts = ({ setCurrentId }) => {
  const classes = useStyles();
  const merchantReceipts = useSelector((state) => state.merchants?.merchantReceipts);
  const receiptStatusArr = useSelector((state) => state.merchants?.receiptStatusArray);

  console.log(merchantReceipts);
  console.log("===========merchantReceipts?.merchantReceipts=========");
  console.log(merchantReceipts?.merchantReceipts);


  return (
    <LayoutDefault>
   <Grid container spacing={2} className={classes.mainContainer}>
      <Campaign value={merchantReceipts?.merchantReceipts} status={receiptStatusArr} />
    </Grid>
    </LayoutDefault>
 
  );
};

export default Receipts;
