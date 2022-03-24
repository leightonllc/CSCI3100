<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right m-2">
            <div>
                <strong>User</strong>
                <div class="my-2">
                    <DataTable :value="userstable" responsiveLayout="scroll">
                        <Column field="username" header="Username"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column field="password" header="Password"></Column>
                        <Column field="description" header="Description"></Column>
                        <Column field="role" header="Role"></Column>
                        <Column field="pic" header="Profile Pic"></Column>
                        <Column header="">
                            <template>
                                <i class="fa fa-plus-circle"></i>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '../components/sidebar/CourseSideBar';

    export default {
        name: 'Admin1',
        props: {

        },
        components: {
            SideBar,

        },
        data() {
            return {
                userstable: null,
                data: [
                    {
                        username: 'Mary Chan',
                        email: '9394@link.cuhk.edu.hk',
                        password: 'heyheyhihi',
                        description: "She's a little girl.",
                        role: 'Admin',
                        pic: "mary-chan-9394.jpeg",
                        optioins: '',
                    }
                ]
            }
        },
        methods: {
        },

        mounted() {
            this.userstable = this.data;
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