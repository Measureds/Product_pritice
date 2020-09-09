<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      </div>
      <v-card>
          <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in info" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import myaxios from '~/plugins/myaxios'
import axios from 'axios'

export default {
  asyncData ({ params }) {//请求
	return axios({
	    method: 'get',
	    url: 'https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists'
	})
	.then(function (response) {
            console.log(response.data)
            return { info: response.data};
            error(params)
        })   
    },
}
</script>