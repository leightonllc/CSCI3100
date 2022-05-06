<template>
  <div class="background">
    <div class="left">
      <img src="@/assets/logo_white.png" alt="App Logo" />
    </div>
    <div class="right">
      <div class="login">
        <!--account registration form-->
        <form class="form" @submit.stop.prevent="register()">
          <i class="pi pi-angle-left" onclick="history.back()" style="cursor: pointer;">Back</i>
          <div class="header">
            <div class="topic">Register Individual Account!</div>
            <div class="content">
              For the purpose of industry regulation, your details are required.
            </div>
          </div>
          <div class="form-group">
            <label for="InputName">Account Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Enter account name" />
          </div>
          <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input type="email" class="form-control" required="true" v-model="email" placeholder="Email address" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Create password</label>
            <input type="password" class="form-control" required="true" v-model="password"
              placeholder="Enter password" />
          </div>
          <div class="form-check">
            <input type="checkbox" required="true" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">I agree to terms & conditions</label>
          </div>
          <button type="submit" class="btn btn-primary button">
            Register Account
          </button>
          <div class="signup">
            Already have an account? <a class="signuplink" href="/login">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../components/chatroom/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import {
  ref,
  set,
  push,
} from "firebase/database";

export default {
  name: "Registration",
  data() {
    return {
      email: '',
      password: '',
      name: '',
    };
  },
  methods: {
    //create new user with email and password
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: this.name,
          }).then(() => {
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          })
          sendEmailVerification(user)
            .then(() => {
              const newuser = {
                uid: user.uid,
                name: user.displayName,
                email: this.email,
              };
              const userListRef = ref(db, "users");
              const newUserRef = push(userListRef);
              set(newUserRef, newuser);
              console.log("Email Verification Sent");
              this.$router.push({
                path: '/verifyEmail'
              });
            })
        })
        .catch((error2) => {
          const errorCode = error2.code;
          const errorMessage = error2.message;
          console.log(errorCode, errorMessage);
        })
    },
  },
};
</script>

<style scoped>
.background {
  min-height: 100%;
  display: flex;
}

.left {
  background: linear-gradient(0deg,
      rgba(21, 101, 216, 0.7),
      rgba(21, 101, 216, 0.7)),
    url(~@/assets/images/cuhkbg.jpg);
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