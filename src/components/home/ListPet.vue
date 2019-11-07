<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <FilterLost />
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in wholeResponse" :key="index" mb-2>
        <v-card>
          <v-img :src="item.pic_url" aspect-ratio="1">
            <span class="my-span">
              {{item.post_type}}
              {{item.pet_type}}
            </span>
          </v-img>
          <v-card-title primary-title>
            <div>
              <p
                class="mr-2 text-center display-1 font-weight-bold blue-grey--text text--darken-3"
              >{{item.topic}}</p>
              <hr />
              <div>
                <v-row>
                  <v-col cols="12" md="6" class="text-left">
                    <span>
                      <v-icon medium color="yellow darken-3">mdi-gender-male-female</v-icon>
                    </span>
                    <span class="mr-2 title blue-grey--text text--darken-3">{{item.gender}}</span>
                  </v-col>
                  <v-col cols="12" md="6" class="text-right">
                    <span>
                      <v-icon medium color="yellow darken-3">mdi-map-marker</v-icon>
                    </span>
                    <span class="mr-2 title blue-grey--text text--darken-3">{{item.province}}</span>
                  </v-col>
                </v-row>
              </div>
              <div>
                <v-col>
                  <v-row cols="12" md="6" class="text-left">
                    <span>
                      <v-icon medium color="yellow darken-3">mdi-calendar-range</v-icon>
                    </span>
                    <span
                      class="mr-2 title font-weight-regular blue-grey--text text--darken-3"
                    >Missing/Found Date:</span>
                  </v-row>
                  <v-row cols="12" md="6" class="text-right">
                    <span
                      class="mr-2 title blue-grey--text text--darken-3"
                    >{{item.missing_found_date}}</span>
                  </v-row>
                </v-col>
              </div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn
              class="mx-0 subtitle-2 font-italic font-weight-medium amber--text text--lighten-5"
              color="yellow darken-3"
              @click="petDetail(item.id)"
            >More Detail</v-btn>
          </v-card-actions>
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
    petDetail(id) {
      this.$router.push('/pet-detail/' + id );
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