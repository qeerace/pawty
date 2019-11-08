<template>
  <v-container class="list">
    <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
          <ListPet />
          <!-- <Test /> -->
        </v-card-text>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ListPet from "./ListPet.vue";
// import Test from "./Test.vue";

export default {
  name: "list",
  components: {
    ListPet
    // Test
  }
};
</script>