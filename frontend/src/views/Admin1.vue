<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <strong>User</strong>
            <div>
                <DataTable :value="users" responsiveLayout="scroll">
                    <Column field="username" header="Username"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="password" header="Password"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="role" header="Role"></Column>
                    <Column field="pic" header="Profile Pic"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '../components/sidebar/CourseSideBar';
    import {
        ref,
        onMounted
    } from 'vue';

    export default {
        name: 'CourseReview',
        props: {

        },
        components: {
            SideBar,

        },
        data() {
            return {
                users: null
            }
        },
        methods: {
            getUserInfo() {
                return fetch('users.json').then(res => res.json()).then(d => d.data);
            }
        },
        setup() {
            onMounted(() => {
                getUserInfo().then(data => users.value = data);
            })

            const users = ref();

            return {
                users,
            }
        }
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

    .left {}

    .right {
        padding: 30px 20px
    }
</style>