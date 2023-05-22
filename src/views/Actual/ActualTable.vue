<template>
  <div class="container">
    <top-search></top-search>
    <div class="centerActualTab">
      <el-row :gutter="22">
        <el-col :span="14">
          <el-tabs v-model="TabLeft" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane class="demo-tabs-content" label="Actual" name="first">
              <el-table  :data="ActualData" border  fit height="200px" style=" width: 100% font-size:small;"
                :header-cell-style="{
                  'text-align': 'center',
                  'background-color': 'hsl(226, 12%, 44%)',
                  'color': '##cac5c5',
                  'border': '1px solid #36364a'
                }"
                :cell-style="changeCellStyle"
              >
                <el-table-column prop="status" label="Status" min-width="80" />
                <el-table-column prop="series" label="Series" min-width="80" />
                <el-table-column prop="rate" label="On Time Rate" min-width="80" />
                <el-table-column prop="rate" label="F2 Volume" min-width="80" />
                <el-table-column prop="rate" label="Late" min-width="80" />
                <el-table-column prop="rate" label="On Time" min-width="80" />
                <el-table-column  label="Tolerance" min-width="80" />
              </el-table>
            </el-tab-pane>
            <el-tab-pane class="demo-tabs-content" label="Forecast" name="second">Config</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="10">
          <el-tabs v-model="TabRight" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane class="demo-tabs-content" label="User" name="first">
              <el-table :data="VolumeData" border height="200px" style="width: 100%"
                :header-cell-style="{
                    'text-align': 'center',
                    'background-color': 'hsl(226, 12%, 44%)',
                    'color': '##cac5c5',
                    'border': '1px solid #36364a'
                  }"
                  :cell-style="changeCellStyle"
              >
                <el-table-column prop="buffer" label="CC Buffer" min-width="80" />
                <el-table-column prop="number" label="2:20" min-width="80" />
                <el-table-column prop="time" label="Timely" min-width="80" />
              </el-table>
            </el-tab-pane>
            <el-tab-pane class="demo-tabs-content" label="Config" name="second">Config</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <div class="table3">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        background-color="transparent"
        text-color="bisque"
        active-text-color="white"
        mode="horizontal"
        :ellipsis="ellipsis"
      >
        <el-menu-item index="0">LOGO</el-menu-item>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="2">
          <div class="demo-date-picker">
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                size="small"
              />
            </div>
          </div>
        </el-menu-item>
        
      </el-menu>
      <el-table :data="table3" style="width: 100%" size="small"
        :header-row-style="{'background-color': 'transparent',}"
        :header-cell-style="{'background-color': 'transparent'}"
        :cell-style="{'background-color':'#63697e', 'color':'white', }">
        <el-table-column v-for="item in table3_head" :prop="item" :key="item.id" :label="item" min-width="80"/>
        <!-- <el-table-column  v-for="(info) in table3" :prop="info.date" :label="info.label" :key="info.id" min-width="80" /> -->
      </el-table>
      </div>
      
    </div>
  </div>
</template>

<script>
import TopSearch from '@/components/TopSearch.vue';
import { ref,reactive } from 'vue';
import { TabsPaneContext } from 'element-plus';


export default {
  components:{
    TopSearch,
  },
  setup(){
    const TabLeft = ref('first')
    const TabRight = ref('first')
    const activeIndex = ref('1')
    const value1 = ref('')
    const ellipsis = ref(false)
    let ActualData = reactive([
      {
        status:600,
        series: 'G28ICE',
        rate: '99%',
      },
      {
        status:6000,
        series: 'G28ICE',
        rate: '99%',
      },
      {
        status:6000,
        series: 'G28ICE',
        rate: '99%',
      },
    ])
    let VolumeData = reactive([
      {
        buffer:'',
        number: 8000,
        time:220
      },
      {
        buffer:'Z300',
        number: 8000,
        time:220
      },
      {
        buffer:'Z300',
        number: 800,
        time:null
      },
      {
        buffer:'Z300',
        number: 8000,
        time:null
      },
    ])
    let table3 = reactive([
        {
          date:'20221102',
          label:'date',
          id:1,
          series:'G28',
          type:'352Li',
          f2Vol:'500U',
          OnTime:'500U',
          Late: '800U',
          Early:'400U',
          percent:'50%',
        },
        {
          date:'20221102',
          label:'date',
          id:2,
          series:'G28',
          type:'352Li',
          f2Vol:'500U',
          OnTime:'500U',
          Late: '800U',
          Early:'400U',
          percent:'50%',
        },
        {
          date:'20221102',
          label:'date',
          id:3,
          series:'G28',
          type:'352Li',
          f2Vol:'500U',
          OnTime:'500U',
          Late: '800U',
          Early:'400U',
          percent:'50%',
        },
      ])
    let table3_head = reactive(Object.keys(table3[0]))

    const handleClick = (TabsPaneContext) => {
      console.log(TabsPaneContext)
    }
    function changeCellStyle(row){
      // console.log(row);
      const styleObject = {
          'text-align': 'center',
          'color': 'white',
          'cursor': 'pointer',
          'background-color': 'hsl(226, 12%, 44%)',
          'font-size': 'small',
          'border': '1px solid #36364a',
        }
      if(row.row.status == 600 && row.column.label == 'Series'){
          styleObject.color = 'blue'
      }
      if(row.row.number == 800 && row.column.label == '2:20'){
        styleObject.color = 'yellow'
      }
      return styleObject
    }

    return {
      handleClick,
      TabLeft,TabRight,
      ActualData,
      changeCellStyle,
      VolumeData,
      activeIndex,
      value1,
      ellipsis,
      table3,
      table3_head,
    }
  }
}
</script>

<style scoped>
.container{
    /* 加载背景图 */
    background-image: url('@/assets/bgi.png');
    /* 背景图垂直、水平均居中 */
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #FFFFFF;
}
.centerActualTab{
  margin: 10px 20px;
  background-color:#36364a;
}
.demo-tabs {
  margin: 10px 10px;
  /* padding: 22px; */
  /* color: white; */
  font-size: 32px;
  font-weight: 600;
  background-color: #63697e;
}


::v-deep .el-tabs__nav{
  left: 10px;
}
::v-deep .el-tabs__item{
  color: bisque;
}
::v-deep .el-tabs__item.is-active{
  color: white;
}
::v-deep .el-table, 
.el-table__inner-wrapper{
  background-color:#36364a;
}
::v-deep .el-tabs__nav-wrap::after{
  background-color:#36364a;
}
::v-deep .el-table--border .el-table__inner-wrapper::after{
  background-color:#36364a;
}
.demo-tabs >>> .el-tabs__header{
  margin:0
}
.demo-tabs >>> .el-scrollbar__view{
  height: 100%;
}
.demo-tabs >>> .el-table__body{
  height: 100%;
}
.demo-tabs >>> .el-table__inner-wrapper::before{
  height: 0;
}
.demo-tabs >>> .el-table--border::after{
  width: 0;
}
::v-deep .el-table tr th:first-child {
  border-left: 1px solid #36364a;
}



/* table3 */
.table3{
  margin: 10px 10px;
  background-color: hsl(226, 12%, 44%);
}
.flex-grow {
  flex-grow: 1;
}


.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  margin-top: -15px;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}
 .block >>> .el-input__wrapper{
  background-color: transparent;
 }

 /* .table3 >>> .el-table th.el-table__cell{
  background-color: transparent; 
 }
 .table3 >>> .el-table tr{
  background-color: transparent;
 } */
 .table3 .el-table-border{
  border:  1px solid #36364a;
 }
</style>
