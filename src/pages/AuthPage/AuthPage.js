import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Row, Col } from "reactstrap";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { LogoutForm } from "../../components/LogoutForm/LogoutForm";

export const AuthPage = () => {
  const isAuthtorized = useSelector(({ auth }) => auth.isAuthtorized);

  return (
    <Row>
      <Col xs="12" lg={{ size: 6, offset: 3 }}>
        <Card>
          <CardBody>{isAuthtorized ? <LogoutForm /> : <AuthForm />}</CardBody>
        </Card>
      </Col>
    </Row>
  );
};
