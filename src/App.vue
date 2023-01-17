<template>
  <Navbar />
  <router-view />
</template>


<script>
import Navbar from "../src/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  margin: 0;
  background: rgb(255, 255, 255);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
