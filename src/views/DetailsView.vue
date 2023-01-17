<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="postdetails">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getOnePost from "../composables/getOnePost";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    const { post, error, jsonData } = getOnePost(props.id);
    jsonData();
    return { post, error };
  },
};
</script>

<style>
.postdetails {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.postdetails p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}
</style>