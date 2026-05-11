<template>
  <section class="tea-hero">
    <div class="tea-hero-inner">
      <!-- <p class="kicker">茶</p> -->

      <h1>
        茶のある時間を、<br />
        静かに綴る。
      </h1>

      <p class="lead">
        道具、所作、季節、記録。<br />
        茶道を通して見えてくるものを、制作と思索の中心に置いています。
      </p>
    </div>
  </section>
</template>

<style scoped>
.tea-hero {
  padding: 190px 40px 130px;
}

.tea-hero-inner {
  width: min(920px, 100%);
  margin: 0 auto;
}

.kicker {
  margin: 0 0 24px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

h1 {
  margin: 0;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.65;
  letter-spacing: 0.18em;
  font-weight: 500;
  color: #2b2b2b;
}

.lead {
  margin: 42px 0 0;
  font-size: 16px;
  line-height: 2.35;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.76);
}

@media (max-width: 768px) {
  .tea-hero {
    padding: 150px 24px 96px;
  }

  h1 {
    font-size: 36px;
    line-height: 1.7;
  }

  .lead {
    font-size: 15px;
    line-height: 2.2;
  }
}
</style>
