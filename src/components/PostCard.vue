<template>
  <RouterLink :to="`/post/${id}`">
    <div class="post-card">
      <h2 class="title">{{title}}</h2>
      <ul class="tags">
        <li
          class="tags-item"
          v-for="(tag, index) in tags"
          :key="index"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.post-card {
  padding: 1rem;
  background: white;
  border-radius: 3px;
  color: black;
}

.title {
  font-weight: bold;
  font-size: 1.125rem;
}

.tags {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;

  &-item {
    color: white;
    background: teal;
    border-radius: 2px;
    padding: 0.2rem 0.4rem;
  }
}
</style>
