<template>
  <div>
    <h1>Props</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";
export default {
  name: "Props",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {
        title: "Welcome to the Blog",
        body: "cupiditate dicta corrupti modi voluptatibus nobis ea quam facere accusantium quidem minus fuga perspiciatis. Suscipit debitis blanditiis fuga aliquid, optio nisi pariatur libero obcaecati architecto minima maiores fugiat praesentium inventore rerum? Eius odio a asperiores corporis voluptatibus hic commodi, similique, quia laborum, iure minima ad maiores id rem in reiciendis repudiandae aliquam laboriosam numquam. Commodi beatae laboriosam voluptas magnam. Magni aspernatur repellat doloribus? Incidunt fugiat, soluta enim ipsa esse nisi eos corrupti fuga quae!",
        id: 1,
      },
      {
        title: "top 5 CSS tips",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.cupiditate dicta corrupti modi voluptatibus nobis ea quam facere accusantium quidem minus fuga perspiciatis. Suscipit debitis blanditiis fuga aliquid, optio nisi pariatur libero obcaecati architecto minima maiores fugiat praesentium inventore rerum? Eius odio a asperiores corporis voluptatibus hic commodi, similique, quia laborum, iure minima ad maiores id rem in reiciendis repudiandae aliquam laboriosam numquam. Commodi beatae laboriosam voluptas magnam. Magni aspernatur repe!",
        id: 2,
      },
    ]);

    return { posts };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>