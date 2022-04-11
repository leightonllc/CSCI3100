<template>
    <sidebar-menu
        :collapsed="collapsed"
        :menu="menu"
        :relative="!isOnMobile"
        @update:collapsed="onToggleCollapse"
        @item-click="onItemClick"
        :theme="selectedTheme"
    ></sidebar-menu>
</template>

<script>
import db from "../chatroom/firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import {
    getStorage,
    ref,
    getDownloadURL
} from "firebase/storage";
import {
    ref as rtdbref,
    onValue,
} from "firebase/database";
const auth = getAuth();
const storage = getStorage();
export default {
    name: 'CourseSideBar',
    data() {
        return {
            role: 'user',
            collapsed: false,
            isOnMobile: false,
            menu: [
                {
                    header: 'CUTE'

                },
                {
                    href: '/overview',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '/courselist',
                    title: 'Course Review',
                    icon: 'fa fa-bars-staggered',
                },
                /*{
                    href: '/forum',
                    title: 'Forum',
                    icon: 'fa fa-chalkboard-user',
                },*/
                {
                    href: '/timetable',
                    title: 'Timetable',
                    icon: 'fa fa-calendar-days',
                },
                {
                    header: 'Settings',
                    hiddenOnCollapse: true

                },
                {
                    href: '/chat',
                    title: 'Group Chat',
                    icon: 'fa fa-comments',
                },
                {
                    href: '/chatui',
                    title: 'Private Chat',
                    icon: 'fa fa-comment',
                },
                {
                    href: '/settings',
                    title: 'Settings',
                    icon: 'fa fa-gears',
                },
                {
                    title: 'LogOut',
                    icon: 'fa fa-arrow-right-from-bracket',
                },

            ],
        };
    },
    methods: {
        onItemClick(event, item) {
            if (item.title == 'LogOut') {
                this.$confirm.require({
                    message: 'Are you sure to log out?',
                    header: 'Log Out',
                    icon: 'pi pi-exclamation-triangle',
                    accept: () => {
                        this.$toast.add({ severity: 'info', summary: 'Bye', detail: 'Sign Out', life: 3000 });
                        signOut(auth).then(() => {
                            this.$router.push({
                                path: '/'
                            });
                        }).catch((error2) => {
                            const errorCode = error2.code;
                            const errorMessage = error2.message;
                            console.log(errorCode, errorMessage);
                        });
                    },
                    reject: () => {
                        this.$toast.add({ severity: 'error', summary: 'Stay here', detail: 'request cancelled', life: 3000 });
                    }
                });
            }
        },
        LogOut() {
            signOut(auth).then(() => {
                this.$router.push({
                    path: '/'
                });
            }).catch((error2) => {
                const errorCode = error2.code;
                const errorMessage = error2.message;
                console.log(errorCode, errorMessage);
            });
        },
        onResize() {
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
        this.onResize()
        window.addEventListener('resize', this.onResize);

    },
    watch: {
        role: function (newVal, oldVal){
            if (this.role=='admin'){
            this.menu.push(
                {
                    header: 'Admin',
                    hiddenOnCollapse: true

                },{
                href: '/showallusers',
                title: 'All Users',
                icon: 'fa fa-users',
                }, {
                href: '/showallcourses',
                title: 'All Courses',
                icon: 'fa fa-book',
                
            })
        }
        }
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                getDownloadURL(ref(storage, 'propic/' + user.uid + '.' + user.photoURL))
                    .then((url) => {
                        // `url` is the download URL for 'images/stars.jpg'

                        const img = document.getElementById('mypropic');
                        img.setAttribute('src', url);
                        onValue(rtdbref(db, "users"), (snapshot) => {
                            snapshot.forEach((childSnapshot) => {
                                if (childSnapshot.val().uid == user.uid) {
                                    this.role = childSnapshot.val().role;
                                }
                                
                            })
                        })
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
                // ...
            } else {
                this.$router.push({
                        path: '/login'
                    });
            }
        });
    }
}
</script>

<style>
.sidebar {
    background-color: #f0f0f0;
    padding-top: 5vh;
    height: 100vh;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
    text-align: center;
    margin-left: 0px;
    margin-right: 0px;
}

.logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

i {
    margin: 0px 0.5vw;
}

.propic {
    height: 200px;
}
</style>