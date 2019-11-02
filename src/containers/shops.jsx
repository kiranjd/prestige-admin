import React from "react";
import Button from "@material-ui/core/Button";
import Add from '@material-ui/icons/Add';
import {  Grid, Typography } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import FormCardContainer from "../components/FormCardContainer";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Shops() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container>
        <Grid item xs={6} >
          <Typography variant="h4">Shops</Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign:"right"}}> 
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<Add />}
      >
        Add Shops
      </Button>
        </Grid>
      </Grid>
    </div>
    // <FormCardContainer>
    //   <TextField
    //     id="standard-basic"
    //     className={classes.textField}
    //     label="Shop Name"
    //     margin="normal"
    //   />
    //   <TextField
    //     id="standard-textarea"
    //     label="Description"
    //     multiline
    //     margin="normal"
    //     className={classes.textField}
    //   />
    //   <br />
    //   <FormControl className={classes.formControl}>
    //     <InputLabel id="demo-simple-select-label">Floor</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={age}
    //       onChange={handleChange}
    //     >
    //       <MenuItem value={0}>Ground</MenuItem>
    //       <MenuItem value={1}>First</MenuItem>
    //       <MenuItem value={2}>Second</MenuItem>
    //       <MenuItem value={3}>Third</MenuItem>
    //       <MenuItem value={4}>Fourth</MenuItem>
    //     </Select>
    //   </FormControl>
    //   <br />
    //   <FormControl className={classes.formControl}>
    //     <InputLabel id="demo-simple-select-label">Category</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={age}
    //       onChange={handleChange}
    //     >
    //       <MenuItem value={10}>Food</MenuItem>
    //       <MenuItem value={20}>Entertainment </MenuItem>
    //       <MenuItem value={30}>Electronics</MenuItem>
    //       <MenuItem value={40}>Games</MenuItem>
    //     </Select>
    //   </FormControl>

    //   <br />
    //   <InputLabel className={classes.input}>
    //     Upload Shop Logo
    //     <Input
    //       capture="camcorder"
    //       className={classes.input}
    //       id="icon-button-video"
    //       type="file"
    //     />
    //   </InputLabel>

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
    },
    formControl: {
      minWidth: 250
    },
    input: {
      width: 250
    }
  })
);
export default Shops;
