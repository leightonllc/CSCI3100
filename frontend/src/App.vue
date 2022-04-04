<template>
  <div style="min-height:100%">
    <router-view/>
  </div>
</template>
<script>
import UpperBar from './components/upperBar/UpperBar.vue'
export default {
  name: 'App',
  components: {
      UpperBar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
html, body {
  height: 100vh;
  margin: 0px !important;
  padding: 0px !important;
}
</style>
