<template>
 <div class="">
   <NavBar></NavBar>
   <Nuxt/>
 </div>
</template>

<script lang="ts">
import NavBar from "~/components/NavBar.vue";
export default {
  components:{
  NavBar,
  },
  name: "default"
}
</script>

<style scoped>

</style>
