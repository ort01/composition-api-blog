<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
      <!-- passing the single post to the singlePost component -->
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


<style scoped>
</style>