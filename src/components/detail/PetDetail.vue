<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
          color="green">
        </v-progress-circular>
      </div>
  </v-container>

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <!-- <v-img
            :src="singleLost.Poster"
            aspect-ratio="2"
          ></v-img> -->
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{petDetail.topic}}-{{petDetail.province}}</h2>
              <p>{{ petDetail.description}} </p>
              <h3>Pet Owner:</h3>{{petDetail.name}}
               <h4>Phone:</h4> {{petDetail.tel}}
               <p>line: {{petDetail.email}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      petDetail: '',
      loading: true,
    }
  },
  mounted () {
      console.log(this.id)
    axios
      .get('http://127.0.0.1:5000/lost-found-pets/post-id/'+ this.id)
      .then(response => {
        this.petDetail = response.data
        this.loading = false
      }).catch(error => {
        console.log(error);
      });
      
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>

