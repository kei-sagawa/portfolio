<template>
  <section class="gateway-section thoughts-gateway" id="thoughts">
    <div class="section-inner">
      <p class="kicker">Records</p>
      <p class="number">03</p>
      <span class="line" aria-hidden="true"></span>

      <div class="thoughts-content">
        <h2>記録</h2>

        <p class="lead">
          日々の断片は、外へ流しておく。<br />
          Xには制作の過程を。<br />
          noteには少し長い思考を。
        </p>

        <RouterLink class="more-link" to="/thoughts"> 記録の入口へ </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.thoughts-gateway {
  position: relative;
  overflow: hidden;
  padding: 132px 44px 56px;
  background:
    radial-gradient(circle at 88% 34%, rgba(120, 104, 86, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(250, 248, 242, 0.66), rgba(235, 231, 222, 0.52));
}

.thoughts-gateway::before {
  content: '';
  position: absolute;
  right: -10%;
  bottom: -4%;
  width: 74%;
  height: 48%;
  background:
    radial-gradient(circle at 72% 26%, rgba(96, 83, 67, 0.12), transparent 18%),
    radial-gradient(circle at 36% 70%, rgba(96, 83, 67, 0.08), transparent 24%);
  filter: blur(22px);
  opacity: 0.58;
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
  color: rgba(107, 79, 58, 0.68);
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
  font-size: 30px;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

.lead {
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
  .thoughts-gateway {
    padding: 72px 32px 76px;
  }

  h2 {
    font-size: 25px;
  }

  .lead {
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
