<template>
  <el-table
    :data="users"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="serial" label="Serial" width="150" />
    <el-table-column prop="username" label="Name" width="120" />
    <el-table-column prop="roles" label="Roles" width="120" />
    <el-table-column prop="suspend" label="Status" width="120" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          type="text"
          size="small"
          @click.prevent="suspendUser(scope.$index)"
        >
          Suspend
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem"
    >Add Item</el-button
  >
  <div>{{ users }}</div>
</template>

<script>
export default {
  props: ["users"],
  setup() {
    const onAddItem = () => {};

    const tableRowClassName = ({ row }) => {
      if (row.suspend) return "warning-row";
      return "";
    };

    const suspendUser = (index) => {
      alert(index);
    };

    return {
      onAddItem,
      tableRowClassName,
      suspendUser,
    };
  },
};
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: lightgray;
}
</style>
