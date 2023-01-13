<template>
  <h1>Computed Values</h1>
  <input type="text" v-model="search" />
  <p>{{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>
  <button @click="handleClick">Click</button>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";

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

    //watch hook
    const stopWatch = watch(search, () => {
      console.log("watch funtion ran");
    }); //watch(X - value that i want to watch, function that fires when the value of x changes)

    //watch effect
    const stopWatchEffect = watchEffect(() => {
      console.log("watch effect function ran", search.value);
    }); //It watches any dependencies of the function inside watchEffect, any value that we use inside it. When the value of smth thats inside the function changes, it will automatically run this function.

    const matchingNames = computed(() => {
      //computed watches the changes of the properties inside the computed function
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      //stoping the watch and watch effect functions from watching.
      stopWatch();
      stopWatchEffect();
    };

    return {
      names,
      search,
      matchingNames,
      stopWatch,
      stopWatchEffect,
      handleClick,
      stopWatchEffect,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>