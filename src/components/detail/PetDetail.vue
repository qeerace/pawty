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
              <h2 class="headline mb-0">{{petdetail.topic}}-{{petdetail.province}}</h2>
              <p>{{ petdetail.description}} </p>
              <h3>Pet Owner:</h3>{{petdetail.name}}
               <h4>Phone:</h4> {{petdetail.tel}}
               <p>line: {{petdetail.email}}</p>
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
  props: ['petid'],
  data () {
    return {
      petdetail: '',
      loading: true,
    }
  },
  mounted () {
      console.log(this.petid)
    axios
      .get('http://127.0.0.1:5000/lost-found-pets/post-id/'+ this.petid)
      .then(response => {
        this.petdetail = response.data
        this.loading = false
        console.log(this.petdetail)
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

