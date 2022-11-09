<template>
  <div class="movie-detail">
    <section v-if="post !== null">
      <h1>{{ post.title }}</h1>
      <p>{{post.body}}</p>
      <ul class="tags">
        <li
          class="tags-item"
          v-for="(tag, index) in post.tags"
          :key="index"
        >
          {{ tag }}
        </li>
      </ul>
    </section>

    <VLoader v-else>Chargement du post...</VLoader>

    <RouterLink to="/">Retour à la page home</RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import VLoader from '../components/vLoader.vue'

const route = useRoute()

const id = route.params.id

const post = ref(null)

const endpoint = 'https://dummyjson.com/posts/' + id

const fetchPost = async () => {
  const response = await fetch(endpoint)
  return await response.json()
}

onMounted(async () => {
  const response = await fetchPost()
  post.value = response
})
</script>
