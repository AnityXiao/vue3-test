<!--
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-21 15:33:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-24 13:42:12
-->
<template>
  <div>
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    var key = ref('')
    key.value = route.path
  },
}
</script>
<style lang="scss" scoped>
</style>