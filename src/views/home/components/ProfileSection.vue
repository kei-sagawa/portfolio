<template>
  <section class="profile" id="profile">
    <div class="section-inner">
      <div class="profile-head">
        <h2>私について</h2>
      </div>

      <div class="profile-container">
        <div class="profile-img">
          <img src="/profile_icon.png" alt="綴 | TSUZURI" loading="lazy" />
        </div>

        <div class="profile-text">
          <p class="profile-name">綴 | TSUZURI</p>

          <p class="profile-body">
            茶道、創作、プログラミングを軸に、日々の思索と制作を重ねています。<br />
            伝統の中にある静かな美意識と、現代の表現や技術を結びつけながら、<br />
            自分なりのかたちを少しずつ探しています。<br />
            このサイトでは、作品や記録を通して、その軌跡を綴っています。
          </p>

          <div class="social-links" aria-label="SNSリンク">
            <a href="https://x.com/tsuzuri_lab" target="_blank" rel="noopener" aria-label="X">
              <font-awesome-icon :icon="['fab', 'x-twitter']" size="2x" />
            </a>

            <a
              href="https://note.com/tsuzuri_official"
              target="_blank"
              rel="noopener"
              aria-label="note"
            >
              <img src="/note.svg" alt="" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  padding: 136px 40px 150px;
}

.section-inner {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

.profile-head {
  text-align: center;
}

.profile-head h2 {
  margin: 0;
  font-size: 34px;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.profile-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 56px;
  margin-top: 56px;
}

.profile-img {
  flex: 0 0 auto;
}

.profile-img img {
  display: block;
  width: 236px;
  height: 236px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-text {
  flex: 1 1 520px;
  max-width: 620px;
  text-align: left;
  color: #2b2b2b;
}

.profile-name {
  margin: 0;
  font-size: 18px;
  line-height: 1.9;
  letter-spacing: 0.08em;
  color: #3a2a1f;
}

.profile-body {
  margin: 24px 0 0;
  font-size: 17px;
  line-height: 2.25;
  letter-spacing: 0.04em;
  color: rgba(43, 43, 43, 0.82);
}

.social-links {
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #3a2a1f;
  opacity: 0.9;
  transition:
    color 0.25s ease,
    opacity 0.25s ease;
}

.social-links a:hover {
  color: #6b4f3a;
  opacity: 0.72;
}

.social-icon {
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .profile {
    padding: 108px 20px 120px;
  }

  .profile-head h2 {
    font-size: 30px;
    letter-spacing: 0.12em;
  }

  .profile-container {
    flex-direction: column;
    align-items: center;
    gap: 34px;
    margin-top: 42px;
  }

  .profile-img img {
    width: 196px;
    height: 196px;
  }

  .profile-text {
    flex: none;
    max-width: 100%;
  }

  .profile-name {
    font-size: 17px;
    line-height: 1.8;
  }

  .profile-body {
    margin-top: 18px;
    font-size: 15px;
    line-height: 2.1;
  }

  .social-links {
    margin-top: 24px;
    gap: 16px;
  }

  .social-icon {
    width: 36px;
    height: 36px;
  }
}
</style>
