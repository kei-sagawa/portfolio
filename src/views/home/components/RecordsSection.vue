<template>
  <section class="records" id="records">
    <div class="section-inner">
      <div class="records-head">
        <h2>記録</h2>
        <p class="records-lead">日々の活動と、そのときの思考の断片。</p>
      </div>

      <div class="records-list">
        <article
          v-for="record in records"
          :key="record.id"
          class="record-item"
          :class="{ 'has-image': !!record.src }"
        >
          <div class="record-index" aria-hidden="true">{{ record.index }}</div>

          <div class="record-body">
            <div class="record-meta">
              <span class="record-date">{{ record.date }}</span>
              <span v-if="record.category" class="record-category">{{ record.category }}</span>
            </div>

            <h3 class="record-title">{{ record.title }}</h3>

            <p class="record-desc">
              {{ record.desc }}
            </p>

            <p v-if="record.note" class="record-note">
              {{ record.note }}
            </p>

            <p v-if="record.tags?.length" class="record-tags">
              {{ record.tags.join(' / ') }}
            </p>

            <div v-if="record.href" class="record-link">
              <a :href="record.href" target="_blank" rel="noopener">見る</a>
            </div>

            <div v-if="record.src" class="record-image record-image-mobile" aria-hidden="true">
              <img :src="record.src" :alt="record.title" loading="lazy" />
            </div>
          </div>

          <div v-if="record.src" class="record-image record-image-desktop" aria-hidden="true">
            <img :src="record.src" :alt="record.title" loading="lazy" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type RecordItem = {
  id: string
  index: string
  date: string
  category?: string
  title: string
  desc: string
  note?: string
  tags?: string[]
  src?: string
  href?: string
}

const records: RecordItem[] = [
  {
    id: 'tsuzuri-site',
    index: '一',
    date: '2026.03',
    category: '制作',
    title: '綴（TSUZURI）サイトを整える',
    desc: '自分の思索と制作を記録する拠点として、ポートフォリオサイト「綴」を制作。',
    note: '余白と静けさのバランスを見直しながら、各セクションの見せ方を少しずつ整えている。',
    tags: ['Vue', 'ポートフォリオ', 'Web制作'],
    src: '/tsuzuri.png',
    href: 'https://tsuzuri-lab.vercel.app/',
  },
  {
    id: 'records-ui',
    index: '二',
    date: '2026.03',
    category: '設計',
    title: '記録の見せ方を考える',
    desc: '活動の断片をどのように残すかを見直し、一覧ではなく静かな記録として読める形を模索した。',
    note: '強いUIを減らし、スクロールの流れの中で自然に読めるセクションに寄せている。',
    tags: ['UI', '設計', '記録'],
    src: '/kiroku.png',
  },
  {
    id: 'contact-form',
    index: '三',
    date: '2025.12',
    category: '実装',
    title: 'お問い合わせフォームの実装',
    desc: 'サイトから直接連絡を受け取れるよう、メールフォームを実装。',
    note: 'Vercel Serverless Functions と Resend を使い、静かな見た目のまま実用性を持たせた。',
    tags: ['Vercel', 'API', 'Resend'],
    src: '/toiawase.png',
  },
]
</script>

<style scoped>
.records {
  padding: 150px 40px 168px;
}

.section-inner {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

.records-head {
  text-align: center;
  margin-bottom: 88px;
}

.records-head h2 {
  margin: 0;
  font-size: 34px;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.records-lead {
  margin: 18px 0 0;
  font-size: 14px;
  line-height: 2.1;
  letter-spacing: 0.12em;
  color: rgba(58, 42, 31, 0.72);
}

.records-list {
  position: relative;
}

.record-item {
  position: relative;
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  column-gap: 28px;
  padding: 42px 0 46px;
  border-top: 1px solid rgba(194, 182, 162, 0.42);
}

.record-item:last-child {
  border-bottom: 1px solid rgba(194, 182, 162, 0.42);
}

.record-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 76px;
  width: 72px;
  height: 1px;
  background: rgba(160, 143, 119, 0.3);
}

.record-item.has-image {
  grid-template-columns: 76px minmax(0, 1.08fr) minmax(260px, 0.82fr);
  align-items: start;
}

.record-index {
  padding-top: 4px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.18em;
  color: rgba(107, 79, 58, 0.5);
}

.record-body {
  min-width: 0;
  max-width: 760px;
}

.record-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.record-date {
  font-size: 11px;
  letter-spacing: 0.16em;
  color: rgba(107, 79, 58, 0.78);
}

.record-category {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: rgba(107, 79, 58, 0.62);
}

.record-title {
  margin: 18px 0 0;
  font-size: 34px;
  line-height: 1.6;
  letter-spacing: 0.08em;
  font-weight: 500;
  color: #1f1f1f;
}

.record-desc {
  margin: 22px 0 0;
  max-width: 680px;
  font-size: 15px;
  line-height: 2.15;
  letter-spacing: 0.04em;
  color: rgba(43, 43, 43, 0.8);
}

.record-note {
  margin: 16px 0 0;
  max-width: 680px;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.04em;
  color: rgba(58, 42, 31, 0.68);
}

.record-tags {
  margin: 22px 0 0;
  font-size: 11px;
  line-height: 2;
  letter-spacing: 0.14em;
  color: rgba(107, 79, 58, 0.62);
}

.record-link {
  margin-top: 26px;
}

.record-link a {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: #6b4f3a;
  text-decoration: none;
}

.record-link a:hover {
  opacity: 0.75;
}

.record-image {
  width: 100%;
}

.record-image-desktop {
  justify-self: start;
  align-self: start;
  max-width: 360px;
  margin-top: 8px;
}

.record-image-mobile {
  display: none;
}

.record-image img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.94;
}

@media (max-width: 980px) {
  .record-item,
  .record-item.has-image {
    grid-template-columns: 52px minmax(0, 1fr);
    column-gap: 20px;
  }

  .record-item::before {
    left: 52px;
    width: 56px;
  }

  .record-image-desktop {
    display: none;
  }

  .record-image-mobile {
    display: block;
    max-width: 420px;
    margin-top: 24px;
  }

  .record-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .records {
    padding: 108px 20px 124px;
  }

  .records-head {
    margin-bottom: 56px;
  }

  .records-head h2 {
    font-size: 30px;
    letter-spacing: 0.12em;
  }

  .records-lead {
    margin-top: 16px;
    font-size: 13px;
    line-height: 2;
  }

  .record-item,
  .record-item.has-image {
    grid-template-columns: 1fr;
    row-gap: 10px;
    padding: 30px 0 34px;
  }

  .record-item::before {
    left: 0;
    width: 44px;
  }

  .record-index {
    padding-top: 0;
    font-size: 12px;
  }

  .record-title {
    margin-top: 12px;
    font-size: 24px;
    line-height: 1.65;
  }

  .record-desc {
    margin-top: 18px;
    font-size: 14px;
    line-height: 2;
  }

  .record-note {
    margin-top: 14px;
    font-size: 12px;
    line-height: 1.9;
  }

  .record-tags {
    margin-top: 18px;
    font-size: 10px;
    line-height: 1.9;
    letter-spacing: 0.12em;
  }

  .record-link {
    margin-top: 18px;
  }

  .record-link a {
    font-size: 11px;
  }

  .record-image-mobile {
    max-width: 100%;
    margin-top: 20px;
  }
}
</style>
