<template>
  <main class="works-page">
    <NavbarSection />

    <section class="works-hero">
      <p class="kicker">Works</p>

      <h1>
        作ることを通して、<br />
        思索をかたちにする。
      </h1>

      <p class="lead">
        茶道、記録、暮らし、Web。<br />
        綴では、日々の思考や違和感から生まれたものを制作しています。
      </p>
    </section>

    <section class="floating-works" aria-label="主な制作">
      <article
        v-for="(work, index) in featuredWorks"
        :key="work.id"
        class="floating-work"
        :class="[`floating-work-${index + 1}`, { 'is-visible': visibleIds.has(work.id) }]"
        :ref="(el) => setWorkRef(el, work.id)"
      >
        <a
          class="work-island"
          :href="work.url || '#'"
          :target="work.url ? '_blank' : undefined"
          :rel="work.url ? 'noopener' : undefined"
          :aria-label="`${work.title}を見る`"
          @click="!work.url && $event.preventDefault()"
        >
          <img :src="work.image" :alt="work.imageAlt" class="work-image" loading="lazy" />

          <div class="work-overlay">
            <div class="work-copy">
              <p class="work-count">{{ String(index + 1).padStart(2, '0') }}</p>
              <p class="status">{{ work.status }}</p>

              <h2>{{ work.title }}</h2>
              <p class="subtitle">{{ work.subtitle }}</p>
              <p class="description">{{ work.description }}</p>

              <div class="tags">
                <span v-for="tag in work.tags" :key="tag">{{ tag }}</span>
              </div>

              <span v-if="work.url" class="work-link">サイトを見る</span>
            </div>
          </div>
        </a>
      </article>
    </section>

    <section v-if="hiddenWorks.length" class="more-works">
      <button class="more-button" type="button" @click="showAll = !showAll">
        {{ showAll ? '閉じる' : 'もっと見る' }}
      </button>

      <div v-if="showAll" class="more-list">
        <article v-for="work in hiddenWorks" :key="work.id" class="more-item">
          <p class="more-status">{{ work.status }}</p>
          <h3>{{ work.title }}</h3>
          <p>{{ work.description }}</p>

          <a v-if="work.url" :href="work.url" target="_blank" rel="noopener">サイトを見る</a>
        </article>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'
import { works } from '@/data/works'

const showAll = ref(false)
const visibleIds = ref(new Set<string>())
const workRefs = new Map<string, Element>()

let observer: IntersectionObserver | null = null

const imageMap: Record<string, { image: string; imageAlt: string }> = {
  chachou: {
    image: '/images/works/chachou-dashboard.jpg',
    imageAlt: '茶帳の画面',
  },
  tsuzuri: {
    image: '/images/works/tsuzuri-home.jpg',
    imageAlt: '綴 TSUZURI のトップページ',
  },
  hakuu: {
    image: '/images/works/hakuu.jpg',
    imageAlt: '白雨 hakuu のイメージ',
  },
  komachi: {
    image: '/images/works/komachi-home.jpg',
    imageAlt: '新古茶道具 こまちのトップページ',
  },
}

const enhancedWorks = computed(() =>
  works.map((work) => ({
    ...work,
    image: imageMap[work.id]?.image ?? '/images/works/tsuzuri-home.jpg',
    imageAlt: imageMap[work.id]?.imageAlt ?? `${work.title}の制作イメージ`,
  })),
)

const featuredWorks = computed(() => enhancedWorks.value.slice(0, 3))
const hiddenWorks = computed(() => enhancedWorks.value.slice(3))

type TemplateRefElement = Element | ComponentPublicInstance | null

function setWorkRef(el: TemplateRefElement, id: string) {
  if (!el) {
    workRefs.delete(id)
    return
  }

  const element = el instanceof Element ? el : el.$el

  if (!(element instanceof Element)) return

  workRefs.set(id, element)
  observer?.observe(element)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const id = [...workRefs.entries()].find(([, el]) => el === entry.target)?.[0]
        if (!id) return

        visibleIds.value = new Set(visibleIds.value).add(id)
        observer?.unobserve(entry.target)
      })
    },
    {
      threshold: 0.22,
    },
  )

  workRefs.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.works-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

