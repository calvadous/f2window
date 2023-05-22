<template>
  <div class="all">
    <top-search @getDate="getDate1"></top-search> 
    <div class="contrast_table">
      <div class="contrast_left">
        <el-row >
          <el-col :span="4">{{ startDate }}</el-col>
          <el-col :span="10" :offset="6">This is a description,describing the Version No.</el-col>
        </el-row>
        <!-- <div class="left_title">{{ startDate }}</div>
        <div class="description">This is a description,describing the Version No.</div> -->
      </div>
      <div class="contrast_right">
        <el-row >
          <el-col :span="4">{{ endDate }}</el-col>
          <el-col :span="10" :offset="8">This is a description,describing the Version No.</el-col>
        </el-row>
        <!-- <div class="right_title"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import TopSearch from '@/components/TopSearch.vue';
import { ref,reactive, onMounted } from 'vue';
export default {
    components:{
        TopSearch,
    },
    setup(){
      let startDate = ref('20230501')
      let endDate = ref('20230601')

      function getDate1(date){
        startDate.value = date[0];
        endDate.value = date[1];
        console.log('事件子传父',startDate.value);
      }
      return {
        startDate,endDate,
        getDate1,
      }
    }
    
}
</script>

<style scoped>
.all{
  background-color: #434a60e7;
}
.contrast_table{
  background-image: url('@/assets/bgi.png');
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  margin: 10px;
  height: calc(100vh - 188px);
}
.contrast_left{
  width: 40%;
  margin: 10px;
  position: absolute;
  left: 10px;
  color: white;
  font-size: small;
  text-align: right;
}
/* .contrast_left .left_title{
  margin: 10px;
  text-align: left;
  position: absolute;
  left: 0px;
} */

.contrast_right{
  width: 60%;
  margin: 10px;
  position: absolute;
  right: 10px;
  color: white;
  font-size: small;
  text-align: right;
}
</style>