<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="App Logo" />
    </div>
    <div class="right">
      <div class="login">
        <form class="form">
          <div class="header">
            <div class="loginStr1">Register Individual Account!</div>
            <div class="loginStr2">
              For the purpose of industry regulation, your details are required.
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputName1">Account Name</label>
            <input
              type="text"
              class="form-control"
              v-model="login"
              placeholder="Enter account name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              v-model="login"
              placeholder="Email address"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Create password</label>
            <input
              type="password"
              class="form-control"
              v-model="login"
              placeholder="Enter password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >I agree to terms & conditions</label
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary button"
            @click="register()"
          >
            Register Account
          </button>
          <div class="signup">
            Already have an account?<a class="signuplink" href="/">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  methods: {
    register() {
      this.$router.push("/verifyEmail");
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
.form-check {
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  color: #696f79;
  padding-bottom: 30px;
}
.button {
  width: 90%;
  padding: 15px 0px;
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
