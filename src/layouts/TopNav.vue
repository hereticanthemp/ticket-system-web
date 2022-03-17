<template>
  <div class="toolbar">
    <el-space wrap>
      <user-select></user-select>
      DevMode <el-switch v-model="devMode" />
    </el-space>
  </div>
</template>

<script>
import { computed } from "vue-demi";
import { useStore } from "vuex";
import UserSelect from "../components/UserSelect.vue";

export default {
  components: {
    UserSelect,
  },
  setup() {
    const store = useStore();
    const devMode = computed({
      get: () => store.state.devMode,
      set: () => {
        store.commit("swithDevMode");
      },
    });
    return {
      devMode,
    };
  },
};
</script>

<style>
.toolbar {
  width: 100%;
}
</style>
