
<template>
  <h1>{{ msg1 }}</h1>
  <h2>{{msg2}}</h2>
  <el-button type="primary" @click="goTest">Test</el-button>
  <el-button type="success" @click="goNormal">Normal</el-button>
  <el-button type="danger" @click="pushPath('login')">Login</el-button>
  <el-button type="danger" @click="pushPath('layout')">Layout</el-button>
</template>

// 第二种setup写法
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const msg1 = ref('In My Barren Land,You Are My Only White Rose')
const msg2 = ref('在这万物荒芜的阵痛世界，你是我心尖上一尘不染的白玫瑰')
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineprops-%E5%92%8C-defineemits
defineProps({
  msg: String
})
const router = useRouter()
const route = useRoute()

function pushPath(path) {
  router.push({
    path
  })
}
function goTest() {
  pushPath('test')
}
function goNormal() {
  pushPath('normal')
}

</script>


<style scoped>
a {
  color: #42b983;
}
</style>
