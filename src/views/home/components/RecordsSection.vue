<template>
  <section class="records" id="records">
    <div class="section-inner">
      <nav class="record-links" aria-label="記録の発信先">
        <a
          v-for="link in recordLinks"
          :key="link.id"
          class="record-link"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.label"
        >
          <span class="record-icon" aria-hidden="true">
            <img v-if="link.iconType === 'image'" :src="link.icon" alt="" class="social-icon" />
            <font-awesome-icon v-else :icon="link.icon" />
          </span>

          <span class="record-body">
            <span class="record-main">
              <span class="record-name">{{ link.name }}</span>
              <span class="record-arrow" aria-hidden="true">↗</span>
            </span>

            <span class="record-desc">
              {{ link.desc }}
            </span>
          </span>
        </a>
      </nav>

      <div class="records-head">
        <p class="kicker">Records</p>
        <p class="number">03</p>
        <span class="line" aria-hidden="true"></span>

        <h2>記録</h2>

        <p class="records-lead">
          日々の制作や思索の断片を、<br />
          それぞれの場所に静かに残しています。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

type RecordLink =
  | {
      id: string
      name: string
      label: string
      href: string
      desc: string
      iconType: 'image'
      icon: string
    }
  | {
      id: string
      name: string
      label: string
      href: string
      desc: string
      iconType: 'fontawesome'
      icon: IconProp
    }

const recordLinks: RecordLink[] = [
  {
    id: 'note',
    name: 'note',
    label: 'noteを開く',
    href: 'https://note.com/tsuzuri_official',
    desc: '茶道、制作、暮らしの中で考えたことを、少し長い文章として残しています。',
    iconType: 'image',
    icon: '/note.svg',
  },
  {
    id: 'x',
    name: 'X',
    label: 'Xを開く',
    href: 'https://x.com/tsuzuri_lab',
    desc: '日々の制作過程や、小さな気づきを短い言葉で綴っています。',
    iconType: 'fontawesome',
    icon: ['fab', 'x-twitter'],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    label: 'Instagramを開く',
    href: 'https://www.instagram.com/tsuzuri_lab',
    desc: '茶道の稽古や茶会、茶道具など、目で見る記録を残しています。',
    iconType: 'fontawesome',
    icon: ['fab', 'instagram'],
  },
]
</script>

<style scoped>
.records {
  padding: 150px 40px 168px;
}

.section-inner {
  width: min(100%, 1080px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  gap: 104px;
}

.record-links {
  display: grid;
}

.record-link {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  align-items: center;
  gap: 26px;
  padding: 28px 0;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(107, 79, 58, 0.16);
  transition:
    transform 0.7s ease,
    border-color 0.7s ease;
}

.record-link:first-child {
  border-top: 1px solid rgba(107, 79, 58, 0.16);
}

.record-link:hover,
.record-link:focus-visible {
  transform: translateX(8px);
  border-color: rgba(107, 79, 58, 0.34);
}

.record-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(107, 79, 58, 0.16);
  border-radius: 999px;
  color: rgba(58, 42, 31, 0.78);
  font-size: 20px;
  transition:
    background 0.7s ease,
    border-color 0.7s ease,
    transform 0.7s ease;
}

.record-link:hover .record-icon,
.record-link:focus-visible .record-icon {
  background: rgba(255, 252, 245, 0.54);
  border-color: rgba(107, 79, 58, 0.28);
  transform: scale(1.04);
}

.social-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.record-body {
  display: block;
  min-width: 0;
}

.record-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.record-name {
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.record-arrow {
  font-size: 13px;
  color: rgba(107, 79, 58, 0.5);
  transition:
    transform 0.7s ease,
    color 0.7s ease;
}

.record-link:hover .record-arrow,
.record-link:focus-visible .record-arrow {
  transform: translate(3px, -3px);
  color: rgba(107, 79, 58, 0.78);
}

.record-desc {
  display: block;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  margin-top: 0;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.05em;
  color: rgba(43, 43, 43, 0.68);
  transition:
    max-height 0.75s ease,
    opacity 0.75s ease,
    margin-top 0.75s ease;
}

.record-link:hover .record-desc,
.record-link:focus-visible .record-desc {
  max-height: 80px;
  opacity: 1;
  margin-top: 12px;
}

.records-head {
  text-align: left;
}

.kicker {
  margin: 0 0 18px;
  font-size: 13px;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.62);
}

.number {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.22em;
  color: rgba(58, 42, 31, 0.66);
}

.line {
  display: block;
  width: 32px;
  height: 1px;
  margin: 16px 0 34px;
  background: rgba(107, 79, 58, 0.3);
}

.records-head h2 {
  margin: 0;
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.records-lead {
  margin: 34px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.76);
}

@media (max-width: 900px) {
  .records {
    padding: 108px 20px 124px;
  }

  .section-inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .records-head {
    order: 1;
  }

  .record-links {
    order: 2;
  }

  .records-head h2 {
    font-size: 30px;
  }

  .record-link {
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 18px;
    padding: 24px 0;
  }

  .record-icon {
    width: 46px;
    height: 46px;
    font-size: 18px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }

  .record-name {
    font-size: 20px;
  }

  .record-desc {
    max-height: none;
    opacity: 1;
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.9;
  }
}
</style>
