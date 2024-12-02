<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
// Import the Home component only once
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
