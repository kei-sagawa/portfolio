<template>
  <div class="web-design-page">
    <NavbarSection />

    <main>
      <section class="wd-hero">
        <div class="wd-hero-inner">
          <p class="wd-kicker">Web Design</p>
          <h1>世界観を、静かに伝える。</h1>
          <p class="wd-lead">
            個人作家、茶道教室、小さなお店のために。<br />
            余白と空気感を大切にした、静かなWebサイトを制作しています。
          </p>

          <div class="wd-actions">
            <a href="#works">制作実績を見る</a>
            <RouterLink to="/contact">ご相談はこちら</RouterLink>
          </div>
        </div>
      </section>

      <section class="wd-section wd-target-section">
        <div class="wd-inner">
          <div class="wd-section-head">
            <p>For You</p>
            <h2>こんな方へ</h2>
          </div>

          <div class="target-list">
            <article
              v-for="(item, index) in targets"
              :key="item.title"
              class="target-card"
              :style="{ '--delay': `${index * 0.12}s` }"
            >
              <span class="target-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="works" class="wd-floating-section">
        <div class="wd-section-head">
          <p>Works</p>
          <h2>制作実績</h2>
        </div>

        <p class="wd-section-lead">実際のご依頼を想定して制作したサンプルサイトです。</p>

        <div class="floating-works">
          <article
            v-for="(work, index) in works"
            :key="work.title"
            class="floating-work"
            :class="`floating-work-${index + 1}`"
          >
            <a class="work-island" :href="work.url" target="_blank" rel="noopener">
              <img :src="work.image" :alt="work.title" class="work-image" />

              <div class="work-overlay">
                <div class="work-copy">
                  <p class="work-count">{{ String(index + 1).padStart(2, '0') }}</p>
                  <p class="work-label">架空サイト / サンプル制作</p>
                  <h3>{{ work.title }}</h3>
                  <p>{{ work.text }}</p>
                  <span class="work-link">詳細を見る</span>
                </div>
              </div>
            </a>
          </article>
        </div>
      </section>

      <section class="wd-section">
        <div class="wd-inner">
          <div class="wd-section-head">
            <p>Service</p>
            <h2>できること</h2>
          </div>

          <div class="wd-service-list">
            <span v-for="service in services" :key="service">{{ service }}</span>
          </div>
        </div>
      </section>

      <section class="wd-section wd-section-soft">
        <div class="wd-inner">
          <div class="wd-section-head">
            <p>Price</p>
            <h2>料金の目安</h2>
          </div>

          <div class="wd-grid wd-grid-3">
            <article v-for="plan in plans" :key="plan.name" class="wd-card wd-price-card">
              <p>{{ plan.name }}</p>
              <h3>{{ plan.price }}</h3>
              <span>{{ plan.text }}</span>
            </article>
          </div>

          <p class="wd-note">※ 内容に応じて個別にお見積もりいたします。</p>
        </div>
      </section>

      <section class="wd-section">
        <div class="wd-inner">
          <div class="wd-section-head">
            <p>Flow</p>
            <h2>制作の流れ</h2>
          </div>

          <ol class="wd-flow">
            <li v-for="(flow, index) in flows" :key="flow">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              {{ flow }}
            </li>
          </ol>
        </div>
      </section>

      <section id="contact" class="wd-contact">
        <div class="wd-inner">
          <p class="wd-kicker">Contact</p>
          <h2>ご相談・お問い合わせ</h2>
          <p>
            「こんなサイトを作りたい」という段階でも大丈夫です。<br />
            まずはお気軽にご相談ください。
          </p>

          <div class="wd-actions wd-contact-actions">
            <RouterLink to="/contact">Contact</RouterLink>
            <a href="https://x.com/tsuzuri_lab" target="_blank" rel="noopener">X</a>
            <a href="https://note.com/tsuzuri_official" target="_blank" rel="noopener">note</a>
          </div>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'

const targets = [
  {
    title: '作品の世界観を丁寧に見せたい',
    text: '写真や文章の余韻を大切にしながら、静かに伝わる構成を考えます。',
  },
  {
    title: 'シンプルに運用したい',
    text: 'WordPressよりも軽く、必要な情報に絞ったサイトを制作します。',
  },
  {
    title: '自分らしい表現を大切にしたい',
    text: 'テンプレート感を抑え、その人や場所の空気に合わせて設計します。',
  },
  {
    title: '小さく始めたい',
    text: '1ページのホームページやLPから、無理のない形で始められます。',
  },
]

