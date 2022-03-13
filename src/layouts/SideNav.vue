<template>
  <el-scrollbar>
    <el-menu :default-openeds="['1', '2']" class="menu" router>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><message /></el-icon>Board
        </template>
        <el-menu-item-group>
          <template #title>Tickets</template>
          <el-menu-item index="/ticket">
              List View
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Others">
          <el-menu-item index="1-3" disabled>Not Implement</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><setting /></el-icon>Settings
        </template>
        <el-menu-item-group>
          <template #title>User Management</template>
          <el-menu-item index="/user">
              Users
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { Message, Setting } from "@element-plus/icons-vue";

export default {
  components: {
    Message,
    Setting,
  },
};
</script>

<style scoped>
</style>
