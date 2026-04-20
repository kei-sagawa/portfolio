<template>
  <section class="intro" id="intro">
    <div class="section-inner">
      <div class="intro-row">
        <p class="intro-block intro-tag">
          小さくても、<br />
          豊かな人生を。
        </p>

        <p class="intro-block intro-body">
          プログラミング、茶道、<br />
          制作と日々の記録。<br />
          その中で生まれた思索や作品を、<br />
          ここに静かに綴っています。
        </p>

        <p class="intro-block intro-main">思索と創作を綴る場所。</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.intro {
  padding: 160px 40px;
  display: flex;
  justify-content: center;
}

.section-inner {
  width: 100%;
  display: flex;
  justify-content: center;
}

.intro-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  min-height: 420px;
}

.intro-block {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #2b2b2b;
  margin: 0;
}

.intro-main {
  font-size: 32px;
  font-weight: 600;
  line-height: 2.05;
  letter-spacing: 0.16em;
  color: #1f1f1f;
}

.intro-body {
  font-size: 18px;
  line-height: 2.08;
  letter-spacing: 0.12em;
  color: rgba(43, 43, 43, 0.76);
}

.intro-tag {
  font-size: 20px;
  line-height: 2.1;
  letter-spacing: 0.14em;
  color: #6b4f3a;
  opacity: 0.84;
}

@media (max-width: 768px) {
  .intro {
    padding: 96px 20px;
  }

  .intro-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    min-height: auto;
  }

  .intro-block {
    writing-mode: horizontal-tb;
    text-orientation: initial;
    width: 100%;
  }

  .intro-main {
    order: 1;
    font-size: 24px;
    line-height: 1.9;
    letter-spacing: 0.08em;
  }

  .intro-body {
    order: 2;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 0.04em;
    color: rgba(43, 43, 43, 0.82);
  }

  .intro-tag {
    order: 3;
    font-size: 17px;
    line-height: 1.9;
    letter-spacing: 0.06em;
  }
}
</style>
