import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormCardContainer from "../components/FormCardContainer";
import Add from "@material-ui/icons/Add";
import {
  Input,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = () => {
    console.log("b");
  };
  const classes = useStyles();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setShop(event.target.value);
  // };
  return (
    <>
      <div style={{ padding: 20 }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4">Offers</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<Add />}
              onClick={handleClickOpen}
            >
              Add Offers
            </Button>
          </Grid>
        </Grid>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
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
            // value={shop}
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
          {/* <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button> */}
          {/* <Button variant="contained" color="primary" className={classes.button}>
        Login
      </Button> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
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
