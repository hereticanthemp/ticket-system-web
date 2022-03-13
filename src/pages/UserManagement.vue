<template>
  <user-table
    :users="data.users"
    v-on:suspend-user="suspendUser"
    v-on:reinstate-user="reinstateUser"
    v-on:add-user="addUser"
  ></user-table>
  <add-user-dialog v-model="addDialogOpen"></add-user-dialog>
</template>

<script>
import UserTable from "../components/User/UserTable.vue";
import AddUserDialog from "../components/User/AddUserDialog.vue";
import { UserApi as api } from "../api";
import { reactive, ref, watch } from "vue";

export default {
  components: {
    UserTable,
    AddUserDialog,
  },
  setup() {
    const data = reactive({
      users: [],
    });
    const refreshUsers = () => {
      api.getUsers().then((resp) => {
        data.users = resp.data;
      });
    };
    refreshUsers();

    const suspendUser = (index) => {
      api.suspendUser(data.users[index]);
    };

    const reinstateUser = (index) => {
      api.reinstateUser(data.users[index]);
    };

    const addDialogOpen = ref(false);
    const addUser = () => {
      addDialogOpen.value = true;
    };

    watch(addDialogOpen, (newVal) => {
      if (!newVal) {
        refreshUsers();
      }
    });

    return {
      data,
      suspendUser,
      reinstateUser,
      addUser,
      addDialogOpen,
    };
  },
};
</script>

<style></style>
