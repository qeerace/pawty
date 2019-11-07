<template>
  <div class="home">
    <v-parallax dark height="470" src="../assets/cat.jpg"></v-parallax>
    <Cover />
    
  </div>
</template>

<script>
import Cover from "@/components/home/Cover.vue";
export default {
  name: "home",
  components: {
    Cover
  }
};
</script>
