<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <div class="content">
                <h2>Current Courses</h2>
                <span v-for="course of usercourse" v-bind:key="course.coursecode">
                    <Button class="p-button-text p-button-secondary block1">
                        <Card class="block2">
                            <template #title>
                                <div class="title">
                                    {{ course.courseCode }}
                                    <div class="tool">
                                        <Button
                                            icon="pi pi-ellipsis-v"
                                            class="p-button-secondary p-button-text p-button-rounded"
                                        />
                                    </div>
                                </div>
                            </template>
                            <template #subtitle>
                                <div style="overflow: auto;">{{ course.courseName }}</div>
                            </template>
                            <template #content>
                                <div style="overflow: auto;">{{ course.professor }}</div>
                            </template>
                        </Card>
                    </Button>
                </span>

                <hr />
                <h2>Other Courses</h2>
                <DataTable :value="courses" :paginator="true" :rows="10" data-key="id">
                    <template #header>
                        <div class="p-input-icon-left" style="margin: 10px 0px;">
                            <i class="pi pi-search" />
                            <InputText type="text" v-model="value" placeholder="Search (not work yet)" />
                        </div>
                    </template>
                    <Column field="courseCode" header="Course Code"></Column>
                    <Column
                        field="courseName"
                        header="Title"
                        style="max-width: 200px; overflow: auto;"
                    />
                    <Column
                        field="courseDescription"
                        header="Description"
                        style="max-width: 300px; overflow: auto;"
                    />
                    <Column style="width: 340px;">
                        <template #body>
                            <Button
                                label="More Details"
                                icon="pi pi-info"
                                class="p-button-rounded p-button-secondary p-button-raised"
                                style="margin: 0px 10px 0px 0px;"
                            />
                            <Button
                                label="Add Course"
                                icon="pi pi-plus"
                                class="p-button-rounded p-button-warning p-button-raised"
                            />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar.vue';

export default {
    name: 'Overview',
    components: {
        SideBar
    },
    data() {
        return {
            "usercourse": [
                {
                    "_id": {
                        "$oid": "623361c5ef1acfa872c710e7"
                    },
                    "userid": {
                        "$oid": "623328fe269d41f11ff57425"
                    },
                    "courseid": {
                        "$oid": "623354dcef1acfa872c710cf"
                    },
                    "courseCode": "CSCI2720",
                    "courseName": "Building Web Applications",
                    "courseDescription": "Almost everything in full-stack web development, from raw HTML to the ME*N stack",
                    "professor": "Dr. CHAU Chuck-jee",
                    "assessment": "Homework: 20%; Project: 40%; Final Exam: 40%",
                    "rating": 5,
                    "comments": ["", {
                        "username": "janedoe",
                        "commentedOn": {
                            "$date": "2022-03-28T15:23:54.029Z"
                        },
                        "content": "kkwkwkkwkwk",
                        "rate": 5
                    }]
                },
                {
                    "_id": {
                        "$oid": "6233627aef1acfa872c710fa"
                    },
                    "userid": {
                        "$oid": "623328fe269d41f11ff57425"
                    },
                    "courseid": {
                        "$oid": "6233578eef1acfa872c710d2"
                    },
                    "courseName": "Software Engineering",
                    "courseDescription": "This course introduces software life-cycles: system modelling, requirements analysis and specifications, design techniques, implementation methodology, testings, maintenance and engineering laboratory. Analytical tools: software metrics, system performance measurement and evaluation. Management techniques: estimations, planning, project management, communication skills and documentations. Introductions to CASE tools and security.",
                    "professor": "Professor LYU Rung Tsong Michael",
                    "assessment": "Homework: 20%; Project: 40%; Final Exam: 40%",
                    "rating": 6.5,
                    "comments": [""],
                    "courseCode": "CSCI3100"
                }
            ],
            "courses": [
                {
                    "_id": {
                        "$oid": "623354dcef1acfa872c710cf"
                    },
                    "courseCode": "CSCI2720",
                    "courseName": "Building Web Applications",
                    "courseDescription": "Almost everything in full-stack web development, from raw HTML to the ME*N stack",
                    "professor": "Dr. CHAU Chuck-jee",
                    "assessment": "Homework: 20%; Project: 40%; Final Exam: 40%",
                    "rating": 5,
                    "comments": ["", {
                        "username": "janedoe",
                        "commentedOn": {
                            "$date": "2022-03-28T15:23:54.029Z"
                        },
                        "content": "kkwkwkkwkwk",
                        "rate": 5
                    }]
                },
                {
                    "_id": {
                        "$oid": "623354dcef1acfa872c710cf"
                    },
                    "courseCode": "CSCI2720",
                    "courseName": "Building Web Applications",
                    "courseDescription": "Almost everything in full-stack web development, from raw HTML to the ME*N stack",
                    "professor": "Dr. CHAU Chuck-jee",
                    "assessment": "Homework: 20%; Project: 40%; Final Exam: 40%",
                    "rating": 5,
                    "comments": ["", {
                        "username": "janedoe",
                        "commentedOn": {
                            "$date": "2022-03-28T15:23:54.029Z"
                        },
                        "content": "kkwkwkkwkwk",
                        "rate": 5
                    }]
                },
                {
                    "_id": {
                        "$oid": "62414f4b96f8a0b96a8e4608"
                    },
                    "courseName": "Introduction of Engineering",
                    "courseDescription": "This course introduces software life-cycles: system modelling, requirements analysis and specifications, design techniques, implementation methodology, testings, maintenance and engineering laboratory. Analytical tools: software metrics, system performance measurement and evaluation. Management techniques: estimations, planning, project management, communication skills and documentations. Introductions to CASE tools and security.",
                    "professor": "Professor ABCC",
                    "assessment": "Homework: 20%; Project: 40%; Final Exam: 40%",
                    "rating": 1,
                    "comments": [""],
                    "courseCode": "ENGG9000"
                }
            ]
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
    right: 0px;
    top: 0px;
}
.content {
    padding: 50px;
}
.container {
    display: flex;
    height: 100vh;
    width: 100vw;
    padding: 0;
    max-width: unset;
}
.left {
    flex: 2;
    height: 100%;
}
.right {
    flex: 10;
}
</style>
