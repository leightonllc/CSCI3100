<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right m-2">
            <div>
                <strong>User</strong>
                <div class="my-2">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">UID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody v-for="user in users" :key="user">
                            <tr>
                                <th scope="row">{{ user.uid }}</th>
                                <td> {{ user.name }} </td>
                                <td> {{ user.email }} </td>
                            </tr>
                        </tbody>
                    </table>
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
        set,
        push,
        onValue
    } from "firebase/database";
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
        methods: {},

        mounted() {
            const userListRef = ref(db, "users");
            console.log(userListRef);

            onValue(ref(db, "users"), (snapshot) => {
                this.users = [];
                snapshot.forEach((childSnapshot) => {
                    this.users.push(childSnapshot.val());
                })
            })
            console.log(this.users);
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

    .left {}

    .right {
        padding: 30px 20px
    }
</style>