.works-hero {
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 128px 40px 64px;
}

.kicker {
  margin: 0 0 22px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

h1 {
  margin: 0;
  font-size: clamp(32px, 4.2vw, 48px);
  line-height: 1.55;
  letter-spacing: 0.14em;
  font-weight: 500;
}

.lead {
  margin: 28px 0 0;
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.72);
}

/* =========================
   Floating Works
========================= */
.floating-works {
  position: relative;
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 0 40px 140px;
  display: grid;
  gap: 96px;
}

.floating-work {
  position: relative;
  width: min(760px, 82%);
  opacity: 0;
  transform: translateY(42px);
  transition:
    opacity 1.2s ease,
    transform 1.2s ease;
}

.floating-work.is-visible {
  opacity: 1;
  transform: translateY(0);
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

.status {
  margin: 0 0 20px;
  display: inline-flex;
  padding: 5px 9px;
  border: 1px solid rgba(248, 243, 234, 0.28);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: rgba(248, 243, 234, 0.78);
}

h2 {
  margin: 0;
  font-size: clamp(28px, 3.2vw, 42px);
  line-height: 1.55;
  letter-spacing: 0.14em;
  font-weight: 500;
}

.subtitle {
  margin: 18px 0 0;
  font-size: 12px;
  line-height: 2;
  letter-spacing: 0.1em;
  color: rgba(248, 243, 234, 0.72);
}

.description {
  margin: 20px 0 0;
  max-width: 540px;
  font-size: 14px;
  line-height: 2.1;
  letter-spacing: 0.05em;
  color: rgba(248, 243, 234, 0.82);
}

.tags {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.tags span {
  display: inline-flex;
  padding: 5px 9px;
  border: 1px solid rgba(248, 243, 234, 0.22);
  background: rgba(248, 243, 234, 0.08);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: rgba(248, 243, 234, 0.78);
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

/* =========================
   More Works
========================= */
.more-works {
  width: min(960px, 100%);
  margin: 0 auto;
  padding: 0 40px 150px;
  text-align: center;
}

.more-button {
  appearance: none;
  border: none;
  background: transparent;
  padding: 0 0 6px;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  font-family: 'Noto Serif JP', serif;
  font-size: 13px;
  letter-spacing: 0.16em;
  color: #3a2a1f;
  cursor: pointer;
}

.more-list {
  margin-top: 64px;
  display: grid;
  gap: 24px;
  text-align: left;
}

.more-item {
  padding: 28px 0;
  border-top: 1px solid rgba(107, 79, 58, 0.14);
}

.more-item:last-child {
  border-bottom: 1px solid rgba(107, 79, 58, 0.14);
}

.more-status {
  margin: 0 0 16px;
  font-size: 11px;
  letter-spacing: 0.16em;
  color: rgba(107, 79, 58, 0.68);
}

.more-item h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: 0.12em;
  font-weight: 500;
}

.more-item p {
  margin: 18px 0 0;
  font-size: 13px;
  line-height: 2.1;
  letter-spacing: 0.05em;
  color: rgba(43, 43, 43, 0.68);
}

.more-item a {
  margin-top: 22px;
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.14em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.28);
  padding-bottom: 5px;
}

/* =========================
   Responsive
========================= */
@media (max-width: 900px) {
  .works-hero {
    padding: 150px 24px 80px;
  }

  .floating-works {
    padding: 0 24px 96px;
    gap: 72px;
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

  .work-island::before {
    aspect-ratio: 16 / 10;
  }

  .work-image {
    position: absolute;
    height: calc(100% - 0px);
  }

  .work-island {
    display: grid;
  }

  .work-island::before {
    grid-area: 1 / 1;
  }

  .work-image {
    grid-area: 1 / 1;
  }

  .work-overlay {
    grid-area: auto;
  }

  h1 {
    font-size: 34px;
  }

  h2 {
    font-size: 26px;
  }

  .description {
    font-size: 13px;
    line-height: 2;
  }

  .more-works {
    padding: 0 24px 112px;
  }
}
</style>
