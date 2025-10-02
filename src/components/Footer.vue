<template>
  <footer class="footer">
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

<script setup></script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  margin-top: auto; /* 将页脚推向底部 */
  background-color: #f8f9fa;
  color: #9a9fa5;
  border-top: 2px solid #dee2e6;
  position: relative;
}

.footer-content {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-left {
  text-align: left;
  line-height: 1.1rem;
}

.footer-right {
  line-height: 1.1rem;
}

a {
  color: #797f86;
  text-decoration: none;
}
</style>