import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormCardContainer from "../components/FormCardContainer";
import { Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import StickyHeadTable from "../components/Table";
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";
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

function createData(
  si_no,
  name,
  floor,
  category,
  size,
  description,
  shoplogo,
  shopDirection,
  actions
) {
  return {
    si_no,
    name,
    floor,
    category,
    size,
    description,
    shoplogo,
    shopDirection,
    actions
  };
}

const rows = [
  createData(
    "1",
    "Max",
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    99999,
    999
  ),
  createData(
    "1",
    "Anuradha",
    1324171354,
    3287263,
    "1",
    "Max",
    1324171354,
    3287263
  ),
  createData("1", "China", "CN", 1403500365, 9596961),
  createData("1", "Italy", "IT", 60483973, 301340),
  createData("1", "United States", "US", 327167434, 9833520),
  createData("1", "Canada", "CA", 37602103, 9984670),
  createData("1", "Australia", "AU", 25475400, 7692024),
  createData("1", "Germany", "DE", 83019200, 357578),
  createData("1", "Ireland", "IE", 4857000, 70273),
  createData("1", "Mexico", "MX", 126577691, 1972550),
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
    id: "shopDirection",
    label: "Shop Direction",
    minWidth: 80,
    format: value => value.toFixed(2)
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 100,
    format: value => (
      <IconButton size="small">
        <Edit />
      </IconButton>
    )
  }
];

function Offers() {
  const classes = useStyles();
  const [shop, setShop] = React.useState("EUR");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setShop(event.target.value);
  // };
  const deleteItem = value => alert("deleting" + value);

  return (
    <div style={{ padding: 20 }}>
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
          >
            Add Offers
          </Button>
        </Grid>
        <Grid item xs={12}>
          <StickyHeadTable
            deleteHandler={deleteItem}
            rows={rows}
            columns={columns}
          />
        </Grid>
      </Grid>
    </div>
    // <FormCardContainer>
    //   <TextField
    //     id="standard-basic"
    //     className={classes.textField}
    //     label="Name"
    //     margin="normal"
    //   />

    //   <TextField
    //     id="standard-textarea"
    //     label="Description"
    //     multiline
    //     margin="normal"
    //     className={classes.textField}
    //   />

    //   <TextField
    //     id="date"
    //     type="date"
    //     label="offer valid till"
    //     placeholder="DD-MM-YYYY"
    //     margin="normal"
    //     className={classes.textField}
    //     InputLabelProps={{
    //       shrink: true
    //     }}
    //   />

    //   <TextField
    //     id="Select Shop id"
    //     select
    //     label="Select-Shop"
    //     className={classes.textField}
    //     value={shop}
    //     onChange={handleChange}
    //     SelectProps={{
    //       native: true,
    //       MenuProps: {
    //         className: classes.menu
    //       }
    //     }}
    //     margin="normal"
    //   >
    //     {shops.map(option => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
    //     ))}
    //   </TextField>
    //   <br />
    //   <Button variant="contained" color="primary" className={classes.button}>
    //     Login
    //   </Button>
    // </FormCardContainer>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250
    }
  })
);
export default Offers;
