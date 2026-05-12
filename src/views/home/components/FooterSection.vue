<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <RouterLink class="logo" to="/"> 綴 <span>TSUZURI</span> </RouterLink>

        <p>
          思索と創作の記録。<br />
          茶道、Web、文章、日々の制作を静かに残しています。
        </p>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <RouterLink to="/">ホームへ</RouterLink>
        <RouterLink to="/works">制作</RouterLink>
        <RouterLink to="/web-design">Web制作</RouterLink>
        <RouterLink to="/about">わたしについて</RouterLink>
        <RouterLink to="/contact">ご相談</RouterLink>
      </nav>

      <div class="footer-links" aria-label="External links">
        <a href="https://x.com/tsuzuri_lab" target="_blank" rel="noopener">X</a>
        <a href="https://note.com/tsuzuri_official" target="_blank" rel="noopener">note</a>
        <a href="https://www.instagram.com/tsuzuri_lab" target="_blank" rel="noopener">
          Instagram
        </a>
        <a href="https://chachou.jp" target="_blank" rel="noopener">茶帳</a>
      </div>
    </div>

    <div class="footer-bottom">
      <small>© 2026 綴 TSUZURI</small>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  padding: 72px 40px 36px;
  background: #2b2b2b;
  color: rgba(255, 255, 255, 0.86);
}

.footer-inner {
  width: min(1080px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  gap: 56px;
}

.logo {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.16em;
}

.logo span {
  font-size: 11px;
  letter-spacing: 0.42em;
  color: rgba(255, 255, 255, 0.66);
}

.footer-brand p {
  margin: 24px 0 0;
  max-width: 420px;
  font-size: 13px;
  line-height: 2.1;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.68);
}

.footer-nav,
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-nav a,
.footer-links a {
  width: fit-content;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.14em;
}

.footer-nav a:hover,
.footer-links a:hover {
  color: #fff;
}

.footer-bottom {
  width: min(1080px, 100%);
  margin: 56px auto 0;
  padding-top: 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-bottom small {
  font-size: 11px;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.52);
}

@media (max-width: 760px) {
  .footer {
    padding: 58px 24px 32px;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-bottom {
    margin-top: 42px;
  }
}
</style>
