import React, { Component } from "react";
import { Button, DialogContent, DialogActions,DialogTitle } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class OfferForm extends Component {
  state = {};

  render() {
    const { classes, handleChange, handleClose, shops } = this.props;
    return (
      <>
        <DialogTitle>Add Offer</DialogTitle>

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
        </DialogContent>
        <br />
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add
          </Button>
        </DialogActions>
      </>
    );
  }
}

export default OfferForm;
