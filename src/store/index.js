/*
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-12 17:20:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-24 14:50:07
 */
import {
    createStore
} from 'vuex'
import layout from './modules/layout'
// const path = require('path')


// const files = require.context('./modules', false, /\.js$/)
// const modules = {}
// files.keys().forEach(key => {
//     const name = path.basename(key, '.js')
//     modules[name] = files(key).default || files(key)
// })

export default createStore({
    modules: {
        layout
    }
})