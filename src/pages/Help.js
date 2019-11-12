import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import FormCardContainer from "../components/FormCardContainer";

function Help() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4" style={{ marginLeft: "10px" }}>
            Help
          </Typography>
        </Grid>
      </Grid>
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
          Submit
        </Button>
      </FormCardContainer>
    </>
  );
}
const useStyles = makeStyles(theme =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    }
  })
);
export default Help;
