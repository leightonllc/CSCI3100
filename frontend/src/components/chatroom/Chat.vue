<template>
  <div id="app">

        <UpperBar/>
    <!-- Chat section -->

    <div class="row" style="min-height: 100%;">
      <div class="col-xl-3 col-lg-3 col-md-4" style="flex:2">
        <SideBar />
      </div>
      <div class="col-xl-9 col-lg-9 col-md-8 mt-5" style="flex:10">
        <h3>Chat</h3>
        <h5>Welcome {{ name }}!</h5>
        <div class="row d-flex justify-content-center">
          <div class="container col-lg-8" style="overflow-y: scroll; height:70vh">
            <div class="border pl-2 pt-1 ml-2 message-text mb-2" v-for="message in messages" :key="message">
              <p class="lead">{{ message.username }}</p>
              <p class="message pt-1">{{ message.text }}</p>
            </div>
          </div>
          <form class="row col-lg-8" @submit.stop.prevent="sendMessage()">
            <div class="col-9"><input v-model="showMessage" type="text" class="form-control" /></div>
            <div class="col-3"><button class="btn btn-primary" type="submit">Send</button></div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import SideBar from '../sidebar/CourseSideBar.vue';
  import db from "./firebase";
  import {
    ref,
    set,
    push,
    onValue
  } from "firebase/database";
  import {
    getAuth,
    onAuthStateChanged
  } from "firebase/auth";
  export default {
    name: "App",
    data() {
      return {
        name: null,
        showMessage: "",
        messages: []
      };
    },
    components: {
      SideBar,
    },
    methods: {
      sendMessage() {
        if (this.name) {
          const message = {
            text: this.showMessage,
            username: this.name
          };
          const messageListRef = ref(db, "messages");
          const newMessageRef = push(messageListRef);
          set(newMessageRef, message);
          this.showMessage = "";
        }
      }
    },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.name = user.displayName;
          console.log(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
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

<style scoped>
</style>