import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAYocyjhYWvuQiMHcZs6hkzCFH_bEqhjqE",
  authDomain: "tracking-tool-75d99.firebaseapp.com",
  projectId: "tracking-tool-75d99",
  storageBucket: "tracking-tool-75d99.appspot.com",
  messagingSenderId: "265415809862",
  appId: "1:265415809862:web:4329b67c375565183e2347",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
