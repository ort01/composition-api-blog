<template>
  <div class="tag-cloud">
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";

export default {
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);

    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  height: fit-content;
  width: fit-content;
  padding: 10px;
  gap: 10px;
  border: 1px solid #eee;
  border-radius: 50px 100px 120px 20px;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.8rem;
}
.tag-cloud a.router-link-active {
  color: rgb(145, 82, 113);
  font-weight: bold;
}
</style>