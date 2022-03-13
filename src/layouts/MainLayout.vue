<template>
  <el-container class="wrapper">
    <el-container>
      <el-header class="top">
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside width="200px" class="side">
          <side-nav></side-nav>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer class="foot"></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import SideNav from "./SideNav.vue";
import TopNav from "./TopNav.vue";
export default {
  components: {
    SideNav,
    TopNav,
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.side {
  background-color: whitesmoke;
}

.top {
  background-color: cornflowerblue;
}

.foot {
  background-color: grey;
}
</style>
