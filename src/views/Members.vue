/**
 * @Author: meganmhl
 * @Description: /Members.vue is the page showing all users who register a specific course. Contents include a datatable 
 *              on member list. By clicking "chat", it directs to private chat with the selected person.
 * @Date: 2022-04-30 13:06:30
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 19:07:28
 */

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
                <!-- datatable on list of members -->
                <div class="member-table">
                    <DataTable :value="member_details" :paginator="true" :rows="10" data-key="id">
                        <Column field="name" header="Username"></Column>
                        <Column field="description" header="Description" style="overflow: auto;" />
                        <Column header="Action" style="width: 180px;">
                            <template #body="slotProps">
                                <Button label="Chat" icon="pi pi-comments"
                                    class="p-button-rounded p-button-warning p-button-raised"
                                    @click="gotochat(slotProps.data.uid)" />
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
    onValue
} from "firebase/database";

export default {
    name: 'Members',
    components: {
        SideBar,
        Menu
    },
    methods: {
        //go to chatroom/PrivateChat.vue
        gotochat(uid) {
            this.$router.push({ name: 'PrivateChat', params: { receiver: uid } });
        },
    },
    
    mounted() {
        //get uid of members
        onValue(ref(db, "usercourse"), (snapshot) => {
            this.member = [];
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val().code === localStorage.getItem('code')) {
                    this.member.push(childSnapshot.val().uid);
                }
            })
        });
        
        //get user details of members
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
            member_details: [],
            member: [],
            course_code: localStorage.getItem('code'),
            course_name: localStorage.getItem('title'),
        }
    },
};
</script>

<style scoped>
.member-table {
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
</style>