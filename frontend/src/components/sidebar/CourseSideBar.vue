<template>
    <sidebar-menu  :collapsed="collapsed"
    :menu="menu"
    :relative="!isOnMobile"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"  
    :theme="selectedTheme"
    
    />
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
                        href: '/coursereview',
                        title: 'Course Review',
                        icon: 'fa fa-chart-area',
                    },
                    {
                        href: '/courselist',
                        title: 'Course List',
                        icon: 'fa fa-chart-area',
                    },
                    {
                        href: '/forum',
                        title: 'Forum',
                        icon: 'fa fa-chart-area',
                    },
                    {   
                        header: 'Setting',
                        hiddenOnCollapse: true
                        
                    },
                    {
                        href: '/chat',
                        title: 'Chat',
                        icon: 'fa fa-chart-area',
                    },
                    {
                        href: '/setting',
                        title: 'Setting',
                        icon: 'fa fa-chart-area',
                    },
                    {
                        title: 'LogOut',
                        icon: 'fa fa-chart-area',
                    },

                ],
            };
        },
        methods: {
            onItemClick(event, item){
                if (item.title=='LogOut'){
                    signOut(auth).then(() => {
                        this.$router.push({
                            path: '/'
                        });
                    }).catch((error2) => {
                        const errorCode = error2.code;
                        const errorMessage = error2.message;
                        console.log(errorCode, errorMessage);
                    });
                }
            },
            LogOut() {
                console.log("asd")
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
        mounted () {
            this.onResize()
            window.addEventListener('resize', this.onResize)
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
                    // User is signed out
                    // ...
                }
            });
        }
    }
</script>

<style>
    .sidebar {
        background-color: #F0F0F0;
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
        margin: 0px 0.5vw
    }

    .propic {
        height: 200px;
    }
</style>