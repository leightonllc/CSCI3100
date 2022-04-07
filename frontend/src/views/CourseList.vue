<template>
    <div>
        <Toast />
        <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
        <UpperBar/>
        <div class="container">
            <div class="left">
                <CourseSideBar />
            </div>
            <div class="right">
                <div>
                    <span class="h2">Course List</span>
                    <div class="my-2 overflow-auto">
                    <p style="font-family:Segoe UI">
                        <DataTable :paginator="true" data-key="id" class="table align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col" style="width: 10%">Course Code</th>
                                    <th scope="col">Course Name</th>
                                    <th class="d-none d-md-block" v-if="!isOnMobile" scope="col">Description</th>
                                    <th v-if="!isOnMobile" scope="col">Professors</th>
                                    <th v-if="!isOnMobile" scope="col">Assessment</th>
                                    <th v-if="!isOnMobile" scope="col">Rating</th>
                                    <!-- <th scope="col">Comments</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="courseEntry" v-for="course of courses" :key="course.code" @click="handleClick(course.code)">
                                    <th scope="row"> {{course.code}}</th>
                                    <td> {{ course.name }} </td>
                                    <td class="d-none d-md-block"> {{ course.courseDescription }} </td>
                                    <td> {{ course.professor }} </td>
                                    <td> {{ course.assessment }} </td>
                                    <td> {{course.rating }}/5</td>
                                    <!-- <td>Interesting jokes</td> -->
                                </tr>
                            </tbody>
                        </Datatable>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CourseSideBar from '../components/sidebar/CourseSideBar';
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
            CourseSideBar,

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
                    localStorage.setItem('code', code);
                    localStorage.setItem('title', courseRow.name);
                    this.$router.push({ name: 'CourseReview', params: {code: code}} );
                }
            },
            onResize () {
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
            // const userListRef = ref(db, "users");
            // console.log(userListRef);

            onValue(ref(db, "courses"), (snapshot) => {
                this.courses = [];
                snapshot.forEach((childSnapshot) => {
                    this.courses.push(childSnapshot.val());
                })
            });

            this.onResize();
            window.addEventListener('resize', this.onResize);
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
        padding: 30px 20px 30px 70px;
    }

    @media (max-width:768px){
    .table_class_name tr td:nth-child(4),.table_class_name tr td:nth-child(5),
    .table_class_name tr td:nth-child(6),.table_class_name tr td:nth-child(7){
        display: none;
        }
    }
</style>
