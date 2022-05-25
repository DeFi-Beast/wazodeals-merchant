import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Campaign from "../../Components/Campaign";
import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Receipt from "../../Components/Receipts"

const Receipts = ({ setCurrentId }) => {
  const classes = useStyles();
  

 
  return (
    <LayoutDefault>
      <Grid container spacing={2} className={classes.mainContainer}>
        <Receipt/>
      </Grid>
    </LayoutDefault>
  );
};

export default Receipts;
