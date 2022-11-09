<template>
  <div class="home">
    <VLoader v-if="posts.length === 0">
      Chargement...
    </VLoader>

    <section class="container">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :tags="post.tags"
      />
    </section>
  </div>
</template>

<script setup>
import PostCard from '../components/PostCard.vue'
import { onMounted, ref } from 'vue'
import VLoader from '../components/vLoader.vue'

const endpoint = 'https://dummyjson.com/posts'
const posts = ref([])

const fetchPosts = async () => {
  const postResponse = await fetch(endpoint)
  return await postResponse.json()
}

onMounted(async () => {
  const response = await fetchPosts()

  posts.value = response.posts
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin-inline: auto;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 1rem;
}
</style>
