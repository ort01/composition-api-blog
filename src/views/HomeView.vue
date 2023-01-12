<template>
  <div class="home">hello</div>
  <p>My name is {{ name }} and my age is {{ age }}</p>
  <button ref="buttonRef" @click="handleClick">Click me</button>
</template>

<script>
// We import the parts from vue that we need to use like refs.
import { ref } from "@vue/reactivity"; // this is generally the way that we work with the composition API.

export default {
  name: "HomeView",

  setup() {
    let name = "John";
    let age = 30;

    const buttonRef = ref(null); //null is initial value; Getting the DOM element through ref="buttonRef" -> buttonRef= ref(initial value)

    const handleClick = () => {
      console.log(buttonRef.value); //<button>Click me</button>
      buttonRef.value.classList.add("active"); //<button class="active">Click me</button>
      buttonRef.value.textContent = "Changed textConent"; //<button>Changed textConent</button>
    };

    return { name, age, handleClick, buttonRef };
  },
};
</script>


<style>
.active {
  background: rgb(55, 163, 196);
}
</style>