<template>
  <section class="gateway-section works" id="works">
    <div class="section-inner">
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
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.works {
  position: relative;
  overflow: hidden;
  padding: 132px 44px 56px;
  background:
    linear-gradient(180deg, rgba(197, 170, 132, 0.28), rgba(229, 218, 200, 0.36)),
    radial-gradient(circle at 86% 84%, rgba(73, 55, 42, 0.18), transparent 28%);
}

.works::before {
  content: '';
  position: absolute;
  right: -18%;
  bottom: -10%;
  width: 78%;
  height: 54%;
  background: rgba(92, 69, 49, 0.18);
  filter: blur(44px);
  opacity: 0.5;
  pointer-events: none;
}

.section-inner {
  position: relative;
  z-index: 1;
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

@media (max-width: 960px) {
  .works {
    padding: 72px 32px 76px;
  }

  h2 {
    font-size: 26px;
  }
}
</style>
