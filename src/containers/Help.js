import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormCardContainer from "../components/FormCardContainer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
function Help() {
  const classes = useStyles();
  return (
    <FormCardContainer>
      <h3 style={{ marginBottom: "-20px" }}>Information Desk</h3>
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Phone Number"
        margin="normal"
      />
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Email Id"
        margin="normal"
        type="email"
      />

      <h3 style={{ marginBottom: "-20px" }}>Help Desk</h3>
      <TextField
        id="standard-basic"
        className={classes.textField}
        label="Phone Number"
        margin="normal"
      />
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
      width: 250,
      fontSize: 5
    }
  })
);
export default Help;
