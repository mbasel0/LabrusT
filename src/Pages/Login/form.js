import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import styles from "./style.module.scss";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



export default function Form({ submitFunc }) {
  let validationSchema = Yup.object().shape({
    password: Yup.string().max(255).required('Şifre geçersiz'),
    mail: Yup.string().email('Geçerli bir mail adresi giriniz').max(255).required('Email is required'),
  });

  const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();


  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitFunc(values);
    },
  });


  return (
    <div className={styles.formGroup}>
      <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="mail"
          label="Mail Adresiniz"
          name="mail"
          autoComplete="mail"
          autoFocus
          value={formik.values.mail}
          onChange={formik.handleChange}
          error={formik.touched.mail && Boolean(formik.errors.mail)}
          helperText={formik.touched.mail && formik.errors.mail}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Şifreniz"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Giriş Yap
        </Button>
      </form>
    </div>
  );
}

