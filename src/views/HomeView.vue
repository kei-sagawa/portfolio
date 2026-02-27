<template>
  <div class="home">
    <div class="canvas">
      <!-- 巨大タイトル -->
      <div class="hero">
        <h1 class="main-title fade-keian">KEIAN</h1>
        <p class="jp-title fade-jp">渓庵</p>
      </div>

      <!-- 思索ブロック -->
      <div class="thought fade-thought">
        <p class="vertical">
          静かに考え、<br />
          静かに作る。<br />
          それを、<br />
          繰り返す。
        </p>
      </div>

      <!-- 導線 -->
      <div class="cta fade-works">
        <router-link to="/works" class="works-link"> VIEW WORKS → </router-link>
      </div>

      <!-- 右下 Contact -->
      <div class="contact fade-contact">
        <router-link to="/contact" class="contact-link"> Contact </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========================
   基本スタイル（デスクトップ）
======================== */
.home {
  min-height: 90vh;
  display: flex;
  position: relative;
}

/* 背景画像（透過） */
.home::before {
  content: '';
  position: fixed;
  inset: 0;
  background: url('/1.JPG') center/cover no-repeat;
  opacity: 0.3; /* 透過度 */
  pointer-events: none;
}

/* 背景オーバーレイ */
.home::after {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

.canvas {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 60px;
  position: relative;
}

/* タイトル */
.main-title {
  font-size: 180px;
  font-weight: 900;
  color: #ffffff; /* 文字を白にして濃く */
  opacity: 0.8; /* 不透明 */
  position: absolute;
  top: 40px;
  left: 40px;
  pointer-events: none;
  mix-blend-mode: normal; /* 背景との混ざりを解除 */
  transform: rotate(-2deg);
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); /* 浮き上がり */
}

.jp-title {
  font-size: 64px;
  font-family: 'Hiragino Mincho ProN', serif;
  position: relative;
  z-index: 2;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

/* 思索ブロック */
.thought {
  margin-top: 120px;
  position: absolute;
  right: 95px;
  top: 200px;
}

.vertical {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 24px;
  line-height: 2.4;
  letter-spacing: 0.15em;
  color: #ffffff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}

/* Works導線 */
.cta {
  margin-top: 120px;
}

.works-link {
  font-size: 18px;
  letter-spacing: 0.2em;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  padding-bottom: 4px;
  transition: opacity 0.3s ease;
  color: #ffffff;
}

.works-link:hover {
  opacity: 0.5;
}

/* Contact */
.contact {
  position: fixed;
  bottom: 40px;
  right: 40px;
}

.contact-link {
  font-size: 12px;
  letter-spacing: 0.35em;
  opacity: 0.4;
  text-decoration: none;
  transition: opacity 0.3s ease;
  color: #ffffff;
}

.contact-link:hover {
  opacity: 1;
}

/* アニメーション */
.fade-jp,
.fade-thought,
.fade-works,
.fade-contact {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.8s ease forwards;
}

.fade-keian {
  transform: translateY(10px);
  animation: keianIn 0.8s ease forwards;
}

@keyframes keianIn {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}

.fade-keian {
  animation-delay: 0s;
}
.fade-jp {
  animation-delay: 0.2s;
}
.fade-thought {
  animation-delay: 0.4s;
}
.fade-works {
  animation-delay: 0.6s;
}
.fade-contact {
  animation-delay: 0.75s;
}

@keyframes fadeInUp {
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}

/* ========================
   スマホ対応
======================== */
@media screen and (max-width: 768px) {
  .canvas {
    padding: 60px 20px;
  }
  .main-title {
    font-size: 80px;
    top: 20px;
    left: 20px;
  }
  .jp-title {
    font-size: 32px;
  }
  .thought {
    position: relative;
    top: auto;
    right: auto;
    margin: 40px 0 0 0;
    text-align: center;
  }
  .vertical {
    writing-mode: horizontal-tb;
    font-size: 18px;
    line-height: 2;
  }
  .cta {
    text-align: center;
    margin-top: 40px;
  }
  .contact {
    position: relative;
    bottom: auto;
    right: auto;
    text-align: center;
    margin-top: 40px;
  }
  .fade-jp,
  .fade-thought,
  .fade-works,
  .fade-contact {
    transform: translateY(0);
  }
}
</style>
