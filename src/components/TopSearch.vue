<template>
  <div>
    <div class="topSearch">
      <h2 class="F2title">F2Window </h2>
      <div class="orderNumber">Order Number</div>
      <div class="search">
        <el-row>
          <el-col :span="4"><el-input v-model="SearchResult" class="searchLeft1" placeholder="Please Input" size="small"/></el-col>
          <el-col :span="4"><el-button class="searchLeft2" size="small" :icon="Search" type="primary" @click="searchBtn">Search</el-button></el-col>
          <el-col :span="4" :offset="6"><p class="searchRight1" @click="isActive=!isActive">Archieves</p></el-col>
          <el-col :span="4"><p class="searchRight2" @click="actual">Action Records</p></el-col>
        </el-row>
        <!-- <el-icon><Search /></el-icon> -->
              
      </div>
    </div>
    <div class="sideBar" v-show="isActive">
      <div class="sideBarTop">
        <div class="sideBar_title">Action Record</div>
        <el-button class="sideBar_close" type="info" text @click="isActive=false">close</el-button>
      </div>
      <div class="sideBar_search">
        <div class="demonstration">Time</div>
        <div class="demo-date-picker">
            <el-date-picker
              class="date_pick"
              v-model="value1"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              size="small"
              @change="chooseDate"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
            />
            <el-button class="sideBar_btn" size="small" :icon="Search" type="primary" >Search</el-button>
        </div>
      </div>
      <div class="sideBar_table">
        <el-table :data="sideBar_table" style="width: 100%;" size="small" :max-height="tableHeight"
          :header-row-style="{'background-color': 'transparent',}"
          :header-cell-style="{'background-color': 'transparent'}"
          :cell-style="{'background-color':'transparent', 'color':'white', }">
          <el-table-column v-for="item in sideBar_tableHead" :prop="item" :key="item.id" :label="item" min-width="50"/>
        </el-table>
      </div>
      <el-button class="contrast_btn" size="small" :icon="Edit" type="primary" @click="contrast">Contrast</el-button>
    </div>
  </div>
  
</template>

<script>
import {ref,reactive, onMounted, nextTick} from 'vue'
import { useRouter } from 'vue-router'
import {Search,Close,Edit} from '@element-plus/icons-vue'
export default {
  setup(props,{emit}){
    // console.log('setup');
    const router =useRouter()

    let SearchResult = ref('')
    let value1 = ref('')
    let isActive = ref(false)
    let tableHeight = ref(0)
    let sideBar_table = reactive([
      {
        version:"20230102",
        time:'Today 16:20',
        Reason:'BTR',
        remark:'This is a description,according to the version No.'
      },
      {
        version:"20230102",
        time:'Today 16:20',
        Reason:'BTR',
        remark:'This is a description,according to the version No.'
      },
      {
        version:"20230102",
        time:'Today 16:20',
        Reason:'BTR',
        remark:'This is a description,according to the version No.'
      },
      {
        version:"20230102",
        time:'Today 16:20',
        Reason:'BTR',
        remark:'This is a description,according to the version No.'
      },
      {
        version:"20230102",
        time:'Today 16:20',
        Reason:'BTR',
        remark:'This is a description,according to the version No.'
      },
      {
        version:"20230102",
        time:'Today 16:20',
        Reason:'BTR',
        remark:'This is a description,according to the version No.'
      },
    ])
    let sideBar_tableHead = reactive(Object.keys(sideBar_table[0]))

    onMounted(()=>{
      console.log("onmounted",isActive.value);
      nextTick(()=>{
        tableHeight.value = window.innerHeight - 330;
        // console.log('获取高度',tableHeight);
      })
    })
      
    function searchBtn(){
      console.log(SearchResult);
    }
    function actual(){
      // console.log('点击可跳转');
      router.push('actual');
    }
    function chooseDate(){
      // console.log(Date.parse(value1.value[0])); //Date.parse 是时间戳
      console.log('选择日期',value1.value);
      emit('getDate',value1.value)
    }
    function contrast(){
      isActive.value = false;
      // console.log('点击对比',isActive.value);
      router.push('contrast');
    }
    return {
      Search,Edit,
      SearchResult,
      searchBtn,
      actual,
      value1,
      chooseDate,
      isActive,
      sideBar_table,
      sideBar_tableHead,
      tableHeight,
      contrast,
    }
  }
}
</script>

<style scoped>
.topSearch{
  width: 100%;
  height: 150px;
  background-color:#394360;
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

.sideBar{
  /* display: none; */
  height: calc(100vh - 188px);
  width: 40%;
  position: absolute;
  top: 170px;
  right: 8px;
  /* background-color: #63697e; */
  background-image: url('@/assets/bgi.png');
  z-index: 99;
}
.sideBar_title{
  margin: 10px;
  text-align: left;
  color: white;
  height: 15px;
  line-height: 15px;
}
.sideBar_close{
  position: absolute;
  top:2px;
  right:10px;
}
.sideBarTop >>> .el-button.is-text{
  color: white;
}
.sideBarTop >>> .el-button.is-text:hover{
  color: rgb(199, 193, 193);
  background-color: transparent;
}
.sideBar_search{
  margin-bottom: 15px;
}
.demonstration{
  color: white;
  margin: 10px;
  text-align: left;
  font-size: small;
}
.demo-date-picker {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: nowrap; */
}

.demo-date-picker >>> .el-input__wrapper{
  background-color: transparent;
  flex-shrink: 4;
  flex-grow: 4;
  margin-right: 10px;
}
.demo-date-picker >>> .el-date-editor .el-range-separator{
  color: white;
}
.demo-date-picker >>> .el-date-editor .el-range-input{
  color: white;
}
.demo-date-picker .sideBar_btn{
  flex: 1;
}
.demo-date-picker :last-child {
  border-right: none;
}
/* table样式 */
.sideBar_table{
  margin: 10px;
}
.sideBar_table >>>.el-table tr{
  background-color: transparent;
}
.sideBar_table >>> .el-table, .el-table__inner-wrapper{
  background-color: transparent;
}
.sideBar .contrast_btn{
  position: absolute;
  right: 8px;
  margin-top: 5px;
}
</style>