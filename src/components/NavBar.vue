<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-left">
        <a href="/" class="navbar-brand">
          <img src="@/assets/icons/sparkling-heart.png" alt="Sparkling Heart" class="navbar-logo" />
          <span class="navbar-title">表白墙</span>
        </a>
        <ul class="navbar-links">
          <li><a href="/post/new"><img src="@/assets/icons/heart-24.svg" alt="表白" height="20">表白</a></li>
          <li><a href="/image"><img src="@/assets/icons/file-media-24.svg" alt="表白" height="20">图床</a></li>
          <li><a href="/user/profile"><img src="@/assets/icons/person-24.svg" alt="表白" height="20">主页</a></li>
        </ul>
      </div>

      <div class="navbar-right">
        <ul class="navbar-links">
          <li><a href="/auth/register">注册</a></li>
          <li><a href="/auth/login">登录</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: .9rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.navbar-left, .navbar-right {
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-brand :deep(svg) {
  width: 24px;
  height: 24px;
  fill: currentColor; /* 使图标颜色与文本颜色保持一致 */
}

.navbar-logo {
  width: 30px;
  height: 30px;
}

.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
}

.navbar-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
  font-size: large;
}

.navbar-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease, border-color 0.3s ease;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>
