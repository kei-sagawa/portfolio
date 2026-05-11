<template>
  <main class="works-page">
    <NavbarSection />

    <section class="works-hero">
      <p class="kicker">Works</p>

      <h1>
        作ることを通して、<br />
        思索をかたちにする。
      </h1>

      <p class="lead">
        茶道、記録、暮らし、Web。<br />
        綴では、日々の思考や違和感から生まれたものを制作しています。
      </p>
    </section>

    <section class="works-section">
      <div class="works-list">
        <article
          v-for="work in works"
          :key="work.id"
          class="work-card"
          :class="{ featured: work.id === 'chachou' }"
        >
          <div class="work-meta">
            <p class="status">{{ work.status }}</p>
            <p class="subtitle">{{ work.subtitle }}</p>
          </div>

          <div class="work-content">
            <h2>{{ work.title }}</h2>
            <p class="description">{{ work.description }}</p>

            <div class="tags">
              <span v-for="tag in work.tags" :key="tag">{{ tag }}</span>
            </div>

            <a v-if="work.url" class="work-link" :href="work.url" target="_blank" rel="noopener">
              サイトを見る
            </a>
          </div>
        </article>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'
import { works } from '@/data/works'
</script>

<style scoped>
.works-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

.works-hero {
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 180px 40px 110px;
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

.works-section {
  padding: 20px 40px 150px;
}

.works-list {
  width: min(1040px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 32px;
}

.work-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 48px;
  padding: 42px 44px;
  border: 1px solid rgba(216, 207, 192, 0.72);
  background: rgba(255, 255, 255, 0.42);
}

.work-card.featured {
  background:
    radial-gradient(circle at top left, rgba(107, 79, 58, 0.08), transparent 42%),
    rgba(255, 255, 255, 0.52);
}

.work-meta {
  border-right: 1px solid rgba(216, 207, 192, 0.72);
  padding-right: 34px;
}

.status {
  margin: 0 0 18px;
  display: inline-flex;
  padding: 6px 10px;
  border: 1px solid rgba(107, 79, 58, 0.24);
  font-size: 12px;
  letter-spacing: 0.16em;
  color: rgba(107, 79, 58, 0.78);
}

.subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.12em;
  color: rgba(43, 43, 43, 0.66);
}

h2 {
  margin: 0;
  font-size: 28px;
  letter-spacing: 0.14em;
  font-weight: 500;
}

.description {
  margin: 24px 0 0;
  max-width: 680px;
  font-size: 15px;
  line-height: 2.25;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.74);
}

.tags {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tags span {
  display: inline-flex;
  padding: 6px 10px;
  border: 1px solid rgba(216, 207, 192, 0.78);
  background: rgba(255, 248, 240, 0.48);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.86);
}

.work-link {
  margin-top: 30px;
  display: inline-flex;
  padding: 12px 18px;
  border: 1px solid rgba(107, 79, 58, 0.28);
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
}

@media (max-width: 820px) {
  .works-hero {
    padding: 150px 24px 86px;
  }

  .works-section {
    padding: 20px 24px 112px;
  }

  .work-card {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 32px 26px;
  }

  .work-meta {
    border-right: none;
    border-bottom: 1px solid rgba(216, 207, 192, 0.72);
    padding-right: 0;
    padding-bottom: 24px;
  }

  h1 {
    font-size: 34px;
  }

  h2 {
    font-size: 24px;
  }
}
</style>
