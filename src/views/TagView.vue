<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
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
import TagCloud from "../components/TagCloud.vue";
import { useRoute } from "vue-router";

export default {
  props: ["tag"],
  components: {
    PostList,
    Spinner,
    TagCloud,
  },

  setup() {
    const route = useRoute();

    const { posts, error, jsonData } = getPosts();
    jsonData();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(route.params.tag);
      });
    });

    return {
      posts,
      error,
      postsWithTag,
    };
  },
};
</script>

<style scoped>
.tag {
  max-width: 1000px;
  margin: 0 auto;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>