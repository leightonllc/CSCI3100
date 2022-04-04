<template>
  <div class="container">
    <div class="left">
      <SideBar />
    </div>
    <div class="content d-flex vh-100 row align-items-center justify-content-center">
      <div class="col-md-12 text-center">Your change is effective now.</div>
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
.box {
  background: rgba(255, 255, 255, 1);
  padding: 30px;
  margin: 30px;
  border-radius: 30px;
}
.formcontent {
  padding: 30px;
}
.propic {
  width: 114px;
  height: 114px;
  background: rgba(196, 196, 196, 1);
  opacity: 1;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
}

.propic, img {
  
    max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  color: #868686;
  font-family: Poppins;
  font-weight: Bold;
  font-size: 16px;
  opacity: 1;
  padding: 30px 0px;
}
.container {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  max-width: unset;
}
.right {
  padding: 30px 20px;
}
.cater {
  padding-bottom: 50px;
}
.header {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  color: #000000;
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