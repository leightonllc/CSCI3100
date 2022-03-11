import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '../views/Registration.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import ConfirmRegist from '../views/ConfirmRegist'
import TimeTable from '../views/TimeTable'
import ChatRoom from '../components/chatroom/Chat.vue'

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
        component: ChatRoom
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router