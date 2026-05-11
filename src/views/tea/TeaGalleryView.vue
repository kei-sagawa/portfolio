<template>
  <main class="gallery-page">
    <NavbarSection />

    <section class="gallery-hero">
      <p class="kicker">Objects</p>
      <h1>道具の記録</h1>
      <p class="lead">
        茶道具は、使うたびに記憶を帯びていく。<br />
        銘、作者、季節、取り合わせ。<br />
        それぞれの道具に宿る静かな気配を、少しずつ残していきます。
      </p>
    </section>

    <section class="gallery-section">
      <div class="gallery-grid">
        <article v-for="item in teaUtensils" :key="item.id" class="utensil-card">
          <div class="image-frame">
            <img v-if="item.image" :src="item.image" :alt="item.name" loading="lazy" />
            <span v-else>{{ item.category }}</span>
          </div>

          <div class="card-body">
            <p class="category">{{ item.category }}</p>
            <h2>{{ item.name }}</h2>

            <dl>
              <div v-if="item.mei">
                <dt>銘</dt>
                <dd>{{ item.mei }}</dd>
              </div>
              <div v-if="item.author">
                <dt>作</dt>
                <dd>{{ item.author }}</dd>
              </div>
              <div v-if="item.season">
                <dt>季節</dt>
                <dd>{{ item.season }}</dd>
              </div>
            </dl>

            <p class="note">{{ item.note }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '../home/components/NavbarSection.vue'
import { teaUtensils } from '@/data/teaUtensils'
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

.gallery-hero {
  padding: 180px 40px 110px;
  width: min(920px, 100%);
  margin: 0 auto;
}

.kicker {
  margin: 0 0 22px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

h1 {
  margin: 0;
  font-size: clamp(38px, 5vw, 58px);
  line-height: 1.6;
  letter-spacing: 0.18em;
  font-weight: 500;
}

.lead {
  margin: 38px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.76);
}

.gallery-section {
  padding: 30px 40px 150px;
}

.gallery-grid {
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.utensil-card {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.46);
  border: 1px solid rgba(216, 207, 192, 0.72);
}

.image-frame {
  aspect-ratio: 4 / 3;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at center, rgba(107, 79, 58, 0.08), transparent 58%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(233, 226, 217, 0.74));
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-frame span {
  font-size: 13px;
  letter-spacing: 0.28em;
  color: rgba(107, 79, 58, 0.58);
}

.card-body {
  padding: 26px 24px 28px;
}

.category {
  margin: 0 0 12px;
  font-size: 12px;
  letter-spacing: 0.24em;
  color: rgba(107, 79, 58, 0.68);
}

h2 {
  margin: 0;
  font-size: 19px;
  letter-spacing: 0.1em;
  font-weight: 500;
}

dl {
  margin: 20px 0 0;
  display: grid;
  gap: 8px;
}

dl div {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
  align-items: baseline;
}

dt {
  font-size: 12px;
  letter-spacing: 0.18em;
  color: rgba(107, 79, 58, 0.66);
}

dd {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.78);
}

.note {
  margin: 22px 0 0;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.04em;
  color: rgba(43, 43, 43, 0.72);
}

@media (max-width: 960px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .gallery-hero {
    padding: 150px 24px 86px;
  }

  .gallery-section {
    padding: 24px 24px 112px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  h1 {
    font-size: 34px;
  }

  .lead {
    font-size: 15px;
    line-height: 2.2;
  }
}
</style>
