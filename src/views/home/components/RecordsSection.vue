<template>
  <section class="records" id="records">
    <div class="section-inner">
      <div class="records-head">
        <div class="records-titleblock">
          <h2>記録</h2>
          <p class="records-lead">日々の活動と、記憶の断片。</p>
        </div>

        <div class="records-controls">
          <label class="records-filter">
            <span class="filter-label">年</span>
            <select v-model="selectedYear" class="filter-select">
              <option value="all">すべて</option>
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
          </label>
        </div>
      </div>

      <div class="records-carousel">
        <div class="carousel-viewport">
          <!-- 窓の左右端に固定（競合回避でクラス名を変更） -->
          <button
            class="carousel-nav overlay overlay-left"
            type="button"
            @click="prevSlide"
            :disabled="slideStart === 0"
            aria-label="前へ"
            title="前へ"
          >
            ←
          </button>

          <button
            class="carousel-nav overlay overlay-right"
            type="button"
            @click="nextSlide"
            :disabled="slideStart >= maxSlideStart"
            aria-label="次へ"
            title="次へ"
          >
            →
          </button>

          <div class="carousel-track" :style="trackStyle">
            <button
              v-for="(item, idx) in filteredRecords"
              :key="item.id"
              class="record-card"
              :class="carouselItemClass(idx)"
              type="button"
              @click="openRecordAt(idx)"
            >
              <div class="record-img">
                <img :src="item.src" :alt="item.title" loading="lazy" />
              </div>

              <div class="record-body">
                <div class="record-date">{{ item.date }}</div>
                <div class="record-title">{{ item.title }}</div>
                <div class="record-desc">{{ item.desc }}</div>

                <div class="record-tags" v-if="item.tags?.length">
                  <span v-for="t in item.tags" :key="t" class="tag tag-ghost">{{ t }}</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div class="carousel-status" v-if="filteredRecords.length">
        {{ slideStart + 1 }}–{{ Math.min(slideStart + visibleCount, filteredRecords.length) }} /
        {{ filteredRecords.length }}
      </div>

      <!-- MODAL -->
      <teleport to="body">
        <div v-if="isModalOpen" class="modal-backdrop" @click.self="closeModal">
          <div class="modal">
            <button class="modal-close" type="button" @click="closeModal" aria-label="閉じる">
              ×
            </button>

            <button
              class="modal-nav modal-prev"
              type="button"
              @click="prevRecord"
              :disabled="activeIndex === 0"
              aria-label="前へ"
              title="前へ"
            >
              ←
            </button>
            <button
              class="modal-nav modal-next"
              type="button"
              @click="nextRecord"
              :disabled="activeIndex === filteredRecords.length - 1"
              aria-label="次へ"
              title="次へ"
            >
              →
            </button>

            <div class="modal-body">
              <div class="modal-image" @touchstart="onTouchStart" @touchend="onTouchEnd">
                <img :src="activeRecord!.src" :alt="activeRecord!.title" />
              </div>

              <div class="modal-text">
                <div class="modal-title">{{ activeRecord!.title }}</div>

                <div class="modal-meta">
                  <span>{{ activeRecord!.date }}</span>
                  <span v-if="activeRecord!.place">・{{ activeRecord!.place }}</span>
                  <span class="modal-count"
                    >・{{ activeIndex + 1 }}/{{ filteredRecords.length }}</span
                  >
                </div>

                <div class="modal-desc">{{ activeRecord!.desc }}</div>

                <div v-if="activeRecord!.note" class="modal-note">
                  {{ activeRecord!.note }}
                </div>

                <div v-if="activeRecord!.tags?.length" class="modal-tags">
                  <span v-for="t in activeRecord!.tags" :key="t" class="tag">{{ t }}</span>
                </div>

                <div class="modal-hint">← → キーでも移動できます（スマホはスワイプ）</div>
              </div>
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type RecordItem = {
  id: string
  src: string
  date: string
  title: string
  desc: string
  place?: string
  note?: string
  tags?: string[]
}

