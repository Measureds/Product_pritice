<template>
  <div>
      <!-- 1 -->
      <v-form 
      ref="form"
      v-model="valid" >
    <v-col cols="12"  v-for="(item,name) in menuList" :key="name">
        <header>{{name}}</header>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
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
    >
      submit
    </v-btn>
   </v-form >
    
  </div>
</template>

<script>
  export default {
    data: () => ({
        valid:{
  "School": "string",
  "Class": 0,
  "Age": 0,
  "Address": "string",
  "Famsize": "string",
  "Pstatus": "string",
  "Medu": 0,
  "Fedu": 0,
  "Mjob": "string",
  "Fjob": "string",
  "Reason": "string",
  "Guardian": "string",
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
       school_list:["GP","MS"] ,
       class_list:[0,1] ,
       age_list:[15,16,17,18,19,20,21,22] ,
       address:["U","R"] ,
       famsize_list:["LE3","GT3"] ,
       Pstatus_list:["T","A"] ,
       Medu_list:[0,1,2,3,4] ,
       Fjob_list:["services","other","at_home","teacher","health"] ,
       reason_list:["course","reputation","home","other"] ,
       guardian_list:["mother","father","other"] ,
       traveltime_list:[0,1,2,3,4] ,
       failures_list:[0,1,2,3] ,
       schoolsup_list:[true,false] ,
       famsup_list:[true,false] ,
       paid_list:[true,false] ,
       activities_list:[true,false] ,
       nursery_list:[true,false] ,
       higher_list:[true,false] ,
       internet_list:[true,false] ,
       romantic_list:[true,false] ,
       famrel_list:[1,2,3,,4,5] ,
       freetime_list:[1,2,3,4,5] ,
       goout_list:[1,2,3,4,5] ,
       dalc_list:[1,2,3,4,5] ,
       Walc_list:[1,2,3,4,5] ,
       helath_list:[1,2,3,4,5] ,
       absences_list:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,30,32,38,40,54,56,75] ,}




    }),
    methods:{
         validate () {
             console.log(this.vaild)
        this.$refs.form.validate(this.valid)
      },
    }

  }
</script>