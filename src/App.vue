<template>
  <div class="app-container">
    <NavBar />

    

    <Footer />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.app-container {
  padding-top: 60px; /* 为固定的导航栏留出空间 */
}
</style>