/**
 * @Author: meganmhl
 * @Description: /component/forum/CreateForumPost.vue is a component of Forum.vue. It is a form to add a new post.
 * @Date: 2022-05-01 00:56:37
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:38:24
 */

<template>
  <div>
    <h2>New Post</h2>
    <!-- add new post form -->
    <form class="form" @submit.stop.prevent="buttonClicked">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" v-model="title" required="true"
          placeholder="What is the title of your post?" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea rows="10" class="form-control" v-model="description" required="true"
          placeholder="Write your description in detail"></textarea>
      </div>
      <button class="btn-submit">Submit</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'CreateForumPost',
  props: ['title', 'description'],
  data() {
    return {}
  },
  methods: {
    buttonClicked() {
      this.$emit('create-new-post', {title: this.title, description: this.description});
    }
  }
}
</script>

<style scoped>
.form {
  display: block;
}

.form-control {
  display: block;
}

.form-group {
  margin-top: 5vh
}

.btn-submit {
  border-radius: 10px;
  border-style: solid;
  background-color: #F48023;
  color: white;
  margin-top: 2vh;
  width: 100px;
  height: 50px;
  border-color: white;
  font-weight: bold;
}
</style>