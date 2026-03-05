<template>
  <!-- 縦帯 -->
  <div class="vertical-band"></div>

  <!-- テキスト -->
  <div class="hero-content">
    <h1 class="brand-name fade1">
      <span class="tsuzuri">綴</span>
      <span class="roman">TSUZURI</span>
    </h1>

    <p class="concept-vertical fade2">思索と創作の記録</p>

    <p class="concept-sub fade3">Keita Sagawa</p>
  </div>
</template>

<style scoped>
/* ======================
VERTICAL BAND
（位置はそのまま：left 25%固定）
====================== */
.vertical-band {
  position: absolute;
  top: 0;
  left: 25%; /* ✅ 位置固定 */
  transform: translateX(-50%); /* ✅ 位置固定（パララックス側もこれ前提） */
  width: 280px; /* ✅ 幅固定（現状維持） */
  height: 100%;

  /* ✅ 質感調整：内装っぽさを少し抑え、紙/余白寄りへ（ただし色味は維持） */
  background: linear-gradient(to bottom, rgba(250, 245, 230, 0.92), rgba(230, 210, 180, 0.92));

  backdrop-filter: blur(6px); /* 少し弱めて自然に */
  box-shadow: 0 0 34px rgba(0, 0, 0, 0.07);
  border-left: 1px solid rgba(58, 42, 31, 0.08);
  border-right: 1px solid rgba(58, 42, 31, 0.08);

  z-index: 1;
}

/* ======================
HERO CONTENT
（位置はそのまま：top/left 50%/25%）
transform衝突を回避する
====================== */
.hero-content {
  position: absolute;
  top: 50%; /* ✅ 位置固定 */
  left: 25%; /* ✅ 位置固定 */

  /* ✅ transform を使わずセンタリング（アニメ transform と衝突しない） */
  translate: -50% -50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  /* 文字の視認性（薄く） */
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.12);
}

/* ======================
TITLE
====================== */
.brand-name {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: clamp(70px, 10vw, 130px);
  font-weight: 600;
  line-height: 1;
  color: #3a2a1f;

  letter-spacing: 0.02em;
}

.tsuzuri {
  display: inline-block;
  transform: translateX(1px); /* ここは現状維持 */
}

/* ✅ センター崩れの原因になりやすい margin-left を撤廃 */
.roman {
  display: block;
  font-size: 18px;
  letter-spacing: 0.6em;
  margin-top: 10px;
  color: #6b4f3a;

  margin-left: 0; /* ✅ */
  /* 字間が広い時はほんの少し縮めた方が読みやすい場合もある
     → もし強いと感じたら 0.55em に */
}

/* ======================
CONCEPT
====================== */
.concept-vertical {
  writing-mode: vertical-rl;
  font-size: 22px;
  line-height: 2.2;
  margin-top: 40px;
  letter-spacing: 0.15em;
  color: rgba(58, 42, 31, 0.9);
}

.concept-sub {
  margin-top: 30px;
  font-size: 15px;
  letter-spacing: 0.15em;
  color: #6b4f3a;
  opacity: 0.95;
}

/* ======================
ANIMATION
transform衝突は hero-content 側で回避済み
（both を付けてチラつき防止）
====================== */
.fade1 {
  animation: fadeUp 1.4s ease both;
}
.fade2 {
  animation: fadeUp 1.8s ease both;
}
.fade3 {
  animation: fadeUp 2.2s ease both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ======================
RESPONSIVE
モバイルで縦書きがきついので横書きへ
（位置は変えない）
====================== */
@media (max-width: 768px) {
  .concept-vertical {
    writing-mode: horizontal-tb;
    font-size: 16px;
    line-height: 2;
    margin-top: 26px;
    letter-spacing: 0.08em;
    text-align: center;
  }

  .roman {
    font-size: 14px;
    letter-spacing: 0.5em;
  }

  .concept-sub {
    font-size: 13px;
    letter-spacing: 0.18em;
  }
}
</style>
