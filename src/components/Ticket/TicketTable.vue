<template>
  <el-table
    :data="tickets"
    style="width: 100%"
  >
    <el-table-column prop="id" label="No" width="150" />
    <el-table-column prop="summary" label="Summary" width="120" />
    <el-table-column prop="description" label="Description"/>


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
    >Add Ticket</el-button
  >
  <div v-if="devMode">{{ tickets }}</div>
</template>

<script>
import useDevMode from "../../mixins/useDevMode";
export default {
  props: ["tickets"],
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
