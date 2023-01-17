<template>
  <div class="tag">
    <div v-if="tagPosts.length">
      <PostList :posts="tagPosts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  props: ["tag"],
  components: { PostList, Spinner },

  setup() {
    const route = useRoute();

    const { posts, error, jsonData } = getPosts();
    jsonData();

    const tagPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(route.params.tag);
      });
    });

    return {
      posts,
      error,
      tagPosts,
    };
  },
};
</script>

<style scoped>
.tag {
  max-width: 1000px;
  margin: 0 auto;
}
</style>