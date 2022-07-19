/*
 * @Author: your name
 * @Date: 2022-01-19 15:28:16
 * @LastEditTime: 2022-01-26 14:01:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-project/src/main.js
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入所有element icon图标
import * as ElIconModules from '@element-plus/icons-vue';
// import animated from 'animate.css'
import 'animate.css/animate.min.css'
// .use(animated)

const app=createApp(App)
// 全局注册element-plus icon图标组件
Object.keys(ElIconModules).forEach((key) => {
    app.component(key, ElIconModules[key]);
});

app.use(store).use(router).mount('#app')