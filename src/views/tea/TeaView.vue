<template>
  <main class="tea-page">
    <NavbarSection />

    <TeaHeroSection />
    <!-- <TeaPhilosophySection /> -->
    <TeaGallerySection />
    <!-- <ChachouSection /> -->
    <!-- <TeaShopSection /> -->
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'
import TeaHeroSection from './components/TeaHeroSection.vue'
// import TeaPhilosophySection from './components/TeaPhilosophySection.vue'
import TeaGallerySection from './components/TeaGallerySection.vue'
// import ChachouSection from './components/ChachouSection.vue'
// import TeaShopSection from './components/TeaShopSection.vue'
</script>

<style scoped>
.tea-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}
</style>
