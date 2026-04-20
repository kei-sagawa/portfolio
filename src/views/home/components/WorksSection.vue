<template>
  <section class="works" id="works">
    <div class="section-inner">
      <div class="works-head">
        <h2>制作</h2>
        <p class="works-lead">
          思索の中から形になったものを、<br />
          ひとつずつ静かに並べています。
        </p>
      </div>

      <div class="works-list">
        <a
          class="work-item work-item-feature"
          :href="featuredWork.href"
          target="_blank"
          rel="noopener"
        >
          <div class="work-index" aria-hidden="true">一</div>

          <div class="work-body">
            <div class="work-topline">
              <span class="work-kind">{{ featuredWork.kind }}</span>
            </div>

            <h3 class="work-title work-title-feature">
              <span class="work-title-name">{{ featuredWork.name }}</span>
              <span class="work-title-sub">{{ featuredWork.titleSuffix }}</span>
            </h3>

            <p class="work-desc work-desc-feature">
              {{ featuredWork.descLine1 }}<br />
              {{ featuredWork.descLine2 }}
            </p>

            <p class="work-stack">{{ featuredWork.stackText }}</p>

            <div class="work-link">拠点を見る</div>
          </div>

          <div class="work-feature-media" aria-hidden="true">
            <img class="work-feature-image" src="/tsuzuri.png" alt="" />
          </div>
        </a>

        <a
          v-for="work in secondaryWorks"
          :key="work.id"
          class="work-item"
          :class="{ 'is-wip': work.status === 'wip' }"
          :href="work.status === 'live' ? work.href : undefined"
          :aria-disabled="work.status === 'wip' ? 'true' : 'false'"
          :tabindex="work.status === 'wip' ? -1 : 0"
          target="_blank"
          rel="noopener"
          @click="work.status === 'wip' && $event.preventDefault()"
        >
          <div class="work-index" aria-hidden="true">{{ work.index }}</div>

          <div class="work-body">
            <div class="work-topline">
              <span class="work-kind">{{ work.kind }}</span>
              <span v-if="work.status === 'wip'" class="work-badge">準備中</span>
            </div>

            <h3 class="work-title">
              <span class="work-title-name">{{ work.name }}</span>
              <span class="work-title-sub">{{ work.titleSuffix }}</span>
            </h3>

            <p class="work-desc">
              {{ work.desc }}
            </p>

            <p class="work-stack">{{ work.stackText }}</p>

            <p v-if="work.status === 'wip'" class="work-note">
              公開できる形に整い次第、順次追加します。
            </p>

            <div v-else class="work-link work-link-sub">作品を見る</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type FeaturedWork = {
  name: string
  titleSuffix: string
  kind: string
  descLine1: string
  descLine2: string
  stackText: string
  href: string
}

type WorkItem = {
  id: string
  index: string
  name: string
  titleSuffix: string
  kind: string
  desc: string
  stackText: string
  status: 'live' | 'wip'
  href?: string
}

const featuredWork: FeaturedWork = {
  name: '綴',
  titleSuffix: '/ TSUZURI',
  kind: '拠点サイト',
  descLine1: '思索と創作の記録を残すための個人拠点。',
  descLine2: '余白と静けさを軸に、世界観そのものを設計しています。',
  stackText: 'Vue / TypeScript / Vercel / Resend',
  href: 'https://tsuzuri-lab.vercel.app/',
}

const secondaryWorks: WorkItem[] = [
  {
    id: 'tsuzuri-ha',
    index: '二',
    name: '綴葉',
    titleSuffix: '｜古書販売・在庫管理アプリ',
    kind: '在庫管理',
    desc: '古書の登録・販売・在庫管理を行うアプリ。日々の運用の中で、使いやすさを整えています。',
    stackText: 'Vue / TypeScript / Vercel / Resend / Supabase',
    status: 'live',
    href: 'https://tsuzuriha.vercel.app/',
  },
  {
    id: 'chachou',
    index: '三',
    name: '茶帳',
    titleSuffix: '｜茶道具管理アプリ',
    kind: '構想・開発中',
    desc: '茶道具の登録・タグ・検索を行う管理アプリ。記録と実践のあいだをつなぐための道具です。',
    stackText: 'Vue / TypeScript / Vercel / Resend / Supabase',
    status: 'wip',
  },
]
</script>

<style scoped>
.works {
  padding: 156px 40px 168px;
}

