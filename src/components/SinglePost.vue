<template>
  <div class="post">
    <router-link
      :to="{ name: 'Details', params: { id: post.id } }"
      class="h3-link"
    >
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    // with composition API you have to use props with "props.name of the prop"
    const snippet = computed(() => {
      return props.post.body.substring(0, 150) + "...";
    });

    return { snippet };
  },
};
</script>


<style scoped>
.post {
  margin: 0 40px 30px;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: rgba(68, 68, 68, 0.76);
  margin-bottom: 10px;
  max-width: 400px;
  text-decoration: none;
}
.post h3::before {
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
</style>