<template>
  <main class="about-page">
    <NavbarSection />

    <section class="about-hero">
      <p class="kicker">About</p>

      <h1>
        静けさの中で <br />
        思索と創作を。
      </h1>

      <p class="lead">
        茶道、Web、文章、日々の制作。<br />
        それぞれを別々のものとしてではなく、ひとつの姿勢から生まれるものとして扱っています。
      </p>
    </section>

    <section
      ref="portraitSection"
      class="portrait-section reveal-section"
      :class="{ 'is-visible': visibleSections.has('portrait') }"
    >
      <div class="portrait-inner">
        <div class="portrait-visual">
          <img src="/profile_icon.png" alt="綴 | TSUZURI" loading="lazy" />

          <div class="portrait-social" aria-label="SNSリンク">
            <a href="https://x.com/tsuzuri_lab" target="_blank" rel="noopener" aria-label="X">
              <font-awesome-icon :icon="['fab', 'x-twitter']" />
            </a>

            <a
              href="https://note.com/tsuzuri_official"
              target="_blank"
              rel="noopener"
              aria-label="note"
            >
              <img src="/note.svg" alt="" class="social-icon" />
            </a>

            <a
              href="https://www.instagram.com/tsuzuri_lab"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>

            <a href="https://chachou.jp" target="_blank" rel="noopener" aria-label="茶帳">茶帳</a>
          </div>
        </div>

        <div class="portrait-copy">
          <p class="small-label">Profile</p>
          <h2>綴 | TSUZURI</h2>

          <p>
            茶道を学びながら、Web制作と文章を書いています。
            静かな余白と、長く残るものを大切にしながら、 思索と創作を少しずつ積み重ねています。
          </p>

          <p>技術だけでも、感性だけでもなく、 そのあいだにある手触りを大切にしています。</p>
        </div>
      </div>
    </section>

    <section
      ref="valuesSection"
      class="values-section reveal-section"
      :class="{ 'is-visible': visibleSections.has('values') }"
    >
      <div class="values-inner">
        <div class="section-head">
          <p>Values</p>
          <h2>大切にしていること</h2>
        </div>

        <div class="values-list">
          <article
            v-for="(value, index) in values"
            :key="value.title"
            class="value-item"
            :style="{ '--delay': `${index * 0.12}s` }"
          >
            <span>{{ value.number }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'

const portraitSection = ref<HTMLElement | null>(null)
const valuesSection = ref<HTMLElement | null>(null)
const visibleSections = ref(new Set<string>())

let observer: IntersectionObserver | null = null

const values = [
  {
    number: '01',
    title: '静けさ',
    text: '過度に飾らず、必要なものだけを残すこと。',
  },
  {
    number: '02',
    title: '余白',
    text: '言葉にならない部分にも、意味が宿るようにすること。',
  },
  {
    number: '03',
    title: '継続',
    text: '一度で完成させるのではなく、少しずつ積み重ねていくこと。',
  },
  {
    number: '04',
    title: '調和',
    text: '伝統と現代、感性と技術を、無理なくつなぐこと。',
  },
]

function revealSection(id: string) {
  visibleSections.value = new Set(visibleSections.value).add(id)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        if (entry.target === portraitSection.value) {
          revealSection('portrait')
          observer?.unobserve(entry.target)
        }

        if (entry.target === valuesSection.value) {
          revealSection('values')
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.24,
      rootMargin: '0px 0px -8% 0px',
    },
  )

  if (portraitSection.value) observer.observe(portraitSection.value)
  if (valuesSection.value) observer.observe(valuesSection.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

.about-hero {
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 180px 40px 108px;
}

.kicker {
  margin: 0 0 22px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.65;
  letter-spacing: 0.16em;
  font-weight: 500;
}

.lead {
  margin: 38px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.76);
}

/* =========================
   Hero Animation
========================= */
.about-hero > * {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.about-hero .kicker {
  animation-delay: 0.1s;
}

.about-hero h1 {
  animation-delay: 0.3s;
}

.about-hero .lead {
  animation-delay: 0.6s;
}

/* =========================
   Scroll Reveal
========================= */
.reveal-section {
  opacity: 0;
  transform: translateY(34px);
  transition:
    opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================
   Portrait
========================= */
.portrait-section {
  padding: 0 40px 144px;
}

.portrait-inner {
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: center;
  gap: 88px;
}

.portrait-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portrait-visual img {
  display: block;
  width: min(300px, 78%);
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 36px 90px rgba(58, 42, 31, 0.08);
  filter: saturate(0.9) contrast(0.97);
}

.portrait-social {
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.portrait-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  color: rgba(58, 42, 31, 0.76);
  text-decoration: none;
  font-size: 20px;
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    color 0.4s ease;
}

.portrait-social a:hover {
  opacity: 0.68;
  transform: translateY(-2px);
  color: #6b4f3a;
}

.social-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.portrait-social a[aria-label='茶帳'] {
  min-width: auto;
  height: auto;
  font-size: 12px;
  letter-spacing: 0.14em;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(107, 79, 58, 0.22);
}

.portrait-copy {
  max-width: 560px;
}

.small-label,
.section-head p {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.62);
}

.portrait-copy h2,
.section-head h2 {
  margin: 0;
  font-size: 30px;
  line-height: 1.7;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

.portrait-copy p:not(.small-label) {
  margin: 30px 0 0;
  font-size: 15px;
  line-height: 2.3;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.74);
}

/* =========================
   Values
========================= */
.values-section {
  padding: 126px 40px 132px;
  /* background: rgba(255, 255, 255, 0.18); */
}

.values-inner {
  width: min(980px, 100%);
  margin: 0 auto;
}

.section-head {
  text-align: center;
  margin-bottom: 64px;
}

.values-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.value-item {
  padding: 30px 26px;
  background: rgba(255, 252, 245, 0.42);
  border: 1px solid rgba(107, 79, 58, 0.12);
  box-shadow: 0 24px 70px rgba(58, 42, 31, 0.04);
  opacity: 0;
  transform: translateY(22px);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.values-section.is-visible .value-item {
  animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--delay);
}

.value-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 80px rgba(58, 42, 31, 0.06);
}

.value-item span {
  display: block;
  margin-bottom: 16px;
  font-size: 11px;
  letter-spacing: 0.24em;
  color: rgba(107, 79, 58, 0.58);
}

.value-item h3 {
  margin: 0;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.14em;
  font-weight: 500;
}

.value-item p {
  margin: 18px 0 0;
  font-size: 13px;
  line-height: 2.05;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.66);
}

/* =========================
   Responsive
========================= */
@media (max-width: 900px) {
  .about-hero {
    padding: 150px 24px 86px;
  }

  .portrait-section {
    padding: 0 24px 112px;
  }

  .portrait-inner {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  .portrait-visual {
    align-items: flex-start;
  }

  .portrait-visual img {
    width: 220px;
  }

  .portrait-social {
    justify-content: flex-start;
  }

  .values-section {
    padding: 104px 24px 112px;
  }

  .values-list {
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    font-size: 34px;
  }

  .portrait-copy h2,
  .section-head h2 {
    font-size: 24px;
  }
}

@media (max-width: 640px) {
  .values-list {
    grid-template-columns: 1fr;
  }

  .value-item {
    padding: 28px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-hero > *,
  .reveal-section,
  .value-item {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
}
</style>
