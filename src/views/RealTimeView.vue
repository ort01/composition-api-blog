<template>
  <h1>Real Time</h1>
  <div v-for="post in posts" :key="post.id" class="post">
    <router-link
      :to="{ name: 'Details', params: { id: post.id } }"
      class="h3-link"
    >
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" :key="tag">#{{ tag }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("Posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: rgba(68, 68, 68, 0.76);
  margin-bottom: 10px;
  max-width: 400px;
  text-decoration: none;
}
.post h3::before {
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
</style>