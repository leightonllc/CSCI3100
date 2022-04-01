<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <div class="content">
                <h2>Current Courses</h2>
                <span v-for="course of courses" v-bind:key="course.coursecode">
                    <Button class="p-button-text p-button-secondary block1">
                        <Card class="block2">
                            <template #title>
                                <div class="title">
                                    {{ course.coursecode }}
                                    <div class="tool">
                                        <Button
                                            icon="pi pi-ellipsis-v"
                                            class="p-button-secondary p-button-text p-button-rounded"
                                        />
                                    </div>
                                </div>
                            </template>
                            <template #subtitle>
                                <div style="overflow: auto;">{{ course.title }}</div>
                            </template>
                            <template #content>
                                <div style="overflow: auto;">{{ course.description }}</div>
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
                            <InputText type="text" v-model="value" placeholder="Search"/>
                        </div>
                    </template>
                    <Column field="coursecode" header="Course Code"></Column>
                    <Column field="title" header="Title" style="max-width: 200px; overflow: auto;" />
                    <Column
                        field="description"
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
    name: 'Home',
    components: {
        SideBar
    },
    //getCourses() {
    //    return 1;
    //return fetch.get('demo/data/cars-small.json').then(res => res.json()).then(d => d.data);
    //},

    data() {
        return {
            "courses": [
                { "coursecode": "Volkswagen", "title": 201232131234234234232313112, "description": "Odsfdffssdfsffsdfdsfsdfsdsdfdfsdfsfsdsffdsfdsfdsfsdfsdrange", "vin": "dsad231ff" },
                { "coursecode": "Audi", "title": 2011, "description": "Black", "vin": "gwregre345" },
                { "coursecode": "Renault", "title": 2005, "description": "Gray", "vin": "h354htr" }
            ]
        }
    },
    //courseList: null,
    //created() {
    //    this.courseList = new CourseList();
    //},
    //mounted() {
    //    this.courseList.getCourses().then(data => this.cars = data);
    //}
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
