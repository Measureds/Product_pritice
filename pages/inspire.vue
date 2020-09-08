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
        <tr v-for="item in posts" :key="item.name">
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
import axios from '../plugins/axios'

export default {
  asyncData (op) {//请求
			return axios.get('')
		      .then((res) => {
		        return { posts: res.data.slice(0,5) }
		      })
		},
}
</script>