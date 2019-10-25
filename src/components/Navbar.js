import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "react-icons-kit";
import { person } from "react-icons-kit/iconic/person";
import { login } from "react-icons-kit/iconic/login";
import Fab from "@material-ui/core/Fab";

export default function Navbar() {
  const classes = useStyles();
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <div className="ml-auto" style={{ marginRight: "-30px" }}>
        <Link to="/">
          <Fab color="secondary" aria-label="edit" className={classes.fab}>
            <Icon size={20} icon={person} style={{ color: "#ffffff" }} />
          </Fab>
        </Link>
        <Link to="/">
          <Fab color="secondary" aria-label="edit" className={classes.fab}>
            <Icon size={20} icon={login} style={{ color: "#ffffff" }} />
          </Fab>
        </Link>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: #132743;
  grid-area: navbar;
`;
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(0.5),
    fontSize: "12px",
    padding: "10px",
    height: "40px",
    width: "40px",
    color: "white",
    background: "#49beb7"
  }
}));