<template>
  <h1>Ticket</h1>
  <filter-bar v-on:submit="refresh"></filter-bar>
  <ticket-table :tickets="data.tickets"></ticket-table>
</template>

<script>
import { reactive } from "vue";
import { TicketApi as api } from "../api";
import useDevMode from "../mixins/useDevMode";

import TicketTable from "../components/Ticket/TicketTable.vue";
import FilterBar from "../components/Ticket/FilterBar.vue";

export default {
  components: { TicketTable, FilterBar },
  setup() {
    FilterBar;
    const { devMode } = useDevMode();
    const data = reactive({
      tickets: [],
    });
    const refresh = async (param) => {
      data.tickets = (await api.getTickets(param)).data.reverse();
    };
    refresh();

    return {
      devMode,
      refresh,
      data,
    };
  },
};
</script>

<style></style>
