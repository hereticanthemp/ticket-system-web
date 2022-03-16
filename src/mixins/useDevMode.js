import { useStore } from 'vuex'
import { computed } from "vue";

export default function () {
  const store = useStore()
  const devMode = computed(()=>store.state.devMode)
  return {
    devMode
  }
}