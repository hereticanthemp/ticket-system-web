<template>
  <h1>Ticket</h1>
  <filter-bar v-on:submit="refresh"></filter-bar>
  <ticket-table :tickets="data.tickets"></ticket-table>
  <el-dialog v-model="dialog" title="Add New Ticket" destroy-on-close>
    <ticket-form></ticket-form>
  </el-dialog>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem"
    >Add Ticket</el-button
  >
</template>

<script>
import { reactive, ref } from "vue";
import { TicketApi as api } from "../api";
import useDevMode from "../mixins/useDevMode";

import TicketTable from "../components/Ticket/TicketTable.vue";
import TicketForm from "../components/Ticket/TicketForm.vue";
import FilterBar from "../components/Ticket/FilterBar.vue";

export default {
  components: { TicketTable, FilterBar, TicketForm },
  setup() {
    const { devMode } = useDevMode();
    const dialog = ref(false);
    const data = reactive({
      tickets: [],
    });
    const refresh = async (param) => {
      data.tickets = (await api.getTickets(param)).data.reverse();
    };
    refresh();

    const onAddItem = () => {
      dialog.value = true;
    };

    return {
      devMode,
      refresh,
      data,
      dialog,
      onAddItem,
    };
  },
};
</script>

<style></style>
