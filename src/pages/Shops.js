import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import {
  Input,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Edit, Delete } from "@material-ui/icons";
import StickyHeadTable from "../components/Table";

function createData(SiNo, name, floor, category, size, description, shoplogo, shoppath, actions) {
  return {
    SiNo,
    name,
    floor,
    category,
    size,
    description,
    shoplogo,
    shoppath,
    actions
  };
}

const rows = [
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", "1", "Max", 1324171354, 99999, 999)
];

const columns = [
  { id: "SiNo", label: "SI No.", minWidth: 30 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "floor", label: "Floor", minWidth: 80 },
  {
    id: "category",
    label: "Category",
    minWidth: 80,
    format: value => value.toLocaleString()
  },
  {
    id: "description",
    label: "Description",
    minWidth: 150,
    format: value => value.toLocaleString()
  },
  {
    id: "shoplogo",
    label: "Shop Logo",
    minWidth: 80,
    format: value => value.toFixed(2)
  },
  {
    id: "shoppath",
    label: "Shop Path",
    minWidth: 80,
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

function Shops() {
  const classes = useStyles();
  const [isOneDayEvent, setIsOneDayEvent] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = () => {};

  return (
    <div style={{ padding: 10 }}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">Shops</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<Add />}
            onClick={handleClickOpen}
          >
            Add Shops
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
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    textField: {
      marginRight: theme.spacing(1),
      width: 300
    },
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 300
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
      marginRight: theme.spacing(1),
      minWidth: 300
    }
  })
);
export default Shops;
