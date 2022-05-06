/**
 * @Author: menkeyjai78
 * @Description: /views/CourseReview.vue is the course review page after user clicking into a course.
 *              User can (1) see course information, and (2) add comment and ratings.
 * @Date: 2022-05-06 20:13:25
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:17:39
 */

<template>
  <div>
    <Toast />
    <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
    <UpperBar />
    <div class="container">
      <div class="left">
        <SideBar />
      </div>
      <div class="right">
        <Toast />
        <h1>{{ course_code }} - {{ course_name }}</h1>
        <Menu :courseCode="courseCode" />
        <!--information of a course-->
        <div class="block1">
          <div class="cater">
            <div class="header">Course Description</div>
            <div class="content">{{ course.courseDescription }}</div>
          </div>
          <div class="cater">
            <div class="header">Professor(s)</div>
            <div class="content">{{ course.professor }}</div>
          </div>
          <div class="cater">
            <div class="header">Assessment</div>
            <div class="content">{{ course.assessment }}</div>
          </div>
          <div class="cater">
            <div class="header">Rating</div>
            <div class="content">{{ course.rating }}/5</div>
          </div>
          <div class="cater">
            <div class="header">Comments</div>
            <div class="content" v-for="comment of course.comments" v-bind:key="comment._id">
              <div>{{ comment.username }}: {{ comment.content }}</div>
            </div>
          </div>
          <!--add comments and rating-->
          <div class="cater">
            <div class="header">Input your review here:</div>
            <div class="content">
              Comment:
              <div>
                <Textarea v-model="comment" :autoResize="true" rows="5" style="width:100%" />
              </div>
            </div>
            <br />
            <div>
              Rate this course
              <div>
                <Rating v-model="rating" :cancel="false" />
              </div>
            </div>
            <br />
            <div>
              <Button label="Submit" icon="pi pi-send" @click="pushComment()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar'
import Menu from '../components/tabmenu/Menu'
import db from "../components/chatroom/firebase";
import {
  ref,
  set,
  push,
  onValue,
  update
} from "firebase/database";

export default {
  name: 'CourseReview',
  props: {

  },
  components: {
    SideBar,
    Menu
  },
  methods: {
    //push a comment to courses database
    pushComment() {
      if (this.comment == "" || this.rating == 0) {
        this.$toast.add({ severity: 'warn', summary: 'Action failed', detail: 'Please add your comment and rating.', life: 3000 });
      } else {
        let user;
        onValue(ref(db, "users"), (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().uid === localStorage.getItem('user')) {
              user = childSnapshot.val().name;
            }
          })
        });
        let key;
        let rate;
        let total;
        onValue(ref(db, "courses"), (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().code === localStorage.getItem('code')) {
              key = childSnapshot.key;
              rate = childSnapshot.val().rating;
              if (childSnapshot.val().comments) {
                total = childSnapshot.val().comments;
              } else {
                total = 0;
              }
            }
          })
        });
        total = Object.keys(total).length;
        let newRate = ((total * rate + this.rating) / (total + 1)).toFixed(2);
        let path = 'courses/' + key + '/comments';
        let add = { username: user, content: this.comment, rate: this.rating };
        let userListRef = ref(db, path);
        let newUserRef = push(userListRef);
        set(newUserRef, add);
        let ratepath = 'courses/' + key + '/';
        let addrate = { rating: newRate };
        let rateRef = ref(db, ratepath);
        update(rateRef, addrate);
        this.$toast.add({ severity: 'info', summary: 'Thank you', detail: 'We have received your feedbacks.', life: 3000 });
        this.comment = '';
        this.rating = 0;
      }
    },
  },
  mounted() {
    //get course information
    onValue(ref(db, "courses"), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().code === localStorage.getItem('code')) {
          this.course = childSnapshot.val();
        }
      })
    });
    if (localStorage.getItem('code') == null) {
      this.$router.push("/courselist");
    };
  },
  created() {
    this.courseCode = this.$route.params.code;
  },
  data() {
    return {
      course: {},
      course_code: localStorage.getItem('code'),
      course_name: localStorage.getItem('title'),
      comment: '',
      rating: 0,
    };
  },
}
</script>

<style scoped>
.block1 {
  padding: 20px 10px;
}

.container {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  max-width: unset;
}

.left {
  flex: 2 2 0;
}

.right {
  flex: 10 10 0;
  padding: 30px 20px 30px 70px;
}

.cater {
  padding-bottom: 50px;
}

.header {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}

.content {
  background: #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color: #000000;
}
</style>