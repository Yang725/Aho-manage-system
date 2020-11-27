<template>
  <div class="header">
    <div class="l-content">
      <el-button plain type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img :src="userImg" class="userImg"/></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-s-custom">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-right">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      userImg: require('../assets/images/user.jpg')
    }
  },

  components: {},

  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },

  mounted() {},

  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>
<style lang="scss">
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  width: 320px;
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  el-breadcrumb {
    el-breadcrumb-item {
      color: #fff;
    }
  }
}
.r-content {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
