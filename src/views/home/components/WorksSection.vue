<template>
  <section class="works" id="works">
    <div class="section-inner">
      <h2>制作</h2>

      <div class="works-grid">
        <a class="work-card" href="#" target="_blank" rel="noopener">
          <div class="work-title">綴 / TSUZURI（拠点サイト）</div>
          <div class="work-desc">思索と創作を静かに綴るための個人拠点。導線と余白の設計。</div>
          <div class="work-meta">
            <span class="tag">Vue</span>
            <span class="tag">TypeScript</span>
          </div>
        </a>

        <a class="work-card" href="#" target="_blank" rel="noopener">
          <div class="work-title">Tea Utensil Manager</div>
          <div class="work-desc">茶道具の登録・タグ・検索を行う管理アプリ。記録のための道具。</div>
          <div class="work-meta">
            <span class="tag">Vue</span>
            <span class="tag">Supabase</span>
          </div>
        </a>

        <a class="work-card" href="#" target="_blank" rel="noopener">
          <div class="work-title">Todo App</div>
          <div class="work-desc">日々の積み重ねを小さく続けるためのシンプルなタスク管理。</div>
          <div class="work-meta">
            <span class="tag">Vue</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works {
  padding: 140px 40px;
  text-align: center;
}
.works h2 {
  margin-bottom: 60px;
  letter-spacing: 0.16em;
}
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 34px;
}
.work-card {
  display: block;
  padding: 28px 26px;
  text-decoration: none;
  color: inherit;
  text-align: left;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(216, 207, 192, 0.65);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}
.work-card:hover {
  transform: translateY(-3px);
  border-color: rgba(184, 151, 115, 0.6);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.09);
}
.work-title {
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #2b2b2b;
  line-height: 1.6;
  font-size: 15px;
}
.work-desc {
  margin-top: 10px;
  font-size: 13px;
  line-height: 2;
  color: rgba(43, 43, 43, 0.78);
}
.work-meta {
  margin-top: 14px;
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.88);
}

/* 共通タグ（まずはここに置く。後で共通CSSへ移してもOK） */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid rgba(216, 207, 192, 0.7);
  background: rgba(255, 248, 240, 0.6);
  border-radius: 999px;
  line-height: 1;
}
</style>
