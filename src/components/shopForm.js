import React, { Component } from "react";
import {
  Input,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  MenuItem
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
class ShopForm extends Component {
  state = {};
  render() {
    let { classes, handleChange, handleClose } = this.props;
    return (
      <>
        <DialogTitle>Add Shops</DialogTitle>

        <DialogContent>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Shop Name"
            margin="normal"
          />
          <TextField
            id="standard-textarea"
            label="Description"
            multiline
            margin="normal"
            className={classes.textField}
          />
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Floor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={0}>Ground</MenuItem>
              <MenuItem value={1}>First</MenuItem>
              <MenuItem value={2}>Second</MenuItem>
              <MenuItem value={3}>Third</MenuItem>
              <MenuItem value={4}>Fourth</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Food</MenuItem>
              <MenuItem value={20}>Entertainment </MenuItem>
              <MenuItem value={30}>Electronics</MenuItem>
              <MenuItem value={40}>Games</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <InputLabel className={classes.input}>
            Upload Shop Logo
            <Input
              capture="camcorder"
              className={classes.input}
              id="icon-button-video"
              type="file"
            />
          </InputLabel>
        </DialogContent>
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

export default ShopForm;
