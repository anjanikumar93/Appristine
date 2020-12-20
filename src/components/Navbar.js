import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconDown from "./Image/iconDown.png";
import AddIcon from "./Image/addIcon.png";
import AddMan from "./Image/addMan.png";
import Search from "./Image/search.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    height: "15vh",
    padding: "1em",
    background: "white",
  },
  textgroup: {
    lineHeight: "1em",
  },
  backColor: {
    color: "#9e9e9e",
    fontFamily: " sans-serif",
    fontSize: "1em",
  },
  category: {
    color: "black",
    fontFamily: " sans-serif",
    fontSize: "1em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icongroup: {
    display: "flex",
    flexDirection: "row",
  },
  personIcon: {
    padding: "5px",
  },
  Iconsize: {
    height: "2em",
    width: "2em",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <div className={classes.textgroup}>
            <h4 className={classes.backColor}>Hello Laurem, Welcome Back</h4>
            <p className={classes.category}>
              All Category
              <img
                src={IconDown}
                alt="iconDown"
                style={{ marginLeft: "0.5em" }}
              />
            </p>
          </div>
          <Typography variant="h6" className={classes.title}></Typography>
          <div className={classes.icongroup}>
            <div className={classes.personIcon}>
              <img src={AddIcon} alt="addicon" className={classes.Iconsize} />
            </div>
            <div className={classes.personIcon}>
              <img src={AddMan} alt="addman" className={classes.Iconsize} />
            </div>
            <div className={classes.personIcon}>
              <img src={Search} alt="searcj" className={classes.Iconsize} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
