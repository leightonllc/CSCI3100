/**
 * @Author: leightonllc 
 * @Description: /App.vue is the initial page mounted in the application.
 * @Date: 2022-05-06 19:09:03
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 19:12:07
 */

<template>
  <!--render the matched component for the given path-->
  <router-view />
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

html,
body {
  height: 100vh;
  margin: 0px !important;
  padding: 0px !important;
}
</style>
