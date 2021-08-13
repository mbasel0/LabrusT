import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import { login } from "./actions";
import { makeSelectLogin } from "./selector";
import reducer from "./reducer";
import saga from "./saga";
import FormGroup from "./form";
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';
const key = "login";

export function Login({ getItemFunc, loginFunc }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [errorStatus, setErrorStatus] = useState(false);

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const classes = useStyles();



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Labrus
        </Typography>
        <FormGroup submitFunc={loginFunc(setErrorStatus)} />
        {errorStatus && <Alert severity="error" >Mail adresiniz veya şifreniz yanlış.</Alert>}
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loginFunc: (setErrorStatus) => (values) => {
      dispatch(login(values,setErrorStatus))
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
