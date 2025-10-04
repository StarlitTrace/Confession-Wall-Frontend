<template>
  <footer class="footer" ref="footerEl">
    <div class="footer-content">
      <div class="footer-left">
        <p>Copyright &copy; 2025 404 Team Not Found</p>
        <p>All rights reserved.</p>
      </div>

      <div class="footer-right">
        <p>Developed by 404 Team Not Found@<a href="https://www.myzjut.org">ZJUT Jinghong Union</a></p>
        <p>Front-end: <a href="https://github.com/Duurant">Duurant</a>, <a href="https://github.com/Chriskyo08">Chriskyo08</a></p>
        <p>Back-end: <a href="https://github.com/A-Hydrogen-ion">A-Hydrogen-ion</a>, <a href="https://github.com/Fridayssheep">Fridayssheep</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const footerEl = ref(null);

// 检查内容高度并决定 footer 的样式
const checkFooterPosition = () => {
  if (!footerEl.value) return;
  
  // 重置 footer 样式
  footerEl.value.style.position = 'relative';
  footerEl.value.style.bottom = 'auto';
  footerEl.value.style.marginTop = 'auto';
};

// 监听窗口大小变化
onMounted(() => {
  checkFooterPosition();
  window.addEventListener('resize', checkFooterPosition);
  // 监听内容变化（可能影响页面高度）
  const observer = new ResizeObserver(checkFooterPosition);
  observer.observe(document.body);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkFooterPosition);
});
</script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  background-color: #f8f9fa;
  color: #9a9fa5;
  border-top: 2px solid #dee2e6;
  transition: position 0.3s ease;
  padding: 1rem 0;
}

.footer-content {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-left {
  text-align: left;
  line-height: 1.4rem;
}

.footer-right {
  line-height: 1.4rem;
}

a {
  color: #797f86;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #3498db;
}
</style>