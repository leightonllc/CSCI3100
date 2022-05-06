/**
 * @Author: monkeyjai78
 * @Description: /views/ResetEmail.vue is the page after /resetPassword in ResetPassword.vue. 
 *              User can resend resent email or return to login.
 * @Date: 2022-05-06 19:54:34
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 19:58:37
 */

<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="" />
    </div>
    <div class="right">
      <div class="mx-5">
        <span class="topic">
          Check Your Mailbox!</span> <br />
        <span class="content">
          A password reset email has been sent to your account. Please check your mailbox and click the link to reset
          your password.
        </span>
        <div class="buttondiv my-4">
          <button @click="resend()" class="btn btn-primary sendButton">
            Resend Reset Email
          </button>
          <button @click="login()" class="btn btn-secondary sendButton">
            Return to Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetEmail",
  methods: {
    verify() {
      this.$router.push("/confirmregist");
    },
    resend() {
      console.log("resent");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.background {
  height: 100%;
  display: flex;
}

.btn {
  margin: 10px;
}

.left {
  background: linear-gradient(0deg,
      rgba(21, 101, 216, 0.7),
      rgba(21, 101, 216, 0.7)),
    url(~@/assets/images/cuhkbg.jpg);
  height: 100%;
  flex: 2 2 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  text-align: start;
  padding: 20px;
}

.right {
  flex: 3 3 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.topic {
  font-weight: bold;
  font-size: 30px;
  color: #252733;
}

.content {
  font-weight: normal;
  font-size: 18px;
  color: #9fa2b4;
}


.buttondiv {
  padding-bottom: 30px;
}

.sendButton {
  width: 90%;
  padding: 15px 0px;
  background: #8692a6;
}
</style>