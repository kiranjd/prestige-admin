import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

export default ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.heading}>{title}</h2>
      <Card className={classes.card}>
        <div className={classes.container}>{children}</div>
      </Card>
    </>
  );
};

const useStyles = makeStyles(theme => {
  console.log("theme", theme);
  return {
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center"
    },
    card: {
      maxWidth: 300,
      margin: "5%",
      padding: "15px",
      transition: "0.3s",

      boxShadow: "0 8px 40px -12px rgba(0,0,255,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(128,0,128,0.3)"
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
