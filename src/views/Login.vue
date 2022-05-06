/**
 * @Author: monkeyjai78
 * @Description: /views/Login.vue is the login page after landing page.
 *              User has to input email address and password to enter the application.
 * @Date: 2022-05-06 20:07:02
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:10:42
 */

<template>
  <div class="background">
    <div class="login">
      <!--login form-->
      <form class="form" @submit.stop.prevent="login()">
        <div class="header">
          <img src="@/assets/logo.png" alt="App Logo" style="height:100px;" />
        </div>
        <div class="alert alert-info alert-dismissable fade show" v-if="flag">Please check your credentials.</div>
        <div class="header">
          <div class="topic">Log In to CUTE</div>
          <div class="content">Enter your email and password below</div>
        </div>
        <div class="form-group">
          <label for="InputEmail">EMAIL</label>
          <input type="email" class="form-control" v-model="email" required="true" placeholder="Email address" />
        </div>
        <div class="form-group">
          <div style="display:flex;justify-content: space-between;">

            <label for="InputPassword">PASSWORD</label>
            <a href="/resetpassword">Forgot password?</a>
          </div>
          <input type="password" class="form-control" v-model="password" required="true" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary button">Log In</button>
        <div class="signup">
          Don’t have an account? <a class="signuplink" href="/registration">Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
const auth = getAuth();
export default {
  name: "HomeView",
  data() {
    return {
      email: '',
      password: '',
      flag: false,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    //check user authentication
    login() {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              localStorage.setItem('user', auth.currentUser.uid);
              this.$router.push({
                path: '/overview'
              });
            })
            .catch((error) => {
              this.flag = true;
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        }).catch((error2) => {
          this.flag = true;
          const errorCode = error2.code;
          const errorMessage = error2.message;
          console.log(errorCode, errorMessage);
        });

    },
  },

};
</script>

<style scoped>
.background {
  background: linear-gradient(0deg,
      rgba(21, 101, 216, 0.7),
      rgba(21, 101, 216, 0.7)),
    url(~@/assets/images/cuhkbg.jpg);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.login {
  display: flex;
  justify-content: center;
}

.form {
  background: white;
  padding: 40px 40px;
  border-radius: 10px;
  width: 25%;
  min-width: 350px;
}

.header {
  font-weight: bold;
  font-size: 19px;
  color: #a4a6b3;
  padding: 0px 0px 20px 0px;
}

.topic {
  font-weight: bold;
  font-size: 24px;
  color: #252733;
}

.content {
  font-weight: normal;
  font-size: 14px;
  color: #9fa2b4;
}

.form-group {
  text-align: start;
  font-weight: bold;
  font-size: 12px;
  color: #9fa2b4;
  padding: 0px 0px 30px 0px;
}

.button {
  width: 90%;
}

.signup {
  font-size: 14px;
  text-align: center;
  color: #9fa2b4;
  padding: 20px 0px;
}

.signuplink {
  font-size: 14px;
  font-weight: bold;
  color: #1565d8;
  text-decoration: none;
}
</style>