// {
//     title: 'Atelier NIINA',
//     text: '個人作家の作品を静かに見せるためのポートフォリオサイト。',
//     image: '/images/web-design/atelier-niina.png',
//     url: '/samples/atelier-niina/index.html',
//   },
const works = [
  {
    title: '土音',
    text: '器と暮らしをテーマにした、小さなお店のランディングページ。',
    image: '/images/web-design/tsuchine.png',
    url: '/samples/tsuchine/index.html',
  },
  {
    title: '静庵茶道教室',
    text: '茶道教室の雰囲気と魅力を丁寧に伝える紹介サイト。',
    image: '/images/web-design/seian.png',
    url: '/samples/seian/index.html',
  },
]

const services = [
  '1ページのホームページ制作',
  'ポートフォリオサイト',
  '教室サイト',
  '商品紹介サイト',
  'お問い合わせフォーム',
  '独自ドメイン設定',
  '公開サポート',
]

const plans = [
  {
    name: 'ライト',
    price: '¥50,000〜',
    text: 'シンプルな1ページ構成。',
  },
  {
    name: 'スタンダード',
    price: '¥100,000〜',
    text: '複数セクションのLP・小規模サイト。',
  },
  {
    name: 'プレミアム',
    price: '¥150,000〜',
    text: '設計から公開まで一式対応。',
  },
]

const flows = ['ご相談', 'ヒアリング', 'お見積もり', 'デザイン制作', '実装', '公開・納品']
</script>

<style scoped>
.web-design-page {
  min-height: 100vh;
  color: #2b2b2b;
  background: #f4efe6;
  font-family: 'Noto Serif JP', 'Hiragino Mincho ProN', 'Yu Mincho', serif;
}

.wd-hero {
  padding: 176px 40px 112px;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.56), rgba(244, 239, 230, 0)), #f4efe6;
}

.wd-hero-inner,
.wd-inner {
  width: min(1080px, 100%);
  margin: 0 auto;
}

.wd-hero-inner {
  max-width: 760px;
}

.wd-kicker,
.wd-section-head p,
.work-label {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

.wd-hero h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 0.14em;
  color: #302821;
}

.wd-lead {
  margin: 40px 0 0;
  font-size: 15px;
  line-height: 2.4;
  letter-spacing: 0.09em;
  color: rgba(43, 43, 43, 0.72);
}

.wd-kicker,
.wd-hero h1,
.wd-lead,
.wd-actions {
  opacity: 0;
  transform: translateY(18px);
  animation: heroFadeUp 1s ease forwards;
}

.wd-kicker {
  animation-delay: 0.05s;
}

.wd-hero h1 {
  animation-delay: 0.18s;
}

.wd-lead {
  animation-delay: 0.34s;
}

.wd-actions {
  animation-delay: 0.5s;
}

@keyframes heroFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.wd-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 44px;
}

.wd-actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 13px 20px;
  border: 1px solid rgba(190, 176, 155, 0.82);
  background: rgba(255, 255, 255, 0.52);
  color: rgba(58, 42, 31, 0.9);
  font-size: 13px;
  letter-spacing: 0.14em;
  text-decoration: none;
  transition:
    transform 0.35s ease,
    background 0.35s ease,
    border-color 0.35s ease;
}

.wd-actions a:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(107, 79, 58, 0.5);
}

.wd-section {
  padding: 112px 40px;
}

.wd-section-soft {
  background: rgba(255, 255, 255, 0.22);
}

.wd-section-head {
  margin-bottom: 46px;
  text-align: center;
}

.wd-section-head h2 {
  margin: 0;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: #342a22;
}

.wd-section-lead {
  margin: -20px auto 70px;
  max-width: 620px;
  text-align: center;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.68);
}

/* =========================
   For You
========================= */
.wd-target-section {
  padding-top: 96px;
  padding-bottom: 118px;
}

