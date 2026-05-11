<template>
  <section class="tea-gateway" id="tea">
    <div class="section-inner">
      <div class="tea-layout">
        <div class="tea-content">
          <span class="section-label">茶</span>

          <h2>
            静けさを、<br />
            日々に置く。
          </h2>

          <p>
            道具、所作、季節。<br />
            茶道を通して見えてくるものを、制作や記録の中に残しています。
          </p>

          <RouterLink class="tea-link" to="/tea">茶のページへ</RouterLink>
        </div>

        <figure class="tea-image">
          <img src="/images/tea/tea.JPG" alt="炉のある茶室" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.tea-gateway {
  padding: 144px 40px 156px;
}

.section-inner {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

.tea-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(440px, 1fr);
  gap: 44px;
  align-items: center;
}

.tea-content {
  position: relative;
  z-index: 2;
  max-width: 460px;
}

.section-label {
  display: block;
  margin-bottom: 22px;
  font-size: 13px;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.68);
}

h2 {
  margin: 0;
  font-size: 34px;
  line-height: 1.85;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

p {
  margin: 30px 0 0;
  font-size: 15px;
  line-height: 2.25;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.76);
}

.tea-link {
  margin-top: 34px;
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
}

.tea-link:hover {
  opacity: 0.72;
}

.tea-image {
  position: relative;
  margin: 0;
  width: 100%;
  max-width: 620px;
  justify-self: end;
  overflow: hidden;
  border: none;
  background: transparent;
}

.tea-image::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  z-index: 1;
  width: 64%;
  pointer-events: none;

  background: linear-gradient(
    90deg,
    #f5f1e8 0%,
    rgba(245, 241, 232, 0.9) 12%,
    rgba(245, 241, 232, 0.7) 28%,
    rgba(245, 241, 232, 0.4) 48%,
    rgba(245, 241, 232, 0.16) 68%,
    rgba(245, 241, 232, 0.03) 86%,
    rgba(245, 241, 232, 0) 100%
  );
}

.tea-image::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(245, 241, 232, 0.02) 0%,
    rgba(245, 241, 232, 0) 30%,
    rgba(245, 241, 232, 0.04) 100%
  );
}

.tea-image img {
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  object-position: 56% center;
  filter: brightness(0.88) saturate(0.86);
}

@media (max-width: 900px) {
  .tea-layout {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .tea-content {
    max-width: 620px;
  }

  .tea-image {
    max-width: 680px;
    justify-self: start;
  }

  .tea-image::before {
    width: 0;
  }

  .tea-image img {
    aspect-ratio: 4 / 3;
    object-position: center;
  }
}

@media (max-width: 768px) {
  .tea-gateway {
    padding: 104px 20px 116px;
  }

  h2 {
    font-size: 28px;
    line-height: 1.8;
  }

  p {
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
