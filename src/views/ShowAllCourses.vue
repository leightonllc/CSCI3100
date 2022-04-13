<template>
    <div>
        <Toast />
        <ConfirmDialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"></ConfirmDialog>
        <UpperBar />
        <div class="container">
            <div class="left">
                <CourseSideBar />
            </div>
            <div class="right">
                <div>
                    <span class="h2">All Courses</span>
                    <div class="my-2 overflow-auto">
                        <DataTable :value="courses" :paginator="true" :rows="5" data-key="key" :filters="filters" v-model:selection="this.selected"
                             >
                            <template #header>
                                <div class="p-input-icon-left" style="margin: 10px 0px;">
                                    <i class="pi pi-search" />
                                    <InputText type="text" v-model="filters['global'].value" placeholder="Search" />
                                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelectedCourses" :disabled="!selected || !selected.length" />
                                </div>

                                <Button label="New" icon="pi pi-plus" class="p-button-success mr-2"
                                    style="margin: 10px 0px;" @click="openNew" />
                                <!--- <Button label="Delete" icon="pi pi-trash" class="p-button-danger"
                                    style="margin: 10px 0px;" @click="confirmDeleteSelectedCourses"
                                    :disabled="!selected || !selected.length" /> --->

                            </template>

                            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                            <Column field="code" header="Course Code"></Column>
                            <Column field="name" header="Title" style="overflow: auto;" />
                            <Column field="courseDescription" header="Description" style="overflow: auto; ">

                                <template #body="slotProps">
                                    <div style="padding-left:15px">
                                        {{ slotProps.data.courseDescription }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="professor" header="Professor" style="overflow: auto;" />
                            <Column field="assessment" header="Assessment" style="overflow: auto;">

                                <template #body="slotProps">
                                    <div style="padding-left:15px">
                                        {{ slotProps.data.assessment }}
                                    </div>
                                </template>
                            </Column>
                            <Column field="rating" header="Rating" style="overflow: auto;" />
                            <Column header="Delete" style="overflow: auto;">
                                <template #body="slotProps">
                                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-raised"
                                        style="margin: 0px 10px 0px 0px;"
                                        @click="confirmDeleteCourse(slotProps.data)" />
                                </template>
                            </Column>
                             <Column header="Edit" style="overflow: auto;"> 
                                <template #body="slotProps">
                                    <Button icon="pi pi-sliders-h"
                                        class="p-button-rounded p-button-secondary p-button-raised"
                                        style="margin: 0px 10px 0px 0px;" @click="editCourse(slotProps.data)" />
                                </template>
                            </Column>
                        </DataTable>
                    </div>

                    <Dialog v-model:visible="courseDialog" :style="{ width: '450px' }" header="Course Details"
                        :modal="true" class="p-fluid">
                        <div class="field">
                            <form @submit.stop.prevent="changeCourse()">
                                <div class="form-group">
                                    <label for="code">Course Code</label>
                                    <input type="text" class="form-control" v-model="code" />
                                </div>
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" v-model="title" />
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="form-control" v-model="description" />
                                </div>
                                <div class="form-group">
                                    <label for="professor">Professor</label>
                                    <input type="text" class="form-control" v-model="professor" />
                                </div>
                                <div class="form-group">
                                    <label for="assessment">Assessment</label>
                                    <input type="text" class="form-control" v-model="assessment" />
                                </div>
                            </form>
                        </div>
                        <template #footer>
                            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
                            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveCourse" />
                        </template>
                    </Dialog>

                    <Dialog v-model:visible="courseDialog1" :style="{ width: '450px' }" header="Course Details"
                        :modal="true" class="p-fluid">
                        <div class="field">
                            <form @submit.stop.prevent="changeCourse()">
                                <div class="form-group">
                                    
                                    <label for="code">Course Code</label>
                                    <input type="text" class="form-control" v-model="code" />
                                </div>
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" v-model="title" />
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea class="form-control" v-model="description" />
                                </div>
                                <div class="form-group">
                                    <label for="professor">Professor</label>
                                    <Dropdown v-model="professor" :options="professorList" :editable="true"/>
                                </div>
                                <div class="form-group">
                                    <label for="assessment">Assessment</label>
                                    <input type="text" class="form-control" v-model="assessment" />
                                </div>
                            </form>
                        </div>
                        <template #footer>
                            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog1" />
                            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="changeCourse()" />
                        </template>
                    </Dialog>

                    <Dialog v-model:visible="deleteCourseDialog" :style="{ width: '450px' }" header="Confirm"
                        :modal="true">
                        <div class="confirmation-content">
                            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                            <span v-if="product">Are you sure you want to delete <b>{{ code }}</b>?</span>
                        </div>
                        <template #footer>
                            <Button label="No" icon="pi pi-times" class="p-button-text"
                                @click="deleteCourseDialog = false" />
                            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteCourse" />
                        </template>
                    </Dialog>

                    <Dialog v-model:visible="deleteCoursesDialog" :style="{ width: '450px' }" header="Confirm"
                        :modal="true">
                        <div class="confirmation-content">
                            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                            <span v-if="product">Are you sure you want to delete the selected courses?</span>
                        </div>
                        <template #footer>
                            <Button label="No" icon="pi pi-times" class="p-button-text"
                                @click="deleteCoursesDialog = false" />
                            <Button label="Yes" icon="pi pi-check" class="p-button-text"
                                @click="deleteSelectedCourses" />
                        </template>
                    </Dialog>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
const CourseCodeFormat = /^[A-Z]{4}[0-9]{4}?$/;
import CourseSideBar from '../components/sidebar/CourseSideBar';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import db from "../components/chatroom/firebase";
import {
    ref,
    set,
    push,
    onValue,
    update,
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
            courses: [],
            filters: {
                'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            selected: null,
            deleteCourseDialog: false,
            deleteCoursesDialog: false,
            submitted: false,
            courseDialog: false,
            courseDialog1: false,
            professorList:[],
            assessment: '',
            code: '',
            description: '',
            title: '',
            professor: '',
        };
    },
    methods: {
        handleClick(event) {
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
        openNew(code) {
            this.assessment= '',
            this.code= '',
            this.description= '',
            this.title= '',
            this.professor= '',
            this.submitted = false;
            this.courseDialog = true;
        },
        hideDialog() {
            this.courseDialog = false;
            this.submitted = false;
        },
        saveCourse(code) {
            this.submitted = true;
            let varAdd = { assessment: this.assessment, code: this.code, courseDescription: this.description, name: this.title, professor: this.professor, rating: 0 };
            if(this.description=='' || this.code =='' || this.title =='' || this.assessment==''|| this.professor==''){
                window.alert("Entry cannot be empty!!");
            }else{
                
                let exsits = this.courses.find(o => o.code === this.code);
                if (exsits == null){
                    if (CourseCodeFormat.test(this.code)){
                        let userListRef = ref(db, "courses");
                        let newUserRef = push(userListRef);
                        set(newUserRef, varAdd);
                        window.alert(this.code + " added to the course list");
                        this.courseDialog = false;
                    }else{
                        window.alert("This course code not in correct format");
                    }
                }else {
                    window.alert("This course already existed");
                }
            }
            
        },

        hideDialog1() {
            this.courseDialog1 = false;
            this.submitted = false;
        },
        saveCourse1(code) {
            this.submitted = true;
            let varAdd = { assessment: this.assessment, code: this.code, courseDescription: this.description, name: this.title, professor: this.professor};
            let key = "tbc";
                    onValue(ref(db, "courses"), (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            if (childSnapshot.val().code === code.code) {
                                    key = childSnapshot.key;
                            }
                        })
                    });
            let refe = 'courses/' + key + '/'
            let userListRef = ref(db, refe);
            update(userListRef, varAdd);
            window.alert(this.code + "updated to the course list");
            window.location.reload();
            
            
        },

        editCourse(code) {
            this.code = { ...code };
            this.key= code.key
            this.courseDialog1 = true;
            this.code = code.code
            this.title = code.name
            this.description = code.courseDescription
            this.professor = code.professor
            this.assessment = code.assessment
        },
        confirmDeleteCourse(code) {
            var key = code.key
            this.$confirm.require({
                message: 'Do you want to delete '+ code.code +' from your course list?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    let refe = 'courses/' + key + '/'
                    let userListRef = ref(db, refe);
                    set(userListRef, null);
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Course deleted', life: 3000 });
                    //window.location.reload();
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Request cancelled', life: 3000 });
                }
            });
        },

        confirmDeleteSelectedCourses() {
            this.deleteCoursessDialog = true;
            this.$confirm.require({
                message: 'Do you want to delete all the selected courses from your course list?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.selected.forEach(element => {
                        let key = element.key;
                        let refe = 'courses/' + key + '/'
                        let userListRef = ref(db, refe);
                        set(userListRef, null);
                        this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Course deleted', life: 3000 });
                    });
                    //window.location.reload();
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Request cancelled', life: 3000 });
                }
            });
        },
        deleteSelectedCourses(code) {
            let refe = 'courses/' + code + '/'
            let userListRef = ref(db, refe);
            set(userListRef, null);
            this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Course deleted', life: 3000 });
            this.courseDialog=false;
        },
        changeCourse() {

            if(this.description=='' || this.code =='' || this.title =='' || this.assessment==''|| this.professor==''){
                window.alert("Entry cannot be empty!!");
            }else{
                    
                let exsits = this.courses.find(o => o.code === this.code);
                
                if (exsits == null){
                    if (CourseCodeFormat.test(this.code)){
                        const updates = {};
                        updates['/courses/' + this.key + '/assessment'] = this.assessment;
                        updates['/courses/' + this.key + '/code'] = this.code;
                        updates['/courses/' + this.key + '/courseDescription'] = this.description;
                        updates['/courses/' + this.key + '/name'] = this.title;
                        updates['/courses/' + this.key + '/professor'] = this.professor;
                        update(ref(db), updates);
                        this.courseDialog1=false;
                        window.alert(this.code + " has been modified to the course list");
                    }else{
                            window.alert("This course code not in correct format");
                    }
                }else {
                    if (exsits.key == this.key){
                        console.log('same')
                        const updates = {};
                        updates['/courses/' + this.key + '/assessment'] = this.assessment;
                        updates['/courses/' + this.key + '/code'] = this.code;
                        updates['/courses/' + this.key + '/courseDescription'] = this.description;
                        updates['/courses/' + this.key + '/name'] = this.title;
                        updates['/courses/' + this.key + '/professor'] = this.professor;
                        update(ref(db), updates);
                        this.courseDialog1=false;
                        window.alert(this.code + " added to the course list");
                    }else{
                        window.alert("This course already existed");
                    }
                }
            }
            


        }
        
    },

    mounted() {
        // const userListRef = ref(db, "users");
        // console.log(userListRef);

        onValue(ref(db, "courses"), (snapshot) => {
            this.courses = [];
            var tmp;
            snapshot.forEach((childSnapshot) => {
                tmp=childSnapshot.val();
                tmp.key = childSnapshot.key
                this.courses.push(tmp);
                this.professorList.push(childSnapshot.val().professor)
            })

        });

        this.onResize();
        window.addEventListener('resize', this.onResize);
        // this.courses.forEach((idx, val) => {
        //     console.log(idx);
        //     console.log(val)}
        // );
    },
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
    flex: 2 2 0;
}

.right {
    flex: 10 10 0;
    padding: 30px 20px 30px 70px;
}

@media (max-width:768px) {

    .table_class_name tr td:nth-child(4),
    .table_class_name tr td:nth-child(5),
    .table_class_name tr td:nth-child(6),
    .table_class_name tr td:nth-child(7) {
        display: none;
    }
}
</style>