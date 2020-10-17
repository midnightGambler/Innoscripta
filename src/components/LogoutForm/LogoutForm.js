import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { signOut } from "../../actions/auth/auth";

export const LogoutForm = () => {
  const email = useSelector(({ auth }) => auth.email);
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <>
      <h5 className="text-center">Вы вошли как</h5>
      <h5 className="text-center mb-4">{email}</h5>
      <Button onClick={handleSignOut} color="danger" block>
        Sign out
      </Button>
    </>
  );
};
