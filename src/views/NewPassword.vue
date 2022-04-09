<template>
  <div class="background">
    <div class="login">
      <form class="form">
        <div class="header">
          <img src="@/assets/logo.png" alt="App Logo"  height="90"/>
        </div>
        <div class="header">
          <div class="loginStr1">Reset password</div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">New Password</label>
          <input
            type="password"
            class="form-control"
            v-model="login"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            v-model="login"
            placeholder="Password"
          />
        </div>
        <div style="text-align: center;">
            <button type="submit" class="btn btn-primary button">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "ResetPassword",
  components: {
  },
};
</script>

<style scoped>
.background {
  background: linear-gradient(
      0deg,
      rgba(21, 101, 216, 0.7),
      rgba(21, 101, 216, 0.7)
    ),
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
  text-align: center;
  padding: 0px 0px 20px 0px;
}
.loginStr1 {
  font-weight: bold;
  font-size: 24px;
  color: #252733;
}
.loginStr2 {
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
