import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// for firebase firestore database

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjbjMOq6XMcpJohsf7-skk09rWXjuOTk",
  authDomain: "my-ecom-97c91.firebaseapp.com",
  projectId: "my-ecom-97c91",
  storageBucket: "my-ecom-97c91.appspot.com",
  messagingSenderId: "624855705957",
  appId: "1:624855705957:web:0ab0ad1e2f766922da598c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


// firebase database

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt

            });
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }

return userDocRef;

}