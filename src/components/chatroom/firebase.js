/**
 * @Author: leightonllc
 * @Description: /component/chatroom/firebase.js connects to the realtime firebase chat record.
 * @Date: 2022-05-06 20:40:19
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:47:35
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmkmp8XdBN91dK0aZZI3KOZQh3GcVaJY",
  authDomain: "csci3100-chat.firebaseapp.com",
  databaseURL: "https://csci3100-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "csci3100-chat",
  storageBucket: "csci3100-chat.appspot.com",
  messagingSenderId: "638768966493",
  appId: "1:638768966493:web:230d5b28989d6c2939d6b4"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;