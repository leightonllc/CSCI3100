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
                    <span class="h2">All Courses</span>
                    <div class="my-2 overflow-auto">
                    <p style="font-family:Segoe UI">
                        <DataTable
                        :value="courses"
                        :paginator="true"
                        :rows="5"
                        data-key="id"
                        :filters="filters"
                        :selection="selected"
                        selectionMode="single"
                        @rowSelect="handleClick"
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
                        <Column field="courseDescription" header="Description" style="overflow: auto; ">
                        
                            <template #body="slotProps">
                                <div style="padding-left:15px">
                                    {{slotProps.data.courseDescription}}
                                </div>
                            </template>
                        </Column>
                        <Column field="professor" header="Professor" style="overflow: auto;" />
                        <Column field="assessment" header="Assessment" style="overflow: auto;">
                        
                            <template #body="slotProps">
                                <div style="padding-left:15px">
                                    {{slotProps.data.assessment}}
                                </div>
                            </template>
                        </Column>
                        <Column field="rating" header="Rating" style="overflow: auto;" />
                        <Column style="overflow: auto;" header="Add">
                            <template>
                                <Button
                                    icon="pi pi-plus"
                                    class="p-button-rounded p-button-success p-button-raised"
                                    style="margin: 0px 10px 0px 0px;"
                                    @click="handleClick(course.code)"
                                />
                            </template>
                        </Column>

                        <Column style="overflow: auto" header="Delete">
                            <template>
                                <Button
                                    icon="pi pi-minus"
                                    class="p-button-rounded p-button-danger p-button-raised"
                                    style="margin: 0px 10px 0px 0px;"
                                    @click="handleDelete(course.code)"
                                />
                            </template>
                        </Column>

                        <Column style="overflow: auto" header="Edit">
                            <template>
                                <Button
                                    icon="pi pi-sliders-h"
                                    class="p-button-rounded p-button-secondary p-button-raised"
                                    style="margin: 0px 10px 0px 0px;"
                                    @click="editCourse(course.code)"
                                />
                            </template>
                        </Column>

                    </DataTable>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Dialog v-model:visible="courseDialog" :style="{width: '450px'}" header="Course Details" :modal="true" class="p-fluid">
            <div class="field">
                <label for="code">Course Code</label>
                <InputText field="code"/>
                <small class="p-error" v-if="submitted && !code.name">Name is required.</small>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveCourse" />
            </template>
        </Dialog>
    </div>
</template>

<script>
    import { collection, getDocs } from "firebase/firestore";
    import CourseSideBar from '../components/sidebar/CourseSideBar';
    import { FilterMatchMode, FilterOperator } from 'primevue/api';
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
                courses: [],
                filters: {
                    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
                },
                selected:null,
                submitted: false,
                courseDialog: false,
            };
        },
        methods: {
            handleClick(event) {
                console.log(event.data)
                let code = event.data.code
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
            editCourse(code) {
                this.code = {...code};
                this.courseDialog = true;
            },
            
            hideDialog() {
                this.courseDialog = false;
                this.submitted = false;
            },
            saveCourse() {
                this.submitted = true;

                if (this.code.name.trim()) {
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
