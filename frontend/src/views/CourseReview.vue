<template>
    <div>
      <UpperBar/>
      <div class="container">
        <div class="left">
          <SideBar />
        </div>
        <div class="right">
          <h1>{{ course.code }} - {{ course.name }}</h1>
          <Menu :courseCode="courseCode"/>
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
              <div class="cater">
                <div class="header">Input your review here:</div>
                <div class="content">
                  Comment:
                  <div>
                    <Textarea v-model="value3" :autoResize="true" rows="5" style="width:100%" />
                  </div>
                </div>
                <br>
                <div>
                  Rate this course
                  <div>
                    <Rating v-model="rating" :cancel="false" />
                  </div>
                </div>
                <br>
                <div>
                  <Button label="Submit" icon="pi pi-send" />
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
        onValue
    } from "firebase/database";

export default {
  name: 'CourseReview',
  props: {

  },
  components: {
    SideBar,
    Menu
  },
  mounted() {
    onValue(ref(db, "courses"), (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().code === this.courseCode){
                this.course = childSnapshot.val();
            }
        })
    });

  },
  created() {
    this.courseCode = this.$route.params.code;
  },
  data() {
    return {
      course: {},
      courseCode: 0
    };
  },
}
</script>

<style scoped>
.block1{
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
  flex:1;
}
.right {
  padding: 30px 20px;
  flex:10;
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