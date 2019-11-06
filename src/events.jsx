import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Add from "@material-ui/icons/Add";
import FormCardContainer from "./components/FormCardContainer";
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
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StickyHeadTable from "./components/Table";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";

function createData(
  si_no,
  name,
  StartDate,
  EndDate,
  EventImage,
  description,  
  actions
) {
  return {
    si_no,
    name,
    StartDate,
    EndDate,
    EventImage,
    description,   
    actions
  };
}

const rows = [
  createData(
    "1",
    "Max",
    
    "1",
    "Max",
    1324171354,
    99999,
    999
  ),
  createData(
    "1",
   
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
   
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
   
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
    
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ), createData(
    "1",
   
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  )
];

const columns = [
  { id: "si_no", label: "SI No.", minWidth: 30 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "StartDate", label: "Start Date", minWidth: 100 },
  {
    id: "EndDate",
    label: "End Date",
    minWidth: 100,
    format: value => value.toLocaleString()
  },
  {
    id: "description",
    label: "Description",
    minWidth: 150,
    format: value => value.toLocaleString()
  },
  {
    id: "EventImage",
    label: "Event Image",
    minWidth: 100,
    format: value => value.toFixed(2)
  },
  
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    format: value => (
      <div>
      <IconButton size="small" color="primary">
        <Edit />
      </IconButton>{""}
       <IconButton size="small" color="secondary">
       <Delete />
     </IconButton></div>
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
          <br /><br />
          <InputLabel className={classes.input}>
            Upload Event Image
            <Input
              capture="camcorder"
              className={classes.input}
              type="file"
              accept="image/*"
            />
          </InputLabel>
        </DialogContent>
        <br />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" className={classes.button}>
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary" className={classes.button}>
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
      margin: 'auto',
      transition: "0.3s",
      height:"100%",
      boxShadow: "0 8px 40px -12px rgba(0,0,255,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,255,0.3)"
      }
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
