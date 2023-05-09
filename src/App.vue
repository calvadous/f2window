<template>
  <div><router-view></router-view></div>
  <!-- <top-search></top-search>
  <center-content></center-content> -->
  <!-- <router-view></router-view> -->
</template>

<script>
import {ref,reactive} from 'vue'

import TopSearch from './components/TopSearch.vue'
import centerContent from './components/centerContent.vue'
export default{
  components:{
    // TopSearch,
    // centerContent,
  },
  setup(){

    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
