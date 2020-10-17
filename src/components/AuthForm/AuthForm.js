import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "../../actions/auth/auth";

const InnerForm = ({ values, errors, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        invalid={!!errors.email}
        value={values.email}
        onChange={handleChange}
        type="text"
        name="email"
        id="email"
        placeholder="example@email.com"
      />
      <FormFeedback>{errors.email}</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input
        invalid={!!errors.password}
        value={values.password}
        onChange={handleChange}
        type="password"
        name="password"
        id="password"
      />
      <FormFeedback>{errors.password}</FormFeedback>
    </FormGroup>
    <Button type="submit" color="primary" block>
      Sign in
    </Button>
  </Form>
);

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required field"),
  password: Yup.string().required("Required field"),
});

const FormikForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema,
  handleSubmit: (values, { props }) => props.signIn(values),
  validateOnChange: false,
})(InnerForm);

const mapDispatchToProps = {
  signIn,
};

export const AuthForm = connect(null, mapDispatchToProps)(FormikForm);
