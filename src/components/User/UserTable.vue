<template>
  <el-table
    :data="users"
    style="width: 100%"
    :row-class-name="tableRowClassName"
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
  <div>{{ users }}</div>
</template>

<script>
export default {
  props: ["users"],
  emits: ["suspend-user", "reinstate-user", "add-user"],
  setup(_, context) {
    const onAddItem = () => {
      context.emit("add-user");
    };

    const tableRowClassName = ({ row }) => {
      if (row.suspend) return "warning-row";
      return "";
    };

    const suspendUser = (index) => {
      context.emit("suspend-user", index);
    };

    const reinstateUser = (index) => {
      context.emit("reinstate-user", index);
    };

    const formatStatus = (row) => {
      return row.suspend ? "Suspended" : "Normal";
    };

    const formatRoles = (row) => {
      let res = [];
      let roles = row.roles;
      if ((roles & 1) > 0) res.push("QA");
      if ((roles & 2) > 0) res.push("RD");
      if ((roles & 4) > 0) res.push("PM");
      if ((roles & 8) > 0) res.push("Admin");

      return res;
    };

    return {
      onAddItem,
      tableRowClassName,
      suspendUser,
      reinstateUser,
      formatStatus,
      formatRoles,
    };
  },
};
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: lightgray;
}
</style>
