<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Summary">
      <el-input v-model="form.summary"></el-input>
    </el-form-item>
    <el-form-item label="Description">
      <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="Type">
      <el-select v-model="form.type" placeholder="please select type">
        <el-option label="Bug" :value="1"></el-option>
        <el-option label="Feature Request" :value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <span class="">Serverity</span>
      <el-slider
        v-model="form.severity"
        :max="5"
        :min="1"
        :step="1"
        show-stops
      />
    </el-form-item>
    <el-form-item>
      <span class="">Priority</span>
      <el-slider
        v-model="form.priority"
        :max="5"
        :min="1"
        :step="1"
        show-stops
      />
    </el-form-item>
    <el-form-item>
      <el-button @click="submit">Submit</el-button>
    </el-form-item>
  </el-form>
  <div v-if="devMode">{{ form }}</div>
</template>

<script>
import { reactive } from "vue";
import useDevMode from "../../mixins/useDevMode";
import { TicketApi as api } from "../../api";
export default {
  props: ["modelValue"],
  setup() {
    const { devMode } = useDevMode();
    const form = reactive({
      summary: "",
      description: "",
      type: 0,
      severity: 1,
      priority: 1,
    });
    const submit = () => {
      api.addTicket(form);
    };
    return { form, submit, devMode };
  },
};
</script>
