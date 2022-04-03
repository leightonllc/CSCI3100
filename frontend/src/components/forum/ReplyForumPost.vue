<template>
   <div>
     <h2>{{ forumPost.description }}</h2>
     <p>Posted by {{ forumPost.username}} on {{ postDate }}</p>
     <div v-for="reply of forumPost.replies.slice().reverse()" :key="reply.username">
         <ReplyPost :username="reply.username" :date="reply.repliedOn" :content="reply.content"/>
     </div>
   </div>
   
</template>

<script>
import db from "../chatroom/firebase";
import ReplyPost from "./ReplyPosts";

import {
        ref,
        set,
        push,
        onValue
    } from "firebase/database";

export default {
  name: 'ReplyForumPost',
  props: ['id'],
  components: {
      ReplyPost
  },
  data() {
    return {
        forumPost: null,
        postDate: null
    }
  },
    created() {
        onValue(ref(db, "forum"), (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (this.id === childSnapshot.key) {
                    this.forumPost = childSnapshot.val();
                    this.genPostDate();
                }
            })
        })
  },
  methods: {
      genPostDate() {
          let pd = new Date(this.forumPost.timestamp);
          let year = pd.getFullYear();
          let month = pd.getMonth() + 1;
          let day = pd.getDate();
          let hour = pd.getHours();
          let minute = pd.getMinutes();
          this.postDate = year + "/" + String(month) + "/" + String(day) + " at " + String(hour) + ":" + String(minute);
      }
  }
}
</script>

<style scoped>
    .block1 {
        margin: 20px 10px;
        padding: 20px 10px;
        border-radius: 5px;
        border: 1px solid gray;
    }
</style>