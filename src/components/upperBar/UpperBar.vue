/**
 * @Author: meganmhl
 * @Description: /component/upperBar/UpperBar.vue is the upper navigation bar after user enter into the application.
 *                 It shows the application icon, username and profile pic.
 * @Date: 2022-05-06 20:27:12
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:37:30
 */

<template>
    <div class="mainBar" style="background: #1e1e21; height:80px; overflow:hidden;">
        <div style="display: flex; justify-content: space-between;">
            <div>
                <img src="@/assets/logo_white.png" alt="logo" style="height:60px; margin:10px 20px;" />
            </div>
            <div>
                <span style="color:aliceblue">Hi, {{ name }}</span>
                <img class="propic" id="mypropic" alt="propic"
                    style="height:75px; width:75px; padding:5px; margin: 2px 30px; border-radius: 50%;"
                    @click="gotosetting()" />
            </div>
        </div>
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
var key = '';
export default {
    name: 'UpperBar',
    methods: {
        //go to /setting to view user profile
        gotosetting() {
            this.$router.push("/settings");
        },
        onItemClick(event, item) {
            if (item.title == 'LogOut') {
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
        //logout and go to landing page
        LogOut() {
            console.log("asd")
            signOut(auth).then(() => {
                this.$router.push({
                    path: '/'
                });
            }).catch((error2) => {
                const errorCode = error2.code;
                const errorMessage = error2.message;
                console.log(errorCode, errorMessage);
            });
        },
        onResize() {
            if (window.innerWidth <= 767) {
                this.isOnMobile = true
                this.collapsed = true
            } else {
                this.isOnMobile = false
                this.collapsed = false
            }
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    created() {
        //user authentication
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                getDownloadURL(ref(storage, 'propic/' + user.uid + '.' + user.photoURL))
                    .then((url) => {
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
                onValue(rtdbref(db, "users"), (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().uid == user.uid) {
                            key = childSnapshot.key;
                            this.name = childSnapshot.val().name;
                        }
                    })
                })
            } else {
                // User is signed out
            }
        });
    },
    data() {
        return {
            name: '',
        }
    }
}
</script>

<style>
@media screen and (max-width: 767px) {
    .mainBar {
        display: none;
    }
}

.mainBar {
    height: 70px;
}

.logo {
    height: 70px !important;
}

.propic-wrapper {
    width: 70px;
    height: 70px;
    overflow: hidden;
}

.propic1 {
    min-height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    position: relative;
    transform: translateX(-50%) translateY(-50%);
}
</style>
