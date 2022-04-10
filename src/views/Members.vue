<template>
<div>
    <Toast />
    <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
    <UpperBar/>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <h1>{{ course_code }} - {{ course_name }}</h1>
            <Menu />
            <div class="block1">
                <DataTable :value="member_details" :paginator="true" :rows="10" data-key="id">
                    <Column field="name" header="Username"></Column>
                    <Column
                        field="description"
                        header="Description"
                        style="overflow: auto;"
                    />
                    <Column header="Action" style="width: 180px;">
                        <template #body="slotProps">
                            <Button
                                label="Chat"
                                icon="pi pi-comments"
                                class="p-button-rounded p-button-warning p-button-raised"
                                @click="gotochat(slotProps.data.uid)"
                            />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar'
import Menu from '../components/tabmenu/Menu'
import db from "../components/chatroom/firebase";

import {
    ref,
    set,
    push,
    onValue
} from "firebase/database";

export default {
    name: 'Members',
    components: {
        SideBar,
        Menu
    },
    methods: {
        gotochat(uid) {
            this.$router.push({ name: 'PrivateChat', params: {receiver: uid}} );
        },
    },
    created() {
    },
    mounted() {
        onValue(ref(db, "usercourse"), (snapshot) => {
            this.member = [];
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val().code === localStorage.getItem('code')) {
                    this.member.push(childSnapshot.val().uid);
                }
            })
        });
        onValue(ref(db, "users"), (snapshot) => {
            this.member_details = [];
            snapshot.forEach((childSnapshot) => {
                this.member.forEach((uid) => {
                    if (uid == childSnapshot.val().uid) {
                        this.member_details.push(childSnapshot.val());
                    }
                    
                });
            });
        });
    },
    data() {
        return {
            member_details:[],
            member: [],
            course_code: localStorage.getItem('code'),
            course_name: localStorage.getItem('title'),
        }
    },
};
</script>

<style scoped>
.block1 {
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
    flex:2 2 0;
}

.right {
    flex:10 10 0;
    padding: 30px 20px 30px 70px 
}
.cater {
    padding-bottom: 50px;
}
.header {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 16px;
    color: #000000;
}
.content {
    background: #f6f6f6;
    border-radius: 5px;
    padding: 10px;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    color: #000000;
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