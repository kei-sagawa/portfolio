<template>
  <section class="consult" id="consult">
    <div class="section-inner">
      <div class="consult-head">
        <h2>ご相談</h2>
        <p class="consult-lead">静かに、丁寧に、一緒に整えます。</p>
      </div>

      <div class="consult-grid">
        <button
          class="consult-card"
          type="button"
          @click="selectAndGo('hub')"
          aria-label="拠点サイト制作を相談する"
        >
          <div class="consult-title">拠点サイト制作</div>
          <div class="consult-desc">
            世界観の整理から、構成・導線・実装まで。必要なものだけを静かに揃えます。
          </div>
          <div class="consult-meta">
            <span class="tag">構成</span>
            <span class="tag">UI</span>
            <span class="tag">実装</span>
          </div>
        </button>

        <button
          class="consult-card"
          type="button"
          @click="selectAndGo('ui')"
          aria-label="UI改善を相談する"
        >
          <div class="consult-title">UI改善 / デザイン調整</div>
          <div class="consult-desc">
            余白・文字・グリッド・動き。印象を壊さず、整って見える所まで詰めます。
          </div>
          <div class="consult-meta">
            <span class="tag">余白</span>
            <span class="tag">タイポ</span>
            <span class="tag">整え</span>
          </div>
        </button>

        <button
          class="consult-card"
          type="button"
          @click="selectAndGo('records')"
          aria-label="記録・ギャラリー実装を相談する"
        >
          <div class="consult-title">記録・ギャラリー機能の実装</div>
          <div class="consult-desc">
            活動履歴、作品一覧、写真の管理。静かに更新できる仕組みを作ります。
          </div>
          <div class="consult-meta">
            <span class="tag">Vue</span>
            <span class="tag">設計</span>
            <span class="tag">拡張</span>
          </div>
        </button>
      </div>

      <div class="consult-cta">
        <p class="consult-hint">まずは短いメッセージで大丈夫です。</p>
        <p class="consult-assurance">
          相談だけでも構いません。状況を読んだうえで、できる範囲の提案を返します。
        </p>

        <button class="consult-btn" type="button" @click="goToContact">お問い合わせへ進む</button>

        <p class="consult-micro">
          ※ 返信は少し時間をいただく場合があります。急ぎのときはその旨を書いてください。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ConsultKey = 'hub' | 'ui' | 'records'

const emit = defineEmits<{
  (e: 'select', payload: { key: ConsultKey }): void
}>()

function goToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

function selectAndGo(key: ConsultKey) {
  emit('select', { key })
  goToContact()
}
</script>

<style scoped>
.section-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.consult {
  padding: 140px 40px;
  text-align: center;
}

.consult-head h2 {
  margin: 0;
  letter-spacing: 0.16em;
}

.consult-lead {
  margin: 12px 0 0;
  font-size: 13px;
  letter-spacing: 0.16em;
  color: rgba(58, 42, 31, 0.72);
}

.consult-grid {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

/* ✅ <button>でもカードとして成立 */
.consult-card {
  appearance: none;
  border: 1px solid rgba(216, 207, 192, 0.7);
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  padding: 26px 24px;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.consult-card:hover {
  transform: translateY(-3px);
  border-color: rgba(184, 151, 115, 0.65);
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.1);
}

.consult-title {
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.92);
}

.consult-desc {
  margin-top: 10px;
  font-size: 13px;
  line-height: 2;
  color: rgba(43, 43, 43, 0.78);
}

.consult-meta {
  margin-top: 14px;
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid rgba(216, 207, 192, 0.7);
  background: rgba(255, 248, 240, 0.55);
  border-radius: 999px;
  line-height: 1;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.88);
}

/* CTA */
.consult-cta {
  margin-top: 34px;
  display: grid;
  justify-items: center;
  gap: 14px;
}

.consult-hint {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.78);
}

.consult-assurance {
  margin: 0;
  max-width: 640px;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.08em;
  color: rgba(43, 43, 43, 0.78);
  padding: 12px 14px;
  border-left: 2px solid rgba(184, 151, 115, 0.55);
  background: rgba(255, 255, 255, 0.45);
}

.consult-btn {
  border: 1px solid rgba(216, 207, 192, 0.85);
  background: rgba(255, 255, 255, 0.65);
  padding: 12px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Noto Serif JP', serif;
  font-size: 13px;
  letter-spacing: 0.14em;
  color: rgba(58, 42, 31, 0.86);
  transition:
    transform 0.15s ease,
    background 0.2s ease;
}

.consult-btn:hover {
  background: rgba(255, 248, 240, 0.85);
  transform: translateY(-1px);
}

.consult-micro {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: rgba(107, 79, 58, 0.7);
}

@media (max-width: 768px) {
  .consult {
    padding: 120px 18px;
  }
}
</style>
