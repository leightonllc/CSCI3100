<template>
    <div class="sidebar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <ul class="fa-ul">
            <li onclick="location.href='./overview'"><i class="fa fa-house"></i>Home</li>
            <li onclick="location.href='./coursereview'"><i class="fa fa-book"></i>Course Review</li>
            <li onclick="location.href='./courselist'"><i class="fa fa-book"></i>Course List</li>
            <li v-if="role=='admin'" onclick="location.href='./showallusers'"><i class="fa fa-book"></i>All Users</li>

        </ul>
        <hr class="solid" />
        <ul class="fa-ul">
            <li onclick="location.href='./chat'"><i class="fa-solid fa-message"></i>Chat</li>
            <li onclick="location.href='./setting'"><i class="fa fa-user-gear"></i>Setting</li>
            <li @click="LogOut()"><i class="fa fa-right-from-bracket"></i>Logout</li>
        </ul>
        My Profile Pic:
        <img class="propic" id="mypropic" />
    </div>

</template>

<script>
    import db from "../chatroom/firebase";
    import {
        getAuth,
        onAuthStateChanged,
        signOut
    } from "firebase/auth";
    import {
        getStorage,
        ref,
        getDownloadURL
    } from "firebase/storage";
    import {
        ref as rtdbref,
        onValue,
    } from "firebase/database";
    const auth = getAuth();
    const storage = getStorage();
    export default {
        name: 'CourseSideBar',
        data() {
            return {
                role: 'user'
            };
        },
        methods: {
            LogOut() {
                signOut(auth).then(() => {
                    this.$router.push({
                        path: '/'
                    });
                }).catch((error2) => {
                    const errorCode = error2.code;
                    const errorMessage = error2.message;
                    console.log(errorCode, errorMessage);
                });
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

                            const img = document.getElementById('mypropic');
                            img.setAttribute('src', url);
                            onValue(rtdbref(db, "users"), (snapshot) => {
                                snapshot.forEach((childSnapshot) => {
                                    if (childSnapshot.val().uid == user.uid) {
                                        this.role = childSnapshot.val().role;
                                    }
                                })
                            })
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
    }
</script>

<style>
    .sidebar {
        background-color: #F0F0F0;
        padding-top: 5vh;
        height: 100vh;

        position: -webkit-sticky;
        position: sticky;
        top: 0;
        text-align: center;
        margin-left: 0px;
        margin-right: 0px;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    i {
        margin: 0px 0.5vw
    }

    .propic {
        height: 200px;
    }
</style>