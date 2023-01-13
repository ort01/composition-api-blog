<template>
  <h1>Computed Values</h1>
  <input type="text" v-model="search" />
  <p>{{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";

export default {
  name: "ComputedValues",
  setup() {
    const search = ref("");

    const names = ref([
      "John",
      "Arthur",
      "Sadie",
      "Dutch",
      "Charles",
      "Abigail",
      "Jack",
    ]);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>