<template>
  <header>
    <h1>Composition API Blog</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">home</router-link>
      <router-link :to="{ name: 'Create' }">add post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: rgb(193, 119, 176);
  font-size: 48px;
}
header a {
  color: rgb(109, 109, 109);
  text-decoration: none;
  margin-left: 20px;
  transition: all 1s;
}
header a:hover {
  border-bottom: 1px solid rgb(109, 109, 109);
}

header a.router-link-active {
  color: rgb(193, 119, 176);
  font-weight: bold;
}
</style>