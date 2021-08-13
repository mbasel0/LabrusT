import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import { makeSelectPanel } from "./selector";
import reducer from "./reducer";
import saga from "./saga";
import "../../App.css";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CustomDrawer from "../../Components/CustomDrawer";
import CustomTable from "../../Components/CustomTable"
import {  getItems } from "./actions";
import Grid from '@material-ui/core/Grid';
const key = "panel";

export function Panel({ getItemFunc, panel }) {

  const [drawerStatus, setDrawerStatus] = useState(false);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getItemFunc();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerStatus(open)
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {
            setDrawerStatus(true)
          }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDrawer toggleDrawer={toggleDrawer} drawerStatus={drawerStatus} />
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <div style={{ marginTop: "30px" }}>
            <CustomTable heads={["Adı", "Fiyatı", "Limit", "İşlem"]} datas={panel.items} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  panel: makeSelectPanel(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getItemFunc: (values) => {
      dispatch(getItems(values))
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Panel);
