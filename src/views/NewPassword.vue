/**
 * @Author: leightonllc
 * @Description: /views/NewPassword.vue is the reset password page. It is accessed when the user clicks the email line to reset password.
 * @Date: 2022-05-06 20:03:41
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:07:02
 */
 
 <template>
  <div class="background">
    <div class="login">
      <form class="form">
        <div class="header">
          <img src="@/assets/logo.png" alt="App Logo" height="90" />
        </div>
        <div class="header">
          <div class="topic">Reset password</div>
        </div>
        <div class="form-group">
          <label for="InputPassword">New Password</label>
          <input type="password" class="form-control" v-model="login" placeholder="Password" />
        </div>
        <div class="form-group">
          <label for="InputPassword">Confirm Password</label>
          <input type="password" class="form-control" v-model="login" placeholder="Password" />
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
  text-align: center;
  padding: 0px 0px 20px 0px;
}

.topic {
  font-weight: bold;
  font-size: 24px;
  color: #252733;
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
