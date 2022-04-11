<template>
<div style="min-height:100vh">
    <UpperBar/>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right mt-3 mx-3">
            <h3>Chat</h3>
        <h5>Welcome <span class="name">{{ name }}</span>!</h5>
        <div class="chat-app">

          <div >

            <div class="row d-flex justify-content-center my-4" style="height: 70vh; overflow-y: scroll">

              <div v-for="user in allusers" :key="user" >
                <div class="border pl-2 pt-1 ml-2 message-text mb-2" v-if="lastmessage[user.uid]"
                 style="position:relative;height:100px" @click="gotochat(user.uid)">
                  <p class="lead mx-3 name">{{ user.name }}</p>
                  <p class="lead mx-3">{{lastmessage[user.uid]}}</p>
                  <div class="unseen">{{ unseen[user.uid] }}</div>
                </div>
              </div>
              <div v-for="user in allusers" :key="user" >
                <div class="border pl-2 pt-1 ml-2 message-text mb-2" v-if="!lastmessage[user.uid]"
                 style="position:relative;height:100px" @click="gotochat(user.uid)">
                  <p class="lead mx-3 name">{{ user.name }}</p>
                  <p class="lead mx-3">{{lastmessage[user.uid]}}</p>
                  <div class="unseen">{{ unseen[user.uid] }}</div>
                </div>
              </div>
              
            </div>
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
    update,
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
        messages: [],
        users:['',''],
        unseen:[],
        allusers:[],
        lastmessage:[],
      };
    },
    components: {
      SideBar,
    },
    methods: {
        gotochat(uid) {
            this.$router.push({ name: 'PrivateChat', params: {receiver: uid}} );
        },
    },
    created() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
}
    },
    watch: {
      'name': function(newVal, oldVal){
          
        onValue(ref(db, "privatemessage"), (snapshot) => {
            this.messages = [];
            this.unseen = []
            snapshot.forEach((childSnapshot) => {
                this.allusers.forEach(user => {
                    this.users[1] = user.uid
                    if (this.users.includes(childSnapshot.val().recevier) && this.users.includes(childSnapshot.val().sender)){
                        this.lastmessage[user.uid]=childSnapshot.val().text;
                    }
                    
                });
                if (childSnapshot.val().recevier == this.users[0] && childSnapshot.val().seen == 0 ){
                    onValue(ref(db, "users"), (snapshot) => {
                        snapshot.forEach((childSnapshot2) => {
                            if (childSnapshot2.val().uid == childSnapshot.val().sender) {
                                if (this.unseen[childSnapshot.val().sender] ==null){
                                    this.unseen[childSnapshot.val().sender] = 0
                                }
                                this.unseen[childSnapshot.val().sender] += 1;

                            }

                            
                        })
                    })
                    
                }
                


            })
            
        });
      },
      'unseen' : function(newVal, oldVal){
          var userstmp=[]
          this.allusers.forEach(user => {
              if (user.uid != this.users[0]){

                  if(this.unseen[user.uid] > 0){
                      userstmp.unshift(user)
                  }else{
                      userstmp.push(user)
                  }
              }
              
          });
          this.allusers = userstmp;
      }
    },
    mounted() {
      
        onAuthStateChanged(auth, (user) => {
          if (user) {
                onValue(ref(db, "users"), (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().uid == user.uid) {
                            this.name = childSnapshot.val().name;
                            this.users[0]=childSnapshot.val().uid
                            this.flag=this.flag+1;
                        }
                        this.allusers.push(childSnapshot.val())
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
  .name {
    font-weight: bold;
    text-decoration:inherit
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
    .unseen{
        background: red;
        color:white;
        border-radius: 99999px;
        width:25px;
        text-align: center;
        position: absolute;
        top: 0;
        right:0;
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