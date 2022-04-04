<template>
<div>
    <UpperBar/>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <h1>{{ course.courseCode }} - {{ course.courseName }}</h1>
            <Menu />
            <div class="block1">
                <DataTable :value="user" :paginator="true" :rows="10" data-key="id">
                    <Column field="username" header="Username"></Column>
                    <Column
                        field="description"
                        header="Description"
                        style="max-width: 300px; overflow: auto;"
                    />
                    <Column header="Action" style="width: 180px;">
                        <template #body>
                            <Button
                                label="Chat"
                                icon="pi pi-comments"
                                class="p-button-rounded p-button-warning p-button-raised"
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

export default {
    name: 'Members',
    components: {
        SideBar,
        Menu
    },
    data() {
        return {
            course:
            {
                "courseName": "Introduction to Web Application",
                "courseCode": "CSCI2720",
                "_id": {
                    "$oid": "62473b72bcedb48c1d643cfe"
                }
            },
            user: [
                {
                    "_id": {
                        "$oid": "623328fe269d41f11ff57425"
                    },
                    "username": "johtutdoe",
                    "password": "00011100",
                    "email": "1155123456@link.cuhk.edu.hk",
                    "propic": {
                        "$binary": "W29iamVjdCBPYmplY3Rd",
                        "$type": "0"
                    },
                    "description": "1zwqz3fc hahha",
                    "role": "user"
                },
                {
                    "_id": {
                        "$oid": "623328fe269d41f11ff57425"
                    },
                    "username": "johtutdoe",
                    "password": "00011100",
                    "email": "1155123456@link.cuhk.edu.hk",
                    "propic": {
                        "$binary": "W29iamVjdCBPYmplY3Rd",
                        "$type": "0"
                    },
                    "description": "1zwqz3fc hahha",
                    "role": "user"
                },
                {
                    "_id": {
                        "$oid": "62414db27c7f93ea626fe2be"
                    },
                    "username": "testaaa",
                    "password": "00012300",
                    "email": "huuhhh@ghhbam.com",
                    "propic": {
                        "$binary": "W29iamVjdCBPYmplY3Rd",
                        "$type": "0"
                    },
                    "description": "1zwq000fc hahha",
                    "role": "admin"
                }
            ]
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
}
.right {
    padding: 30px 20px;
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