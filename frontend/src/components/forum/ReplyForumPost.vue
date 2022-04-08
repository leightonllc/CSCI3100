<template>
    <div>
        <Toast />
        <Card>
            <template #header>
                <Tag :value="forumPost.courseCode" rounded style="margin:20px 0px 0px 15px;"></Tag>
            </template>
            <template #title>{{ forumPost.question }}</template>
            <template #subtitle>
                <p>Posted by {{ forumPost.username }} on {{ postDate }}</p>
            </template>
            <template #content>{{ forumPost.description }}</template>
        </Card>
        <div class="reply">
            <p style="text-align: center;">-------- Leave a Reply --------</p>
            <Card style="padding-bottom: 20px;">
                <template #content>
                    <Textarea v-model="newreply" rows="5" style="width:100%" />
                </template>
                <template #footer>
                    <Button
                        label="Reply"
                        icon="pi pi-send"
                        class="p-button-warning"
                        style="float: right; top:-20px;"
                        @click="sendReply()"
                    />
                </template>
            </Card>
            <h4 style="margin-top: 30px">Replies</h4>
            <span v-if="!this.rply">There is no reply yet.</span>
            <span v-if="this.rply">
                <span
                    v-for="reply of forumPost.replies"
                    v-bind:key="reply.username"
                > <!--forumPost.replies.slice().reverse() error-->
                    <Card style="margin: 10px 0px;">
                        <template #header>
                            <div class="color"></div>
                        </template>
                        <template #title>{{ reply.username }}</template>
                        <template #content>{{ reply.content }}</template>
                        <template #footer>Replied on {{ reply.repliedOn }}</template>
                    </Card>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import db from "../chatroom/firebase";

import {
    ref,
    set,
    push,
    onValue
} from "firebase/database";

export default {
    name: 'ReplyForumPost',
    props: ['id'],
    data() {
        return {
            forumPost: null,
            postDate: null,
            rply: false,
            newreply: '',
        }
    },
    created() {
        onValue(ref(db, "forum"), (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (this.id === childSnapshot.key) {
                    this.forumPost = childSnapshot.val();
                    this.genPostDate();
                    if (childSnapshot.val().replies == null) {
                        this.rply = false;
                    } else {
                        this.rply = true;
                    }
                }
            })
        });
        if (this.forumPost.replies != null){
            
        console.log(this.forumPost.replies)
        Object.values(this.forumPost.replies).forEach((reply)=>{
            let pd = new Date(reply.repliedOn);
            let year = pd.getFullYear();
            let month = pd.getMonth() + 1;
            let day = pd.getDate();
            let hour = pd.getHours();
            let minute = pd.getMinutes();
            if (hour<10){
                hour = "0"+String(hour);
            }
            if (minute<10){
                minute = "0"+String(minute);
            }

            let postdate = year + "/" + String(month) + "/" + String(day) + " " + String(hour) + ":" + String(minute);
            reply.repliedOn = postdate;
        })

        }
    },
    methods: {
        
        genPostDatess(dateStr) {
            console.log(dateStr)
            let pd = new Date(dateStr);
            let year = pd.getFullYear();
            let month = pd.getMonth() + 1;
            let day = pd.getDate();
            let hour = pd.getHours();
            let minute = pd.getMinutes();
            this.postdate = year + "/" + String(month) + "/" + String(day) + " " + String(hour) + ":" + String(minute);
            this.reply.repliedOn = dateStr;
        },
        sendReply() {
            if (this.newreply == '') {
                this.$toast.add({ severity: 'warn', summary: 'Action failed', detail: 'Please leave a reply first.', life: 3000 });
            } else {
                let user;
                onValue(ref(db, "users"), (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        if (childSnapshot.val().uid === localStorage.getItem('user')) {
                            user = childSnapshot.val().name;
                        }
                    })
                });
                let path = 'forum/' + this.id + '/replies';
                let add = { username: user, content: this.newreply, repliedOn: new Date().toISOString() };
                let forumListRef = ref(db, path);
                let forumRef = push(forumListRef);
                set(forumRef, add);
                this.$toast.add({ severity: 'info', summary: 'Thank you', detail: 'Your reply has been posted.', life: 3000 });
                this.newreply = '';
            }
        },
        genPostDate() {
            let pd = new Date(this.forumPost.timestamp);
            let year = pd.getFullYear();
            let month = pd.getMonth() + 1;
            let day = pd.getDate();
            let hour = pd.getHours();
            let minute = pd.getMinutes();
            
            if (hour<10){
                hour = "0"+String(hour);
            }
            if (minute<10){
                minute = "0"+String(minute);
            }
            this.postDate = year + "/" + String(month) + "/" + String(day) + " at " + String(hour) + ":" + String(minute);
        }
    }
}
</script>

<style scoped>
.block1 {
    margin: 20px 10px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 1px solid gray;
}
.reply {
    margin: 10px;
    margin-top: 30px;
}
.color {
    border: solid sandybrown 8px;
}
</style>