const recordItems = ref<RecordItem[]>([
  {
    id: 'tsuzuri',
    src: '/tsuzuri.png',
    date: '2026.03',
    title: '綴（TSUZURI）サイト制作',
    desc: '自分の思索と制作を記録する拠点としてポートフォリオサイト「綴」を制作。',
    note: 'Vue + Vite + Vercel で構築し、活動記録や作品を静かに残していく場所として整備した。',
    tags: ['Web制作', 'Vue', 'ポートフォリオ'],
  },
  {
    id: 'kiroku',
    src: '/kiroku.png',
    date: '2026.03',
    title: '記録ギャラリーUIの設計',
    desc: '活動記録を写真と共に残すためのカルーセル型ギャラリーUIを実装。',
    note: 'クリックでモーダル表示、左右キーやスワイプで移動できるシンプルな閲覧体験を目指した。',
    tags: ['UI', 'Vue', 'フロントエンド'],
  },
  {
    id: 'toiawase',
    src: '/toiawase.png',
    date: '2025.12',
    title: 'お問い合わせフォームの実装',
    desc: 'サイトから直接連絡を受け取れるようメールフォームを実装。',
    note: 'Vercel Serverless Functions とResend を使い、安全にメール送信できる構成にした。',
    tags: ['Vercel', 'API', 'Resend'],
  },
])

/** 年フィルタ */
const selectedYear = ref<'all' | string>('all')

const years = computed(() => {
  const ys = new Set<string>()
  for (const r of recordItems.value) {
    const y = r.date.split('.')[0]
    if (y) ys.add(y)
  }
  return Array.from(ys).sort((a, b) => Number(b) - Number(a))
})

const filteredRecords = computed(() => {
  const list = recordItems.value
  if (selectedYear.value === 'all') return list
  return list.filter((r) => r.date.startsWith(String(selectedYear.value)))
})

/** モーダル */
const isModalOpen = ref(false)
const activeIndex = ref(0)

const activeRecord = computed(() => {
  const list = filteredRecords.value
  if (!isModalOpen.value) return null
  if (activeIndex.value < 0 || activeIndex.value >= list.length) return null
  return list[activeIndex.value]
})

