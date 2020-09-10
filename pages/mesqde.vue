<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Model</th>
          <th class="text-left">Mean square deviation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,item2,index) in importance" :key="index">
          <td>{{ item2 }}</td>
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
 import echarts from 'echarts'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default {
    data:() => {
      return {
        data_key: [],
        data_value:[],
        importance:{}
      }
    },
    methods:{
     loaddata(){
        // console.log('+++++++++++')
        axios.get('http://127.0.0.1:8000/stat/appearance').then((response) => {
          this.importance = response.data.result
          // console.log('motherfucker', this.importance)
          this.loadData_X()
        }).catch((err) => {
          console.log(err)
        })
      },
      loadData_X() {
        // console.log("\[DEBUG\] MYDATA in the next fun()= ", this.importance)
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
             console.log(" data_value?",this.data_value)
      }
      },

      mounted(){
          this.loaddata();
      }
  }
</script>

