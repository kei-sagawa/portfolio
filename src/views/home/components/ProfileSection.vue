<template>
  <section class="gateway-section profile" id="profile">
    <div class="section-inner">
      <div class="profile-copy">
        <p class="number">04</p>
        <span class="line" aria-hidden="true"></span>

        <h2>わたしについて</h2>

        <p class="profile-name">綴 | TSUZURI</p>

        <p class="lead">
          茶道、Web、文章。<br />
          別々のものではなく、<br />
          同じ姿勢から生まれるものとして見ています。
        </p>

        <p class="profile-body">
          茶道を学びながら、日々の思索と制作を重ねています。<br />
          静かな余白と、長く残るものを大切にしながら、<br />
          自分なりのかたちを少しずつ探しています。
        </p>

        <div class="profile-actions">
          <RouterLink class="more-link" to="/about">わたしについて読む</RouterLink>
        </div>
      </div>

      <div class="profile-visual">
        <img src="/profile_icon.png" alt="綴 | TSUZURI" class="profile-image" loading="lazy" />

        <div class="social-links" aria-label="SNSリンク">
          <a
            href="https://x.com/tsuzuri_lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
          </a>

          <a
            href="https://note.com/tsuzuri_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="note"
          >
            <img src="/note.svg" alt="" class="social-icon" />
          </a>

          <a
            href="https://www.instagram.com/tsuzuri_lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.profile {
  position: relative;
  overflow: hidden;
  padding: 148px 44px 128px;
}

.section-inner {
  width: min(100%, 1080px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 96px;
}

/* ========================================
   Left
======================================== */
.profile-copy {
  min-width: 0;
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
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.profile-name {
  margin: 28px 0 0;
  font-size: 14px;
  letter-spacing: 0.16em;
  color: rgba(107, 79, 58, 0.72);
}

.lead {
  margin: 28px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.78);
}

.profile-body {
  margin: 26px 0 0;
  font-size: 14px;
  line-height: 2.25;
  letter-spacing: 0.05em;
  color: rgba(43, 43, 43, 0.64);
}

.profile-actions {
  margin-top: 42px;
}

.more-link {
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
  transition: opacity 0.4s ease;
}

.more-link:hover {
  opacity: 0.72;
}

/* ========================================
   Right
======================================== */
.profile-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.profile-image {
  display: block;
  width: min(340px, 72%);
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 36px 90px rgba(58, 42, 31, 0.08);
  filter: saturate(0.9) contrast(0.97);
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
}

.social-links a {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  color: rgba(58, 42, 31, 0.78);
  text-decoration: none;
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.social-links a:hover {
  opacity: 0.68;
  transform: translateY(-2px);
}

.social-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

/* ========================================
   Responsive
======================================== */
@media (max-width: 900px) {
  .profile {
    padding: 104px 20px 118px;
  }

  .section-inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .profile-visual {
    order: -1;
  }

  .profile-image {
    width: 220px;
  }

  h2 {
    font-size: 28px;
  }

  .lead {
    font-size: 15px;
    line-height: 2.15;
  }

  .profile-body {
    font-size: 13px;
    line-height: 2.05;
  }

  .social-links {
    gap: 18px;
  }

  .social-links a {
    width: 34px;
    height: 34px;
  }

  .social-icon {
    width: 22px;
    height: 22px;
  }
}
</style>
