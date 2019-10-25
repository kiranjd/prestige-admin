import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className="text-center">
      <Card className={classes.card}>
        <img src="/logo.jpg" width="80" height="80" />
        <br />

        <Typography className={"classes.heading"} variant={"h5"} gutterBottom>
          Way Finder
        </Typography>
        <TextField
          id="standard-with-placeholder"
          label="Email"
          margin="normal"
          type="email"
          className={classes.textField}
        />
        <TextField
          id="standard-with-placeholder"
          label="Password"
          margin="normal"
          type="Password"
          className={classes.textField}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
        <br />
        <br />
        <Link to="/">forgot password</Link>
      </Card>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 350,
    margin: "auto",
    marginTop: "10%",
    padding: "15px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  button: {
    padding: "5px",
    width: 100
  },
  heading: {
    fontWeight: "bold"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  }
}));
