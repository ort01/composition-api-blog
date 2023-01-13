<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>