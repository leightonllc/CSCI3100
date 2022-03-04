<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <h1>Timetable Planner</h1>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/sidebar/SideBar'

export default {
  name: 'TimeTable',
  components: {
      SideBar
  }
};
</script>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
        width: 100vw;
        padding: 0;
        max-width: unset;
    }
    .left {
        flex: 2;
        height: 100%;
    }
    .right {
        flex: 10;
    }

    h1 {
        margin: 3%;
        margin-bottom: 1%;
        text-align: left;
    }
</style>