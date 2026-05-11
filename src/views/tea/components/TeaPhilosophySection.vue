<template>
  <section class="tea-philosophy">
    <div class="section-inner">
      <div class="philosophy-layout">
        <div class="vertical-title">
          <span>思想</span>
        </div>

        <div class="body">
          <h2>茶道は、ものを見るための姿勢でもある。</h2>

          <div class="text-block">
            <p>
              茶道には、道具を選ぶこと、季節を受け取ること、
              所作を整えること、場をつくることが含まれています。
            </p>

            <p>
              それは単なる伝統文化ではなく、日々の制作や設計にもつながる視点です。
              余白を残すこと。必要以上に飾らないこと。 目の前のものを、丁寧に扱うこと。
            </p>

            <p>綴では、その感覚をWebやアプリ、文章、 道具の記録へと接続していきます。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tea-philosophy {
  padding: 132px 40px 152px;
}

.section-inner {
  width: min(980px, 100%);
  margin: 0 auto;
}

.philosophy-layout {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 92px;
  align-items: start;
}

.vertical-title {
  writing-mode: vertical-rl;
  justify-self: end;
  font-size: 14px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

.body {
  max-width: 720px;
}

h2 {
  margin: 0;
  font-size: 30px;
  line-height: 1.9;
  letter-spacing: 0.14em;
  font-weight: 500;
  color: #2b2b2b;
}

.text-block {
  margin-top: 48px;
  max-width: 680px;
}

p {
  margin: 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.74);
}

p + p {
  margin-top: 30px;
}

@media (max-width: 768px) {
  .tea-philosophy {
    padding: 104px 24px 116px;
  }

  .philosophy-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .vertical-title {
    writing-mode: horizontal-tb;
    justify-self: start;
  }

  h2 {
    font-size: 24px;
    line-height: 1.85;
  }

  .text-block {
    margin-top: 36px;
  }

  p {
    font-size: 15px;
    line-height: 2.15;
  }
}
</style>
