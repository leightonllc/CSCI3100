<template>
  <div class="container">
    <div class="left">
      <SideBar />
    </div>
    <div class="content">
      <div class="box">
        <div class="heading">My Profile</div>
        <hr />
        <div class="formcontent">
          <div class="propic">
            <img src="" id="mypropic2" alt="propic" />
          </div>
          <br />
          <div class="button">
            <FileUpload mode="basic" name="propic[]" :customUpload="true" @uploader="propicUploader" accept="image/*"
              chooseLabel="Change Photo" />
          </div>

          <form action="/dataCollectionLocation" method="post" autocomplete="on">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" v-model="profileName" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="profileEmail"
                placeholder="ramonridwan@gogeafrica.com" />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" v-model="profileDescription" placeholder="I am a student" />
              </div>
            <div class="button">
              <Button  label="Save Changes" @click="savechanges()" class="p-button-success" />
            </div>
          </form>
          <br />
          <hr />
          <div class="heading">Change Password</div>
          <hr />
          <form action>
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
              <Button  label="Change Password" @click="changepassword()" class="p-button-success" />
            </div>
          </form>
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
        onAuthStateChanged
    } from "firebase/auth";
    import {
        getStorage,
        ref,
        uploadBytes,
        getDownloadURL
    } from "firebase/storage";
const auth = getAuth();
const storage = getStorage();
export default {
  name: "Setting",
  components: {
    SideBar,
  },
  data() {
    return {
      
      user: {

        "_id": {
          "$oid": "62332a10269d41f11ff57426"
        },
        "username": "janedoe",
        "password": "87654321",
        "email": "@gmail.com",
        "propic": {
          "$binary": "",
          "$type": "0"
        },
        "description": "Hey guys! I am a student currently studying Computer Science in CUHK. I’m year 4 now. I like programming. Have a nice day!",
        "role": "user"

      },
      profileName: "janedoe",
      profileEmail: "@gmail.com",
      profileDescription: "description",
    }
  },
  methods: {
    savechanges() {
      return 1;
    },
    changepassword() {
      return 1;
    },
    propicUploader(event) {
    console.log(event.files[0].type.replace("image/", ''));
    updateProfile(auth.currentUser, {
      photoURL: event.files[0].type.replace("image/", '')
    }).then(() => {
      const propicRef = ref(storage, 'propic/' + auth.currentUser.uid + '.' + auth.currentUser.photoURL); //filetype is stored in user.photoURL
      uploadBytes(propicRef, event.files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      });

    }).catch((error1) => {

    })
    }
  },
   created() {
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
.right {
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
  padding: 10px;
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