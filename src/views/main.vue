<template>
  <el-container style="height:100%">
    <el-aside width="auto"> <common-aside /></el-aside>
    <el-container>
      <el-header> <common-header /> </el-header>
      <common-tab />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
import CommonAside from '../components/CommonAside'
import CommonTab from '../components/CommonTab'
export default {
  data() {
    return {}
  },

  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #aaa;
}
.el-main {
  padding-top: 0;
}
</style>
