/**
 * @Author: meganmhl
 * @Description: /views/Setting.vue is the "My Profile" from the application. Content includes "change propic", "change info" 
 *              and "change password". "change propic" can change the profile picture.
 *              "change info" can change username, email, and description. "change password" can change the password.
 * @Date: 2022-04-30 14:05:38
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:27:32
 */

<template>
  <div>
    <Toast />
    <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
    <UpperBar />
    <div class="container">
      <div class="left">
        <SideBar />
      </div>
      <div class="right">
        <div>
          <div class="heading mt-3">My Profile</div>
          <hr />
          <div class="formcontent">
            <!-- show and change propic -->
            <div class="propic">
              <img src="" id="mypropic2" alt="propic" />
            </div>
            <br />
            <div class="button">
              <FileUpload mode="basic" name="propic[]" :customUpload="true" @uploader="propicUploader" accept="image/*"
                chooseLabel="Change Photo" />
            </div>

            <!-- show and change info -->
            <form @submit.stop.prevent="changeInfo()">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" v-model="name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" v-model="description" />
              </div>
              <div class="button">
                <Button label="Save Changes" type="submit" class="p-button-success" />
              </div>
            </form>
            <br />
            <hr />
            <!-- change password -->
            <div class="heading mb-3">Change Password</div>
            <form @submit.stop.prevent="changepassword()">
              <div class="form-group">
                <label for="newpassword">New Password</label>
                <input type="password" class="form-control" v-model="newPassword" placeholder="Type password here" />
              </div>
              <div class="form-group">
                <label for="confirmpassword">Confirm Password</label>
                <input type="password" class="form-control" v-model="comfirmPassword"
                  placeholder="Type password here again" />
              </div>
              <div class="button">
                <Button label="Change Password" type="submit" class="p-button-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/sidebar/CourseSideBar";
import db from "../components/chatroom/firebase";

    import {
        getAuth,
        updateProfile,
        onAuthStateChanged,
        updateEmail,
        updatePassword,
    } from "firebase/auth";

    import {
        getStorage,
        ref,
        uploadBytes,
        getDownloadURL
    } from "firebase/storage";

    import {
    ref as rtdbref,
    onValue,
    update,
  } from "firebase/database";

const auth = getAuth();
const storage = getStorage();
export default {
  name: "Settings",
  components: {
    SideBar,
  },

  data() {
    return {
      
      name: '',
      email: '',
      description: '',
      newPassword: '',
      comfirmPassword: '',
      role: '',
      key: 'test',

    }
  },
  methods: {
    //verify password correctness and update password
    changepassword() {
      if ((this.newPassword == this.comfirmPassword) && this.newPassword != '' && this.comfirmPassword != '') {
        updatePassword(auth.currentUser, this.newPassword)
        .then((n) => {
          this.$toast.add({ severity: 'info', summary: 'Success', detail: 'Password Changed', life: 3000 });
        })
        .catch((error3) => {
        const errorCode = error3.code;
        const errorMessage = error3.message;
        console.log(errorCode, errorMessage);
      })
      } else {
        this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'New password is not align with confirm password', life: 3000 });
      }
    },

    //upload a new propic to the database
    propicUploader(event) {
    console.log(event.files[0].type.replace("image/", ''));
    updateProfile(auth.currentUser, {
      photoURL: event.files[0].type.replace("image/", '')
    }).then(() => {
      const propicRef = ref(storage, 'propic/' + auth.currentUser.uid + '.' + auth.currentUser.photoURL); //filetype is stored in user.photoURL
      uploadBytes(propicRef, event.files[0]).then((snapshot) => {
       this.$router.push({
                        path: '/done'
                    });
      });
    }).catch((error1) => {
      console.log(error1);
    })
    },

    //update user info
    changeInfo() {
      console.log(this.description);
      const updates = {};
      updates['users/' + this.key + '/name'] = this.name;
      updates['users/' + this.key + '/description'] = this.description;
      updates['users/' + this.key + '/email'] = this.email;
      update(rtdbref(db), updates);
      updateProfile(auth.currentUser, {
        displayName: this.name
      }).catch((error1) => {
        const errorCode = error1.code;
        const errorMessage = error1.message;
        console.log(errorCode, errorMessage);
      });
      updateEmail(auth.currentUser, this.email).catch((error2) => {
        const errorCode = error2.code;
        const errorMessage = error2.message;
        console.log(errorCode, errorMessage);
      }).then(() => {
         this.$router.push({
                        path: '/done'
                    });
      });
    }
  },
   mounted() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    getDownloadURL(ref(storage, 'propic/' + user.uid + '.' + user.photoURL))
                        .then((url) => {
                            const img = document.getElementById('mypropic2');
                            img.setAttribute('src', url);
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode, errorMessage);
                        });
                    
                    //get user info
                    onValue(rtdbref(db, "users"), (snapshot) => {
                      snapshot.forEach((childSnapshot) => {
                      if(childSnapshot.val().uid == user.uid) {
                        this.key = childSnapshot.key;
                        this.name = childSnapshot.val().name;
                        this.email = childSnapshot.val().email;
                        this.description = childSnapshot.val().description;
                        this.role = childSnapshot.val().role;
                        
                      }
                      })
                    })
                } else {
                    // User is signed out
                }
            });
        }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-size: 14px;
}

.formcontent {
  padding: 30px;
}

.propic {
  width: 114px;
  height: 114px;
  background: rgba(196, 196, 196, 1);
  opacity: 1;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
}

.propic,
img {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  color: #868686;
  font-weight: Bold;
  font-size: 22px;
  opacity: 1;
}

.container {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  max-width: unset;
}

.left {
  flex: 2;
  min-height: 100%;
}

.right {
  flex: 10;
  padding: 0px 30px;
}

@media screen and (max-width: 960px) {
  ::v-deep(.fc-header-toolbar) {
    display: flex;
    flex-wrap: wrap;
  }
}

.cater {
  padding-bottom: 50px;
}

.header {

  font-weight: 600;
  font-size: 16px;
  color: #000000;
}

.content {
  background: #f6f6f6;
  padding: 10px 20px 10px 60px;
  ;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  width: 100%;
  height: 100%;
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

.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>