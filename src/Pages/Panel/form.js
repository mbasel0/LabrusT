import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import {  Col, Row } from "react-bootstrap";
import styles from "./style.module.scss";

import Validations from "../../utils/validations";
import CustomInput from "../../Components/CustomInput";

export default function FormGroup({ submitFunc  }) {
  let valitadionSchema = Yup.object().shape({
    password: Validations.password,
    mail: Validations.mail,
  });
  return (
    <div className={styles.formGroup}>
      <Formik
        validationSchema={valitadionSchema}
        initialValues={{
          mail: "",
          password: "",

        }}
        onSubmit={submitFunc}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <h4>Tell me who are you</h4>
            <Row>
              <Col md={"12"}>
                <Row className={"align-items-center"}>
                  <Col sm={"12"} md={"6"}>
                    <label className={styles.customLabel}>password</label>
                    <span className={styles.customErrors}>
                      <ErrorMessage name="password" />
                    </span>
                  </Col>
                  <Col sm={"12"} md={"6"}>
                    <Field
                      type="text"
                      placeHolder=""
                      component={CustomInput}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={"12"}>
                <Row className={"align-items-center"}>
                  <Col sm={"12"} md={"6"}>
                    <label className={styles.customLabel}>E-mail</label>
                    <span className={styles.customErrors}>
                      <ErrorMessage name="mail" />
                    </span>
                  </Col>
                  <Col sm={"12"} md={"6"}>
                    <Field
                      type="email"
                      placeHolder=""
                      component={CustomInput}
                      value={values.mail}
                      onChange={handleChange}
                      name="mail"
                    />
                  </Col>
                </Row>
              </Col>
              <div className={styles.login} onClick={handleSubmit}>
                <span>Login</span>
              </div>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}
