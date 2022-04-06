<template>
<div>
  <Toast />
  <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
  <UpperBar/>
  <div class="container">
    <div style="width:100%" class="left">
      <SideBar />
    </div>
    <div class="content">
      <div class="box">
        <div class="heading">My Profile</div>
        <hr />
        <div class="formcontent">
          <div class="propic">
            <img src="" id="mypropic2" alt="propic"  />
          </div>
          <br />
          <div class="button">
            <FileUpload mode="basic" name="propic[]" :customUpload="true" @uploader="propicUploader" accept="image/*"
              chooseLabel="Change Photo" />
          </div>

          <form  @submit.stop.prevent="changeInfo()">
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
              <Button  label="Save Changes" type="submit" class="p-button-success" />
            </div>
          </form>
          <br />
          <hr />
          <div class="heading">Change Password</div>
          <form @submit.stop.prevent="changepassword()">
            <div class="form-group">
              <label for="newpassword">New Password</label>
              <input
                type="password"
                class="form-control"
                v-model="newPassword"
                placeholder="Type password here"
              />
            </div>
            <div class="form-group">
              <label for="confirmpassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                v-model="comfirmPassword"
                placeholder="Type password here again"
              />
            </div>
            <div class="button">
              <Button  label="Change Password" type="submit" class="p-button-success" />
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
    set,
    push,
    onValue,
    update,
  } from "firebase/database";
const auth = getAuth();
const storage = getStorage();
export default {
  name: "Setting",
  components: {
    SideBar,
  },
  data() {
    return {
      
      name: '',
      email: '',
      description: '',
      newPassword: '',
      role: '',
      key: 'test',

    }
  },
  methods: {
    changepassword() {
      updatePassword(auth.currentUser, this.newPassword).catch((error3) => {
        const errorCode = error3.code;
        const errorMessage = error3.message;
        console.log(errorCode, errorMessage);
      })
    },
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

    })
    },
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
                            // `url` is the download URL for 'images/stars.jpg'

                            const img = document.getElementById('mypropic2');
                            img.setAttribute('src', url);
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode, errorMessage);
                        });
                        
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
                    // ...
                } else {
                    // User is signed out
                    // ...
                }
            });
        }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-size: 14px;
  font-family: "Poppins";
}
.box {
  background: rgba(255, 255, 255, 1);
  padding: 30px;
  margin: 30px;
  border-radius: 30px;
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

.propic, img {
    max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  color: #868686;
  font-family: Poppins;
  font-weight: Bold;
  font-size: 16px;
  opacity: 1;
  padding: 30px 0px;
}
.container {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  max-width: unset;
}
.left{
  flex:2;
}
.right {
  flex:10;
  padding: 30px 20px;
}
.cater {
  padding-bottom: 50px;
}
.header {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}
.content {
  background: #f6f6f6;
  padding: 10px 20px 10px 60px;
  font-family: "Poppins";
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