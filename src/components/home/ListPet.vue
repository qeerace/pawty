<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <FilterLost />
    <v-layout wrap>
      <v-flex xs12 md3 v-for="(item, index) in wholeResponse" :key="index" mb-2>
        <v-card class="mx-auto" max-width="400">
          <v-responsive :aspect-ratio="16/9">
          <v-img :src="item.pic_url" aspect-ratio="1">
            <span class="my-span">
              {{item.post_type}}
              {{item.pet_type}}
            </span>
          </v-img>
          <v-card-title class="title font-weight-black blue-grey--text text--darken-3">{{item.topic}}</v-card-title>
          <v-card-subtitle pb-0>
            <v-list-item class="grow">
              <v-row align="center" justify="start">
                <v-icon medium color="yellow darken-3">mdi-gender-male-female</v-icon>
                <div class="subheading mr-2 blue-grey--text text--darken-3">{{item.gender}}</div>
              </v-row>
              <v-row align="center" justify="end">
                <v-icon medium color="yellow darken-3">mdi-map-marker</v-icon>
                <div class="subheading mr-2 blue-grey--text text--darken-3">{{item.province}}</div>
              </v-row>
            </v-list-item>
            <div>Missing/Found Date:</div>
          </v-card-subtitle>
          <v-card-text class="blue-grey--text text--darken-3">
            <div>{{item.missing_found_date}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mx-0 subtitle-2 font-italic font-weight-medium amber--text text--lighten-5"
              color="yellow darken-3"
              @click="petdetail(item.id)"
            >More Detail</v-btn>
          </v-card-actions>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import FilterLost from "@/components/home/FilterLost.vue";
export default {
  data() {
    return {
      wholeResponse: [],
      loading: true
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:5000/lost-found-pets")
      .then(response => {
        this.wholeResponse = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    petdetail(id) {
      this.$router.push("/pet-detail/" + id);
      console.log(id)
    }
  },
  components: {
    FilterLost
  }
};
</script>

<style lang="scss" scoped>
.my-span {
  background-color: #f9a825;
  color: white;
  font-weight: bold;
  margin-right: 0;
  float: right;
}
</style>