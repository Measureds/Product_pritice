<template>
  <div id="">
    <div id="myChart"></div>
    <!-- <div id="myChart"></div> -->
    <!-- <div id="myChart2" ></div> -->
  </div>
</template>
<script type="text/javascript">
  import echarts from 'echarts'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default {
    name: 'Echarts',
    data() {
      return {
        importance :{}
      }
    },
    methods: {
      loaddata() {
        // console.log('+++++++++++')
        axios.get('http://127.0.0.1:8000/datasets/column/target').then((response) => {
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
          //  console.log(" data_key?",this.data_key)
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
            text: '成绩分布及其人数'
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
      // echartsInit2 () {
      //   this.Chart = echarts.init(document.getElementById('myChart2'))
      //   this.Chart.setOption({
      //     title: {text: 'echarts 饼图'},
      //     series: [
      //       {
      //         name: '访问来源',
      //         type: 'pie',
      //         radius: '55%',
      //         data: [
      //           {value: 235, name: '视频广告'},
      //           {value: 274, name: '联盟广告'},
      //           {value: 310, name: '邮件营销'},
      //           {value: 335, name: '直接访问'},
      //           {value: 400, name: '搜索引擎'}
      //         ]
      //       }
      //     ]
      //   })
      // }
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
