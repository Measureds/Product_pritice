<template>
  <v-card>
    <v-card-title>
      The correlation of influencing factors of Examination
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'influence factor',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Correlation', value: 'Correlation' },
        ],
        desserts: [
          {
            name:  "absences",
            Correlation: 172,
          },
          {
            name:  "studytime_ratio",
            Correlation: 123,
          },
          {
            name: "health",
            Correlation: 116,
          },
          {
            name:  "age",
            Correlation: 110,
          },
          {
            name: "goout",
            Correlation:92,
          },
          {
            name:"Dalc_per_week",
            Correlation:73,
          },
          {
            name:"reason",
            Correlation:73,
          },
          {
            name:"Mjob",
            Correlation:65
          },
           {
            name:"class",
            Correlation:64
          },
           {
            name:"Medu",
            Correlation:61
          },
           {
            name:"freetime",
            Correlation:60
          },
           {
            name:"Fedu",
            Correlation:59
          },
           {
            name:"PairEdu",
            Correlation:58
          },
           {
            name:"All_alc",
            Correlation:56
          },
           {
            name:"activities",
            Correlation:51
          },
           {
            name:"Walc",
            Correlation:42
          },
           {
            name:"famsup",
            Correlation:41
          },
           {
            name:"famrel",
            Correlation:41
          },
           {
            name:"Fjob",
            Correlation:41
          },
           {
            name:"guardian",
            Correlation:34
          },
           {
            name:"failures",
            Correlation:30
          },
           {
            name:"traveltime",
            Correlation:30
          },
           {
            name:"schoolsup",
            Correlation:25
          },
           {
            name:"famsize",
            Correlation:24
          },
           {
            name:"school",
            Correlation:23
          },
           {
            name:"higher",
            Correlation:22
          },
           {
            name:"nursery",
            Correlation:21
          },
           {
            name:"romantic",
            Correlation:17
          },
           {
            name:"address",
            Correlation:17
          },
           {
            name:"paid",
            Correlation:16
          },
           {
            name:"more_high",
            Correlation:16
          },
           {
            name:"internet",
            Correlation:13
          },
           {
            name:"Pstatus",
            Correlation:9
          },
           {
            name:"All_sup",
            Correlation:3
          },
        ],
      }
    },
  }
</script>