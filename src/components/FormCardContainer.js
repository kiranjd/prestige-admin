import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

export default ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.heading}>{title}</h2>
      <Card className={classes.card}>{children}</Card>
    </>
  );
};

const useStyles = makeStyles(theme => {
  console.log("theme", theme);
  return {
    card: {
      maxWidth: 350,
      margin: "auto",
      padding: "15px",
      transition: "0.3s",
      marginLeft: "2%",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    heading: {
      marginLeft: "2%",
      marginTop: "3%",
      marginBottom: "2%",
      color: "#F44336"
    }
  };
});
