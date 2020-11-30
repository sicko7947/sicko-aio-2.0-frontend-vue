import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'
import Tasks from '../views/Tasks/index.vue'
import Profiles from '../views/Profiles/index.vue'
import ProfilesGroup from '../views/Profiles/profiles.vue'
import Account from '../views/Profiles/Account/index.vue'
import Detail from '../views/Profiles/Account/detail.vue'
import CreateTaskGroup from '../views/Tasks/CreateTaskGroup.vue'
import CreateTask from '../views/Tasks/CreateTask.vue'
import Proxy from '../views/Proxy/index.vue'
import Setting from '../views/Setting/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/tasks',
        name: 'Tasks',
        component: Tasks,
        children: [
            {
                path: '/tasks/createTaskGroup',
                name: 'CreateTaskGroup',
                component: CreateTaskGroup
            },
            {
                path: '/tasks/createTask',
                name: 'CreateTask',
                component: CreateTask
            }
        ]
    },
    {
        path: '/profiles',
        name: 'Profiles',
        component: Profiles,
        children: [
            {
                path: '/profiles/group',
                name: 'ProfilesGroup',
                component: ProfilesGroup
            },
            {
                path: '/profiles/account',
                name: 'Account',
                component: Account
            },
            {
                path: '/profiles/detail',
                name: 'Detail',
                component: Detail
            }
        ]
    },
    {
        path: '/proxy',
        name: 'Proxy',
        component: Proxy
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting
    }
]

const router = new VueRouter({
    mode: 'hash',
    // base: process.env.BASE_URL,
    routes
})

export default router
