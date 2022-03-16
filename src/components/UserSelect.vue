<template>
  <el-select
    v-model="value"
    filterable
    remote
    reserve-keyword
    placeholder="Please select a User"
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  {{ userId }}
</template>

<script setup>
import { computed, ref } from "vue";
import { UserApi as api } from "../api";
import useIdentity from "../mixins/useIdentity";

const { userId, switchUser } = useIdentity();

const options = ref([]);

const value = computed({
  get: () => userId,
  set: (val) => switchUser(val),
});
const loading = ref(false);

const remoteMethod = async (query) => {
  loading.value = true;
  options.value = (await api.getUsers()).data
    .map((item) => {
      return { value: item.id.toString(), label: item.username };
    })
    .filter((item) => {
      return item.label.toLowerCase().includes(query.toLowerCase());
    });
  loading.value = false;
};
</script>
