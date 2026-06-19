<template>
  <section class="gateway-section works" id="works">
    <div class="section-inner">
      <div class="works-copy">
        <p class="kicker">Works</p>
        <p class="number">02</p>
        <span class="line" aria-hidden="true"></span>

        <div class="section-head">
          <h2>制作</h2>

          <p>
            茶道、記録、暮らし、Web。<br />
            思索から生まれたものを、<br />
            少しずつ形にしています。
          </p>
        </div>

        <RouterLink class="more-link" to="/works">制作を見る</RouterLink>
      </div>

      <RouterLink class="works-visual" to="/works" aria-label="制作を見る">
        <figure class="shot shot-back shot-back-1">
          <img src="/images/works/tsuzuri-home.jpg" alt="" />
        </figure>

        <figure class="shot shot-back shot-back-2">
          <img src="/images/works/chachou-dashboard.jpg" alt="" />
        </figure>

        <figure class="shot shot-main">
          <img src="/images/works/komachi-home.jpg" alt="新古茶道具 宮原のトップページ" />
        </figure>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.works {
  position: relative;
  overflow: hidden;
  padding: 132px 44px 96px;
}

.works::before {
  content: '';
  position: absolute;
  right: -18%;
  bottom: -10%;
  width: 78%;
  height: 54%;
  filter: blur(44px);
  opacity: 0.5;
  pointer-events: none;
}

.section-inner {
  position: relative;
  z-index: 1;
  width: min(100%, 1080px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  gap: 72px;
}

.works-copy {
  min-width: 0;
}

.kicker {
  margin: 0 0 18px;
  font-size: 13px;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.7);
}

.number {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.22em;
  color: rgba(58, 42, 31, 0.72);
}

.line {
  display: block;
  width: 32px;
  height: 1px;
  margin: 16px 0 34px;
  background: rgba(107, 79, 58, 0.34);
}

h2 {
  margin: 0;
  font-size: 32px;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

.section-head p {
  margin: 34px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.76);
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

.works-visual {
  position: relative;
  display: block;
  min-height: 420px;
  text-decoration: none;
}

.shot {
  position: absolute;
  margin: 0;
  overflow: hidden;
  background: rgba(255, 252, 245, 0.72);
  border: 1px solid rgba(107, 79, 58, 0.14);
  box-shadow: 0 28px 80px rgba(58, 42, 31, 0.12);
}

.shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.82) contrast(0.94);
}

.shot-main {
  right: 0;
  top: 62px;
  width: min(560px, 86%);
  aspect-ratio: 16 / 9;
  z-index: 3;
}

.shot-back {
  z-index: 1;
  opacity: 0.48;
}

.shot-back-1 {
  left: 6%;
  top: 0;
  width: 42%;
  aspect-ratio: 16 / 10;
  transform: translateY(6px);
}

.shot-back-2 {
  right: 10%;
  bottom: 0;
  width: 48%;
  aspect-ratio: 16 / 10;
  opacity: 0.52;
}

.shot-main figcaption {
  position: absolute;
  left: 22px;
  bottom: 18px;
  padding: 10px 14px;
  color: #f8f3ea;
  font-size: 13px;
  letter-spacing: 0.08em;
  background: rgba(43, 31, 22, 0.56);
  backdrop-filter: blur(10px);
}

.shot-main figcaption span {
  display: block;
  margin-bottom: 4px;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: rgba(248, 243, 234, 0.68);
}

.works-visual:hover .shot-main {
  transform: translateY(-4px);
}

.shot-main {
  transition:
    transform 0.8s ease,
    box-shadow 0.8s ease;
}

@media (max-width: 960px) {
  .works {
    padding: 72px 32px 84px;
  }

  .section-inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  h2 {
    font-size: 26px;
  }

  .works-visual {
    min-height: 320px;
  }

  .shot-main {
    top: 46px;
    width: 88%;
  }
}

@media (max-width: 640px) {
  .works {
    padding: 72px 20px 80px;
  }

  .works-visual {
    min-height: 260px;
  }

  .shot-main {
    width: 92%;
  }

  .shot-back-1 {
    width: 52%;
  }

  .shot-back-2 {
    width: 56%;
  }

  .shot-main figcaption {
    left: 14px;
    bottom: 12px;
    font-size: 11px;
  }
}
</style>
