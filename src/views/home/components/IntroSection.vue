<template>
  <section class="intro" id="intro">
    <div class="section-inner">
      <div class="intro-row">
        <p class="intro-block intro-main">思索と創作を綴る場所。</p>

        <p class="intro-block intro-body">
          プログラミングや茶道<br />
          日々の活動の中で<br />
          生まれた考えや作品を<br />
          ここに記録しています。
        </p>

        <p class="intro-block intro-tag">
          小さくても<br />
          豊かな人生を。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.intro {
  padding: 140px 40px;
  display: flex;
  justify-content: center;
}

/* 横並び構図 */
.intro-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 80px;
}

/* 縦書き */
.intro-block {
  writing-mode: vertical-rl;
  text-orientation: mixed;

  line-height: 2.3;
  letter-spacing: 0.14em;

  color: #2b2b2b;
}

/* 左：宣言（主役） */
.intro-main {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.16em;
}

/* 中央：説明（主役を邪魔しない） */
.intro-body {
  font-size: 20px;
  margin-top: 40px;
  opacity: 0.78; /* ←ここが重要 */
}

/* 右：余韻 */
.intro-tag {
  font-size: 22px;
  color: #6b4f3a;

  margin-top: -10px; /* ←少し上げる */
  opacity: 0.92;
}

/* スマホ */
@media (max-width: 768px) {
  .intro {
    padding: 100px 20px;
  }

  .intro-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .intro-block {
    writing-mode: horizontal-tb; /* ← これが必須 */
    text-orientation: initial;
    width: 100%;
    line-height: 2.1;
    letter-spacing: 0.08em;
  }

  .intro-main {
    font-size: 24px;
  }

  .intro-body {
    font-size: 15px;
    margin-top: 0;
    opacity: 0.88;
  }

  .intro-tag {
    font-size: 18px;
    margin-top: 0;
  }
}
</style>
