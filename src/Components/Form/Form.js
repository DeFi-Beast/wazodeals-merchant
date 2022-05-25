import { useState, useEffect, forwardRef } from "react";
import useStyles from "./styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  FormHelperText,
  Input,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "../DatePicker";
import NumberInput from "../NumberInput";
import { updateDiscount, createDiscount } from "../../actions";
import { createCoupon, updateCoupon } from "../../actions/coupon";
import { updateMerchant } from "../../actions";
import { categories, discounts } from "../../constants";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { selectedFileDefault } from "../../constants";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useLocation } from "react-router-dom";
import { createMerchantReceipt, updateMerchantReceipt } from "../../actions/receipts";
import Loader from "../Loader";

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Form = ({ currentId, setCurrentId }) => {
  let [startDate, setStartDate] = useState();
  let [endDate, setEndDate] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("merchant"));
  const { merchants } = useSelector((state) => state.merchants);
  const Location = useLocation()
  const isLoading = useSelector(state => state.auth.isLoading)

  const campaign = useSelector((state) =>
    currentId
      ? state.merchants?.discounts?.discounts?.find((p) => p._id === currentId) || 
      state.merchants?.coupons?.coupons?.find((p) => p._id === currentId)||
      state.merchants?.merchantReceipts?.merchantReceipts?.find((p) => p._id === currentId)

      : null
  );

  const { id } = useParams();
  const merchant = merchants?.merchant?.find((merchant) => merchant._id === id);
  const [value, setValue] = useState("discount");
  const [error, setError] = useState("");

  const [discountData, setDiscountData] = useState({
    title: "",
    description: "",
    categories: [],
    startDate: "",
    endDate: "",
    price: null,
    discount: "",
    merchant: JSON.parse(localStorage.getItem("merchant"))?.merchant?._id,
    merchantName:"",
    campaignType: "",
    persons: null,
    selectedFiles: selectedFileDefault,
  });
console.log(discountData)
  useEffect(() => {
    setDiscountData({
      ...discountData,
      startDate: startDate,
      endDate: endDate,
    });
  }, [startDate, endDate]);
  let [numberFormat, setNumberFormat] = useState(null);

  useEffect(() => {
    setDiscountData({ ...discountData, price: numberFormat });
  }, [numberFormat]);

  useEffect(() => {
    if (campaign)
      setDiscountData({
        ...campaign,
        merchant: merchants?.merchant?.find((p) => p._id === campaign.merchant),
        
        // categories: discount.categories.split(",").filter((e) => e),
      });
      setValue(campaign?.campaignType)
  }, [campaign]);
console.log(value)
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setDiscountData({
      ...discountData,
      categories: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleDiscChange = (e) => {
    setDiscountData({ ...discountData, discount: e.target.value });
  };
  const handleMerchantChange = (e) => {
    setDiscountData({ ...discountData, [e.target.name]: e.target.value, merchantName: merchants?.merchant?.find((merchant) => merchant._id === e.target.value)?.merchantName || merchants?.merchant?.find((merchant) => merchant._id === e.target.value)?.merchant });
  };

  // const clear = () => {
  //   setCurrentId(null);
  //   setDiscountData({
  //     title: "",
  //     description: "",
  //     categories: [],
  //     startDate: "",
  //     endDate: "",
  //     price: null,
  //     discount: "",
  //   });

  //   setNumberFormat(Number);

  //   setStartDate("");

  //   setEndDate("");
  // };


  const handleCampaignTypeChange = (event) => {
    setValue(event.target.value);
    setDiscountData({ ...discountData, campaignType: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let today = new Date();
    if (
      today.getTime() >= new Date(discountData.startDate).getTime() &&
      today.getTime() <= new Date(discountData.endDate).getTime()
    ) {
      console.log("=================discountData.merchant====================");
      console.log(user?.merchant?._id);
      dispatch(updateMerchant(user?.merchant?._id));
    } else {
      console.log("failed");
    }
    // const newDiscount = {
    //   ...discountData,
    //   categories: discountData?.categories?.join(","),
      
    // };
    // console.log(newDiscount);
    // if (currentId) {
    //   dispatch(
    //     updateDiscount(currentId, {
    //       ...discountData
    //     })
    //   );
    // }
    // console.log(newDiscount);

    if(campaign) {
      switch (value) {
        case "coupon":
      
        dispatch(updateCoupon(discountData, navigate));
          break;
          case "discount":
            dispatch(updateDiscount(discountData, navigate));

          break;

            case "receipt":
          dispatch(updateMerchantReceipt(discountData, navigate));

          break;

        default:
          dispatch(updateDiscount(discountData, navigate));

          break;
      }
    } else {

      switch (value) {
        case "discount":
          dispatch(createDiscount(discountData, navigate));
          
          break;
      
        case "coupon":
        dispatch(createCoupon(discountData, navigate));
          
          break;
      
        case "receipt":
          dispatch(createMerchantReceipt(discountData, navigate));
          
          break;
      
        default:
          break;
      }

     
    }
   

  
  };

  console.log(discountData);
  return (
    <Paper className={classes.paper}>
      <p>(Note :fields with (*) are required)</p>

      <Grid
        container
        xs={12}
        sm={6}
        md={6}
        style={{ margin: "0 auto" }}
        className="mb-5"
      >
        
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Campaign Type *
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={discountData.campaignType}
            row
            onChange={handleCampaignTypeChange}
          >
            <FormControlLabel
              value="discount"
              control={<Radio />}
              label="Discount"
            />
            <FormControlLabel
              value="coupon"
              control={<Radio />}
              label="Coupon"
            />
            <FormControlLabel
              value="receipt"
              control={<Radio />}
              label="Receipt"
            />
          </RadioGroup>
        </FormControl>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            required={true}
            value={discountData.title}
            onChange={(e) =>
              setDiscountData({ ...discountData, title: e.target.value })
            }
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            required={true}
            fullWidth
            multiline
            rows={4}
            value={discountData.description}
            onChange={(e) =>
              setDiscountData({ ...discountData, description: e.target.value })
            }
          />

          <FormControl
            fullWidth
            style={{ margin: "8px", position: "relative" }}
          >
            <InputLabel variant="outlined" id="demo-multiple-chip-label">
              Select Category (s) *
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              required={true}
              value={discountData.categories}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {categories.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            required
          />
       
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6} sm={4}>
              <NumberInput
                numberFormat={campaign ? discountData.price : numberFormat}
                setNumberFormat={setNumberFormat}
                labelField="price"
                idField="price"
                required
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                name="persons"
                variant="outlined"
                label="No. of Target Persons"
                placeholder="10"
                fullWidth
                required={true}
                value={discountData.persons}
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                onChange={(e) =>
                  setDiscountData({ ...discountData, persons: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="discount-label">Discount *</InputLabel>
                <Select
                  labelId="discount-label"
                  variant="outlined"
                  id="discount"
                  required
                  value={discountData.discount}
                  label="Discount"
                  onChange={handleDiscChange}
                >
                  {discounts.map((discount) => (
                    <MenuItem value={discount}>{discount}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            
          >
            
            {currentId ?( isLoading ? <Loader/> : "Update" ):( isLoading ? <Loader/> : "Submit")}

          </Button>
          {/* <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
            className="mb-3"
          >
            Clear
          </Button> */}
        </form>
      </Grid>
    </Paper>
  );
};

export default Form;
