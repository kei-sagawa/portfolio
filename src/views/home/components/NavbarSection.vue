<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink class="nav-logo" to="/" @click="closeMenu">
        綴 <span class="nav-roman">TSUZURI</span>
      </RouterLink>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-label="メニューを開閉"
        @click="isOpen = !isOpen"
      >
        <font-awesome-icon :icon="isOpen ? ['fas', 'xmark'] : ['fas', 'bars']" />
      </button>

      <div class="nav-links" :class="{ open: isOpen }">
        <RouterLink to="/" @click="closeMenu">ホームへ</RouterLink>
        <RouterLink to="/works" @click="closeMenu">制作</RouterLink>
        <RouterLink to="/web-design" @click="closeMenu">Web制作</RouterLink>
        <RouterLink to="/about" @click="closeMenu">わたしについて</RouterLink>
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
  inset: 0 0 auto;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 14px 40px;
  background: rgba(250, 248, 244, 0.9);
  border-bottom: 1px solid rgba(216, 207, 192, 0.64);
  box-shadow: 0 8px 24px rgba(58, 42, 31, 0.045);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nav-container {
  position: relative;
  width: min(100%, 1200px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  color: rgba(58, 42, 31, 0.92);
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.14em;
  transition: opacity 0.35s ease;
}

.nav-logo:hover {
  opacity: 0.68;
}

.nav-roman {
  font-size: 10px;
  letter-spacing: 0.42em;
  color: rgba(107, 79, 58, 0.72);
  transform: translateY(-1px);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  position: relative;
  color: rgba(43, 43, 43, 0.82);
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.16em;
  transition:
    color 0.35s ease,
    opacity 0.35s ease;
}

.nav-links a:hover {
  opacity: 0.66;
}

.nav-links a.router-link-active {
  color: #6b4f3a;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 1px;
  background: rgba(107, 79, 58, 0.38);
}

.nav-toggle {
  display: none;
  border: none;
  background: transparent;
  padding: 4px;
  color: rgba(58, 42, 31, 0.86);
  font-size: 19px;
  cursor: pointer;
}

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
    display: grid;
    place-items: center;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    display: grid;
    gap: 0;
    width: min(240px, 76vw);
    padding: 8px 18px;
    background: rgba(250, 248, 244, 0.96);
    border: 1px solid rgba(216, 207, 192, 0.74);
    box-shadow: 0 18px 42px rgba(58, 42, 31, 0.12);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    pointer-events: none;
    transition:
      opacity 0.35s ease,
      visibility 0.35s ease,
      transform 0.35s ease;
  }

  .nav-links.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  .nav-links a {
    width: 100%;
    padding: 13px 0;
    font-size: 13px;
    letter-spacing: 0.12em;
    border-bottom: 1px solid rgba(216, 207, 192, 0.5);
  }

  .nav-links a:last-child {
    border-bottom: none;
  }

  .nav-links a.router-link-active::after {
    display: none;
  }
}
</style>
