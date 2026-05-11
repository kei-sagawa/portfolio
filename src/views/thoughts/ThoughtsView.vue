<template>
  <main class="thoughts-page">
    <NavbarSection />

    <section class="thoughts-hero">
      <p class="kicker">Thoughts</p>

      <h1>
        日々の断片を、<br />
        外の場所に綴る。
      </h1>

      <p class="lead">
        この場所には、すべてを溜め込まない。<br />
        日々の気づきや制作の過程は、外の場所に少しずつ置いていくことにしました。
      </p>
    </section>

    <section class="thoughts-section">
      <div class="thoughts-list">
        <article v-for="link in thoughtLinks" :key="link.id" class="thought-card">
          <div>
            <p class="platform">{{ link.title }}</p>
            <p class="description">{{ link.description }}</p>
          </div>

          <a :href="link.href" target="_blank" rel="noopener">
            {{ link.label }}
          </a>
        </article>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'
import { thoughtLinks } from '@/data/thoughtLinks'
</script>

<style scoped>
.thoughts-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

.thoughts-hero {
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 180px 40px 108px;
}

.kicker {
  margin: 0 0 22px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.65;
  letter-spacing: 0.16em;
  font-weight: 500;
}

.lead {
  margin: 38px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.76);
}

.thoughts-section {
  padding: 18px 40px 120px;
}

.thoughts-list {
  width: min(920px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.thought-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 36px;
  align-items: center;
  padding: 36px 38px;
  border: 1px solid rgba(216, 207, 192, 0.72);
  background: rgba(255, 255, 255, 0.42);
}

.platform {
  margin: 0;
  font-size: 24px;
  letter-spacing: 0.18em;
  color: #3a2a1f;
}

.description {
  margin: 18px 0 0;
  font-size: 14px;
  line-height: 2.15;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.72);
}

.thought-card a {
  display: inline-flex;
  white-space: nowrap;
  padding: 12px 18px;
  border: 1px solid rgba(107, 79, 58, 0.28);
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
}

.thoughts-note {
  padding: 30px 40px 150px;
}

.note-inner {
  width: min(760px, 100%);
  margin: 0 auto;
  text-align: center;
}

.note-inner p {
  margin: 0;
  font-size: 15px;
  line-height: 2.3;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.68);
}

@media (max-width: 760px) {
  .thoughts-hero {
    padding: 150px 24px 86px;
  }

  .thoughts-section {
    padding: 20px 24px 96px;
  }

  .thought-card {
    grid-template-columns: 1fr;
    gap: 26px;
    padding: 30px 26px;
  }

  h1 {
    font-size: 34px;
  }

  .thoughts-note {
    padding: 20px 24px 112px;
  }
}
</style>