function openRecordAt(idx: number) {
  activeIndex.value = idx
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

function prevRecord() {
  if (activeIndex.value > 0) activeIndex.value -= 1
}

function nextRecord() {
  if (activeIndex.value < filteredRecords.value.length - 1) activeIndex.value += 1
}

watch(filteredRecords, (list) => {
  if (!isModalOpen.value) return
  if (list.length === 0) {
    closeModal()
    return
  }
  if (activeIndex.value >= list.length) activeIndex.value = list.length - 1
})

function onKeydown(e: KeyboardEvent) {
  if (!isModalOpen.value) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowLeft') prevRecord()
  if (e.key === 'ArrowRight') nextRecord()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

/** スワイプ（簡易） */
const touchX = ref<number | null>(null)

function onTouchStart(e: TouchEvent) {
  touchX.value = e.touches[0]?.clientX ?? null
}

function onTouchEnd(e: TouchEvent) {
  const startX = touchX.value
  const endX = e.changedTouches[0]?.clientX ?? null
  touchX.value = null
  if (startX == null || endX == null) return

  const dx = endX - startX
  const threshold = 40
  if (dx > threshold) prevRecord()
  if (dx < -threshold) nextRecord()
}

/** 一覧カルーセル：表示枚数（PC=3 / SP=1） */
const isMobile = ref(false)
function updateIsMobile() {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

const visibleCount = computed(() => (isMobile.value ? 1 : 3))
const slideStart = ref(0)

const highlightIdx = ref<number | null>(null)
function flashHighlight(idx: number) {
  highlightIdx.value = idx
  window.setTimeout(() => {
    if (highlightIdx.value === idx) highlightIdx.value = null
  }, 420)
}

const maxSlideStart = computed(() => {
  return Math.max(0, filteredRecords.value.length - visibleCount.value)
})

function prevSlide() {
  const next = Math.max(0, slideStart.value - 1)
  slideStart.value = next
  flashHighlight(next)
}

function nextSlide() {
  const next = Math.min(maxSlideStart.value, slideStart.value + 1)
  slideStart.value = next
  flashHighlight(next)
}

const trackStyle = computed(() => {
  const w = 100 / visibleCount.value
  const x = -(slideStart.value * w)
  return { transform: `translateX(${x}%)` }
})

function carouselItemClass(idx: number) {
  const count = visibleCount.value
  const start = slideStart.value
  const end = start + count - 1

  const classes: string[] = []

  // 端/中央の視線誘導（PCのみ）
  if (idx === start && count >= 2) classes.push('is-edge')
  else if (idx === end && count >= 2) classes.push('is-edge')
  else classes.push('is-center')

  if (highlightIdx.value === idx) classes.push('is-highlight')

  return classes.join(' ')
}

watch(filteredRecords, () => {
  slideStart.value = 0
  highlightIdx.value = null
})
watch(visibleCount, () => {
  if (slideStart.value > maxSlideStart.value) slideStart.value = maxSlideStart.value
})
</script>

<style scoped>
/* ======================
RECORDS
====================== */
.records {
  padding: 140px 40px;
  text-align: center;
}

/* ===== Header ===== */
.records-head {
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* 左余白 / タイトル / 右(controls) */
  align-items: end;
  gap: 20px;
  margin-bottom: 34px;
}

.records-titleblock {
  grid-column: 2; /* 真ん中 */
  text-align: center;
}

.records-controls {
  grid-column: 3; /* 右端 */
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 12px;
}

.records-titleblock h2 {
  margin: 0;
}

.records-lead {
  margin: 10px 0 0;
  font-size: 13px;
  letter-spacing: 0.16em;
  color: rgba(58, 42, 31, 0.72);
}

.records-filter {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid rgba(216, 207, 192, 0.6);
  background: rgba(255, 255, 255, 0.6);
}

.filter-label {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: rgba(107, 79, 58, 0.85);
}

.filter-select {
  border: none;
  background: transparent;
  font-family: 'Noto Serif JP', serif;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.9);
  outline: none;
}

/* ======================
CAROUSEL
====================== */
.records-carousel {
  position: relative;
}

.carousel-viewport {
  position: relative; /* ←矢印の基準 */
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 34px;
  will-change: transform;
  transition: transform 0.35s ease;
  padding: 2px; /* 影の切れ防止 */
}

/* Card */
.record-card {
  appearance: none;
  position: relative;
  flex: 0 0 calc((100% - 68px) / 3); /* gap(34)*2=68 */
  border: 1px solid rgba(216, 207, 192, 0.65);
  background: rgba(255, 255, 255, 0.72);
  text-align: left;
  padding: 18px;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    filter 0.25s ease,
    opacity 0.25s ease;
}

.record-card:hover {
  transform: translateY(-3px);
  border-color: rgba(184, 151, 115, 0.6);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);
}

/* Image（存在感を抑える） */
.record-img {
  height: 160px;
  border: 1px solid rgba(216, 207, 192, 0.55);
  background: #faf8f3;
  overflow: hidden;
}

.record-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
  transition: transform 0.35s ease;
}

.record-card:hover .record-img img {
  transform: scale(1.04);
}

/* Body */
.record-body {
  padding-top: 14px;
}

.record-date {
  font-size: 12px;
  letter-spacing: 0.14em;
  color: rgba(107, 79, 58, 0.82);
}

.record-title {
  margin-top: 6px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.08em;
  color: #2b2b2b;
  line-height: 1.6;
}

.record-desc {
  margin-top: 8px;
  font-size: 13px;
  line-height: 2;
  color: rgba(43, 43, 43, 0.78);
}

