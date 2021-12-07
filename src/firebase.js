import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyChBY4lpkC8AMNXtVSUI_wHo7mo4mkBZVg",
  authDomain: "tracking-tool-561c2.firebaseapp.com",
  projectId: "tracking-tool-561c2",
  storageBucket: "tracking-tool-561c2.appspot.com",
  messagingSenderId: "1080414875677",
  appId: "1:1080414875677:web:c887f6a693a419818ed6f4",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
