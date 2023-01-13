<template>
  <div class="refs">
    <h1>Refs</h1>
    <p>{{ personOne.name }} - {{ personOne.age }}</p>
    <button @click="updatePersonOne">Update person One</button>
  </div>
  <div class="reactive">
    <h1>Reactive</h1>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update Person Two</button>
  </div>
</template>
  
  <script>
import { ref, reactive } from "@vue/reactivity";

export default {
  name: "RefsVSReactive",
  setup() {
    const personOne = ref({ name: "Kristina", age: 26 }); //REFS
    const personTwo = reactive({ name: "Peter", age: 30 }); //REACTIVE

    const nameOne = ref("Mario");
    const nameTwo = reactive("Ezio"); //primitive values cannot be made reactive (string, number, boolean)

    const updatePersonOne = () => {
      personOne.value.age = 27;
      // personOne is a ref; we take the value of the REF which is an object (whatever is between () is the value of that ref), and we get acces to its property (age) and its value
    };

    const updatePersonTwo = () => {
      personTwo.age = 27;
      // we dont need to access he value property
    };

    return { personOne, updatePersonOne, personTwo, updatePersonTwo };
  },
};
</script>
  
  
  <style>
</style>