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
import { withRouter } from "react-router";
import { placeOrder } from "../../actions/orders/orders";
import { cleanCart } from "../../actions/cart/cart";

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
      <Label for="name">First name</Label>
      <Input
        invalid={!!errors.name}
        value={values.name}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
      />
      <FormFeedback>{errors.name}</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="surname">Surname</Label>
      <Input
        invalid={!!errors.surname}
        value={values.surname}
        onChange={handleChange}
        type="text"
        name="surname"
        id="surname"
      />
      <FormFeedback>{errors.surname}</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="address">Address</Label>
      <Input
        invalid={!!errors.address}
        value={values.address}
        onChange={handleChange}
        type="text"
        name="address"
        id="address"
      />
      <FormFeedback>{errors.address}</FormFeedback>
    </FormGroup>
    <FormGroup>
      <Label for="details">Info for deliver service</Label>
      <Input
        invalid={!!errors.details}
        value={values.details}
        onChange={handleChange}
        type="textarea"
        name="details"
        id="details"
        rows="3"
      />
      <FormFeedback>{errors.details}</FormFeedback>
    </FormGroup>
    <Button type="submit" color="primary" block>
      Place order
    </Button>
  </Form>
);

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required field"),
  name: Yup.string().required("Required field"),
  surname: Yup.string().required("Required field"),
  address: Yup.string().required("Required field"),
  address: Yup.string(),
});

const FormikForm = withFormik({
  mapPropsToValues: ({ email, order }) => ({
    email,
    name: "",
    surname: "",
    address: "",
    details: "",
    order,
  }),
  validationSchema,
  handleSubmit: (values, { props }) => {
    props.placeOrder(values);
    props.cleanCart();
    props.history.push("/history");
  },
  validateOnChange: false,
})(InnerForm);

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
});

const mapDispatchToProps = {
  placeOrder,
  cleanCart,
};

export const OrderForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormikForm)
);
