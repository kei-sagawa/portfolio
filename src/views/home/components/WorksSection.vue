<template>
  <section class="works" id="works">
    <div class="section-inner">
      <h2>制作</h2>

      <div class="works-grid">
        <a
          v-for="w in works"
          :key="w.id"
          class="work-card"
          :class="{ 'is-wip': w.status === 'wip' }"
          :href="w.status === 'live' ? w.href : undefined"
          :aria-disabled="w.status === 'wip' ? 'true' : 'false'"
          :tabindex="w.status === 'wip' ? -1 : 0"
          target="_blank"
          rel="noopener"
          @click.prevent="w.status === 'wip' && null"
        >
          <div class="work-title">
            {{ w.title }}
            <span v-if="w.status === 'wip'" class="badge">準備中</span>
          </div>

          <div class="work-desc">{{ w.desc }}</div>

          <div class="work-meta">
            <span v-for="t in w.tags" :key="t" class="tag">{{ t }}</span>
          </div>

          <div v-if="w.status === 'wip'" class="work-note">
            公開できる形に整い次第、順次追加します。
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type WorkItem = {
  id: string
  title: string
  desc: string
  tags: string[]
  status: 'live' | 'wip'
  href?: string
}

const works: WorkItem[] = [
  {
    id: 'tsuzuri',
    title: '綴 / TSUZURI（拠点サイト）',
    desc: '思索と創作を静かに綴るための個人拠点。導線と余白の設計。',
    tags: ['Vue', 'TypeScript'],
    status: 'live',
    href: 'https://tsuzuri-lab.vercel.app/',
  },
  {
    id: 'tea-utensil',
    title: '茶道具管理アプリ',
    desc: '茶道具の登録・タグ・検索を行う管理アプリ。記録のための道具。',
    tags: ['Vue', 'Supabase'],
    status: 'wip',
  },
  {
    id: 'todo',
    title: 'Todo アプリ',
    desc: '日々の積み重ねを小さく続けるためのシンプルなタスク管理。',
    tags: ['Vue'],
    status: 'wip',
  },
]
</script>

<style scoped>
.works {
  padding: 140px 40px;
  text-align: center;
}
.works h2 {
  margin-bottom: 60px;
  letter-spacing: 0.16em;
}
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 34px;
}
.work-card {
  display: block;
  padding: 28px 26px;
  text-decoration: none;
  color: inherit;
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(216, 207, 192, 0.65);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    opacity 0.25s ease,
    filter 0.25s ease;
}
.work-card:hover {
  transform: translateY(-3px);
  border-color: rgba(184, 151, 115, 0.6);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);
}
.work-title {
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #2b2b2b;
  line-height: 1.6;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.work-desc {
  margin-top: 10px;
  font-size: 13px;
  line-height: 2;
  color: rgba(43, 43, 43, 0.78);
}
.work-meta {
  margin-top: 14px;
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.88);
}

/* 共通タグ */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid rgba(216, 207, 192, 0.7);
  background: rgba(255, 248, 240, 0.6);
  border-radius: 999px;
  line-height: 1;
}

/* ===== 準備中（WIP）表現 ===== */
.work-card.is-wip {
  opacity: 0.78;
  filter: saturate(0.92);
  cursor: default;
}
.work-card.is-wip:hover {
  transform: none;
  box-shadow: none;
  border-color: rgba(216, 207, 192, 0.65);
}

.badge {
  font-size: 11px;
  letter-spacing: 0.12em;
  padding: 5px 10px;
  border: 1px solid rgba(216, 207, 192, 0.75);
  background: rgba(255, 255, 255, 0.55);
  border-radius: 999px;
  color: rgba(107, 79, 58, 0.85);
}

.work-note {
  margin-top: 14px;
  font-size: 12px;
  line-height: 1.9;
  letter-spacing: 0.08em;
  color: rgba(58, 42, 31, 0.68);
}
@media (max-width: 768px) {
  .works {
    padding: 100px 20px;
  }

  .works h2 {
    margin-bottom: 40px;
    font-size: 32px;
    letter-spacing: 0.12em;
  }

  .works-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .work-card {
    padding: 22px 20px;
  }

  .work-title {
    font-size: 14px;
    line-height: 1.8;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .work-desc {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.9;
  }

  .work-meta {
    margin-top: 12px;
    gap: 6px;
  }

  .tag {
    font-size: 11px;
    padding: 5px 9px;
  }

  .badge {
    font-size: 10px;
    padding: 4px 8px;
  }

  .work-note {
    margin-top: 12px;
    font-size: 11px;
    line-height: 1.8;
  }
}
</style>
