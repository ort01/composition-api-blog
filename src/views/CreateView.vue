<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" v-model="title" required />
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeyDown" />
      <div v-for="hashtag in tags" :key="hashtag" class="tags">
        #{{ hashtag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";

export default {
  setup() {
    const router = useRouter();

    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); //removes all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      // await fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   headers: { "Content-type": "application/json" },
      //   body: JSON.stringify(newPost),
      // });

      await projectFirestore.collection("Posts").add(newPost);
      router.push({ name: "Home" });
    };

    return {
      title,
      body,
      tag,
      tags,
      handleKeyDown,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
.create label {
  color: rgba(68, 68, 68, 0.76);
  display: inline-block;
  margin: 15px 0;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  position: relative;
  transform: rotateZ(0deg);
}
.create label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: rgb(233, 211, 219);
  padding-right: 25px;
  padding-bottom: 10px;
  top: -5px;
  left: -10px;
  border-radius: 5px;
  transform: rotateZ(-2deg);
}
input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(221, 221, 221, 0.596);
  margin: 10px 0;
}
textarea {
  height: 50px;
  resize: none;
}
.tags {
  margin: 10px;
  display: inline-block;
  color: rgb(150, 93, 112);
  font-weight: bold;
}
button {
  border: none;
  display: block;
  margin: 40px auto 0;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 1px rgb(153, 153, 153);
  text-transform: uppercase;
  font-weight: bold;
  background: rgb(202, 153, 169);
  color: rgb(255, 255, 255);
}
</style>