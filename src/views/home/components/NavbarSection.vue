<template>
  <nav class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">綴 <span class="nav-roman">TSUZURI</span></div>
      <div class="nav-links">
        <a href="#works">制作</a>
        <a href="#records">記録</a>
        <a href="#profile">私について</a>
        <a href="#consult">ご相談</a>
        <a href="#contact">お問い合わせ</a>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

function onNavScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  onNavScroll()
  window.addEventListener('scroll', onNavScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onNavScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);

  padding: 16px 40px;
  display: flex;
  justify-content: center;

  border-bottom: 1px solid rgba(216, 207, 192, 0.7);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);

  transition:
    background 0.25s ease,
    padding 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

/* スクロール後：締める */
.navbar.is-scrolled {
  background: rgba(255, 255, 255, 0.97);
  padding: 12px 40px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(216, 207, 192, 0.85);
}

.nav-logo {
  color: rgba(58, 42, 31, 0.92);
}

.nav-links a {
  margin-left: 26px;
  font-size: 13px;
  letter-spacing: 0.22em;
  position: relative;
  padding: 6px 2px;

  /* 文字が負けない濃さにする */
  color: #2b2b2b;

  text-decoration: none;
  opacity: 0.95;
  transition:
    color 0.25s ease,
    opacity 0.25s ease,
    transform 0.15s ease;
}

.nav-links a:hover {
  color: rgba(107, 79, 58, 0.95);
  opacity: 1;
  transform: translateY(-1px);
}
.nav-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-roman {
  font-size: 11px;
  letter-spacing: 0.45em;
  color: rgba(107, 79, 58, 0.82);
  transform: translateY(-1px);
}
</style>
