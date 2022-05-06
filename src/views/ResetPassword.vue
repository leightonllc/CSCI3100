/**
 * @Author: monkeyjai78
 * @Description: /views/ResetPassword.vue allows user to reset the password by entering a valid email address.
 * @Date: 2022-05-06 19:51:27
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 19:58:24
 */

<template>
  <div class="background">
    <div class="login">
      <form class="form" @submit.stop.prevent="reset()">
        <i class="pi pi-angle-left" onclick="history.back()" style="cursor: pointer;">Back</i>
        <div class="header" style="text-align: center;">
          <img src="@/assets/logo.png" alt="App Logo" height="80px" />
        </div>
        <div class="header">
          <div class="title">Forgot your password?</div>
          <div class="content">Don’t worry! Just fill in your email and we’ll send you a link to reset your password.
          </div>
        </div>
        <div class="alert alert-info alert-dismissable fade show" v-if="flag">User does not exist.</div>
        <div class="form-group">
          <label for="exampleInputEmail1">EMAIL</label>
          <input type="email" class="form-control" v-model="email" placeholder="Email address" />
        </div>
        <div style="text-align: center;">
          <button type="submit" class="btn btn-primary button">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  sendPasswordResetEmail
} from "firebase/auth";
export default {
  name: "ResetPassword",
  components: {},
  data() {
    return {
      email: '',
      flag: false,
    };
  },
  methods: {
    //send reset password email
    reset() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.$router.push({ path: '/resetemail' });
        })
        .catch((error) => {
          this.flag = true;
          const errorCode = error.code;
          const errorMessage = error.message;
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
  min-height: 100%;
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
  padding: 40px 40px 80px 40px;
  border-radius: 10px;
  width: 35%;
  min-width: 350px;
}

.header {
  font-weight: bold;
  font-size: 19px;
  color: #a4a6b3;
  padding: 0px 0px 20px 0px;
}

.title {
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
</style>