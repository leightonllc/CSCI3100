/**
 * @Author: monkeyjai78
 * @Description: /component/chatroom/PrivateChat.vue shows the conversation between 2 users.
 * @Date: 2022-05-06 20:40:19
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:46:19
 */

<template>
  <div style="min-height:100vh">
    <Toast />
    <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
    <UpperBar />
    <div class="container">
      <div class="left">
        <SideBar />
      </div>
      <div class="right mt-3 mx-3">
        <h3>Chat</h3>
        <h5>Welcome <span class="name">{{ name }}</span>!</h5>
        <h5> <span class="name">{{ recevierName }}</span> Chat Room</h5>
        <div class="chat-app">
          <!--chat records-->
          <div>
            <div class="row d-flex justify-content-center my-4" style="height: 70vh; overflow-y: scroll">
              <div v-for="message in messages" :key="message">
                <div class="border pl-2 pt-1 ml-2 message-text mb-2"
                  :class="{ 'sending': message.username == 'You', 'recieving': message.username != 'You' }">
                  <p class="lead mx-3">{{ message.username }}</p>
                  <p class="message pt-1 mx-3">{{ message.text }}</p>
                </div>
              </div>

              <div id="last">
                <div v-if="seen">seen</div>
              </div>
            </div>
            <!--type message and send-->
            <form class="row mt-2 col-lg-8" @submit.stop.prevent="sendMessage()">
              <div class="col-9"><input v-model="showMessage" type="tex" class="form-control"
                  placeholder="Enter text here..." /></div>
              <div class="col-3"><button class="btn btn-primary" type="submit"><img
                    src="https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png"
                    filter="url(#colorMask3)" width="20" /> Send</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const auth = getAuth();
import SideBar from '../sidebar/CourseSideBar.vue';
import db from "./firebase";
import {
  ref,
  set,
  push,
  onValue,
  update
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
      messages: [],
      users: ['', ''],
      userName: 'You',
      recevierName: '',
      flag: 0,
      seen: 0,
    };
  },
  components: {
    SideBar,
  },
  methods: {
    //push a message to the private chat database
    sendMessage() {
      if (this.name) {
        const message = {
          text: this.showMessage,
          sender: this.users[0],
          recevier: this.users[1],
          seen: 0,
        };
        const messageListRef = ref(db, "privatemessage");
        const newMessageRef = push(messageListRef);
        set(newMessageRef, message);
        this.showMessage = "";
        var TY = 0;
        TY = document.getElementById(last).offsetTop;
        document.getElementById(last).scroll(0, TY - tde);
      }
    },
  },
  created() {
    this.users[1] = this.$route.params.receiver;
  },
  watch: {
    'flag': function (newVal, oldVal) {
      if (newVal == 2) {
        onValue(ref(db, "privatemessage"), (snapshot) => {
          this.messages = [];
          snapshot.forEach((childSnapshot) => {
            let temp = { text: "", username: "" }
            if (this.users.includes(childSnapshot.val().recevier) && this.users.includes(childSnapshot.val().sender)) {
              temp.text = childSnapshot.val().text
              if (childSnapshot.val().sender == this.users[0]) {

                temp.username = this.userName
              } else if ((childSnapshot.val().sender == this.users[1])) {
                temp.username = this.recevierName
              }
              if (childSnapshot.val().sender == this.users[0]) {
                this.seen = childSnapshot.val().seen
              } else {
                this.seen = 0
              }


              this.messages.push(temp);
              if (childSnapshot.val().recevier == this.users[0]) {
                const updates = {};
                var key = childSnapshot.key + ''
                updates['privatemessage/' + key + '/sender'] = childSnapshot.val().sender
                updates['privatemessage/' + key + '/recevier'] = childSnapshot.val().recevier
                updates['privatemessage/' + key + '/text'] = childSnapshot.val().text
                updates['privatemessage/' + key + '/seen'] = 1;
                update(ref(db), updates);
              }
            }
          })
        })
      }
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onValue(ref(db, "users"), (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().uid == user.uid) {
              this.name = childSnapshot.val().name;
              this.users[0] = childSnapshot.val().uid
              this.flag = this.flag + 1;
            }
            if (childSnapshot.val().uid == this.users[1]) {
              this.recevierName = childSnapshot.val().name;
              this.flag = this.flag + 1;
            }
          })
        })
      }
    });
  }
};
</script>

<style scoped>
body {
  background-color: #f4f7f6;
  margin-top: 20px;
}

.sending {
  background: green;
  color: white;
  float: right;
  width: 60%;
  border-radius: 20px 20px 0px 20px;
}

.recieving {
  float: left;
  width: 60%;
  border-radius: 20px 20px 20px 0px;

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

.name {
  font-weight: bold;
  text-decoration: inherit
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