import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormCardContainer from "../components/FormCardContainer";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const shops = [
  {
    label: "shop 1"
  },
  {
    label: "shop 2"
  },
  {
    label: "shop 3"
  },
  {
    label: "shop 4"
  }
];
function Offers() {
  const classes = useStyles();
  const [shop, setShop] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShop(event.target.value);
  };
  return (
    <FormCardContainer title="Offers">
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Name"
        margin="normal"
      />

      <TextField
        id="standard-textarea"
        label="Description"
        multiline
        margin="normal"
        className={classes.textField}
      />

      <TextField
        id="date"
        type="date"
        label="offer valid till"
        placeholder="DD-MM-YYYY"
        margin="normal"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        id="Select Shop id"
        select
        label="Select-Shop"
        className={classes.textField}
        value={shop}
        onChange={handleChange}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu
          }
        }}
        margin="normal"
      >
        {shops.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <br />
      <Button variant="contained" color="primary" className={classes.button}>
        Login
      </Button>
    </FormCardContainer>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250
    }
  })
);
export default Offers;
