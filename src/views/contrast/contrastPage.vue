<template>
  <div class="all">
    <top-search @getDate="getDate1"></top-search> 
    <div class="contrast_table">
      <div class="contrast_left">
        <div class="left_top">
          <div class="left_date">{{ startDate }}</div>
          <div class="left_date"> startDate </div>
          <div class="left_description">This is a description,describing the Version No.</div>
        </div>
        <div class="left_table">
          <el-table :data="initData" style="width: 100%, background-color:transparent"
              :header-row-style="{ 'background-color': 'transparent', }"
              :header-cell-style="{ 'background-color': 'transparent' }"
              :cell-style="{ 'background-color': '#63697e', 'color': 'white', }">
            <el-table-column v-for="item in tableHead" :key="item.id" :prop="item" :label="item" min-width="80" />
          </el-table>
        </div>
      </div>
      <div class="contrast_right">
        <div class="right_top">
          <div class="left_date">{{ endDate }}</div>
          <div class="left_date"> startDate </div>
          <div class="left_description">This is a description,describing the Version No.</div>
        </div>
        <div class="right_table">
          <el-table :data="initData" style="width: 100%"
              :header-row-style="{ 'background-color': 'transparent', }"
              :header-cell-style="{ 'background-color': 'transparent' }"
              :cell-style="{ 'background-color': '#63697e', 'color': 'white', }">
            <el-table-column v-for="item in tableHead" :key="item.id" :prop="item" :label="item" min-width="80" />
          </el-table>
        </div>
      </div>
    </div>

    <!-- css中使用变量 -->
    <!-- <div class="test" :style="{'--height': myheight}">test</div> -->
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
      let myheight = ref('200px')
      let initData = reactive([
        {
          NR_SOLIF:'16399',
          CRDNR:'6605891',
          BALRE:'G28',
          DZ_BUILD:'20220501',
          C_FABRE:'A96',
          Number:666,
        },
        {
          NR_SOLIF:'16399',
          CRDNR:'6605891',
          BALRE:'G28',
          DZ_BUILD:'20220501',
          C_FABRE:'A96',
          Number:666,
        },
      ])
      let tableHead = reactive(Object.keys(initData[0]))
      // let tableData = reactive((el)=>{
      //   for(el=0;el<5;el++){
      //     initData[el].Number++;
      //   }
        
      // })


      function getDate1(date){
        startDate.value = date[0];
        endDate.value = date[1];
        console.log('事件子传父',startDate.value);
      }
      return {
        startDate,endDate,
        getDate1,
        myheight,
        tableHead,initData,
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
  color: white;
  font-size: small;
  text-align: right;
  /* background-color: #c9f4c9e7; */
}
.contrast_right{
  width: 50%;
  margin: 10px;
  position: absolute;
  left:46.5%;
  color: white;
  font-size: small;
  text-align: right;
  /* background-color: #c9f4c9e7; */
}

.left_date{
  float: left;
  margin-left: 5px;
}
.left_description{
  float: right;
  margin-right: 5px;
  text-overflow: ellipsis;
}
.left_top, .right_top{
  height: 40px;
  line-height: 40px;
  font-size: small;
  background-color: #434a60e7;
  border-radius: 4px;
}
/* 清除浮动，但父元素设置高度，就不必再清除浮动 */
/* .left_top::before, .left_top::after{
  content:'';
  clear: both;
  display: block;
} */
.left_table, .right_table{
  background-color: #434a60e7;
  border-radius: 4px;
  margin-top: 10px;
  padding: 5px;
}
::v-deep .el-table{
  background-color: transparent;
}

.test{
  background-color: #e69292;
  height: calc(300px - var(--height));
}
</style>