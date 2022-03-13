<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="Serial">
      <el-input v-model="form.serial"></el-input>
    </el-form-item>
    <el-form-item label="Roles">
      <el-select
        v-model="form.roles"
        multiple
        placeholder="please select roles"
      >
        <el-option label="QA" value="1"></el-option>
        <el-option label="RD" value="2"></el-option>
        <el-option label="PM" value="4"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["modelValue"],
  setup(props, context) {
    const onSubmit = () => {
      console.log("submit!");
    };

    const form = computed({
      get: () => props.modelValue,
      set: (val) => {
        context.emit("update:modelValue", val);
      },
    });

    return {
      form,
      onSubmit,
    };
  },
};
</script>
