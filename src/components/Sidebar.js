import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Mask from "./Image/MaskGroup20.png";
import arrowDown from "./Image/arrow.png";
import Umbrella from "./Image/umbrella.png";
import RightIcon from "./Image/rightIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    margin: "0",
  },
  point: {
    textAlign: "center",
    padding: "1em",
    color: "#ffffff",
  },
  manGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    cursor: "pointer",
  },
  man: {
    height: "2em",
    width: "2em",
  },
  lauren: {
    color: "#ffffff",
  },
  listgroup: {
    padding: "1em 1em",
  },
  umbrellaGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ef5350",
    },
  },
  textColor: {
    color: "#ffffff",
    width: "7em",
  },
  home: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.point}>
        <h3>Point Of Sale</h3>
      </div>
      <NavLink className={classes.home} exact to="/">
        <div className={classes.manGroup}>
          <img src={Mask} alt="manImage" className={classes.man} />
          <h3 className={classes.lauren}>Lauren Gray</h3>
          <img src={arrowDown} alt="arrow" />
        </div>
      </NavLink>
      <br />
      <div className={classes.listgroup}>
        <NavLink className={classes.home} exact to="/">
          <div className={classes.umbrellaGroup}>
            <img src={Umbrella} alt="umbrella" />
            <h4 className={classes.textColor}>Dashboard</h4>
            <img src={RightIcon} alt="rightIcon" />
          </div>
        </NavLink>
        <NavLink className={classes.home} exact to="/inventry">
          <div className={classes.umbrellaGroup}>
            <img src={Umbrella} alt="umbrella" />
            <h4 className={classes.textColor}>Inventry</h4>
            <img src={RightIcon} alt="rightIcon" />
          </div>
        </NavLink>
        <NavLink className={classes.home} exact to="/category">
          <div className={classes.umbrellaGroup}>
            <img src={Umbrella} alt="umbrella" />
            <h4 className={classes.textColor}>Category</h4>
            <img src={RightIcon} alt="rightIcon" />
          </div>
        </NavLink>
        <NavLink className={classes.home} exact to="/subcatagory">
          <div className={classes.umbrellaGroup}>
            <img src={Umbrella} alt="umbrella" />
            <h4 className={classes.textColor}>Subcategory</h4>
            <img src={RightIcon} alt="rightIcon" />
          </div>
        </NavLink>
        <NavLink className={classes.home} exact to="/item">
          <div className={classes.umbrellaGroup}>
            <img src={Umbrella} alt="umbrella" />
            <h4 className={classes.textColor}>Items</h4>
            <img src={RightIcon} alt="rightIcon" />
          </div>
        </NavLink>
        <NavLink className={classes.home} exact to="/receipts">
          <div className={classes.umbrellaGroup}>
            <img src={Umbrella} alt="umbrella" />
            <h4 className={classes.textColor}>Receipts</h4>
            <img src={RightIcon} alt="rightIcon" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
