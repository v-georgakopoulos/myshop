import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./SignUp.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //   console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={changeHandler}
        />

        <FormInput
          label="email"
          type="email"
          required
          name="email"
          value={email}
          onChange={changeHandler}
        />

        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={changeHandler}
        />

        <FormInput
          label="confirmPassword"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
