<template>
    <div>
        <UpperBar/>
        <div class="container">
            <div class="left">
                <SideBar />
            </div>
            <div class="right">
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
                                    <!-- <th scope="col">Comments</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="courseEntry" v-for="course of courses" :key="course.code" @click="handleClick(course.code)">
                                    <th scope="row"> {{course.code}} </th>
                                    <td> {{ course.name }} </td>
                                    <td> {{ course.courseDescription }} </td>
                                    <td> {{ course.professor }} </td>
                                    <td> {{ course.assessment }} </td>
                                    <td> {{course.rating }}/5</td>
                                    <!-- <td>Interesting jokes</td> -->
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
                courses: []
            };
        },
        methods: {
            handleClick(code) {
                let courseRow;
                onValue(ref(db, "courses"), (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().code === code){
                            courseRow = childSnapshot.val();
                        }
                    })
                });
                if (courseRow) {
                    this.$router.push({ name: 'CourseReview', params: {code: code}} );
                }
            }
        },

        mounted() {
            // const userListRef = ref(db, "users");
            // console.log(userListRef);

            onValue(ref(db, "courses"), (snapshot) => {
                this.courses = [];
                snapshot.forEach((childSnapshot) => {
                    this.courses.push(childSnapshot.val());
                })
            })
            // this.courses.forEach((idx, val) => {
            //     console.log(idx);
            //     console.log(val)}
            // );
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

    .courseEntry:hover {
        background-color: lightgray;
    }

    .left {
        flex:2 2 0;
    }

    .right {
        flex:10 10 0;
        padding: 30px 20px 30px 70px 
    }
</style>