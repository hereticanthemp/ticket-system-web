<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Show Deleted">
      <el-switch v-model="formInline.includeDeleted"></el-switch>
    </el-form-item>
    <el-form-item label="Show Resolved">
      <el-switch v-model="formInline.includeResolved"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-date-picker
        v-model="formInline.startDate"
        type="datetime"
        placeholder="From"
      />
    </el-form-item>
    <el-form-item>
      <el-date-picker
        v-model="formInline.endDate"
        type="datetime"
        placeholder="To"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
  <div v-if="devMode">{{ formInline }}</div>
</template>

<script>
import { reactive } from "vue";
import useDevMode from "../../mixins/useDevMode";
export default {
  emits: ["submit"],
  setup(_, context) {
    const { devMode } = useDevMode();
    const formInline = reactive({
      includeDeleted: false,
      includeResolved: false,
      startDate: "",
      endDate: "",
    });

    const onSubmit = () => {
      context.emit("submit", formInline);
    };

    return {
      devMode,
      formInline,
      onSubmit,
    };
  },
};
</script>

<style></style>
