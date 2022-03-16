<template>
  <div class="toolbar">
      DevMode <el-switch v-model="devMode" />
  </div>
</template>

<script>
import { computed } from 'vue-demi';
import { useStore } from 'vuex'

export default {
  components:{
  },
  setup(){
    const store = useStore()
    const devMode = computed({
      get:()=>store.state.devMode,
      set:()=>{
        store.commit('swithDevMode')
      }
    })
    return {
      devMode
    }
  }
};
</script>

<style>
  .toolbar{
    width:100%;
  }
</style>
