import firebase from 'firebase/compat/app'; import 'firebase/compat/auth'; import 'firebase/compat/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBkmkmp8XdBN91dK0aZZI3KOZQh3GcVaJY",
  authDomain: "csci3100-chat.firebaseapp.com",
  databaseURL: "https://csci3100-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "csci3100-chat",
  storageBucket: "csci3100-chat.appspot.com",
  messagingSenderId: "638768966493",
  appId: "1:638768966493:web:230d5b28989d6c2939d6b4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;