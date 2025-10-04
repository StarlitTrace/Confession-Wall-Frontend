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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 52px; /* 为固定的导航栏留出空间 */
}

.main-body {
  flex: 1;
  margin: 1.8rem 9%;
  display: flex;
  flex-direction: column;
}
</style>