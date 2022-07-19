/*
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-20 09:45:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-24 13:37:28
 */
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
export const staticRoutes = [{
        path: '/',
        redirect: '/index',
    }, {
        path: '/index',
        name: 'Index',
        component: () => import('../components/HelloWorld.vue'),
        meta: {
            title: '所爱隔山海'
        }
    }, {
        path: '/normal',
        name: 'Normal',
        component: Normal,
        meta: {
            title: '山海亦可平'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test/index.vue'),
        meta: {
            title: '海有舟可渡'
        }
    }, {
        path: '/layout',
        name: 'Layout',
        component: () => import('../components/layout/index.vue')
    }
]