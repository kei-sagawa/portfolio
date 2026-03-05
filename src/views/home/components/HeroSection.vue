<template>
  <section class="hero-full">
    <div class="overlay">
      <img src="/hero.jpg" class="hero-bg" />
    </div>

    <Hero />

    <div class="scroll-indicator">SCROLL</div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Hero from './HeroView.vue'

let onScroll: (() => void) | null = null

onMounted(() => {
  const band = document.querySelector('.vertical-band') as HTMLElement | null
  let ticking = false

  onScroll = () => {
    if (!band) return
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const scroll = window.scrollY
      band.style.transform = `translateX(-50%) translateY(${scroll * 0.08}px)`
      ticking = false
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.hero-full {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.overlay {
  position: absolute;
  inset: 0;
}
.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.58) contrast(1.06) saturate(0.95);
}
.hero-full::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.52)),
    radial-gradient(circle at 60% 35%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.62) 70%);
  pointer-events: none;
}
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  font-size: 12px;
  letter-spacing: 0.3em;
  color: white;
  animation: scrollFade 2s infinite;
}
@keyframes scrollFade {
  0% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.6;
  }
}
</style>
