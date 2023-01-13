<template>
  <div class="refs">hello</div>
  <p>My name is {{ name }} and my age is {{ age }}</p>
  <!-- We don't say name.value here, just name (it automatically shows the value of ref). -->
  <button ref="buttonRef" @click="handleClick">Click me</button>
  <button @click="reactivRefs">Reactivity refs</button>
  <input type="text" v-model="name" />
</template>
  
  <script>
// We import the parts from vue that we need to use like refs.
import { ref } from "@vue/reactivity"; // this is generally the way that we work with the composition API.

export default {
  name: "Refs",

  setup() {
    const name = ref("John");
    const age = ref(30);

    const buttonRef = ref(null); //null is initial value; Getting the DOM element through ref="buttonRef" -> buttonRef= ref(initial value)

    const handleClick = () => {
      console.log(buttonRef.value); //<button>Click me</button>
      buttonRef.value.classList.add("active"); //<button class="active">Click me</button>
      buttonRef.value.textContent = "Changed textConent"; //<button>Changed textConent</button>
    };
    const reactivRefs = () => {
      // We only use the value property inside the setup function itself because the variable = ref, not VALUE, in the template it automatically uses the value when we use the name of the variable.
      name.value = "Frank";
      age.value = 55;
    };

    return { name, age, handleClick, buttonRef, reactivRefs };
  },
};
</script>
  
  
  <style>
.active {
  background: rgb(55, 163, 196);
}
</style>