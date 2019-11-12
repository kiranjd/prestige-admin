import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import {
  TextField,
  Button,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Input,
  IconButton,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Edit, Delete } from "@material-ui/icons";
import StickyHeadTable from "../components/Table";

function createData(SiNo, name, StartDate, EndDate, actions) {
  return {
    SiNo,
    name,
    StartDate,
    EndDate,
    actions
  };
}
const handleChange = () => {};

const rows = [
  createData(
    "1",
    "Literature Festival",
    "11-10-2019",
    "14-10-2019",

    999333
  ),
  createData("2", "Kid's Carnival ", "11-12-2019", "14-12-2019", 45),
  createData("3", "Wine Visit with Sunday Lunch", "19-10-2019", "25-10-2019", 32)
];

const columns = [
  { id: "SiNo", label: "SI No.", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "StartDate", label: "Start Date", minWidth: 80 },
  {
    id: "EndDate",
    label: "End Date",
    minWidth: 80
  },

  {
    id: "actions",
    label: "Actions",
    minWidth: 80,
    format: () => (
      <div>
        <IconButton size="small" color="primary">
          <Edit />
        </IconButton>
        {""}
        <IconButton size="small" color="secondary">
          <Delete />
        </IconButton>
      </div>
    )
  }
];

function Events() {
  const classes = useStyles();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{ padding: 10 }}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">Events</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Add />}
            onClick={handleClickOpen}
          >
            Add Events
          </Button>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "15px" }}>
          <StickyHeadTable rows={rows} columns={columns} />
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.card}
      >
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
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    card: {
      maxWidth: 450,
      margin: "auto",
      transition: "0.3s",
      height: "100%"
    },
    input: {
      width: 300
    },
    FormControlLabel: {
      width: 300
    }
  })
);

export default Events;
