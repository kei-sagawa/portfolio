<template>
  <section class="profile" id="profile">
    <div class="section-inner">
      <h2>私について</h2>

      <div class="profile-container">
        <div class="profile-img">
          <img src="/profile.JPG" alt="Keita Sagawa" loading="lazy" />
        </div>

        <div class="profile-text">
          <p>
            綴 | TSUZURI<br /><br />
            茶道・創作・プログラミングを軸に、日々の思索と制作を重ねています。<br />
            私の創作は、伝統と現代の融合を目指しており、日常の中にある美意識を形にすることを大切にしています。<br />
            このサイトでは、作品や活動記録を通じて私の思考の軌跡を綴ります。
          </p>

          <div class="social-links">
            <a href="https://x.com/tsuzuri_lab" target="_blank" rel="noopener">
              <font-awesome-icon :icon="['fab', 'x-twitter']" size="2x" />
            </a>
            <a href="https://note.com/tsuzuri_official" target="_blank" rel="noopener">
              <img src="/note.svg" alt="Note" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  padding: 120px 40px;
  text-align: center;
}

.profile-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
}

.profile-img img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 4px solid #fff;
}

.profile-text {
  max-width: 600px;
  font-size: 18px;
  line-height: 2;
  color: #2b2b2b;
}

.social-links {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #3a2a1f;
  transition:
    color 0.3s,
    transform 0.3s;
}

.social-links a:hover {
  color: #6b4f3a;
  transform: scale(1.1);
}

.social-icon {
  width: 40px;
  height: 40px;
  display: block;
  object-fit: contain;
}

.social-icon:hover {
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    align-items: center;
  }

  .profile-img img {
    width: 200px;
    height: 200px;
  }

  .profile-text {
    max-width: 100%;
    font-size: 16px;
  }
}
</style>
