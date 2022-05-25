import React, {forwardRef, useState} from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { Box, TextField } from "@material-ui/core";

const NumberFormatCustom = forwardRef(function NumberFormatCustom(
  props,
  ref
) {
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

const FormattedInput = ({ numberFormat, setNumberFormat, labelField, idField, holderField }) => {
   
  console.log(numberFormat);
  const handleChange = (event) => {
    console.log(event.target.name)
    setNumberFormat(event.target.value);
  };

  console.log(numberFormat)

  return (
    <Box>
      <TextField
        label={labelField}
        value={numberFormat}
        onChange={handleChange}
        name={idField}
        id={idField}
        placeholder={holderField}
        required={true}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="outlined"
      />
    
    </Box>
  );
};

export default FormattedInput;
