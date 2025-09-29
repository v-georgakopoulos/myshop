import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUEtz17fUp29pQqAvyln5erjtCE1yzAPg",
  authDomain: "myshop41-e9d07.firebaseapp.com",
  projectId: "myshop41-e9d07",
  storageBucket: "myshop41-e9d07.firebasestorage.app",
  messagingSenderId: "54982003343",
  appId: "1:54982003343:web:3ec4c187d2e70ccd19fefa",
};

const firebaseApp = initializeApp(firebaseConfig);

// step 1
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider);
};

//step 2
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid)
  console.log(userDocRef)  

  //step 3
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())//if the document exists into the database
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user',error.message)
    }
    return userDocRef;
  }
}
