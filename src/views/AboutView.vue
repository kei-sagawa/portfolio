<template>
  <section class="about">
    <div class="background-overlay"></div>

    <div class="content">
      <h1 class="title">About</h1>
      <p class="subtitle">私の活動や想いを紹介します。</p>

      <div class="about-content">
        <!-- 活動の広がりと理念 -->
        <p>
          渓庵（Keian）としての活動は、アプリ開発から茶道、古本の整理まで多岐にわたります。
          どの活動にも共通するのは、「静寂の中に美を見つけ、丁寧に形にする」という姿勢です。
          日常の小さな瞬間や物事の余白を大切にし、それを設計や表現に落とし込むことを意識しています。
        </p>

        <!-- 創作のプロセス -->
        <p>
          アイデアは急がず、ゆっくりと考え、紙やデジタル上で形にします。
          試行錯誤を重ねることで、無駄のない構造と静かな美しさを追求します。
          作品の完成だけでなく、作る過程そのものも、私にとって価値ある時間です。
        </p>

        <!-- 興味・好み・世界観 -->
        <p>
          好きなものは和風デザイン、侘び寂び、着物、静かな時間。
          こうした好みや感性は、ポートフォリオサイトやアプリの設計にも反映されています。
          将来的には、自分の世界観を表現するデジタル作品を公開し、静かで丁寧な美の空間を人々と共有したいと考えています。
        </p>

        <!-- 哲学・メッセージ -->
        <p>
          「静かに考え、静かに作る。」
          日々の生活や仕事の中で、この言葉を実践することで、慌ただしい日常にも豊かさや余白を見つけられると信じています。
          私の作品や活動を通して、見てくださる方にも、その感覚を少しでも届けられれば嬉しいです。
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about {
  position: relative;
  min-height: 90vh;
  padding: 120px 60px;
  font-family: 'Hiragino Mincho ProN', serif;
  color: #f4f1ea;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

/* 背景オーバーレイ */
.background-overlay {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  pointer-events: none;
}

/* コンテンツ */
.content {
  max-width: 900px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* タイトル */
.title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 12px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

/* サブタイトル */
.subtitle {
  font-size: 20px;
  color: #e6dfd3;
  margin-bottom: 40px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

/* 本文 */
.about-content p {
  margin-bottom: 24px;
  line-height: 2;
  color: #f4f1ea;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-size: 18px;
}

/* スマホ対応 */
@media screen and (max-width: 768px) {
  .about {
    padding: 60px 20px;
  }

  .title {
    font-size: 36px;
    text-align: center;
  }

  .subtitle {
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;
  }

  .about-content p {
    font-size: 16px;
    text-align: center;
  }
}
</style>
