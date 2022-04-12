<template>
<div style="min-height:100vh">
  <Toast />
  <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
    <UpperBar/>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right mt-3 mx-3">
            <h3>Chat</h3>
        <h5>Welcome {{ name }}!</h5>
        <div class="chat-app">

          <div >

            <div class="row d-flex justify-content-center my-4" style="height: 70vh; overflow-y: scroll">

              <div v-for="message in messages" :key="message">
                <div class="border pl-2 pt-1 ml-2 message-text mb-2" :class="{'sending':message.username=='You' }">
                  <p class="lead mx-3">{{ message.username }}</p>
                  <p class="message pt-1 mx-3">{{ message.text }}</p>
                </div>
              </div>
              
            </div>
            <form class="row mt-2 col-lg-8" @submit.stop.prevent="sendMessage()">
                <div class="col-9"><input v-model="showMessage" type="tex" class="form-control"
                    placeholder="Enter text here..." /></div>
                <div class="col-3"><button class="btn btn-primary" type="submit"><img
                      src="https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png"
                      filter="url(#colorMask3)" width="20" />   Send</button></div>
              </form>
          </div>
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
  body {
    background-color: #f4f7f6;
    margin-top: 20px;
  }

  .sending{
    background:green;
    color:white
  }
  .card {
    background: #fff;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  }

  .chat-app .people-list {
    width: 280px;
    position: absolute;
    left: 10;
    top: 0;
    padding: 20px;
    z-index: 7
  }

  .chat-app .chat {
    margin-left: 280px;
    border-left: 1px solid #eaeaea
  }

  .people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
  }

  .people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px
  }

  .people-list .chat-list li:hover {
    background: #efefef;
    cursor: pointer
  }

  .people-list .chat-list li.active {
    background: #efefef
  }

  .people-list .chat-list li .name {
    font-size: 15px
  }

  .people-list .chat-list img {
    width: 45px;
    border-radius: 50%
  }

  .people-list .about {
    float: left;
    padding-left: 8px
  }

  .people-list .status {
    color: #999;
    font-size: 13px
  }

  .chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6
  }

  .chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px
  }

  .chat .chat-header .chat-about {
    float: left;
    padding-left: 10px
  }

  .chat .chat-history {
    padding: 20px;
    border-bottom: 2px solid #fff
  }

  .chat .chat-history ul {
    padding: 0
  }

  .chat .chat-history ul li {
    list-style: none;
    margin-bottom: 30px
  }

  .chat .chat-history ul li:last-child {
    margin-bottom: 0px
  }

  .left {
        flex: 2;
        min-height: 100%;
    }
    .right {
        flex: 10;
        padding: 0px 30px;
    }




  .online,
  .offline,
  .me {
    margin-right: 2px;
    font-size: 8px;
    vertical-align: middle
  }

  .online {
    color: #86c541
  }

  .offline {
    color: #e47297
  }

  .me {
    color: #1d8ecd
  }

  .float-right {
    float: right
  }

      .container {
        display: flex;
        min-height: 100vh;
        width: 100vw;
        padding: 0;
        max-width: unset;
    }
    .left {
        flex: 2;
        min-height: 100%;
    }
    .right {
        flex: 10;
        padding: 0px 30px;
    }

    @media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
    }
</style>