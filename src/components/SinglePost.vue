<template>
  <div>
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
.h3-link {
  text-decoration: none;
}
.h3-link:visited {
  color: inherit;
}
</style>