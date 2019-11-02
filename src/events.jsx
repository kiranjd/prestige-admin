import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormCardContainer from "./components/FormCardContainer";
import { Input } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
function Events() {
  const classes = useStyles();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);

  return (
    <FormCardContainer title="Events">
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
          <Checkbox
            value={isOneDayEvent}
            onChange={() => setIsOneDayEvent(!isOneDayEvent)}
          />
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
      <InputLabel className={classes.input}>
        Upload Event Image
        <Input
          capture="camcorder"
          className={classes.input}
          type="file"
          accept="image/*"
        />
      </InputLabel>

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
    },
    input: {
      width: 250
    },
    FormControlLabel: {
      width: 250
    }
  })
);

export default Events;
