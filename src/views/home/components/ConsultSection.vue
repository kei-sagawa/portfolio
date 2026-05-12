<template>
  <section class="consult" id="consult">
    <div class="section-inner">
      <!-- Left: Services -->
      <div class="consult-services">
        <div v-for="service in services" :key="service.title" class="service-item">
          <p class="service-title">{{ service.title }}</p>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>

      <!-- Right: CTA -->
      <div class="consult-copy">
        <p class="number">05</p>
        <span class="line" aria-hidden="true"></span>

        <h2>ご相談</h2>

        <p class="consult-lead">
          静かな世界観を大切にしながら、<br />
          必要なかたちを一緒に整えます。
        </p>

        <p class="consult-text">
          サイト制作、見せ方の整理、UI調整、<br />
          小さな実装まで。
        </p>

        <p class="consult-text">まずは短いメッセージからでも大丈夫です。</p>

        <p class="consult-scope">Web制作 / UI調整 / 見せ方の整理 / 実装相談</p>

        <div class="consult-actions">
          <RouterLink class="consult-link" to="/contact"> お問い合わせへ </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { RouterLink } from 'vue-router'

const services = [
  {
    title: 'Web制作',
    description: '個人サイトや小さなお店のサイト制作。',
  },
  {
    title: '見せ方の整理',
    description: '構成、文章、導線の見直し。',
  },
  {
    title: 'UI調整',
    description: '余白や配色、画面の整え。',
  },
  {
    title: '小さな実装',
    description: 'Vue / HTML / CSS の実装相談。',
  },
]
</script>

<style scoped>
.consult {
  padding: 148px 44px 156px;
}

.section-inner {
  width: min(100%, 1080px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 120px;
  align-items: start;
}

/* ========================================
   Left: Services
======================================== */
.consult-services {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(107, 79, 58, 0.12);
}

.service-item {
  padding: 34px 0;
  border-bottom: 1px solid rgba(107, 79, 58, 0.12);
}

.service-title {
  margin: 0;
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: 0.08em;
  color: #2b2b2b;
}

.service-description {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.62);
}

/* ========================================
   Right: Copy
======================================== */
.consult-copy {
  width: 100%;
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
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.consult-lead {
  margin: 34px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.78);
}

.consult-text {
  margin: 28px 0 0;
  font-size: 14px;
  line-height: 2.25;
  letter-spacing: 0.05em;
  color: rgba(43, 43, 43, 0.64);
}

.consult-scope {
  margin: 38px 0 0;
  font-size: 11px;
  line-height: 2;
  letter-spacing: 0.16em;
  color: rgba(107, 79, 58, 0.64);
}

.consult-actions {
  margin-top: 42px;
}

.consult-link {
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
}

.consult-link.is-disabled {
  opacity: 0.58;
  cursor: default;
}

/* ========================================
   Responsive
======================================== */
@media (max-width: 900px) {
  .consult {
    padding: 104px 20px 118px;
  }

  .section-inner {
    grid-template-columns: 1fr;
    gap: 72px;
  }

  .service-title {
    font-size: 22px;
  }

  h2 {
    font-size: 30px;
  }

  .consult-lead {
    font-size: 14px;
    line-height: 2.15;
  }

  .consult-text {
    font-size: 13px;
    line-height: 2.05;
  }
}
</style>
