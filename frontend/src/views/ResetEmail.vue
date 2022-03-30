<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="" />
    </div>
    <div class="right">
      <div class="mx-5">
        <span class="str1">
          Check Your Mailbox!</span> <br/>
        <span class="str2">
          A password reset email has been sent to your account. Please check your mailbox and click the link to reset your password.
        </span>
        <div class="buttondiv my-4">
            <button @click="resend()" class="btn btn-primary sendButton">
              Resend Reset Email
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

  .str1 {
    font-weight: bold;
    font-size: 30px;
    color: #252733;
  }

  .str2 {
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