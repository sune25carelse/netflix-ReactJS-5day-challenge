import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5YH7-bcMidbbqzID-eHjUvH9xjWbrkpY",
  authDomain: "netflix-build-b4363.firebaseapp.com",
  projectId: "netflix-build-b4363",
  storageBucket: "netflix-build-b4363.appspot.com",
  messagingSenderId: "837760414393",
  appId: "1:837760414393:web:4d5fec82c584d67e152168",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
