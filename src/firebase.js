import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAPwMBNDUaplzGdd4YkMNkU7RZn8r1xEdo",
  authDomain: "tracking-tool-4ed79.firebaseapp.com",
  projectId: "tracking-tool-4ed79",
  storageBucket: "tracking-tool-4ed79.appspot.com",
  messagingSenderId: "676235322829",
  appId: "1:676235322829:web:614eb5350a72dd2d281084"
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
