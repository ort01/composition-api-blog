<template>
  <div>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const jsonData = async () => {
      try {
        let res = await fetch("http://localhost:3000/posts");
        if (!res.ok) {
          throw Error("No Data Available");
        } else {
          let data = await res.json();
          posts.value = data;
        }
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    jsonData();

    return { posts, error };
  },
  mounted() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        posts.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
</style>