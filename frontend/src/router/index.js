import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '../views/Registration.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import ConfirmRegist from '../views/ConfirmRegist'
import TimeTable from '../views/TimeTable'
import ChatRoom from '../components/chatroom/Chat.vue'
import CourseReview from '../views/CourseReview.vue'
import Setting from '../views/Setting.vue'
import ShowAllUsers from '../views/ShowAllUsers.vue'
import ResetPassword from '../views/ResetPassword.vue'
import NewPassword from '../views/NewPassword.vue'
import ResetEmail from '../views/ResetEmail.vue'
import CourseList from '../views/CourseList.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration
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
        path: '/coursereview',
        name: 'CourseReview',
        component: CourseReview,
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting,
    },
    {
        path: '/showallusers',
        name: 'ShowAllUsers',
        component: ShowAllUsers,
    },
    {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: ResetPassword,
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router