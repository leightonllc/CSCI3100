<template>
  <div id="app">
    <!-- Login section -->
    <div class="login mt-5" v-if="!name">
      <h3 class="mt-5">Join Chat</h3>
      <label for="username">userName</label>
      <br />
      <input class="mb-3" type="text" v-model="userName" />
      <br />
      <button class="btn btn-primary" @click="updateUsername()">Join Chat</button>
    </div>

    <!-- Chat section -->
    <div class="message-body mt-3" v-else>
      <h3>Chat</h3>
      <h5>Welcome {{ name }}!</h5>
      <div class="card">
        <div class="card-body">
          <div class="border pl-2 pt-1 ml-2 message-text mb-2" v-for="message in messages" :key="message">
            <p class="lead">{{ message.username }}</p>
            <p class="message pt-1">{{ message.text }}</p>
          </div>
        </div>
      </div>
      <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
      <button class="btn btn-primary" @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
  import db from "./firebase";
  import {
    ref,
    set,
    push,
    onValue
  } from "firebase/database";
  export default {
    name: "App",
    data() {
      return {
        userName: "",
        name: null,
        showMessage: "",
        messages: []
      };
    },
    methods: {
      updateUsername() {
        this.name = this.userName;
        this.userName = "";
      },
      sendMessage() {
        const message = {
          text: this.showMessage,
          username: this.name
        };
        const messageListRef = ref(db, "messages");
        const newMessageRef = push(messageListRef);
        set(newMessageRef, message);
        this.showMessage = "";
      }
    },
    mounted() {
      const messageListRef = ref(db, "messages");
      console.log(messageListRef);

      onValue(ref(db, "messages"), (snapshot) => {
        this.messages = [];
        snapshot.forEach((childSnapshot) => {
          this.messages.push(childSnapshot.val());
        })
      })
      console.log(this.messages);
    }
  };
</script>