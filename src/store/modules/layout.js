/*
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-24 14:05:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-25 14:43:54
 */
import {
    routes
} from '../../router/index.js'

const state = {
    route: []
}

const mutations = {
    SET_ROUTES(state, payload) {
        state.route = payload
    }
}

/**
 * 当前角色是否有该路由权限
 * @param {*} roles 角色
 * @param {*} route 路由
 * @return {*}
 */
function hasPermission(roles, route) {
    // console.log(route.meta)
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return false
    }
}


/**
 * 递归获取路由表信息
 * @param {*} routes 路由
 * @param {*} roles 角色
 * @return {*}
 */
export function filterAsyncRoutes(routes, roles) {
    const res = []
    routes.forEach(route => {
        const tmp = {
            ...route
        }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}


const actions = {
    getAsyncRoutes({
        commit
    }, roles) {
        return new Promise(resolve => {
            let routs
            routs = filterAsyncRoutes(routes, roles)
            commit('SET_ROUTES', routs)
            resolve(routs)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}