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
import EventsForm from "../components/eventsForm";

function createData(SiNo, name, StartDate, EndDate, EventImage, description, actions) {
  return {
    SiNo,
    name,
    StartDate,
    EndDate,
    EventImage,
    description,
    actions
  };
}
const handleChange = () => {};

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
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
    "1",

    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData(
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
  { id: "SiNo", label: "SI No.", minWidth: 30 },
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
        <EventsForm
          classes={classes}
          isOneDayEvent={isOneDayEvent}
          setIsOneDayEvent={setIsOneDayEvent}
        />
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
      height: "100%",
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
