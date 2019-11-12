import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Add, Edit, Delete } from "@material-ui/icons";
import {
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton
} from "@material-ui/core";
import StickyHeadTable from "../components/Table";

function createData(SiNo, name, SelectShop, Validity, description, actions) {
  return {
    SiNo,
    name,
    SelectShop,
    Validity,
    description,
    actions
  };
}

const rows = [
  createData("1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", 1324171354, 99999, 999)
];

const columns = [
  { id: "SiNo", label: "SI No.", minWidth: 30 },
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
        </IconButton>
        {""}
        <IconButton size="small" color="secondary">
          <Delete />
        </IconButton>
      </div>
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
    </>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      maxWidth: 455,
      margin: "auto",
      transition: "0.3s",
      height: "100%"
    },
    textField: {
      marginRight: theme.spacing(1),
      width: 300
    }
  })
);
export default Offers;
