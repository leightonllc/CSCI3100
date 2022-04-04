import { initializeApp, cert } from "firebase-admin/app";


var serviceAccount = require("../key.json");

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://csci3100-chat-default-rtdb.asia-southeast1.firebasedatabase.app"
});

