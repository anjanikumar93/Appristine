import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Banana from "./Image/Banana.png";
import Tomato from "./Image/Image13.png";
import GoodDay from "./Image/Image14.png";
import Sprit from "./Image/MaskGroup68.png";
import Grid from "@material-ui/core/Grid";
import SurfExcel from "./Image/Image9.png";
import Colgate from "./Image/Image15.png";
import LoralPair from "./Image/Image10.png";
import Dragon from "./Image/Image22.png";
import Apple from "./Image/Image26.png";
import Kiwi from "./Image/Image28.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  myCard: {
    width: 200,
    height: 210,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bananagroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "8em",
  },
  pos: {
    textAlign: "center",
  },
}));

const Items = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={GoodDay} alt="GoodDay" />
            </CardContent>
            <Typography className={classes.pos}>GoodDay</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Tomato} alt="Tomato" />
            </CardContent>
            <Typography className={classes.pos}>Tomato</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Colgate} alt="Colgate" />
            </CardContent>
            <Typography className={classes.pos}>Colgate</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Sprit} alt="Spritimg" />
            </CardContent>
            <Typography className={classes.pos}>Sprit</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={SurfExcel} alt="SurfExcelimg" />
            </CardContent>
            <Typography className={classes.pos}>SurfExcel</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Colgate} alt="Colgateimg" />
            </CardContent>
            <Typography className={classes.pos}>Colgate</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={LoralPair} alt="LoralPairImg" />
            </CardContent>
            <Typography className={classes.pos}>LoralPair</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Dragon} alt="Dragonfruits" />
            </CardContent>
            <Typography className={classes.pos}>Dragon</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Banana} alt="bananafruits" />
            </CardContent>
            <Typography className={classes.pos}>Banana</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Apple} alt="Applefruits" />
            </CardContent>
            <Typography className={classes.pos}>Apple</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Kiwi} alt="Kiwifruits" />
            </CardContent>
            <Typography className={classes.pos}>Kiwi</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Sprit} alt="Sprit" />
            </CardContent>
            <Typography className={classes.pos}>Sprit</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={SurfExcel} alt="SurfExcel" />
            </CardContent>
            <Typography className={classes.pos}>SurfExcel</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Sprit} alt="Sprit" />
            </CardContent>
            <Typography className={classes.pos}>Sprit</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Tomato} alt="Tomato" />
            </CardContent>
            <Typography className={classes.pos}>Tomato</Typography>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card className={classes.myCard}>
            <CardContent className={classes.bananagroup}>
              <img src={Colgate} alt="Colgate" />
            </CardContent>
            <Typography className={classes.pos}>Colgate</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Items;
