import { useStore } from "vuex";
import { computed } from "vue";

export default function () {
  const store = useStore();
  const userId = computed(() => store.state.userId);
  const switchUser = (id) => {
    store.commit("switchUser", id);
  };
  return {
    userId,
    switchUser,
  };
}
