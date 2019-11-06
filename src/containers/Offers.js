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
import { createStyles, makeStyles } from "@material-ui/core/styles";
import StickyHeadTable from "../components/Table";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";

function createData(
  si_no,
  name,
  SelectShop,
  Validity,

  description,

  actions
) {
  return {
    si_no,
    name,
    SelectShop,
    Validity,

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
    "Max",
    "1",
    "Max",
    
    1324171354,
    99999,
    999
  ), createData(
    "1",
    "Max",
    
    "1",
    "Max",
    1324171354,
    99999,
    999
  ), createData(
    "1",
    "Max",
   
    "1",
    "Max",
    1324171354,
    99999,
    999
  ), createData(
    "1",
    "Max",
    "1",
    
    "Max",
    1324171354,
    99999,
    999
  ), createData(
    "1",
    "Max",
   
    "1",
    "Max",
    1324171354,
    99999,
    999
  ), createData(
    "1",
    "Max",
   
    "1",
    "Max",
    1324171354,
    99999,
    999
  ),
  createData("1", "Japan", "JP", 126317000, 377973),
  createData("1", "France", "FR", 67022000, 640679),
  createData("1", "United Kingdom", "GB", 67545757, 242495),
  createData("1", "Russia", "RU", 146793744, 17098246),
  createData("1", "Nigeria", "NG", 200962417, 923768),
  createData("1", "Brazil", "BR", 210147125, 8515767)
];

const columns = [
  { id: "si_no", label: "SI No.", minWidth: 30 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "Validity", label: "Validity", minWidth: 100 },
  {
    id: "SelectShop",
    label: "Select Shop",
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
      <div style={{ padding: 10 }}>
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
          <Grid item xs={12} style={{ paddingTop: "15px" }}>
            <StickyHeadTable rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </div>

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
          <Button onClick={handleClose} variant="contained" color="primary" className={classes.button}>
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary" className={classes.button}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      maxWidth: 455,
      margin: 'auto',
      transition: "0.3s",
      height:"100%",
      boxShadow: "0 8px 40px -12px rgba(0,0,255,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,255,0.3)"
      }
    },
    textField: {
     
      marginRight: theme.spacing(1),
      width: 300
    }
  })
);
export default Offers;
