<template>
  <div>
    <div class="demo-image__placeholder">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-image :src="getImageUrl('pic')" :preview-src-list="srcList" :initial-index="1">
        </el-image>
      </div>
      <div class="block">
        <span class="demonstration">Custom</span>
        <el-image :src="getImageUrl('cat_one')" :preview-src-list="srcList" :initial-index="1">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
      </div>
    </div>
  </div>
</template>
<script>
// 第一种setup写法
import { ref, reactive } from "vue";
export default {
  setup() {
    const srcList = reactive([])
    srcList[0] = getImageUrl('pic')
    srcList[1] = getImageUrl('cat_one')
    function getImageUrl(name) {
      return new URL(`../../assets/images/${name}.png`, import.meta.url).href
    }
    return {
      getImageUrl,
      srcList
    }
  },
}
</script>
<style lang="scss" scoped>
.demo-image__placeholder {
  .block {
    width: 400px;
    img {
      width: 400px;
    }
  }
}
</style>