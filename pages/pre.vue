<template>
  <div>
      <!-- 1 -->
      <v-form 
      ref="form"
      v-model="valid.form" >
      <v-col cols="12"  v-for="(item,name) in menuList" :key="name">
        <header>{{name}}</header>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          @change="onChangeSelect($event,name)"
          :items="item"
          filled
          label="select"
          dense
        ></v-select>
      </v-col>
   </v-col>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      @click.stop="dialog = true"
    >
      submit
    </v-btn>
   </v-form >
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">预测结果反馈：</v-card-title>

        <v-card-text>
          {{res}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      dialog:false,
      res:[],
        valid:{
          "form":true,
  "School": "",
  "Class": 0,
  "Age": 0,
  "Address": "",
  "Famsize": "",
  "Pstatus": "",
  "Medu": 0,
  "Fedu": 0,
  "Mjob": "",
  "Fjob": "",
  "Reason": "",
  "Guardian": "",
  "TravelTime": 0,
  "StudyTime": 0,
  "Failures": 0,
  "SchoolSup": true,
  "FamSup": true,
  "Paid": true,
  "Activities": true,
  "Nursery": true,
  "Higher": true,
  "Internet": true,
  "Romantic": true,
  "FamRel": 0,
  "FreeTime": 0,
  "GoOut": 0,
  "Dalc": 0,
  "Walc": 0,
  "Health": 0,
  "Absences": 0
},
        menuList:{
       School:["GP","MS"] ,
       Class:[0,1] ,
       Age:[15,16,17,18,19,20,21,22] ,
       Address:["U","R"] ,
       Famsize:["LE3","GT3"] ,
       Pstatus:["T","A"] ,
       Medu:[0,1,2,3,4] ,
       Fedu:[0,1,2,3,4],
       Mjob:["services","other","at_home","teacher","health"] ,
       Fjob:["services","other","at_home","teacher","health"] ,
       Reason:["course","reputation","home","other"] ,
       Guardian:["mother","father","other"] ,
       Traveltime:[0,1,2,3,4] ,
       StudyTime:[1,2,3,4],
       Failures:[0,1,2,3] ,
       Schoolsup:[true,false] ,
       Famsup:[true,false] ,
       Paid:[true,false] ,
       Activities:[true,false] ,
       Nursery:[true,false] ,
       Higher:[true,false] ,
       Internet:[true,false] ,
       Romantic:[true,false] ,
       Famrel:[1,2,3,4,5] ,
       Freetime:[1,2,3,4,5] ,
       Goout:[1,2,3,4,5] ,
       Dalc:[1,2,3,4,5] ,
       Walc:[1,2,3,4,5] ,
       Helath:[1,2,3,4,5] ,
       Absences:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,30,32,38,40,54,56,75] ,}




    }),
    methods:{
         validate () {
             console.log(this.valid)
            // this = that
            axios.post('http://127.0.0.1:8000/predict/form',this.valid).then(response => {
        console.log("结果：",response)
        this.res = response.data.result //.map(e=>e)
        console.log(this.res)
      })
      },
      onChangeSelect(v,n){
        this.valid[n] = v
      }
    }

  }
</script>