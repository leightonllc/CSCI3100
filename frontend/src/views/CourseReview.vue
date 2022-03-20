<template>
    <div class="container">
        <div class="left" >
            <SideBar />
        </div>
        <div class="right">
            <h1>CSCI2720 - Introduction to Web Application</h1>
            <TabView>
              <TabPanel header="Course Review">
                <div class="cater">
                  <div class="header">
                    Course Description
                  </div>
                  <div class="content">
                    This course introduces software life-cycles: system modelling, requirements analysis and specifications, design techniques, implementation methodology, testings, maintenance and engineering laboratory. Analytical tools: software metrics, system performance measurement and evaluation. Management techniques: estimations, planning, project management, communication skills and documentations. Introductions to CASE tools and security.
                  </div>
                </div>
                <div class="cater">
                  <div class="header">
                    Professor(s)
                  </div>
                  <div class="content">
                    Professor Michael Lyu
                  </div>
                </div>
                <div class="cater">
                  <div class="header">
                    Assessment
                  </div>
                  <div class="content">
                    Homework: 20%; Project: 40%; Final Exam: 40%  
                  </div>
                </div>
                <div class="cater">
                  <div class="header">
                    Rating
                  </div>
                  <div class="content">
                    4.5/5  
                  </div>
                </div>
                <div class="cater">
                  <div class="header">
                    Comments
                  </div>
                  <div class="content">
                    <div>
                      Student A: blablablablabla
                    </div>
                    <div>
                      Student B: abcedfg blablabla
                    </div>
                    <div>
                      StudentC: efwinofen 
                    </div>
                  </div>
                </div>
                <div class="cater">
                  <div class="header">
                    Input your review here:
                  </div>
                  <div class="content">
                    Comment:
                    <div> 
                      <Textarea v-model="value3" :autoResize="true" rows="5" style="width:100%" />
                    </div>
                  </div>
                  <div>
                    Rate this course
                    <div>
                      <Rating v-model="rating" :cancel="false" />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Forum">
                  <div v-if="showForumHomeView">
                    <button id="createPostButton" @click="createForumPost"><i class="fa fa-plus-circle"></i>Create a post</button>
                    <ForumHomeView v-for="post in posts" :key="post.id" :post="post" />
                  </div>
                  <div v-if="showCreateForumPost">
                    <button class="back-button" @click="exitCreateForumPost"><i class="fa fa-arrow-left"></i>Back</button>
                    <CreateForumPost @create-new-post="updateForumView"/>
                  </div>
              </TabPanel>
              <TabPanel header="Members">
                Content I
              </TabPanel>
              <TabPanel header="Course Materials">
                Content I
              </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar'
import ForumHomeView from '../components/forum/ForumHomeView'
import CreateForumPost from '../components/forum/CreateForumPost'

export default {
  name: 'CourseReview',
  props: {
    
  },
  components: {
      SideBar,
      ForumHomeView,
      CreateForumPost
  },
  data() {
    return {
      rating: 0,
      showForumHomeView: true,
      showCreateForumPost: false,
      showIndiForumPost: false,
      posts: [
        {id: 0,
         username: 'Roblox',
         timestamp: new Date('2022-03-12T03:24:00'),
         question: 'How to patch KDE on FreeSDB?',
         description: 'This course introduces software life-cycles: system modelling, requirements analysis and specifications, design techniques, implementation methodology, testings, maintenance and engineering laboratory. Analytical tools: software metrics, system performance measurement and evaluation. Management techniques: estimations, planning, project management, communication skills and documentations. Introductions to CASE tools and security.'
        },
        // One day ago
        {id: 1,
          username: 'Siemens',
          timestamp: new Date(new Date() - 86400*1000),
          question: 'Midterm',
          description: 'I wanna ask when the midterm is tomorrow'
        },
        // 5 hours ago
        {id: 2,
          username: 'Loyola',
          timestamp: new Date(new Date() - 5*3600*1000),
          question: 'Midterm',
          description: 'What are the arrangements?'
        },
        // 30 minutes ago
        {id: 3,
          username: 'Frank',
          timestamp: new Date(new Date() - 30*60*1000),
          question: 'Final',
          description: 'When is the final?'
        },
        // 3 weeks ago
        {id: 4,
          username: 'Lucy Vadrakar',
          timestamp: new Date(new Date() -3*7*24*3600*1000 - 2*24*3600*1000),
          question: 'HW2',
          description: 'I need some help'
        },
        // 4 months ago
        {id: 5,
          username: 'Grumpa',
          timestamp: new Date(new Date() - 5*30*24*3600*1000),
          question: 'Evening',
          description: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },
        // 10 months ago
        {id: 6,
          username: 'Ira',
          timestamp: new Date(new Date('2017-04-20T00:00:00')),
          question: 'Morning',
          description: '12am'
        },
        {id: 7,
          username: 'John',
          timestamp: new Date(new Date('2017-03-19T00:00:00')),
          question: 'Final',
          description: 'When is the final?'
        },
      ],
    };
  },
  methods: {
    createForumPost() {
      this.showForumHomeView = false;
      this.showCreateForumPost = true;
      this.showIndiForumPost = false;
    },
    exitCreateForumPost() {
      this.showForumHomeView = true;
      this.showCreateForumPost = false;
      this.showIndiForumPost = false;
    },
    updateForumView(e) {
      let newPost = {id: this.posts.length, username: "null", timestamp: new Date(), question: e.title, description: e.description};
      this.posts.push(newPost);
      this.showForumHomeView = true;
      this.showCreateForumPost = false;
      this.showIndiForumPost = false;
    }
  }
};
</script>

<style scoped>
    .container {
        display: flex;
        min-height: 100vh;
        width: 100vw;
        padding: 0;
        max-width: unset;
    }
    .left {

    }
    .right{
      padding: 30px 20px
    }
    .cater {
      padding-bottom: 50px;
    }
    .header {
      font-family: 'Poppins';
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }
    .content {
      background: #F6F6F6;
      border-radius: 5px;
      padding: 10px;
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 14px;
      color: #000000;
    }
    #createPostButton {
      background: #F48023;
      width: 150px;
      height: 50px;
      left: 10px;
      border-style: solid;
      border-color: white;
      border-radius: 10px;
      border-width: 1px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      align-content: center;
    }
    #createPostButton:hover {
      opacity: 0.8;
    }

    .back-button {
      color: gray;
      border: none;
      border-radius: 10px;
      background-color: white;
      margin-bottom: 5vh;
    }
    .back-button:hover {
      background-color: lightgray;
      color: white;
    }
</style>