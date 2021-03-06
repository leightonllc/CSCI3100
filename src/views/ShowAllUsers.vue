/**
 * @Author: ethanwongys
 * @Description: /views/ShowAllUsers.vue shows all the user in the system. It is an admin page.
 *              Admin can assign/remove admin, ask user to reset password and disable a user.
 * @Date: 2022-05-06 19:26:28
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:59:34
 */

<template>
    <div>
        <UpperBar />
        <div class="container">
            <div class="left">
                <SideBar />
            </div>
            <div class="right m-2" style="overflow: scroll;padding: 0px 70px;">
                <div>
                    <!--user table-->
                    <span class="h2">Users</span>
                    <div class="my-2">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">UID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody v-for="user in users" :key="user">
                                <tr>
                                    <th scope="row">{{ user.uid }}</th>
                                    <td> {{ user.name }} </td>
                                    <td> {{ user.email }} </td>
                                    <td> {{ user.role }} </td>
                                    <td> {{ user.description }} </td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="dropbtn btn btn-secondary btn-sm">Settings</button>
                                            <div class="dropdown-content" style="left:0;">
                                                <a v-if="user.role == 'user'" @click="makeAdmin(user.key)"
                                                    href="#">Assign
                                                    as Admin</a>
                                                <a v-else href="#" @click="removeAdmin(user.key)"> Remove Admin</a>
                                                <a href="#" @click="resetPassword(user.email)">Reset Password</a>
                                                <a href="#">Disable User</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar';
import db from "../components/chatroom/firebase";
import {
    ref,
    update,
    onValue
} from "firebase/database";
import {
    getAuth,
    sendPasswordResetEmail
} from "firebase/auth";
const auth = getAuth();
export default {
    name: 'Admin1',
    props: {

    },
    components: {
        SideBar,

    },
    data() {
        return {
            users: []
        };
    },
    methods: {
        //change user role to admin
        makeAdmin(key) {
            const updates = {};
            updates['/users/' + key + '/role'] = "admin";
            return update(ref(db), updates);
        },
        //change user role to user
        removeAdmin(key) {
            const updates = {};
            updates['/users/' + key + '/role'] = "user";
            return update(ref(db), updates);
        },
        //send reset password email to user
        resetPassword(email) {
            // Admin SDK API to generate the password reset link.
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log("reset done");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
    },

    mounted() {
        const userListRef = ref(db, "users");

        //get user list
        onValue(ref(db, "users"), (snapshot) => {
            this.users = [];
            snapshot.forEach((childSnapshot) => {
                let temp = childSnapshot.val();
                temp.key = childSnapshot.key;
                this.users.push(temp);
            })
        })
    }
};
</script>

<style scoped>
.container {
    display: flex;
    min-height: 100vh;
    width: 100vw;
    padding: 0;
    max-width: unset;
}

.right {
    padding: 30px 20px
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>