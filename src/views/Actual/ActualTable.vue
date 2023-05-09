<template>
  <div class="container">
    <top-search></top-search>
    <div class="centerActualTab">
      <el-row :gutter="22">
        <el-col :span="14">
          <el-tabs v-model="TabLeft" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane class="demo-tabs-content" label="Actual" name="first">
              <el-table  :data="ActualData" border style=" width: 100% font-size:small;"
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
              <el-table :data="VolumeData" border style="width: 100%"
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
  background-color: hsl(226, 12%, 44%);
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

</style>
