<template>
  <div class="centerTable">
    <div class="wrapper">
        <div class="table1">
            <el-row :gutter="20">
            <el-col :span="12"><div class="rowLeft grid-content" >
                <h2>Window Fix</h2>
                <el-button type="primary" class="orderBtn">Order List All</el-button>
            </div></el-col>
            <el-col :span="12"><div class="row1Right grid-content">
                <h2>BTR</h2>
                <el-button   type="primary" class="orderBtn">Order List All</el-button>
            </div></el-col>
            </el-row>
            <el-row :gutter="22">
                <el-col :span="12"><div class="row2Left grid-content" >
                    <el-row :gutter="20">
                        <el-col :span="4"><div class="row2 ">Today</div></el-col>
                        <el-col :span="16"><div class="row2 ">Fix Date</div></el-col>
                        <el-col :span="4"><div class="row2 ">Last Order</div></el-col>
                    </el-row>
                </div></el-col>
                <el-col :span="12"><div class="row2Right grid-content" >
                    <el-row :gutter="20">
                        <el-col :span="4"><div class="row2">Today</div></el-col>
                        <el-col :span="16"><div class="row2 ">Fix Date</div></el-col>
                        <el-col :span="4"><div class="row2 ">Last Order</div></el-col>
                    </el-row>
                </div></el-col>
            </el-row>
            <el-row :gutter="22">
                <el-col :span="12"><div class="row3 grid-content">
                    <el-row :gutter="20">
                        <el-col :span="4"><div class="row2 ">20221103</div></el-col>
                        <el-col :span="4"><div class="row2 ">20221104</div></el-col>
                        <el-col :span="4"><div class="row2 ">202221105</div></el-col>
                        <el-col :span="4"><div class="row2 ">20221106</div></el-col>
                        <el-col :span="4"><div class="row2 ">20221107</div></el-col>
                        <el-col :span="4"><div class="row2 lastOrder">3005566</div></el-col>
                    </el-row>
                </div></el-col>
                <el-col :span="12"><div class="row3 grid-content">
                    <el-row :gutter="20">
                        <el-col :span="4"><div class="row2 ">Today</div></el-col>
                        <el-col :span="4"><div class="row2 ">Today</div></el-col>
                        <el-col :span="4"><div class="row2">Today</div></el-col>
                        <el-col :span="4"><div class="row2">Today</div></el-col>
                        <el-col :span="4"><div class="row2">Today</div></el-col>
                        <el-col :span="4"><div class="row2 lastOrder">305566</div></el-col>
                    </el-row>
                </div></el-col>
            </el-row>

            <div class="centerNotice">
                hdfsnjnsbvhsibvanb
            </div>

            <div class="table2">
                <!-- color: white; font-size: small;background-color:hsl(225, 26%, 30%); height="250" -->
                <el-table 
                    :data="tableData"  style="width: 100%; "
                    :header-cell-style="{
                        'text-align': 'center',
                        'font-size': '8px',
                        'background': '#162556 !important',
                        'color': 'white',
                        'border': 'none !important'
                    }"
                    :cell-style=changeCellStyle
                >
                    <el-table-column align="center" type="index" label="No." min-width="50" />
                    <el-table-column align="center" prop="date" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_xxxx" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                    <el-table-column align="center" prop="name" label="NR_qqqq" min-width="80" />
                </el-table>
            </div>
            
        </div>
        
    </div>
  </div>
</template>

<script>
import {Search} from '@element-plus/icons-vue'
import { reactive } from 'vue'
export default {
    components:{
        
    },
    setup(){
        let tableData = reactive([
        {
            date:'G28',
            name: '818E',
        },
        {
            date:'G28',
            name: '818E',
        },
        {
            date:'G28',
            name: '818E',
        }
        ])
        function changeCellStyle(row) {
            const styleObject = {
                'background': '#090e2e !important',
                'color': '#ffffff',
                'border-bottom': '2px solid #173d91',
                'font-size': '10px',
                'cursor': 'pointer'
            }
            if (row.column.label == 'NR_xxxx') {
                styleObject.color = '#00f1ed'
                styleObject.background = 'yellow'
            } else {
                styleObject.color = 'white'
            }
            return styleObject
        }

        return {
            Search,
            tableData,
            changeCellStyle,
        }
    }
}
</script>

<style scoped>
.wrapper{
    margin: 10px auto;
    background-color: #ab9edcc1;
}

.table1{
    margin: 10px;
    padding-top: 10px;
}

.grid-content {
  min-height: 45px;
  margin-bottom: 4px;
}
.rowLeft{
    background-color:hsl(225, 26%, 30%);
    position: relative;
}
.rowLeft h2{
    text-align: left;
    position: absolute;
    top: -15px;
    left: 10px;
    color: white;
    line-height: 45px;
    font-size: medium;
}
::v-deep  .orderBtn{
    position: absolute;
    
    right:10px;
    top: 50%;
    transform: translateY(-50%);
}

.row1Right{
    background-color:hsl(225, 26%, 30%);
    position: relative;
    color: white;
}
.row1Right h2{
    text-align: left;
    position: absolute;
    top: -15px;
    left: 10px;
}
.row2{
    background-color:hsl(225, 26%, 30%);
    color:whitesmoke;
    height: 45px;
    /* position: absolute; */
    /* top: 50%;
    transform: translateY(-50%); */
    text-align: center;
    line-height: 45px;
    font-size: small;
}
.lastOrder{
    background-color: #850404dd;
}

.centerNotice{
    border: yellow 2px solid;
    padding-left: 10px;
    text-align: left;
    background-color:hsl(225, 26%, 30%);
    color:white;
    font-size: small;
    height: 20px;
    line-height: 20px;
}


</style>