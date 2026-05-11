<template>
  <div class="home-page">
    <NavbarSection />
    <HeroSection />

    <main class="gateway-layout" aria-label="綴の入口">
      <ProfileSection />
      <WorksSection />
      <ThoughtsGatewaySection />
    </main>

    <WebDesignGatewaySection />

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavbarSection from './components/NavbarSection.vue'
import HeroSection from './components/HeroSection.vue'
import WorksSection from './components/WorksSection.vue'
import ThoughtsGatewaySection from './components/ThoughtsGatewaySection.vue'
import ProfileSection from './components/ProfileSection.vue'
import WebDesignGatewaySection from './components/WebDesignGatewaySection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
.home-page {
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
  background: #f4efe6;
}

.gateway-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(40px, 5vw, 72px);
  width: min(1180px, calc(100% - 80px));
  margin: 0 auto;
  padding: 92px 0 72px;
}

:deep(.gateway-section) {
  min-height: 680px;
}

:global(html) {
  scroll-behavior: smooth;
}

#tea,
#works,
#thoughts,
#profile {
  scroll-margin-top: 90px;
}

@media (max-width: 960px) {
  .gateway-layout {
    grid-template-columns: 1fr;
    width: min(640px, calc(100% - 48px));
    padding: 72px 0 56px;
    gap: 32px;
  }

  :deep(.gateway-section) {
    min-height: auto;
  }
}
</style>
