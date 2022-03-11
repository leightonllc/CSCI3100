
import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBkmkmp8XdBN91dK0aZZI3KOZQh3GcVaJY",
  authDomain: "csci3100-chat.firebaseapp.com",
  databaseURL: "https://csci3100-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "csci3100-chat",
  storageBucket: "csci3100-chat.appspot.com",
  messagingSenderId: "638768966493",
  appId: "1:638768966493:web:230d5b28989d6c2939d6b4"
};

// Initialize Firebase
var fire = firebase.initializeApp(config);
export default fire;