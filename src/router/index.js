import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import ConfirmRegist from '../views/ConfirmRegist'
import TimeTable from '../views/TimeTable'
import ChatRoom from '../components/chatroom/Chat.vue'
import PrivateChat from '../components/chatroom/PrivateChat.vue'
import CourseReview from '../views/CourseReview.vue'
import Settings from '../views/Setting.vue'
import ShowAllUsers from '../views/ShowAllUsers.vue'
import ResetPassword from '../views/ResetPassword.vue'
import NewPassword from '../views/NewPassword.vue'
import ResetEmail from '../views/ResetEmail.vue'
import CourseList from '../views/CourseList.vue'
import Overview from '../views/Overview.vue'
import Forum from '../views/Forum.vue'
import Members from '../views/Members.vue'
import Done from '../views/Done.vue'
import Landing from '../views/Landing.vue'
import ShowAllCourses from '../views/ShowAllCourses.vue'

const routes = [{
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration
    },
    {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: ResetPassword,
    },
    {
        path: '/verifyEmail',
        name: 'verifyEmail',
        component: VerifyEmail
    },
    {
        path: '/confirmRegist',
        name: 'confirmRegist',
        component: ConfirmRegist
    },
    {
        path: '/overview',
        name: 'overview',
        component: Overview
    },
    {
        path: '/timetable',
        name: 'timeTable',
        component: TimeTable
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatRoom,
    },
    {
        path: '/privatechat',
        name: 'PrivateChat',
        component: PrivateChat,
    },
    {
        path: '/coursereview',
        name: 'CourseReview',
        component: CourseReview,
    },
    {
        path: '/forum',
        name: 'Forum',
        component: Forum,
    },
    {
        path: '/members',
        name: 'Members',
        component: Members,
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/showallusers',
        name: 'ShowAllUsers',
        component: ShowAllUsers,
    },
    {
        path: '/newpassword',
        name: 'NewPassword',
        component: NewPassword,
    },
    {
        path: '/resetemail',
        name: 'ResetEmail',
        component: ResetEmail,
    },
    {
        path: '/courselist',
        name: 'CourseList',
        component: CourseList,
    },
    {
        path: '/done',
        name: 'Done',
        component: Done,
    },
    {
        path: '/showallcourses',
        name: 'ShowAllCourses',
        component: ShowAllCourses,
    },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router