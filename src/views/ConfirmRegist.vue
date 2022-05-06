/**
 * @Author: monkeyjai78
 * @Description: /views/ConfirmRegist.vue is a page to show the new registered account has been verified.
 *              This page is shown after user verifying an email by clicking the activation link.
 * @Date: 2022-05-06 20:03:41
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:24:20
 */

<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="" />
    </div>
    <div class="right">
      <div class="mx-5">
        <div class="content">
          <div class="contentstr">
            <fa icon="circle-check" class="tick" />Your email has been verified!
          </div>
          <div class="buttondiv my-4">
            <button class="btn btn-primary button" @click="back()">Return to Log in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmRegist",
  methods: {
    //return landing page
    back() {
      this.$router.push("/");
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

.contentstr {
  font-weight: bold;
  font-size: 30px;
  color: #252733;
  padding-bottom: 50px;
}

.tick {
  color: #08ad36;
  padding-right: 10px;
}

.button {
  width: 75%;
  padding: 15px 0px;
}

.buttondiv {
  padding-bottom: 30px;
}
</style>
