import app from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwvkknCbs7FLs0NfUDFsRrWYzCsNRt688",
  authDomain: "whatsappclone-be65b.firebaseapp.com",
  databaseURL: "https://whatsappclone-be65b-default-rtdb.firebaseio.com",
  projectId: "whatsappclone-be65b",
  storageBucket: "whatsappclone-be65b.firebasestorage.app",
  messagingSenderId: "381157593845",
  appId: "1:381157593845:web:c1b6a3cb283f04e9e6ebbc",
  measurementId: "G-Q0KSCVGQHM"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;