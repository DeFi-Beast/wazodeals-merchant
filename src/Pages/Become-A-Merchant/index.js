import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserLayout from "../../Components/Layouts/UserLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import NumberInput from "../../Components/NumberInput";
import { discounts, categories } from "../../constants";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../../Components/LoginFiles/styles";
import Input from "../../Components/LoginFiles/Input";
import Icon from "../../Components/LoginFiles/icon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { merchantsignup, merchantsignin } from "../../actions/auth";
import FileBase from "react-file-base64";
import Loader from "../../Components/Loader";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialState = {
  merchantName: "",
  password: "",
  confirmPassword: "",
  email: "",
  address: "",
  category: "",
  phone: "",
  discount: "",
  price: null,
  logo: "",
};

const Merchant = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.isLoading)
  const query = useQuery();
  const location = useLocation();
  // const login = query.get("login")
  const [isSignup, setIsSignup] = useState();

  // useEffect(() => {
  //   setIsSignup(!JSON.parse(query.get("login")));
  // }, []);

  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsSignup(true);
    } else setIsSignup(false);
  }, [location]);

  // console.log(login)
  console.log(isSignup);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(merchantsignup(formData, navigate));
    } else {
      dispatch(merchantsignin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      navigate("/");
    } catch (error) {}
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("google sign in was unsuccesful. Try Again later");
  };

  let [numberformat, setNumberformat] = useState(null);

  useEffect(() => {
    setFormData({ ...formData, price: numberformat });
  }, [numberformat]);
  const handleDiscChange = (e) => {
    setFormData({ ...formData, discount: e.target.value });
  };
  const handleCatChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  console.log(formData);

  return (
    <UserLayout>
      <div style={{ marginBottom: "30px !important" }}>
        <div className="Row">
          <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">
                {isSignup ? "Merchant Sign Up" : "Merchant Sign In"}
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {isSignup && (
                    <>
                      <Input
                        name="merchantName"
                        label="Merchant Name"
                        handleChange={handleChange}
                        autoFocus
                        required={true}
                        half
                        quarter
                      />
                    </>
                  )}
                  <Input
                    name="email"
                    label="Email"
                    handleChange={handleChange}
                    type="email"
                    required={true}
                    twothird={isSignup ? "twothird" : ""}
                  />
                  {isSignup && (
                    <>
                      {" "}
                      <Input
                        name="phone"
                        label="Mobile Phone"
                        handleChange={handleChange}
                        type="tel"
                        half
                        quarter
                      />
                      <Input
                        name="address"
                        label="Address"
                        handleChange={handleChange}
                        twothird
                        required={true}
                      />
                      <Input
                        name="description"
                        placeholder="description"
                        label="Description"
                        multiline
                        handleChange={handleChange}
                      />
                      <Grid item xs={12}>
                        <div className={classes.fileInput}>
                          <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => {
                              setFormData({ ...formData, logo: base64 });
                            }}
                          />
                        </div>
                      </Grid>
                    </>
                  )}
                  {isSignup && (
                    <Grid
                      style={{ padding: "8px" }}
                      container
                      spacing={2}
                      alignItems="center"
                    >
                      {/* <Grid item xs={4} sm={4} md={4}>
                        <NumberInput
                          numberformat={numberformat}
                          setNumberformat={setNumberformat}
                        />
                      </Grid> */}
                      <Grid item xs={4} sm={4} md={6}>
                        <FormControl fullWidth>
                          <InputLabel id="discount-label">Discount</InputLabel>
                          <Select
                            labelId="discount-label"
                            variant="outlined"
                            id="discount"
                            value={formData.discount}
                            label="Discount"
                            onChange={handleDiscChange}
                          >
                            {discounts.map((discount) => (
                              <MenuItem value={discount}>{discount}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4} sm={4} md={6}>
                        <FormControl fullWidth>
                          <InputLabel id="category-label">Category</InputLabel>
                          <Select
                            labelId="category-label"
                            variant="outlined"
                            id="category"
                            value={formData.category}
                            label="Category"
                            required={true}
                            onChange={handleCatChange}
                          >
                            {categories.map((category) => (
                              <MenuItem value={category}>{category}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  )}
                  <Input
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    required={true}
                    handleShowPassword={handleShowPassword}
                  />
                  {isSignup && (
                    <Input
                      name="confirmPassword"
                      label="Repeat Password"
                      handleChange={handleChange}
                      type="password"
                    required={true}

                    />
                  )}
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {/* {isSignup ? "Sign Up" : "Sign In"} */}
                {isSignup ?( isLoading ? <Loader/> : "Sign Up" ):( isLoading ? <Loader/> : "Sign In")}

                </Button>
                {/* <GoogleLogin
            clientId="57511145551-jofdo3npaipgfj4u8nkeh496jf526gbf.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button onClick={switchMode}>
                      <Link to={`/${isSignup ? "login" : "signup"}`}>
                        {isSignup
                          ? "Already have an account? SIgn In"
                          : "Don't have an account? Sign Up"}
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </div>
      </div>
    </UserLayout>
  );
};

export default Merchant;
