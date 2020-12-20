import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Inventry from "./components/Inventry";
import Category from "./components/Category";
import Subcategory from "./components/Subcategory";
import Items from "./components/Items";
import Receipts from "./components/Receipts";

const useStyles = makeStyles((theme) => ({
  app: {
    margin: "0",
    padding: "0",
  },
  paper1: {
    height: "100vh",
    borderRadius: "0",
    background: "#f50057",
    marginTop: "0%",
    overflowY: "auto",
  },
  paper2: {
    height: "100vh",
    borderRadius: "0",
    background: "lightgray",
    overflowY: "auto",
  },
  cardGroup: {
    padding: "2em",
    overflowY: "auto",
    height: "85vh",
  },
  navbargroup: {
    height: "15vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <Paper className={classes.paper1}>
              <Sidebar />
            </Paper>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={12}>
            <Paper className={classes.paper2}>
              <div className={classes.navbargroup}>
                <Navbar />
              </div>

              <div className={classes.cardGroup}>
                <Switch>
                  <Route path="/" component={Dashboard} exact />
                  <Route path="/inventry" component={Inventry} exact />
                  <Route path="/category" component={Category} exact />
                  <Route path="/subcatagory" component={Subcategory} exact />
                  <Route path="/item" component={Items} exact />
                  <Route path="/receipts" component={Receipts} exact />
                  <Redirect to="/" />
                </Switch>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
