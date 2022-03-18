<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="" />
    </div>
    <div class="right">
      <div class="login">
        <form class="form">
          <div class="header">
            <div class="loginStr1">Verify Your Email!</div>
            <div class="loginStr2">
              For the purpose of industry regulation, your details are required.
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputName1">Confirmation Code</label>
            <input
              type="text"
              class="form-control"
              v-model="login"
              placeholder="Verification Code"
            />
          </div>
          <div class="buttondiv">
            <button
              type="submit"
              class="btn btn-primary verifyButton"
              @click="verify()"
            >
              Verify
            </button>
          </div>
          <div class="buttondiv">
            <button @click="resend()" class="btn btn-primary sendButton">
              Send Confirmation Email (59)
            </button>
          </div>
        </form>
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
  },
};
</script>

<style scoped>
.background {
  height: 100%;
  display: flex;
}
.left {
  background: linear-gradient(
      0deg,
      rgba(21, 101, 216, 0.7),
      rgba(21, 101, 216, 0.7)
    ),
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
.form {
  background: white;
  padding: 40px 40px;
  border-radius: 10px;
  max-width: 500px;
  text-align: start;
}
.header {
  font-weight: bold;
  font-size: 19px;
  color: #a4a6b3;
  padding: 0px 0px 20px 0px;
}
.loginStr1 {
  font-weight: bold;
  font-size: 30px;
  color: #252733;
}
.loginStr2 {
  font-weight: normal;
  font-size: 18px;
  color: #9fa2b4;
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
.buttondiv {
  padding-bottom: 30px;
}
.verifyButton {
  width: 90%;
  padding: 15px 0px;
}
.sendButton {
  width: 90%;
  padding: 15px 0px;
  background: #8692a6;
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
