import {signInWithGooglePopup,createUserDocumentFromAuth} from "../../utils/Firebase/firebase"

import "./SignIn.css"

const SignIn = () => {

    const signInWithGoogle = async () => {
      const {user} = await signInWithGooglePopup()
      createUserDocumentFromAuth(user)
      // console.log(response) to see the uid
    }

  return (
    <div className="sign-in-container">
        <button onClick={signInWithGoogle}></button>
    </div>
  )
}

export default SignIn