.section-inner {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

.works-head {
  text-align: center;
  margin-bottom: 92px;
}

.works h2 {
  margin: 0;
  font-size: 34px;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.works-lead {
  margin: 20px 0 0;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.1em;
  color: rgba(43, 43, 43, 0.68);
}

.works-list {
  position: relative;
}

.work-item {
  position: relative;
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  column-gap: 28px;
  text-decoration: none;
  color: inherit;
  padding: 44px 0 46px;
  border-top: 1px solid rgba(194, 182, 162, 0.42);
  transition: opacity 0.28s ease;
}

.work-item:last-child {
  border-bottom: 1px solid rgba(194, 182, 162, 0.42);
}

.work-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 76px;
  width: 72px;
  height: 1px;
  background: rgba(160, 143, 119, 0.3);
}

.work-item:hover {
  opacity: 0.8;
}

.work-item-feature {
  grid-template-columns: 76px minmax(0, 1.08fr) minmax(320px, 0.92fr);
  align-items: center;
  column-gap: 28px;
  padding-top: 18px;
  padding-bottom: 78px;
  border-top: none;
}

.work-item-feature::before {
  display: none;
}

.work-index {
  padding-top: 4px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.18em;
  color: rgba(107, 79, 58, 0.5);
}

.work-body {
  max-width: 780px;
  min-width: 0;
}

.work-item-feature .work-body {
  max-width: 100%;
}

.work-feature-media {
  justify-self: start;
  align-self: center;
  width: 100%;
  max-width: 420px;
  margin-top: 28px;
}

.work-feature-image {
  display: block;
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  object-position: center top;
  opacity: 0.94;
}

.work-topline {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.work-kind {
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.16em;
  color: rgba(107, 79, 58, 0.72);
}

.work-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 9px;
  border: 1px solid rgba(200, 188, 168, 0.62);
  border-radius: 999px;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.74);
}

.work-title {
  margin: 18px 0 0;
  font-size: 0;
  line-height: 1.6;
}

.work-title-feature {
  margin-top: 26px;
}

.work-title-name {
  font-size: 44px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #1f1f1f;
}

.work-title-feature .work-title-name {
  font-size: 58px;
  letter-spacing: 0.12em;
}

.work-title-sub {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.9);
}

.work-title-feature .work-title-sub {
  font-size: 22px;
  color: rgba(43, 43, 43, 0.86);
}

.work-desc {
  margin: 26px 0 0;
  max-width: 720px;
  font-size: 15px;
  line-height: 2.2;
  letter-spacing: 0.04em;
  color: rgba(43, 43, 43, 0.78);
}

.work-desc-feature {
  max-width: 600px;
  margin-top: 30px;
  font-size: 17px;
  line-height: 2.28;
  color: rgba(43, 43, 43, 0.82);
}

.work-stack {
  margin: 30px 0 0;
  font-size: 11px;
  line-height: 2;
  letter-spacing: 0.14em;
  color: rgba(107, 79, 58, 0.62);
}

.work-link {
  margin-top: 34px;
  font-size: 12px;
  letter-spacing: 0.14em;
  color: #6b4f3a;
}

.work-link-sub {
  color: rgba(107, 79, 58, 0.66);
}

.work-note {
  margin: 18px 0 0;
  font-size: 12px;
  line-height: 1.9;
  letter-spacing: 0.08em;
  color: rgba(58, 42, 31, 0.58);
}

.work-item.is-wip {
  opacity: 0.9;
  cursor: default;
}

.work-item.is-wip:hover {
  opacity: 0.9;
}

@media (max-width: 980px) {
  .work-item {
    grid-template-columns: 52px minmax(0, 1fr);
    column-gap: 20px;
  }

  .work-item::before {
    left: 52px;
    width: 56px;
  }

  .work-item-feature {
    grid-template-columns: 52px minmax(0, 1fr);
  }

  .work-feature-media {
    display: none;
  }

  .work-title-name {
    font-size: 36px;
  }

  .work-title-feature .work-title-name {
    font-size: 48px;
  }

  .work-title-sub {
    font-size: 17px;
  }
}

@media (max-width: 768px) {
  .works {
    padding: 112px 20px 124px;
  }

  .works-head {
    margin-bottom: 58px;
  }

  .works h2 {
    font-size: 30px;
    letter-spacing: 0.12em;
  }

  .works-lead {
    margin-top: 18px;
    font-size: 13px;
    line-height: 2;
  }

  .work-item {
    grid-template-columns: 1fr;
    row-gap: 10px;
    padding: 30px 0 32px;
  }

  .work-item::before {
    left: 0;
    width: 44px;
  }

  .work-item-feature {
    padding-top: 8px;
    padding-bottom: 42px;
  }

  .work-index {
    padding-top: 0;
    font-size: 12px;
  }

  .work-title {
    margin-top: 12px;
  }

  .work-title-name {
    font-size: 28px;
    line-height: 1.55;
  }

  .work-title-feature .work-title-name {
    font-size: 38px;
  }

  .work-title-sub {
    display: block;
    margin-left: 0;
    margin-top: 6px;
    font-size: 15px;
    line-height: 1.7;
  }

  .work-title-feature .work-title-sub {
    font-size: 17px;
  }

  .work-desc {
    margin-top: 18px;
    font-size: 14px;
    line-height: 2;
  }

  .work-desc-feature {
    margin-top: 22px;
    font-size: 15px;
    line-height: 2.08;
  }

  .work-stack {
    margin-top: 22px;
    font-size: 10px;
    line-height: 1.9;
    letter-spacing: 0.12em;
  }

  .work-link {
    margin-top: 20px;
    font-size: 11px;
  }

  .work-note {
    margin-top: 14px;
    font-size: 11px;
    line-height: 1.8;
  }
}
</style>
