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
                <div class="content">
                    <h2>Current Courses</h2>
                    <span v-for="course of usercourse_details" v-bind:key="course.code">
                        <Button class="p-button-text p-button-secondary block1">
                            <Card class="block2" @click="handleClick(course.code)">
                                <template #title>
                                    <div class="title">{{ course.code }}</div>
                                </template>
                                <template #subtitle>
                                    <div style="overflow: auto;">{{ course.name }}</div>
                                </template>
                                <template #content>
                                    <div style="overflow: auto;">{{ course.professor }}</div>
                                </template>
                            </Card>
                            <div class="tool">
                                <Button
                                    icon="pi pi-ellipsis-v"
                                    class="p-button-secondary p-button-text p-button-rounded"
                                    @click="handleDelete(course.code)"
                                />
                            </div>
                        </Button>
                    </span>
                    <hr />
                    <h2>Other Courses</h2>
                    <DataTable
                        :value="courses"
                        :paginator="true"
                        :rows="5"
                        data-key="id"
                        :filters="filters"
                        :selection="selected"
                        selectionMode="single"
                        @rowSelect="onRowSelect"
                    >
                        <template #header>
                            <div class="p-input-icon-left" style="margin: 10px 0px;">
                                <i class="pi pi-search" />
                                <InputText
                                    type="text"
                                    v-model="filters['global'].value"
                                    placeholder="Search"
                                />
                            </div>
                        </template>
                        <Column field="code" header="Course Code"></Column>
                        <Column field="name" header="Title" style="overflow: auto;" />
                        <Column
                            field="courseDescription"
                            header="Description"
                            style="overflow: auto; "
                        />
                        <Column style="width: 340px;">
                            <template #body="btn">
                                <Button
                                    label="More Details"
                                    icon="pi pi-info"
                                    class="p-button-rounded p-button-secondary p-button-raised"
                                    style="margin: 0px 10px 0px 0px;"
                                    @click="handleClick(btn.data.code)"
                                />
                                <Button
                                    label="Add Course"
                                    icon="pi pi-plus"
                                    class="p-button-rounded p-button-warning p-button-raised"
                                    @click="addUserCourse(btn.data.code)"
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
import SideBar from '../components/sidebar/CourseSideBar.vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import db from "../components/chatroom/firebase";

import {
    ref,
    set,
    push,
    onValue
} from "firebase/database";
export default {
    name: 'Overview',
    components: {
        SideBar
    },
    methods: {
        handleClick(code) {
            let courseRow;
            onValue(ref(db, "courses"), (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().code === code) {
                        courseRow = childSnapshot.val();
                    }
                })
            });
            if (courseRow) {
                localStorage.setItem('code', code);
                localStorage.setItem('title', courseRow.name);
                this.$router.push({ name: 'CourseReview', params: { code: code } });
            }
        },
        onResize() {
            if (window.innerWidth <= 767) {
                this.isOnMobile = true
                this.collapsed = true
            } else {
                this.isOnMobile = false
                this.collapsed = false
            }
        },
        addUserCourse(code) {
            var exist = "no";
            onValue(ref(db, "usercourse"), (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().uid == localStorage.getItem('user')) {
                        if (childSnapshot.val().code === code) {
                            exist = "yes";
                        }
                    }
                })
            });
            if (exist == "no") {
                let varAdd = { uid: localStorage.getItem('user'), code: code };
                let userListRef = ref(db, "usercourse");
                let newUserRef = push(userListRef);
                set(newUserRef, varAdd);
                window.alert(code + " added to your current course list");
                window.location.reload();
            } else {
                window.alert(code + " already in your current course list");
            };
        },
        handleDelete(code) {
            this.$confirm.require({
                message: 'Do you want to delete '+ code+' from your course list?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    let key = "tbc";
                    onValue(ref(db, "usercourse"), (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            if (childSnapshot.val().uid === localStorage.getItem('user')) {
                                if (childSnapshot.val().code === code) {
                                    key = childSnapshot.key;
                                }
                            }
                        })
                    });
                    let refe = 'usercourse/' + key + '/'
                    let userListRef = ref(db, refe);
                    set(userListRef, null);
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Course deleted', life: 3000 });
                    window.location.reload();
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Request cancelled', life: 3000 });
                }
            });
        },
    },
    mounted() {
        onValue(ref(db, "usercourse"), (snapshot) => {
            this.usercourse = [];
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val().uid === localStorage.getItem('user')) {
                    this.usercourse.push(childSnapshot.val().code);
                }
            })
        });
        onValue(ref(db, "courses"), (snapshot) => {
            this.usercourse_details = [];
            snapshot.forEach((childSnapshot) => {
                this.usercourse.forEach((code) => {
                    if (code == childSnapshot.val().code) {
                        this.usercourse_details.push(childSnapshot.val());
                    }
                });
            });
        });
        onValue(ref(db, "courses"), (snapshot) => {
            this.courses = [];
            snapshot.forEach((childSnapshot) => {
                this.courses.push(childSnapshot.val());
            })
        });
        this.onResize();
        window.addEventListener('resize', this.onResize);

    },
    data() {
        return {
            filters: {
                'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            selected: null,
            usercourse_details: [],
            courses: [],
        }
    },
};
</script>

<style scoped>
.block1 {
    width: 50%;
}
.block2 {
    width: 100%;
    height: 160px;
    text-align: left;
}
.title {
    position: relative;
}
.tool {
    position: absolute;
    right: 20px;
    top: 20px;
}
.content {
    padding: 50px;
}
.container {
    display: flex;
    min-height: 100%;
    width: 100vw;
    padding: 0;
    max-width: unset;
}
.left {
    flex: 2;
    min-height: 100%;
}
.right {
    flex: 10;
}
</style>
