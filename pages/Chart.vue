<template>
  <v-timeline>
    <v-timeline-item
      v-for="n in 1"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <!-- <img src="http://i.pravatar.cc/64"> -->
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>date: 2020-09-07</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">V1</v-card-title>
        <v-card-text>
           [r2_score] <br/>
            "G": 0.3026819923371647<br/>
            "M": 0.5402298850574713<br/>
          [auc] <br/>
            "G": 0.5115755579076042<br/>
            "M": 0.5526502785190044<br/>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item
      v-for="n in 1"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <!-- <img src="http://i.pravatar.cc/64"> -->
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>date: 2020-09-07</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">V2</v-card-title>
        <v-card-text>
       [r2_score] <br/>
       "G": 0.7624521072796935<br/>
        "M": 0.7126436781609196<br/>
        [auc] <br/>
       "G": 0.7968075927523728<br/>
       "M": 0.7657463330457291<br/>
        </v-card-text>
      </v-card>
    </v-timeline-item>

     <v-timeline-item
      v-for="n in 1"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <!-- <img src="http://i.pravatar.cc/64"> -->
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>date: 2020-09-08</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">V3</v-card-title>
        <v-card-text>
          [r2_score]<br/> 0.3084157932510938<br/>
          [rsme]<br/> 2.328060360826329<br/>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  <!--  -->
    <v-timeline-item
      v-for="n in 1"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <!-- <img src="http://i.pravatar.cc/64"> -->
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>date:2020-09-09</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">V4</v-card-title>
        <v-card-text>
          [r2_score]<br/> 0.3123073836119675<br/>
          [rsme]<br/> 2.321501045083196<br/>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <!--  -->
  </v-timeline>
</template>