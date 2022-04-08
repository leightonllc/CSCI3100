<template>
  <div id="app">
        <Toast />
       <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
        <UpperBar/>
    <!-- Chat section -->

    <div class="row" style="min-height: 100%;">
      <div class="col-xl-3 col-lg-3 col-md-4" style="flex:2">
        <SideBar />
      </div>
      <div class="col-xl-9 col-lg-9 col-md-8 mt-5" style="flex:10">
        <h3>Chat</h3>
        <h5>Welcome {{ name }}!</h5>
        <div class="chat-app">
        
          <div class="left">
          <div id="plist" class="people-list d-none d-md-block" >
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="pi pi-search"></i></span>
                    </div>
                    <input type="text" class="form-control my-0 py-0" placeholder="Search...">
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
                        <div class="about">
                            <div class="name">Vincent Porter</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                        </div>
                    </li>
                    <li class="clearfix active">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                        <div class="about">
                            <div class="name">Leighton, Monkey, Megan</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                        <div class="about">
                            <div class="name">Mike Thomas</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>                                    
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                        <div class="about">
                            <div class="name">Christian Kelly</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                        <div class="about">
                            <div class="name">Monica Ward</div>
                            <div class="status"> <i class="fa fa-circle online"></i> online </div>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                        <div class="about">
                            <div class="name">Dean Henry</div>
                            <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                        </div>
                    </li>
                </ul>
            </div>
            </div>

          <div class="right row d-flex justify-content-center">
          <div class="col-lg-8">
              <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
              </a>
              <div class="chat-about">
                                <h6 class="m-b-0">Aiden Chavez</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
              </div>
            <div class="col-lg-8 hidden-sm text-right">
                <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
            </div>
            <div class="container col-lg-8" style="overflow-y: scroll; height:70vh">
              <div class="border pl-2 pt-1 ml-2 message-text mb-2" v-for="message in messages" :key="message">
                <p class="lead">{{ message.username }}</p>
                <p class="message pt-1">{{ message.text }}</p>
              </div>
            </div>
            <form class="row col-lg-8" @submit.stop.prevent="sendMessage()">
              <div class="col-9"><input v-model="showMessage" type="tex" class="form-control" placeholder="Enter text here..." /></div>
              <div class="col-3"><button class="btn btn-primary" type="submit"><img src="https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png" filter="url(#colorMask3)" width="20"/>Send</button></div>
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
body{
    background-color: #f4f7f6;
    margin-top:20px;
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

.left {
      flex:2 2 0;
    }

.right {
      flex:10 10 0;
      padding: 20px 10px 30px 0px;
    }


</style>