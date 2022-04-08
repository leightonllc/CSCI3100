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
                    <span class="h2">Course List</span>
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
                    </DataTable>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
