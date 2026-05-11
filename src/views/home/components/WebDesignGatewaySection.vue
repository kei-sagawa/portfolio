<template>
  <section class="web-design-gateway" aria-labelledby="web-design-gateway-title">
    <div class="web-design-gateway-inner">
      <p class="gateway-kicker">Web Design</p>

      <h2 id="web-design-gateway-title">世界観を、静かに伝える</h2>

      <p class="gateway-lead">
        個人作家、茶道教室、小さなお店のために。<br />
        余白と空気感を大切にしたWebサイトを制作しています。
      </p>

      <RouterLink class="gateway-link" to="/web-design"> Web制作について見る </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.web-design-gateway {
  width: min(1180px, calc(100% - 80px));
  margin: 0 auto;
  padding: 0 0 112px;
}

.web-design-gateway-inner {
  padding: clamp(56px, 7vw, 84px) clamp(28px, 6vw, 72px);
  text-align: center;
  border: 1px solid rgba(216, 207, 192, 0.82);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62), rgba(255, 248, 240, 0.36));
}

.gateway-kicker {
  margin: 0 0 22px;
  font-size: 12px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

.web-design-gateway h2 {
  margin: 0;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 0.18em;
  color: #342a22;
}

.gateway-lead {
  margin: 30px auto 0;
  max-width: 640px;
  font-size: 14px;
  line-height: 2.3;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.68);
}

.gateway-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  padding: 13px 22px;
  border: 1px solid rgba(190, 176, 155, 0.82);
  background: rgba(255, 255, 255, 0.5);
  color: rgba(58, 42, 31, 0.9);
  font-size: 13px;
  letter-spacing: 0.14em;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.gateway-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(107, 79, 58, 0.5);
}

@media (max-width: 960px) {
  .web-design-gateway {
    width: min(640px, calc(100% - 48px));
    padding-bottom: 88px;
  }
}

@media (max-width: 640px) {
  .web-design-gateway {
    width: calc(100% - 40px);
  }

  .web-design-gateway-inner {
    text-align: left;
  }

  .gateway-link {
    width: 100%;
  }
}
</style>
