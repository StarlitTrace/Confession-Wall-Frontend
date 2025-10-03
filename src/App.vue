<template>
  <div class="app-container">
    <NavBar />

    <div class="main-body">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.app-container {
  padding-top: 66px; /* 为固定的导航栏留出空间 */
}

.main-body {
  margin: 1.8rem 9%;
}
</style>