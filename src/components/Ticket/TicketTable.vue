<template>
  <el-table :data="tickets" style="width: 100%">
    <el-table-column prop="id" label="No" width="150" />
    <el-table-column prop="type" label="Type">
      <template #default="scope">
        <el-tag :type="scope.row.type ===1?'danger':''">{{scope.row.type ===1?"Bug":"Feature Request"}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="summary" label="Summary" width="120" />
    <el-table-column prop="description" label="Description" />
    <el-table-column prop="severity" label="Severity" />
    <el-table-column prop="priority" label="Priority" />

    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          v-if="!scope.row.deleted"
          type="text"
          size="small"
          @click.prevent="deleteTicket(scope.row.id)"
        >
          Delete
        </el-button>
        <el-button
          v-if="!scope.row.resolved"
          type="text"
          size="small"
          @click.prevent="resolveTicket(scope.$index)"
        >
          Resolve
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div v-if="devMode">{{ tickets }}</div>
</template>

<script>
import useDevMode from "../../mixins/useDevMode";
export default {
  props: ["tickets"],
  emits: ["suspend-user", "reinstate-user", "add-user"],
  setup() {
    const { devMode } = useDevMode();
    return {
      devMode,
    };
  },
};
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: lightgray;
}
</style>
