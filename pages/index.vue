<template>
  <v-card>
    <v-system-bar class="primary"></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>成绩预测</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-banner
      single-line
    >
      <a herf="#">通过数据集内学生信息给出学生综合评定成绩等级的预测。</a>
    </v-banner>

  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1756717992,2460423109&fm=26&gp=0.jpg',
          },
          {
            src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3200491137,4202371437&fm=26&gp=0.jpg',
          },
          {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599576565088&di=ea5c5659a07eb7387327b57a06184ad7&imgtype=0&src=http%3A%2F%2Fimages.martechadvisor.com%2Fimages%2Fuploads%2Fcontent_images%2Fartificial_intelligence_the_future_of_lead_engagement_5bc747083630a.jpg',
          },
        ],
      }
    },
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


