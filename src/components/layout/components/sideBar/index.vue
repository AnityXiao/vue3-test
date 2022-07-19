<!--
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-21 14:55:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-26 14:35:44
-->
<template>
  <div class="sideBar">
    <el-menu default-active="2" class="el-menu-vertical-demo"
      active-text-color="#004194" background-color="#e9dcee" @open="handleOpen"
        @close="handleClose">
      <el-menu-item v-for="(item,ind) in routes" :key="ind" :index="ind+''" @click="pushRouter(item.path)">
          <el-icon>
            <component :is="item.meta.icon"/>
            <!-- <component is="location" /> -->
          </el-icon>
        <span>{{item.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
// 导入获取store中state的方法
import { toRaw } from '@vue/reactivity'
// 导入store
import store from '../../../../store'
//导入图标
// import {
//   Location,
//   Document,
//   Menu as IconMenu,
//   Setting,
// } from "@element-plus/icons-vue";
// 导入路由相关东西
import { useRouter, useRoute } from 'vue-router'
import * as ElIconModules from '@element-plus/icons';
components:{
  ElIconModules
}
// 获取动态路由
const Router=useRouter()
const Route=useRoute()
const routes=toRaw(store.state.layout.route)
// console.log(routes)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log('handleOpen',key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('handleClose',key, keyPath)
}
function pushRouter(path){
  Router.push({
    path
  })
}
</script>
<style lang="scss" scoped>
.tac {
  height: 100vh;
}
.sideBar {
  color: white;
  width: 200px;
  // calc(100% - 50px)
  height: calc(100% - 50px);
  background-color: #e9dcee;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.3s;
  z-index: 999;
}
</style>
