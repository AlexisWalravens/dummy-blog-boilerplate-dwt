<script setup>
import vLayout from './components/vLayout.vue'

</script>

<template>
  <vLayout>
    <router-view />
  </vLayout>
</template>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  margin-inline: auto;
  padding: 5rem;
}
</style>
