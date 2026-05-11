<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink class="nav-logo" to="/" @click="closeMenu">
        綴 <span class="nav-roman">TSUZURI</span>
      </RouterLink>

      <button
        class="nav-toggle"
        type="button"
        @click="isOpen = !isOpen"
        aria-label="メニューを開閉"
      >
        <font-awesome-icon :icon="isOpen ? ['fas', 'xmark'] : ['fas', 'bars']" />
      </button>

      <div class="nav-links" :class="{ open: isOpen }">
        <RouterLink to="/" @click="closeMenu">ホームへ</RouterLink>
        <RouterLink to="/works" @click="closeMenu">制作</RouterLink>
        <RouterLink to="/thoughts" @click="closeMenu">記録</RouterLink>
        <RouterLink to="/about" @click="closeMenu">綴について</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">ご相談</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 16px 40px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(216, 207, 192, 0.72);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
}

.nav-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.nav-logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: rgba(58, 42, 31, 0.92);
  transition: opacity 0.3s ease;
}

.nav-logo:hover {
  opacity: 0.72;
}

.nav-roman {
  font-size: 11px;
  letter-spacing: 0.45em;
  color: rgba(107, 79, 58, 0.82);
  transform: translateY(-1px);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
}

.nav-links a {
  position: relative;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.18em;
  color: rgba(43, 43, 43, 0.9);
  transition:
    color 0.3s ease,
    opacity 0.3s ease;
}

.nav-links a:hover {
  opacity: 0.72;
}

.nav-links a.router-link-active {
  color: #6b4f3a;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 1px;
  background: rgba(107, 79, 58, 0.45);
}

.nav-toggle {
  display: none;
  border: none;
  background: transparent;
  padding: 0;
  font-size: 20px;
  color: rgba(58, 42, 31, 0.9);
  cursor: pointer;
}

/* =========================
   Mobile
========================= */
@media (max-width: 768px) {
  .navbar {
    padding: 12px 18px;
  }

  .nav-logo {
    font-size: 16px;
  }

  .nav-roman {
    font-size: 10px;
    letter-spacing: 0.28em;
  }

  .nav-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    width: min(240px, 75vw);
    padding: 18px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(216, 207, 192, 0.75);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 13px;
    letter-spacing: 0.12em;
  }

  .nav-links a.router-link-active::after {
    display: none;
  }
}
</style>
