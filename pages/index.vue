<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>成绩预测</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-banner
      single-line
    >
      通过数据集内学生信息给出学生综合评定成绩等级的预测。
    </v-banner>
    <v-card-text class="grey lighten-4">
      <v-sheet
        max-width="950"
        height="400"
        class="mx-auto"
      >
      <template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col cols="4">
        <v-img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014112909.png" aspect-ratio="1.7"></v-img>
        <p></p>
        <v-img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014112914.png" aspect-ratio="1.7"></v-img>
       
      </v-col>

      <v-col cols="4">
        <v-img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014112905.png" aspect-ratio="1.7" ></v-img>
        <p></p>
        <v-img src="http://www.ruanyifeng.com/blogimg/asset/2014/bg2014112903.png" aspect-ratio="1.7" ></v-img>
       
      </v-col>
    </v-row>
  </v-container>
</template>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      sticky: false,
    }),
  }
</script>
  //slice

  // asyncData ({ params }) {//请求
	// return axios({
	//     method: 'get',
	//     url: 'http://127.0.0.1:8000/raw/column/target'
	// })
	// .then(function (response) {
  //           console.log(response.data)
  //           return { info: response.data};
  //           error(params)
  //       })   
  //   },
}


