<template>
  <user-table :users="data.users"></user-table>
</template>

<script>
import UserTable from "../components/User/UserTable.vue";
import { UserApi as api } from "../api";
import { reactive } from "vue";

export default {
  components: {
    UserTable,
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
    return {
      data,
    };
  },
};
</script>

<style></style>
