<template>
  <section class="tea-gallery">
    <div class="section-inner">
      <div class="gallery-layout">
        <div class="gallery-content">
          <p class="kicker">Objects</p>

          <h2>道具の記録</h2>

          <p>
            茶道具は、ただ所有するものではなく、<br />
            季節や稽古の記憶とともに残っていくものです。
          </p>

          <RouterLink class="more-link" to="/tea/gallery"> 茶道具ギャラリーへ </RouterLink>
        </div>

        <figure class="gallery-image">
          <img src="/images/tea/objects.JPG" alt="掛物のある茶室" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.tea-gallery {
  padding: 148px 40px 164px;
  background: rgba(255, 255, 255, 0.18);
}

.section-inner {
  width: min(1080px, 100%);
  margin: 0 auto;
}

.gallery-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(420px, 1fr);
  gap: 72px;
  align-items: center;
}

.gallery-content {
  position: relative;
  z-index: 2;
  max-width: 520px;
}

.kicker {
  margin: 0 0 18px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.64);
}

h2 {
  margin: 0;
  font-size: clamp(36px, 4.6vw, 56px);
  line-height: 1.45;
  letter-spacing: 0.18em;
  font-weight: 500;
  color: #2b2b2b;
}

.gallery-content p {
  margin: 42px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.74);
}

.more-link {
  margin-top: 42px;
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
}

.more-link:hover {
  opacity: 0.72;
}

.gallery-image {
  position: relative;
  margin: 0;
  width: 100%;
  max-width: 620px;
  justify-self: end;
  overflow: hidden;
  background: transparent;
}

.gallery-image::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  z-index: 1;
  width: 54%;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #f5f1e8 0%,
    rgba(245, 241, 232, 0.9) 16%,
    rgba(245, 241, 232, 0.56) 44%,
    rgba(245, 241, 232, 0.16) 72%,
    rgba(245, 241, 232, 0) 100%
  );
}

.gallery-image::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(245, 241, 232, 0.04) 0%,
    rgba(245, 241, 232, 0) 40%,
    rgba(245, 241, 232, 0.08) 100%
  );
}

.gallery-image img {
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.94) saturate(0.82);
}

@media (max-width: 900px) {
  .gallery-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .gallery-content {
    max-width: 640px;
  }

  .gallery-image {
    max-width: 680px;
    justify-self: start;
  }

  .gallery-image::before {
    width: 0;
  }

  .gallery-image img {
    aspect-ratio: 4 / 3;
  }
}

@media (max-width: 768px) {
  .tea-gallery {
    padding: 104px 24px 116px;
  }

  h2 {
    font-size: 32px;
  }

  .gallery-content p {
    margin-top: 32px;
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
