<!--
/**
 * @Author: meganmhl
 * @Description: Forum.vue is the page showing forum related component. 
 *              There are 3 UI: Forum Home View, Create Forum Post, and Post Reply.
 *              This file manages which UI to be shown according to user action.
 *              It uses component from components/forum (i.e. CreateForumPost.vue, ForumHomeView.vue, and ReplyForumPost.vue).
 * @Date: 2022-05-01 00:56:37
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-01 01:34:54
 */
-->

<template>
    <div>
        <Toast />
        <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
        <UpperBar />
        <div class="container">
            <div class="left">
                <SideBar />
            </div>
            <div class="right">
                <!-- course name and tab menu -->
                <h1>{{ course_code }} - {{ course_name }}</h1>
                <Menu />
                <div class="content">
                    <!-- Forum Home View -->
                    <div v-if="showForumHomeView">
                        <button id="createPostButton" @click="createForumPost()">
                            <i class="fa fa-plus-circle"></i> Create a post
                        </button>
                        <ForumHomeView v-for="post of posts.slice().reverse()" :key="post.id" :post="post"
                            @clicked-post="clickedPost" />
                    </div>
                    <!-- Create Forum Post -->
                    <div v-if="showCreateForumPost">
                        <button class="back-button" @click="exitCreateForumPost()">
                            <i class="fa fa-arrow-left"></i>Back
                        </button>
                        <CreateForumPost @create-new-post="updateForumView" />
                    </div>
                    <!-- Post Replies -->
                    <div v-if="showReplyPost">
                        <button class="back-button" @click="exitPost()">
                            <i class="fa fa-arrow-left"></i>Back
                        </button>
                        <ReplyForumPost :id="clickedForumPostId" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar'
import Menu from '../components/tabmenu/Menu'
import ForumHomeView from '../components/forum/ForumHomeView'
import CreateForumPost from '../components/forum/CreateForumPost'
import ReplyForumPost from '../components/forum/ReplyForumPost'
import db from "../components/chatroom/firebase";

import {
    ref,
    set,
    push,
    onValue
} from "firebase/database";

export default {
    name: 'Forum',
    props: ['courseCode'],
    components: {
        SideBar,
        Menu,
        ForumHomeView,
        CreateForumPost,
        ReplyForumPost
    },
    mounted() {
        //get all forum post of this course
        onValue(ref(db, "forum"), (snapshot) => {
            this.posts = [];
            snapshot.forEach((childSnapshot) => {
                if (this.course_code === childSnapshot.val().courseCode) {
                    let key = childSnapshot.key;
                    this.posts.push({ id: key, contents: childSnapshot.val() });
                }
            })
        })
    },
    data() {
        return {
            course_code: localStorage.getItem('code'),
            course_name: localStorage.getItem('title'),
            rating: 0,
            showForumHomeView: true,
            showCreateForumPost: false,
            showReplyPost: false,
            clickedForumPostId: null,
            posts: [],
        };
    },
    methods: {
        //show Create Forum Post component
        createForumPost() {
            this.showForumHomeView = false;
            this.showCreateForumPost = true;
            this.showReplyPost = false;
        },
        //hide Create Forum Post component
        exitCreateForumPost() {
            this.showForumHomeView = true;
            this.showCreateForumPost = false;
            this.showReplyPost = false;
        },
        //update Forum post list
        updateForumView({ title, description }) {
            let user;
            onValue(ref(db, "users"), (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().uid === localStorage.getItem('user')) {
                        user = childSnapshot.val().name;
                    }
                })
            });
            let post = { courseCode: this.course_code, description: description, question: title, timestamp: new Date().toISOString(), username: user }
            const forumRef = ref(db, "forum");
            const newPostRef = push(forumRef);
            set(newPostRef, post);
            this.showForumHomeView = true;
            this.showCreateForumPost = false;
            this.showReplyPost = false;
        },
        //show Reply Forum Post component
        clickedPost(id) {
            console.log(id);
            this.clickedForumPostId = id;
            this.showReplyPost = true;
            this.showForumHomeView = false;
        },
        //hide Reply Forum Post component
        exitPost() {
            this.showForumHomeView = true;
            this.showCreateForumPost = false;
            this.showReplyPost = false;
        }
    }
}
</script>

<style scoped>
.content {
    padding: 20px 10px;
}

.container {
    display: flex;
    min-height: 100vh;
    width: 100vw;
    padding: 0;
    max-width: unset;
}

.left {
    flex: 2 2 0;
}

.right {
    flex: 10 10 0;
    padding: 30px 20px 30px 70px
}

#createPostButton {
    background: #f48023;
    width: 150px;
    height: 50px;
    left: 10px;
    border-style: solid;
    border-color: white;
    border-radius: 10px;
    border-width: 1px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    align-content: center;
}

#createPostButton:hover {
    opacity: 0.8;
}

.back-button {
    color: gray;
    border: none;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 5vh;
}

.back-button:hover {
    background-color: lightgray;
    color: white;
}
</style>