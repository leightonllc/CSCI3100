<template>
     <div class='block1'>
         <p>{{ content }}</p>
         <p>{{ username }}</p>
         <p>{{ postdate }}</p>
     </div>
</template>

<script>

export default {
  name: 'ReplyPost',
  props: ['content', 'date', 'username'],
  data() {
    return {
        postdate: null
    }
  },
  mounted() {
      this.genPostDate();
  },
  methods: {
      genPostDate() {
          let pd = new Date(this.date);
          let year = pd.getFullYear();
          let month = pd.getMonth() + 1;
          let day = pd.getDate();
          let hour = pd.getHours();
          let minute = pd.getMinutes();
          this.postdate = year + "/" + String(month) + "/" + String(day) + " " + String(hour) + ":" + String(minute);
      }
  }
}
</script>

<style scoped>
    .block1 {
        margin: 20px 10px;
        padding: 20px 10px;
        border-radius: 5px;
        border: 1px solid gray;
    }
</style>