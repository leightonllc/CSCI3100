/**
 * @Author: leightonllc
 * @Description: /views/Done.vue is the response page after user updating the profile.
 * @Date: 2022-05-06 20:13:17
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:13:25
 */

<template>
  <div>
    <UpperBar />
    <div class="container">
      <div class="left">
        <SideBar />
      </div>
      <div class="content d-flex vh-100 row align-items-center justify-content-center">
        <div class="col-md-12 text-center">Your change is effective now.</div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/sidebar/CourseSideBar";

export default {
  name: "Done",
  components: {
    SideBar,
  },
  data() {
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-size: 14px;
  font-family: "Poppins";
}

.container {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  max-width: unset;
}

.left {
  flex: 2;
}

.content {
  background: #f6f6f6;
  padding: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  width: 100%;
  height: 100%;
}
</style>