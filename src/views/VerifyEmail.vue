/**
 * @Author: monkeyjai78
 * @Description: /views/VerifyEmail.vue is a page in registration step. Registration.vue directs path to this page.
 *               This page can resend email and return to login page.
 * @Date: 2022-05-06 19:14:15
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 19:30:12
 */

<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="" />
    </div>
    <div class="right">
      <div class="mx-5">
        <span class="topic">
          Verify Your Email!</span> <br />
        <span class="text">
          A verification email has been sent to your account. Please check your mailbox and click the link to activate
          this account.
        </span>
        <!--Resend button-->
        <div class="buttondiv my-4">
          <button @click="resend()" class="btn btn-primary sendButton">
            Resend Confirmation Email
          </button>
        </div>
        <!--go to login button-->
        <div class="buttondiv my-4">
          <button class="btn btn-primary sendButton" @click="back()">Return to Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyEmail",
  methods: {
    verify() {
      this.$router.push("/confirmregist");
    },
    resend() {
      console.log("resent");
    },
    back() {
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

.text {
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