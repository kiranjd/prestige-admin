import React, { Component } from "react";
import {
  Input,
  Button,
  Checkbox,
  FormControlLabel,
  DialogContent,
  DialogActions,
  DialogTitle
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

class EventsForm extends Component {
  state = {};

  render() {
    const { classes, setIsOneDayEvent, handleClose, isOneDayEvent } = this.props;
    return (
      <>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Event Name"
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
            label="Event Start Date"
            placeholder="DD-MM-YYYY"
            margin="normal"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />

          <FormControlLabel
            className={classes.FormControlLabel}
            control={
              <Checkbox value={isOneDayEvent} onChange={() => setIsOneDayEvent(!isOneDayEvent)} />
            }
            label="One Day Event?"
          />

          {!isOneDayEvent && (
            <TextField
              id="date"
              type="date"
              label="Event End Date"
              placeholder="DD-MM-YYYY"
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          )}
          <br />
          <br />
          <InputLabel className={classes.input}>
            Upload Event Image
            <Input capture="camcorder" className={classes.input} type="file" accept="image/*" />
          </InputLabel>
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

export default EventsForm;
