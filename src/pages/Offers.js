import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Add, Edit, Delete } from "@material-ui/icons";
import {
  Button,
  Grid,
  Typography,
  Dialog,
  IconButton
} from "@material-ui/core";
import StickyHeadTable from "../components/Table";
import OfferForm from "../components/offersForm";

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
  createData("1", "Max", "1", "Max", 1324171354, 99999, 999),
  createData("1", "Max", "1", "Max", 1324171354, 99999, 999),
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
        <OfferForm
          classes={classes}
          shops={shops}
          // isOneDayEvent={isOneDayEvent}
          // setIsOneDayEvent={setIsOneDayEvent}
        />
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
      height: "100%",
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
