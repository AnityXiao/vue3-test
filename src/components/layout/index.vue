<template>
  <div class="layOut">
    <sys-header></sys-header>
    <side-bar>
    </side-bar>
  </div>
</template>
<script>
import SideBar from '../layout/components/sideBar/index.vue'
import SysHeader from '../layout/components/sysHeader/index.vue'
export default {
  setup() {
  },
  components: { SideBar, SysHeader }
}
</script>