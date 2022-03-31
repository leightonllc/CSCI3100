<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right m-2">
            <div>
                <span class="h2">Courses</span>
                <div class="my-2">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course Code</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Professors</th>
                                <th scope="col">Assessment</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">CSCI3100</th>
                                <td>Software Engineering</td>
                                <td>This course will focus on state-of-the-art techniques in software design, development, measurement and evaluation.</td>
                                <td>Prof. Michael Lyu</td>
                                <td>Homework: 15% Mid-term Exam: 15% Project: 30% Final Exam: 40%</td>
                                <td>4.5/5</td>
                                <td>Interesting jokes</td>
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
        name: 'Admin2',
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