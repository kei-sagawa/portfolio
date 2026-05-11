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
            <a href="#contact">ご相談はこちら</a>
          </div>
        </div>
      </section>

      <section class="wd-section">
        <div class="wd-inner">
          <div class="wd-section-head">
            <p>For You</p>
            <h2>こんな方へ</h2>
          </div>

          <div class="wd-grid wd-grid-4">
            <article v-for="item in targets" :key="item.title" class="wd-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="works" class="wd-section wd-section-soft">
        <div class="wd-inner">
          <div class="wd-section-head">
            <p>Works</p>
            <h2>制作実績</h2>
          </div>

          <p class="wd-section-lead">実際のご依頼を想定して制作したサンプルサイトです。</p>

          <div class="wd-works">
            <article v-for="work in works" :key="work.title" class="wd-work-card">
              <div class="wd-work-image">
                <img :src="work.image" :alt="work.title" />
              </div>

              <div class="wd-work-body">
                <p class="wd-work-label">架空サイト / サンプル制作</p>
                <h3>{{ work.title }}</h3>
                <p>{{ work.text }}</p>
                <a :href="work.url" target="_blank" rel="noopener"> 詳細を見る </a>
              </div>
            </article>
          </div>
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
            <RouterLink to="/#contact">Contact</RouterLink>
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

const works = [
  {
    title: 'Atelier NIINA',
    text: '個人作家の作品を静かに見せるためのポートフォリオサイト。',
    image: '/images/web-design/atelier-niina.png',
    url: '/samples/atelier-niina/index.html',
  },
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
  padding: 190px 40px 150px;
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
.wd-work-label {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

.wd-hero h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.14em;
  color: #302821;
}

.wd-lead {
  margin: 42px 0 0;
  font-size: 15px;
  line-height: 2.4;
  letter-spacing: 0.09em;
  color: rgba(43, 43, 43, 0.72);
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
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;
}

.wd-actions a:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(107, 79, 58, 0.5);
}

.wd-section {
  padding: 118px 40px;
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
  margin: -20px auto 52px;
  max-width: 620px;
  text-align: center;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.68);
}

.wd-grid {
  display: grid;
  gap: 26px;
}

.wd-grid-4 {
  grid-template-columns: repeat(4, 1fr);
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

.wd-works {
  display: grid;
  gap: 30px;
}

.wd-work-card {
  display: grid;
  grid-template-columns: 42% 1fr;
  min-height: 300px;
  border: 1px solid rgba(216, 207, 192, 0.82);
  background: rgba(255, 255, 255, 0.52);
}

.wd-work-image {
  overflow: hidden;
  background: #e8dfd2;
}

.wd-work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wd-work-body {
  padding: 44px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wd-work-body h3 {
  margin: 0;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: #302821;
}

.wd-work-body p:not(.wd-work-label) {
  margin: 24px 0 0;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.68);
}

.wd-work-body a {
  width: fit-content;
  margin-top: 30px;
  padding: 11px 18px;
  border: 1px solid rgba(190, 176, 155, 0.82);
  color: rgba(58, 42, 31, 0.9);
  font-size: 13px;
  letter-spacing: 0.14em;
  text-decoration: none;
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

@media (max-width: 960px) {
  .wd-grid-4,
  .wd-grid-3,
  .wd-work-card {
    grid-template-columns: 1fr;
  }

  .wd-work-image {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 640px) {
  .wd-hero {
    padding: 138px 24px 96px;
  }

  .wd-section,
  .wd-contact {
    padding-left: 24px;
    padding-right: 24px;
  }

  .wd-section {
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

  .wd-card {
    padding: 28px 24px;
  }

  .wd-work-body {
    padding: 34px 26px;
  }

  .wd-work-body h3 {
    font-size: 22px;
  }

  .wd-flow li {
    grid-template-columns: 64px 1fr;
    gap: 14px;
  }
}
</style>
