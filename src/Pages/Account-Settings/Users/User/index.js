import { useState } from "react";
import Input from "../../../../Components/LoginFiles/Input";
import {
  TextField,
  Button,
  Typography,
  Paper,
  OutlinedInput,
  Box,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@material-ui/core";

import LayoutDefault from "../../../../Components/Layouts/LayoutDefault";

const NewUser = () => {
  const [userData, setUserData] = useState({
    email: "",
    role: "",
    
  });

  const handleSubmit = () => {};

  return (
    <LayoutDefault>
      <Grid container sm={11}  className="mb-5 mx-auto">
        <h1>Add New User</h1>

        <Grid container justifyContent="space-between" className="p-5" >
          <Grid container alignItems="center">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Input
                name="email"
                label="Email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="email"
                required={true}
              />

              <Grid className="my-3">
                <label for="inputRole" class="form-label">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  class="form-select"
                  required={true}
                  onChange={(e) =>
                    setUserData({ ...userData, role: e.target.value })
                  }
                >
                  <option selected>Choose...</option>
                  <option value="admin">Admin</option>
                </select>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Create
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </LayoutDefault>
  );
};
export default NewUser;
