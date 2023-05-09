<template>
    <top-search></top-search>
    <center-content></center-content>
  </template>
  
  <script>
  import {ref,reactive} from 'vue'
  
  import TopSearch from '@/components/TopSearch.vue'
  import centerContent from '@/components/centerContent.vue'
  export default{
    components:{
      TopSearch,
      centerContent,
    },
    setup(){
  
      return {
  
      }
    }
  }
  </script>

<style>

</style>