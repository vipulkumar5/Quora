import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT6lV5yCEzM5QbpVxom5BRD16YoS1PWWM",
  authDomain: "quoraforcollege-ecac6.firebaseapp.com",
  projectId: "quoraforcollege-ecac6",
  storageBucket: "quoraforcollege-ecac6.appspot.com",
  messagingSenderId: "929095865166",
  appId: "1:929095865166:web:0cec69bd803ad7dd18841f",
  measurementId: "G-7QXDNF00MS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
