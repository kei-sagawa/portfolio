<template>
  <main class="about-page">
    <NavbarSection />

    <section class="about-hero">
      <p class="kicker">About</p>

      <h1>
        綴は、<br />
        思索と創作を置く場所です。
      </h1>

      <p class="lead">
        茶道、Web、文章、日々の制作。<br />
        それぞれを別々のものとしてではなく、ひとつの姿勢から生まれるものとして扱っています。
      </p>
    </section>

    <section class="about-body">
      <div class="section-inner">
        <div class="vertical-label">綴について</div>

        <div class="text-block">
          <h2>静けさを、制作の中心に置く。</h2>

          <p>
            綴 TSUZURI は、思索と創作の記録を置くための個人サイトです。
            ここでは、制作物の成果だけでなく、その背景にある考え方や、
            日々の中で育っていく感覚を大切にしています。
          </p>

          <p>
            私にとって茶道は、単なる趣味や伝統文化ではありません。
            道具を扱うこと、場を整えること、余白を残すこと。
            その姿勢は、Webやアプリを設計するときの感覚にもつながっています。
          </p>

          <p>
            過度に飾らず、必要なものだけを残す。 使う人の呼吸を乱さない。
            そうした静かな設計を、制作の軸にしています。
          </p>
        </div>
      </div>
    </section>

    <section class="profile-section">
      <div class="profile-inner">
        <div class="profile-card">
          <h2>Profile</h2>

          <dl>
            <div v-for="item in profileItems" :key="item.label">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}</dd>
            </div>
          </dl>
        </div>

        <div class="link-card">
          <h2>Links</h2>

          <div class="links">
            <a
              v-for="link in externalLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'
import { externalLinks, profileItems } from '@/data/profile'
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

.about-body {
  padding: 38px 40px 132px;
}

.section-inner {
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 72px;
}

.vertical-label {
  writing-mode: vertical-rl;
  font-size: 15px;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.72);
}

.text-block {
  max-width: 720px;
}

.text-block h2 {
  margin: 0 0 40px;
  font-size: 28px;
  line-height: 1.9;
  letter-spacing: 0.14em;
  font-weight: 500;
}

.text-block p {
  margin: 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.76);
}

.text-block p + p {
  margin-top: 28px;
}

.profile-section {
  padding: 0 40px 150px;
}

.profile-inner {
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
}

.profile-card,
.link-card {
  padding: 38px 40px;
  border: 1px solid rgba(216, 207, 192, 0.72);
  background: rgba(255, 255, 255, 0.42);
}

.profile-card h2,
.link-card h2 {
  margin: 0 0 28px;
  font-size: 22px;
  letter-spacing: 0.18em;
  font-weight: 500;
}

dl {
  margin: 0;
  display: grid;
  gap: 18px;
}

dl div {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
}

dt {
  font-size: 12px;
  letter-spacing: 0.18em;
  color: rgba(107, 79, 58, 0.7);
}

dd {
  margin: 0;
  font-size: 14px;
  line-height: 1.9;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.78);
}

.links {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.links a {
  display: inline-flex;
  width: fit-content;
  padding: 10px 0;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.14em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.28);
}

.links a:hover {
  opacity: 0.72;
}

@media (max-width: 820px) {
  .about-hero {
    padding: 150px 24px 86px;
  }

  .about-body {
    padding: 28px 24px 104px;
  }

  .section-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .vertical-label {
    writing-mode: horizontal-tb;
  }

  .profile-section {
    padding: 0 24px 112px;
  }

  .profile-inner {
    grid-template-columns: 1fr;
  }

  .profile-card,
  .link-card {
    padding: 30px 26px;
  }

  dl div {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  h1 {
    font-size: 34px;
  }

  .text-block h2 {
    font-size: 24px;
  }
}
</style>
