<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post-details">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag" class="tags">#{{ tag }}</div>
    <button @click="handleDelete" class="delete">Delete</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getOnePost from "../composables/getOnePost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const { post, error, jsonData } = getOnePost(props.id); // (route.params.id)
    jsonData();

    const handleDelete = async () => {
      await projectFirestore.collection("Posts").doc(props.id).delete();
      router.push({ name: "Home" });
    };

    return { post, error, handleDelete };
  },
};
</script>

<style scoped>
.post-details {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.post-details h3 {
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: rgba(68, 68, 68, 0.76);
  margin-bottom: 30px;
  max-width: 400px;
  text-decoration: none;
}
.post-details h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: rgb(233, 211, 219);
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
  border-radius: 5px;
}
.tags {
  margin: 30px 10px 10px;
  display: inline-block;
  color: rgba(150, 93, 112, 0.484);
  font-weight: bold;
}

.delete {
  border: none;
  padding: 5px 10px;
  background: rgb(233, 211, 219);
  color: black;
  border-radius: 5px;
  font-size: 13px;
  display: block;
  margin: auto;
  cursor: pointer;
  transition: all 0.3s;
}

.delete:hover {
  background: rgb(235, 189, 206);
  transform: translateY(-3px);
}
.delete:active {
  background: rgb(233, 206, 216);
  transform: translateY(-1px);
}
</style>