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
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";

export default {
  name: "PostList",
  components: {
    SinglePost,
  },
  props: ["posts"],
  setup(props) {
    // console.log(props.posts);
    // onMounted(() => console.log("component mounted"));
    // onUnmounted(() => console.log("component unmounted"));
    // onUpdated(() => console.log("component updated"));
    // // using lifecycle hooks inside setup() => onMounted
  },
  //   mounted() {
  //     //using lifecycle hooks outside setup() => mounted
  //     console.log("component monted using options API");
  //   },
};
</script>


<style scoped>
</style>