<template>
  <el-dialog
    v-model="dialogOpen"
    title="Add a new User"
    destroy-on-close
    center
    :before-close="ResetForm"
  >
    <add-form v-model="form"></add-form>
    <template #footer>
      <div>{{ postData }}</div>
      <span class="dialog-footer">
        <el-button
          @click="
            () => {
              dialogOpen = false;
              ResetForm();
            }
          "
          >Cancel</el-button
        >
        <el-button type="primary" @click="AddUser">Add</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import AddForm from "./AddUserDialogForm.vue";
import { UserApi as api } from "../../api";
import { reactive, computed } from "vue";
export default {
  props: ["modelValue"],
  components: { AddForm },
  setup(props, context) {
    const dialogOpen = computed({
      get: () => props.modelValue,
      set: (val) => {
        context.emit("update:modelValue", val);
      },
    });

    const initData = {
      username: "",
      serial: "",
      roles: [],
    };

    const form = reactive({ ...initData });

    const ResetForm = (done) => {
      Object.assign(form, initData);
      if (done) done();
    };

    const postData = computed(() => {
      return {
        username: form.username,
        serial: form.serial,
        roles: form.roles.reduce((prev, curr) => {
          return parseInt(curr) + parseInt(prev);
        }, 0),
      };
    });

    const AddUser = () => {
      api.addUser(postData.value).then(() => {
        ResetForm();
        dialogOpen.value = false;
      });
    };

    return {
      form,
      dialogOpen,
      postData,
      AddUser,
      ResetForm,
    };
  },
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
