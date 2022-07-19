/*
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-12 17:20:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-25 16:49:53
 */
import {
    createRouter,
    createWebHashHistory,
} from "vue-router";
import Normal from '../views/normal/index.vue'
import store from '../store/index.js'
import { toRaw } from '@vue/reactivity'

/**
 * 路由相关属性说明
 *hidden:设置为true，不会显示在侧边栏中（默认为false)
 *meta{
 *  title:xxx,设置sideBars侧边栏名称
 * icon:xxx,设置sideBars侧边栏图标
 * noCache:true,当为true时，不缓存该路由页面(默认为false)
 * roles:[],设置可查看该菜单权限的角色
 * breadList:[],定义路径结构，专用于面包屑导航
 */
export
const routes = [{
        path: '/',
        redirect: '/index',
    }, {
        path: '/index',
        name: 'Index',
        component: () => import('../components/HelloWorld.vue'),
        meta: {
            title: '所爱隔山海',
            roles: ['one'],
            icon:'Cherry'
        }
    }, {
        path: '/normal',
        name: 'Normal',
        component: Normal,
        meta: {
            title: '山海亦可平',
            roles: ['one'],
            icon:'Fries'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test/index.vue'),
        meta: {
            title: '海有舟可渡',
            roles: ['one'],
            icon:'Grape'
        }
    }, {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue'),
        meta: {
            title: '山有路可行',
            roles: ['one'],
            icon:'Pear'
        }
    }, {
        path: '/layout',
        name: 'Layout',
        component: () => import('../components/layout/index.vue')
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach(async (to, from, next) => {
    // console.log(to, from)
    if (to.path == '/layout') {
        var roles = ['one']
        const addRoutes = await store.dispatch('layout/getAsyncRoutes', roles)
        // console.log(addRoutes)
        next()
    } else {
        next()
    }
})

export default router