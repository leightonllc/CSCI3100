<template>
  <div class="container">
    <div class="left">
      <SideBar />
    </div>
    <div class="content">
      <div class="box">
        <div class="heading">My Profile</div>
        <hr />
        <div class="formcontent">
           <div class="propic">
            <img src="@/assets/images/cuhkbg.jpg" alt="propic" />
          </div>
    <br>
            <div class="button">
          <button
                type="submit"
                class="btn btn-secondary"
                @click="savechanges()"
              >
                Change Photo
              </button>
         </div>
          
          <form
            action="/dataCollectionLocation"
            method="post"
            autocomplete="on"
          >
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                v-model="profile"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="profile"
                placeholder="ramonridwan@gogeafrica.com"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                class="form-control"
                v-model="profile"
                placeholder="I am a student"
              />
            </div>
            <div class="button">
              <button
                type="submit"
                class="btn btn-primary button"
                @click="savechanges()"
              >
                Save Changes
              </button>
            </div>
          </form>
          <br />
          <hr />
          <div class="heading">Change Password</div>
          <hr />
          <form action="">
            <div class="form-group">
              <label for="newpassword">New Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Type password here"
              />
            </div>
            <div class="form-group">
              <label for="confirmpassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Type password here again"
              />
            </div>
            <div class="button">
              <button
                type="submit"
                class="btn btn-primary button"
                @click="savechanges()"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/sidebar/CourseSideBar";

export default {
  name: "Setting",
  components: {
    SideBar,
  },
  methods: {
    savechanges() {
      this.$router.push("/verifyEmail");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-size: 14px;
  font-family: "Poppins";
}
.box {
  background: rgba(255, 255, 255, 1);
  padding: 30px;
  margin: 30px;
  border-radius: 30px;
}
.formcontent {
  padding: 30px;
}
.propic {
  width: 114px;
  height: 114px;
  background: rgba(196,196,196,1);
  opacity: 1;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
}
.heading {
  color: #868686;
  font-family: Poppins;
  font-weight: Bold;
  font-size: 16px;
  opacity: 1;
  padding: 30px 0px;
}
.container {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  max-width: unset;
}
.right {
  padding: 30px 20px;
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
  padding: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  width: 100%;
  height: 100%;
}
.form-group {
  text-align: start;
  font-weight: bold;
  font-size: 16px;
  color: #9fa2b4;
  padding: 0px 0px 30px 0px;
}
.form-control {
  padding: 10px;
}
.button{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>