.record-tags {
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Tags（このコンポーネントで完結） */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid rgba(216, 207, 192, 0.7);
  background: rgba(255, 248, 240, 0.6);
  border-radius: 999px;
  line-height: 1;
}

.tag-ghost {
  background: rgba(255, 255, 255, 0.35);
}

/* A: 端カードは少し抑える */
.record-card.is-edge {
  filter: brightness(0.92) saturate(0.92);
  opacity: 0.92;
}

/* B: 左端に来たカードを一瞬強調 */
.record-card.is-highlight {
  border-color: rgba(184, 151, 115, 0.95);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .record-card.is-highlight {
    transform: none;
  }
}

/* 矢印（競合しにくいクラス名推奨） */
.carousel-nav.overlay {
  position: absolute;
  top: 80px; /* 画像高さ160pxのだいたい中央 */
  translate: 0 -50%;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(216, 207, 192, 0.9);
  background: rgba(255, 255, 255, 0.72);
  cursor: pointer;
  font-size: 18px;
  color: rgba(58, 42, 31, 0.85);
  z-index: 5;

  transition:
    transform 0.15s ease,
    opacity 0.2s ease,
    background 0.2s ease;
}

.carousel-nav.overlay:hover {
  background: rgba(255, 248, 240, 0.85);
  transform: translateY(-1px);
}

.carousel-nav.overlay:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  transform: none;
}

/* ✅ ここは left/right 競合を避けたいなら overlay-left / overlay-right 推奨 */
.carousel-nav.overlay.overlay-left {
  left: 10px;
  right: auto;
}
.carousel-nav.overlay.overlay-right {
  right: 10px;
  left: auto;
}

/* Status */
.carousel-status {
  margin-top: 14px;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.78);
}

/* ======================
MODAL
====================== */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(20, 18, 16, 0.68);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  z-index: 9999;
}

.modal {
  width: min(980px, 100%);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(216, 207, 192, 0.85);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(216, 207, 192, 0.9);
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  color: rgba(58, 42, 31, 0.8);
}

.modal-body {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  padding: 22px;
}

.modal-image img {
  width: 100%;
  display: block;
}

.modal-title {
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #2b2b2b;
  line-height: 1.6;
  font-size: 16px;
}

.modal-meta {
  margin-top: 10px;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.85);
}

.modal-desc {
  margin-top: 12px;
  font-size: 14px;
  line-height: 2;
  color: rgba(43, 43, 43, 0.85);
}

.modal-note {
  margin-top: 14px;
  font-size: 13px;
  line-height: 2;
  color: rgba(58, 42, 31, 0.78);
  padding-left: 12px;
  border-left: 2px solid rgba(184, 151, 115, 0.55);
}

.modal-tags {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-nav {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(216, 207, 192, 0.9);
  background: rgba(255, 255, 255, 0.72);
  cursor: pointer;
  font-size: 18px;
  color: rgba(58, 42, 31, 0.85);
  z-index: 2;
  transition:
    transform 0.15s ease,
    opacity 0.2s ease,
    background 0.2s ease;
}

.modal-prev {
  left: 10px;
}
.modal-next {
  right: 10px;
}

.modal-nav:hover {
  background: rgba(255, 248, 240, 0.85);
  transform: translateY(-1px);
}

.modal-nav:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  transform: none;
}

.modal-hint {
  margin-top: 14px;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.75);
}

/* ======================
RESPONSIVE
====================== */
@media (max-width: 820px) {
  .modal-body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .records-head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .records-titleblock {
    text-align: left;
  }

  .records-controls {
    justify-self: auto;
  }

  .record-card {
    flex: 0 0 100%;
  }

  .record-card.is-edge {
    filter: none;
    opacity: 1;
  }

  .carousel-nav.overlay {
    width: 40px;
    height: 40px;
    font-size: 16px;
    top: 78px;
  }

  .modal-nav {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
