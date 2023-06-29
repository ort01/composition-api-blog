<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post-details">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag" class="tags">#{{ tag }}</div>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getOnePost from "../composables/getOnePost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    const route = useRoute();

    const { post, error, jsonData } = getOnePost(props.id); // (route.params.id)
    jsonData();
    return { post, error };
  },
};
</script>

<style scoped>
.post-details {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.post-details h3 {
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: rgba(68, 68, 68, 0.76);
  margin-bottom: 30px;
  max-width: 400px;
  text-decoration: none;
}
.post-details h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: rgb(233, 211, 219);
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
  border-radius: 5px;
}
.tags {
  margin: 30px 10px 10px;
  display: inline-block;
  color: rgba(150, 93, 112, 0.484);
  font-weight: bold;
}
</style>