.target-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.target-card {
  padding: 30px 26px;
  background: rgba(255, 252, 245, 0.46);
  border: 1px solid rgba(107, 79, 58, 0.12);
  box-shadow: 0 24px 70px rgba(58, 42, 31, 0.045);
  opacity: 0;
  transform: translateY(18px);
  animation: fadeUp 0.9s ease forwards;
  animation-delay: var(--delay);
  transition:
    transform 0.7s ease,
    background 0.7s ease,
    border-color 0.7s ease,
    box-shadow 0.7s ease;
}

.target-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 252, 245, 0.7);
  border-color: rgba(107, 79, 58, 0.22);
  box-shadow: 0 30px 80px rgba(58, 42, 31, 0.07);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.target-number {
  display: block;
  margin-bottom: 16px;
  font-size: 11px;
  letter-spacing: 0.24em;
  color: rgba(107, 79, 58, 0.58);
}

.target-card h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.85;
  letter-spacing: 0.1em;
  color: #302821;
}

.target-card p {
  margin: 18px 0 0;
  font-size: 13px;
  line-height: 2.05;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.66);
}

/* =========================
   Base Cards
========================= */
.wd-grid {
  display: grid;
  gap: 26px;
}

.wd-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.wd-card {
  padding: 34px 28px;
  border: 1px solid rgba(216, 207, 192, 0.78);
  background: rgba(255, 255, 255, 0.48);
}

.wd-card h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 0.12em;
}

.wd-card p {
  margin: 18px 0 0;
  font-size: 13px;
  line-height: 2.1;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.68);
}

/* =========================
   Floating Works
========================= */
.wd-floating-section {
  padding: 118px 40px 150px;
  background:
    radial-gradient(circle at 12% 20%, rgba(197, 170, 132, 0.18), transparent 30%),
    radial-gradient(circle at 88% 76%, rgba(73, 55, 42, 0.12), transparent 32%),
    rgba(255, 255, 255, 0.18);
}

.floating-works {
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 96px;
}

.floating-work {
  width: min(760px, 82%);
}

.floating-work-1 {
  margin-left: 4%;
  margin-right: auto;
}

.floating-work-2 {
  margin-left: auto;
  margin-right: 4%;
}

.floating-work-3 {
  margin-left: 10%;
  margin-right: auto;
}

.work-island {
  position: relative;
  display: block;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  background: rgba(255, 252, 245, 0.52);
  border: 1px solid rgba(107, 79, 58, 0.12);
  box-shadow:
    0 32px 90px rgba(58, 42, 31, 0.1),
    0 90px 120px rgba(58, 42, 31, 0.08);
  transition:
    transform 0.9s ease,
    box-shadow 0.9s ease,
    border-color 0.9s ease;
}

.work-island::before {
  content: '';
  display: block;
  aspect-ratio: 16 / 9;
}

.work-island:hover,
.work-island:focus-visible {
  transform: translateY(-8px);
  border-color: rgba(107, 79, 58, 0.24);
  box-shadow:
    0 38px 110px rgba(58, 42, 31, 0.14),
    0 110px 150px rgba(58, 42, 31, 0.1);
}

.work-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.88) contrast(0.96);
  transform: scale(1.035);
  transition:
    transform 1.2s ease,
    filter 1.2s ease;
}

.work-island:hover .work-image,
.work-island:focus-visible .work-image {
  transform: scale(1);
  filter: saturate(0.76) contrast(0.92) brightness(0.58);
}

.work-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 42px;
  background: linear-gradient(
    90deg,
    rgba(29, 23, 19, 0.68),
    rgba(29, 23, 19, 0.38) 46%,
    rgba(29, 23, 19, 0.1)
  );
  opacity: 0;
  backdrop-filter: blur(4px);
  transition: opacity 0.75s ease;
}

.work-island:hover .work-overlay,
.work-island:focus-visible .work-overlay {
  opacity: 1;
}

.work-copy {
  width: min(100%, 560px);
  color: #f8f3ea;
}

.work-count {
  margin: 0 0 12px;
  font-size: 12px;
  letter-spacing: 0.22em;
  color: rgba(248, 243, 234, 0.68);
}

.work-label {
  margin-bottom: 20px;
  color: rgba(248, 243, 234, 0.72);
}

.work-copy h3 {
  margin: 0;
  font-size: clamp(28px, 3.2vw, 42px);
  line-height: 1.55;
  letter-spacing: 0.14em;
  font-weight: 500;
}

