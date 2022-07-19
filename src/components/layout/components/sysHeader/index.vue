<!--
 * @Descripttion:
 * @version:
 * @Author: xiao
 * @Date: 2022-01-21 15:08:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-01-21 15:25:50
-->
<template>
  <div class="sys_header">
    <div class="caption">
      <p class="caption_cont">Magbus此爱山海</p>
    </div>
  </div>
</template>
<script>
export default {
  setup() {

  },
}
</script>
<style lang="scss" scoped>
.sys_header {
  position: fixed;
  top: 0px;
  left: 0;
  height: 50px;
  width: 100%;
  background: #e9dcee;
  .caption {
    line-height: 50px;
    width: 200px;
    .caption_cont {
      font-size: 24px;
      font-weight: 600;
      color: rgb(33, 32, 34);
      margin: 0;
      text-align: center;
    }
  }
}
</style>