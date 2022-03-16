<template>
  <el-table
    :data="tickets"
    style="width: 100%"
  >
    <el-table-column prop="serial" label="Serial" width="150" />
    <el-table-column prop="username" label="Name" width="120" />
    <el-table-column
      prop="roles"
      :formatter="formatRoles"
      label="Roles"
      width="120"
    >
      <template #default="scope">
        <el-tag v-for="r in formatRoles(scope.row)" :key="r">{{ r }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="suspend"
      :formatter="formatStatus"
      label="Status"
      width="120"
    />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          v-if="!scope.row.suspend"
          type="text"
          size="small"
          @click.prevent="suspendUser(scope.$index)"
        >
          Suspend
        </el-button>
        <el-button
          v-else
          type="text"
          size="small"
          @click.prevent="reinstateUser(scope.$index)"
        >
          Reinstate
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem"
    >Add User</el-button
  >
  <div v-if="devMode">{{ users }}</div>
</template>

<script>
import useDevMode from "../../mixins/useDevMode";
export default {
  props: ["users"],
  emits: ["suspend-user", "reinstate-user", "add-user"],
  setup(_, context) {
    const { devMode } = useDevMode();

    const onAddItem = () => {
      context.emit("add-user");
    };

    return {
      onAddItem,

      devMode
    };
  },
};
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: lightgray;
}
</style>
