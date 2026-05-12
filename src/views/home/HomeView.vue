<template>
  <div class="home-page">
    <NavbarSection />

    <HeroSection />

    <IntroSection />

    <WorksSection />

    <RecordsSection />

    <ProfileSection />

    <ConsultSection @select="onSelectConsult" />

    <ContactSection :prefill-key="consultKey" />

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavbarSection from './components/NavbarSection.vue'
import HeroSection from './components/HeroSection.vue'
import IntroSection from './components/IntroSection.vue'
import WorksSection from './components/WorksSection.vue'
import RecordsSection from './components/RecordsSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import ConsultSection from './components/ConsultSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

type ConsultKey = 'hub' | 'ui' | 'records' | null
const consultKey = ref<ConsultKey>(null)

function onSelectConsult(payload: { key: Exclude<ConsultKey, null> }) {
  consultKey.value = payload.key
}
</script>

<style scoped>
.home-page {
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

/* smooth scroll確実化 */
:global(html) {
  scroll-behavior: smooth;
}

/* 固定ナビ見切れ防止 */
#works,
#records,
#profile,
#contact {
  scroll-margin-top: 90px;
}
</style>