.work-copy p:not(.work-count):not(.work-label) {
  margin: 20px 0 0;
  max-width: 540px;
  font-size: 14px;
  line-height: 2.1;
  letter-spacing: 0.05em;
  color: rgba(248, 243, 234, 0.82);
}

.work-link {
  margin-top: 28px;
  display: inline-flex;
  color: #f8f3ea;
  font-size: 12px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(248, 243, 234, 0.4);
  padding-bottom: 6px;
}

.wd-service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}

.wd-service-list span {
  padding: 12px 18px;
  border: 1px solid rgba(216, 207, 192, 0.82);
  background: rgba(255, 255, 255, 0.46);
  font-size: 13px;
  letter-spacing: 0.12em;
  color: rgba(58, 42, 31, 0.86);
}

.wd-price-card {
  text-align: center;
}

.wd-price-card > p {
  margin: 0 0 16px;
  font-size: 13px;
  letter-spacing: 0.18em;
  color: rgba(107, 79, 58, 0.75);
}

.wd-price-card h3 {
  font-size: 27px;
  letter-spacing: 0.1em;
}

.wd-price-card span {
  display: block;
  margin-top: 18px;
  font-size: 13px;
  line-height: 2;
  color: rgba(43, 43, 43, 0.66);
}

.wd-note {
  margin: 34px 0 0;
  text-align: center;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.62);
}

.wd-flow {
  width: min(760px, 100%);
  margin: 0 auto;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgba(216, 207, 192, 0.82);
}

.wd-flow li {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(216, 207, 192, 0.82);
  font-size: 15px;
  letter-spacing: 0.14em;
}

.wd-flow span {
  color: rgba(107, 79, 58, 0.7);
  letter-spacing: 0.28em;
}

.wd-contact {
  padding: 120px 40px 130px;
  text-align: center;
  background: linear-gradient(rgba(43, 43, 43, 0.86), rgba(43, 43, 43, 0.86)), #2b2b2b;
  color: rgba(255, 255, 255, 0.86);
}

.wd-contact h2 {
  margin: 0;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.18em;
}

.wd-contact p:not(.wd-kicker) {
  margin: 28px 0 0;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.68);
}

.wd-contact-actions {
  justify-content: center;
}

.wd-contact-actions a {
  background: transparent;
  color: rgba(255, 255, 255, 0.86);
  border-color: rgba(255, 255, 255, 0.24);
}

.wd-contact-actions a:hover {
  background: rgba(255, 255, 255, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  .wd-kicker,
  .wd-hero h1,
  .wd-lead,
  .wd-actions,
  .target-card {
    opacity: 1;
    transform: none;
    animation: none;
  }
}

@media (max-width: 960px) {
  .target-list,
  .wd-grid-3 {
    grid-template-columns: 1fr 1fr;
  }

  .floating-work,
  .floating-work-1,
  .floating-work-2,
  .floating-work-3 {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .work-overlay {
    position: relative;
    opacity: 1;
    padding: 28px 24px;
    background: rgba(43, 31, 22, 0.86);
    backdrop-filter: none;
  }

  .work-island {
    display: grid;
  }

  .work-island::before,
  .work-image {
    grid-area: 1 / 1;
  }
}

@media (max-width: 640px) {
  .wd-hero {
    padding: 138px 24px 96px;
  }

  .wd-section,
  .wd-contact,
  .wd-floating-section {
    padding-left: 24px;
    padding-right: 24px;
  }

  .wd-section,
  .wd-floating-section {
    padding-top: 92px;
    padding-bottom: 92px;
  }

  .wd-hero h1 {
    font-size: 34px;
    line-height: 1.8;
  }

  .wd-lead {
    font-size: 14px;
  }

  .wd-actions {
    flex-direction: column;
  }

  .wd-actions a {
    width: 100%;
  }

  .target-list,
  .wd-grid-3 {
    grid-template-columns: 1fr;
  }

  .target-card,
  .wd-card {
    padding: 28px 24px;
  }

  .floating-works {
    gap: 64px;
  }

  .work-copy h3 {
    font-size: 24px;
  }

  .wd-flow li {
    grid-template-columns: 64px 1fr;
    gap: 14px;
  }
}
</style>
