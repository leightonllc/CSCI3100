<template>
    <div class="sidebar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <ul class="fa-ul">
            <li onclick="location.href='./'"><i class="fa fa-house"></i>Home</li>
            <li onclick="location.href='./coursereview'"><i class="fa fa-book"></i>Course Review</li>
            <li onclick="location.href='./courselist'"><i class="fa fa-book"></i>Course List</li>
            <li onclick="location.href='./showallusers'"><i class="fa fa-book"></i>All Users</li>
            
        </ul>
        <hr class="solid" />
        <ul class="fa-ul">
            <li onclick="location.href='./chat'"><i class="fa-solid fa-message"></i>Chat</li>
            <li><i class="fa fa-user-gear"></i>Setting</li>
            <li @click="LogOut()"><i class="fa fa-right-from-bracket"></i>Logout</li>
        </ul>
    </div>
</template>

<script>
    import db from "../chatroom/firebase";
    import {
        getAuth,
        signOut
    } from "firebase/auth";
    const auth = getAuth();
    export default {
        name: 'CourseSideBar',
        methods: {
            LogOut() {
                signOut(auth).then(() => {
                    this.$router.push({
                        path: '/'
                    });
                }).catch((error) => {
                    const errorCode = error2.code;
                    const errorMessage = error2.message;
                    console.log(errorCode, errorMessage);
                });
            }
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
</style>