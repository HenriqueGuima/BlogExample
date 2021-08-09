import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDtSG9JNTg4JdamndZc3wXw2EWzO2PlJzU",
  authDomain: "auth-demo-1cd56.firebaseapp.com",
  projectId: "auth-demo-1cd56",
  storageBucket: "auth-demo-1cd56.appspot.com",
  messagingSenderId: "596506328512",
  appId: "1:596506328512:web:ef909e2d61b543e1361c25",
});

export const auth = app.auth();
export default app;
