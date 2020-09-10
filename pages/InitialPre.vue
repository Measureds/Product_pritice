<template>
<div>
  <v-container fluid>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          v-model="value"
          value = "select"
          filled
          label="Filled style"
          dense
          @change="onchange"
        ></v-select>
      </v-col>
  </v-container>
    <div id="myChart"></div>
</div>
</template>
<script type="text/javascript">
  import echarts from 'echarts'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default {
    name: 'Echarts',
    data: () => ({
      items: [    'absences',
    'studytime_ratio',
    'health',
    'age',
    'goout',
    'Dalc_per_week',
    'reason',
    'Mjob',
    'class',
    'Medu',
    'freetime',
    'Fedu',
    'PairEdu',
    'All_alc',
    'activities',
    'Walc',
    'famsup',
    'famrel',
    'Fjob' ,
    'guardian',
    'failures',
    'traveltime',
    'schoolsup',
    'famsize',
    'school',
    'higher',
    'nursery',
    'romantic',
    'address',
    'paid',
    'more_high',
    'internet',
    'Pstatus',
    'All_sup'],
      value:''
    }),
    methods: {
      onchange()
      {
          this.loaddata()
      },
      loaddata() {
        // console.log('+++++++++++')
        var url = 'http://127.0.0.1:8000/datasets/column/' + this.value ;
        this.head = this.value + "与其人数统计结果分布图"
        console.log("url:",url)
        axios.get(url).then((response) => {
          this.importance = response.data.result
          // console.log('motherfucker', this.importance)
          this.loadData_X()
        }).catch((err) => {
          console.log(err)
        })
      },
      loadData_X() {
        // console.log("\[DEBUG\] MYDATA in the next fun()= ", this.importance)
        this.data_key = []
        this.data_value = []
        // console.log("length = ",Object.keys(this.importance).length)
      //  for (var i = 0, l = Object.keys(this.importance).length; i < l; i++)
          for (var key in this.importance) 
          {
           // console.log("存啥了key？",key)
            this.data_key.push(key)
            //console.log("存啥了啊",this.importance[key])
            this.data_value.push(this.importance[key])
          }
         // this.loadData_Y()
          //  return this.data_key
            console.log(" data_key?",this.data_key)
          //   console.log(" data_value?",this.data_value)
            this.echartsInit()
      },
      loadData_Y() {
      //   this.data_value = []
      //  for (var key in this.data_key)
      //   {
      //     this.data_value.push(this.importance[key])
      //     console.log("存啥了啊",this.data_value)
      //   }
      },
      echartsInit() {
        // 找到容器
      //  this.loaddata()
        this.myChart = echarts.init(document.getElementById('myChart'))
         console.log(" data_key?",this.data_key)
            console.log(" data_value?",this.data_value)
        // 开始渲染
        this.myChart.setOption({
          title: {
            text: this.head
          },
          tooltip: {},
          xAxis: {
            data: this.data_key,
            axisLabel:{interval:0}
          },
           grid:{
               x:29,
               y:55,
               x2:35,
               y2:60,
               borderWidth:1
          },
          yAxis: {},
          series: [{
            name: '分数:人数',
            type: 'bar',
            barWidth : 10,//柱图宽度
            barGap:'-50%',//柱图间距
            data: this.data_value
          }]
        })
      },
      
    },
    mounted() {
      this.loaddata()
      // this.loadData_X()
      // this.echartsInit2()
    }
  }

</script>


<style>
  #myChart {
    width: 600px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    float: left;
  }

  /* #myChart2{
    width: 600px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    float: right;
  } */

</style>
