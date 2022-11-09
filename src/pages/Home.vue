<template>
  <div class="home">
    <h1>This is the Homepage</h1>
    <!-- Exemple de lien à utiliser pour lier vos cards à la page `Post` -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Dé-commenter les deux lignes ci-dessous
// const endpoint = `https://dummyjson.com/posts`

onMounted(() => {
  // faire le fetch ici pour aller chercher la liste de tous les posts
})
</script>
