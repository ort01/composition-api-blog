<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";

export default {
  name: "PostList",
  components: {
    SinglePost,
  },
  props: ["posts"],
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>