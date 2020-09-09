<template>
  <v-timeline>
    <v-timeline-item
      v-for="n in 1"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.0</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">RandomForest</v-card-title>
        <v-card-text>
          性能指标：2.5136288034360588
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.1</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">CatBoost</v-card-title>
        <v-card-text>
          性能指标：2.5201534580726337
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.2</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">XGRFBoost</v-card-title>
        <v-card-text>
          性能指标：2.577467060911487
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.3</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">LightGBM</v-card-title>
        <v-card-text>
          性能指标：2.600404101246184
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.4</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Support Vector Machine</v-card-title>
        <v-card-text>
          性能指标：2.606449937079663
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.5</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">XGBoost</v-card-title>
        <v-card-text>
          性能指标：2.655595771443991
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.6</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">SGD</v-card-title>
        <v-card-text>
          性能指标：2.6793871215014433
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.7</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">ElasticNet</v-card-title>
        <v-card-text>
          性能指标：2.86670253809402
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
          <img src="http://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Version:1.0.8</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">DecisionTree</v-card-title>
        <v-card-text>
          性能指标：3.496992828203838
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>