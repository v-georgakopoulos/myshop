import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword
} from "../../utils/Firebase/firebase";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./SignIn.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthWithEmailAndPassword(email,password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">sign in</Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">
            sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
