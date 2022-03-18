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
                Content I
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

export default {
  name: 'TimeTable',
  components: {
      SideBar,
  },
  data() {
        return {
          rating: 0,
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
</style>