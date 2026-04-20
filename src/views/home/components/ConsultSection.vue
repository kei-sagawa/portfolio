<template>
  <section class="consult" id="consult">
    <div class="section-inner">
      <div class="consult-head">
        <h2>ご相談</h2>
        <p class="consult-lead">静かに、丁寧に、必要な形を一緒に整えます。</p>
      </div>

      <div class="consult-body">
        <p class="consult-text">
          サイト制作、見せ方の整理、UIの調整、小さな実装まで。<br />
          内容を伺いながら、必要なものを見極め、できる範囲で整えていきます。
        </p>

        <!-- ここで一度“間”を作る -->
        <p class="consult-scope">サイト制作 / UI調整 / 見せ方の整理 / 実装相談</p>

        <p class="consult-text">
          世界観を大切にしたい個人サイトや、余白を活かした見せ方、
          落ち着いた導線設計など、静かな佇まいを保ったまま形にしたい場合に向いています。
        </p>

        <!-- 感情ポイント -->
        <p class="consult-note">
          まずは短いメッセージからでも大丈夫です。<br />
          状況を読んだうえで、返せる範囲で丁寧にお返事します。
        </p>

        <div class="consult-actions">
          <button class="consult-link" type="button" @click="goToContact">お問い合わせへ</button>
        </div>

        <p class="consult-micro">
          ※ 返信には少し時間をいただく場合があります。急ぎのときはその旨をご記載ください。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function goToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.consult {
  padding: 150px 40px 160px;
}

.section-inner {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

.consult-head {
  text-align: center;
  margin-bottom: 72px;
}

.consult-head h2 {
  margin: 0;
  font-size: 34px;
  letter-spacing: 0.16em;
  color: #2b2b2b;
}

.consult-lead {
  margin: 18px 0 0;
  font-size: 14px;
  line-height: 2.1;
  letter-spacing: 0.12em;
  color: rgba(58, 42, 31, 0.72);
}

.consult-body {
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
}

/* 本文 */
.consult-text {
  margin: 0;
  font-size: 16px;
  line-height: 2.3;
  letter-spacing: 0.04em;
  color: rgba(43, 43, 43, 0.82);
}

.consult-text + .consult-text {
  margin-top: 28px;
}

/* 1行アクセント（これが効く） */
.consult-scope {
  margin: 36px 0;
  font-size: 12px;
  letter-spacing: 0.18em;
  color: rgba(107, 79, 58, 0.7);
}

/* 感情ポイント */
.consult-note {
  margin: 40px 0 0;
  padding-left: 20px;
  border-left: 2px solid rgba(184, 151, 115, 0.6);
  font-size: 14px;
  line-height: 2.2;
  letter-spacing: 0.06em;
  color: rgba(58, 42, 31, 0.75);
}

/* CTA */
.consult-actions {
  margin-top: 48px;
}

.consult-link {
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  font-family: 'Noto Serif JP', serif;
  font-size: 13px;
  line-height: 1.8;
  letter-spacing: 0.18em;
  color: #6b4f3a;
  cursor: pointer;
  transition: opacity 0.25s ease;
}

.consult-link:hover {
  opacity: 0.68;
}

/* 補足 */
.consult-micro {
  margin: 32px 0 0;
  font-size: 11px;
  line-height: 2;
  letter-spacing: 0.1em;
  color: rgba(107, 79, 58, 0.68);
}

/* レスポンシブ */
@media (max-width: 768px) {
  .consult {
    padding: 110px 20px 124px;
  }

  .consult-head {
    margin-bottom: 48px;
  }

  .consult-head h2 {
    font-size: 30px;
  }

  .consult-lead {
    font-size: 13px;
  }

  .consult-text {
    font-size: 14px;
    line-height: 2.1;
  }

  .consult-scope {
    margin: 28px 0;
    font-size: 11px;
  }

  .consult-note {
    margin-top: 28px;
    padding-left: 16px;
    font-size: 13px;
  }

  .consult-actions {
    margin-top: 32px;
  }

  .consult-link {
    font-size: 12px;
  }

  .consult-micro {
    margin-top: 22px;
    font-size: 10px;
  }
}
</style>
