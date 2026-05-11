<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink class="nav-logo" to="/" @click="closeMenu">
        綴 <span class="nav-roman">TSUZURI</span>
      </RouterLink>

      <button class="nav-toggle" type="button" @click="isOpen = !isOpen">
        <font-awesome-icon :icon="isOpen ? ['fas', 'xmark'] : ['fas', 'bars']" />
      </button>

      <div class="nav-links" :class="{ open: isOpen }">
        <RouterLink to="/about" @click="closeMenu">綴について</RouterLink>
        <RouterLink to="/works" @click="closeMenu">制作</RouterLink>
        <RouterLink to="/web-design" @click="closeMenu">Web制作</RouterLink>
        <RouterLink to="/thoughts" @click="closeMenu">記録</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

function closeMenu() {
  isOpen.value = false
}
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
  font-size: 18px;
  font-weight: 600;
  color: rgba(58, 42, 31, 0.92);
  letter-spacing: 0.14em;
  display: flex;
  align-items: baseline;
  gap: 10px;
  text-decoration: none;
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
  font-size: 13px;
  letter-spacing: 0.22em;
  color: rgba(43, 43, 43, 0.92);
  text-decoration: none;
}

.nav-links a.router-link-active {
  color: #6b4f3a;
}

.nav-toggle {
  display: none;
  border: none;
  background: transparent;
  font-family: 'Noto Serif JP', serif;
  font-size: 20px;
  color: rgba(58, 42, 31, 0.9);
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
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: min(220px, 70vw);
    padding: 16px 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(216, 207, 192, 0.75);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 13px;
    letter-spacing: 0.12em;
  }
}
</style>
