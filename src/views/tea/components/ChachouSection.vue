<template>
  <section class="record-section">
    <div class="section-inner">
      <div class="record-layout">
        <div class="record-title">
          <p class="kicker">Record</p>
          <h2>
            記憶を、<br />
            失わないために。
          </h2>
        </div>

        <div class="record-body">
          <p>
            道具、稽古、会記。<br />
            茶道の記録は、時間が経つほどに輪郭を失っていきます。
          </p>

          <p>
            茶帳は、その記憶をあとから静かに振り返るために作っているアプリです。
            制作物でありながら、茶の時間を残すための道具でもあります。
          </p>

          <a href="https://chachou.jp" target="_blank" rel="noopener"> 茶帳を見る </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.record-section {
  padding: 148px 40px 164px;
}

.section-inner {
  width: min(980px, 100%);
  margin: 0 auto;
}

.record-layout {
  display: grid;
  grid-template-columns: 0.82fr 1fr;
  gap: 88px;
  align-items: start;
}

.record-title {
  max-width: 420px;
}

.kicker {
  margin: 0 0 20px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.64);
}

h2 {
  margin: 0;
  font-size: 34px;
  line-height: 1.85;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

.record-body {
  max-width: 620px;
}

.record-body p {
  margin: 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.74);
}

.record-body p + p {
  margin-top: 30px;
}

.record-body a {
  margin-top: 42px;
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
}

.record-body a:hover {
  opacity: 0.72;
}

@media (max-width: 768px) {
  .record-section {
    padding: 104px 24px 116px;
  }

  .record-layout {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  h2 {
    font-size: 28px;
    line-height: 1.8;
  }

  .record-body p {
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
