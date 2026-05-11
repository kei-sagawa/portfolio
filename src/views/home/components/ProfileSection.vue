<template>
  <section class="gateway-section profile" id="profile">
    <div class="section-inner">
      <p class="number">01</p>
      <span class="line" aria-hidden="true"></span>

      <div class="profile-content">
        <h2>綴について</h2>

        <p class="lead">
          茶道、Web、文章。<br />
          別々のものではなく、<br />
          同じ姿勢から生まれるものとして見ています。
        </p>

        <RouterLink class="more-link" to="/about"> 綴について読む </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.profile {
  position: relative;
  overflow: hidden;
  padding: 132px 44px 56px;
  background:
    radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.9), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(238, 231, 218, 0.42));
}

.profile::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 22% 20%, rgba(86, 100, 80, 0.14), transparent 18%),
    radial-gradient(circle at 8% 72%, rgba(86, 100, 80, 0.1), transparent 22%);
  filter: blur(18px);
  opacity: 0.42;
  pointer-events: none;
}

.section-inner {
  position: relative;
  z-index: 1;
}

.number {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.22em;
  color: rgba(58, 42, 31, 0.72);
}

.line {
  display: block;
  width: 32px;
  height: 1px;
  margin: 16px 0 34px;
  background: rgba(107, 79, 58, 0.34);
}

h2 {
  margin: 0;
  font-size: 30px;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

.lead {
  margin: 34px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.76);
}

.more-link {
  margin-top: 42px;
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
}

.more-link:hover {
  opacity: 0.72;
}

@media (max-width: 960px) {
  .profile {
    padding: 72px 32px 76px;
  }

  h2 {
    font-size: 25px;
  }

  .lead {
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
