<template>
  <div class="topSearch">
    <h2 class="F2title">F2Window </h2>
    <div class="orderNumber">Order Number</div>
    <div class="search">
      <el-row>
        <el-col :span="4"><el-input v-model="SearchResult" class="searchLeft1" placeholder="Please Input" size="small"/></el-col>
        <el-col :span="4"><el-button class="searchLeft2" size="small" :icon="Search" type="primary" @click="searchBtn">Search</el-button></el-col>
        <el-col :span="4" :offset="6"><p class="searchRight1">Archieves</p></el-col>
        <el-col :span="4"><p class="searchRight2" @click="actual">Action Records</p></el-col>
      </el-row>
      <!-- <el-icon><Search /></el-icon> -->
            
    </div>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
import { useRouter } from 'vue-router'
import {Search} from '@element-plus/icons-vue'
export default {
  setup(){
    const router =useRouter()

    let SearchResult = ref('')

    function searchBtn(){
      console.log(SearchResult);
    }
    function actual(){
      console.log('点击可跳转');
      router.push('actual');
    }
    return {
      Search,
      SearchResult,
      searchBtn,
      actual,
    }
  }
}
</script>

<style scoped>
.topSearch{
  width: 100%;
  height: 150px;
  background-color:hsl(225, 26%, 30%);
  /* position: absolute; */
}
.F2title{
  position: relative;
  top: 30px;
  left: 20px;
  text-align: left;
  color: white;
}
.orderNumber{
  position: relative;
  top: 30px;
  left: 20px;
  text-align: left;
  color: white;
}
.search{
  position: relative;
  left: 20px;
  top: 35px;
  text-align: left;
}

/* ::v-deep .searchLeft1 .el-input__wrapper {
  background-color: #2b2b2c9f;
  color: burlywood;
} */
.searchLeft2{
  margin-left: 10px;
}
.searchRight1{
  position: absolute;
  top:-10px;
  right: 180px;
  background-color: #2b2b2c9f;
  color: white;
  font-size: small;
  padding: 5px;
}
.searchRight2{
  position: absolute;
  top:-10px;
  right: 50px;
  background-color: #2b2b2c9f;
  color: white;
  font-size: small;
  padding: 5px;
}


</style>