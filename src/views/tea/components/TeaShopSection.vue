<template>
  <section class="tea-shop">
    <div class="section-inner">
      <div class="shop-layout">
        <div class="shop-body">
          <p class="kicker">shops</p>

          <h2>手元に残るもの。</h2>

          <p>茶道具や古書など、日々の中で扱っているものを、 小さな記録の延長として置いています。</p>

          <p>
            使い込まれた道具や、時間を経た紙には、 そのもの以上の空気が残っているように感じます。
          </p>

          <a href="https://tsuzurilab.base.shop/" target="_blank" rel="noopener">
            扱っているものを見る
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tea-shop {
  padding: 148px 40px 172px;
  background: rgba(255, 255, 255, 0.16);
}

.section-inner {
  width: min(980px, 100%);
  margin: 0 auto;
}

.shop-layout {
  display: grid;
  grid-template-columns: 1fr 72px;
  gap: 88px;
  align-items: start;
}

.shop-body {
  max-width: 620px;
}

.kicker {
  margin: 0 0 18px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.64);
}

h2 {
  margin: 0;
  font-size: 34px;
  line-height: 1.8;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: #2b2b2b;
}

.shop-body p {
  margin: 34px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.74);
}

.shop-body a {
  margin-top: 42px;
  display: inline-flex;
  color: #3a2a1f;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.16em;
  border-bottom: 1px solid rgba(107, 79, 58, 0.32);
  padding-bottom: 6px;
}

.shop-body a:hover {
  opacity: 0.72;
}

.vertical-word {
  writing-mode: vertical-rl;
  font-size: 14px;
  letter-spacing: 0.42em;
  color: rgba(107, 79, 58, 0.52);
}

@media (max-width: 768px) {
  .tea-shop {
    padding: 104px 24px 116px;
  }

  .shop-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .vertical-word {
    writing-mode: horizontal-tb;
  }

  h2 {
    font-size: 28px;
    line-height: 1.8;
  }

  .shop-body p {
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
