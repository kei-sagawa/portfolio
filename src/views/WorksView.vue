<template>
  <section class="works">
    <div class="background-overlay"></div>

    <div class="content">
      <h1 class="title">Works</h1>
      <p class="subtitle">制作した作品やプロジェクトの紹介です。</p>

      <div class="works-grid">
        <div class="work-item" v-for="(work, index) in works" :key="index">
          <img :src="work.image" :alt="work.title" />
          <h3 class="work-title">{{ work.title }}</h3>
          <p class="work-description">{{ work.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const works = [
  {
    title: 'Todo App',
    description: '学習のために作ったVue.jsで動くTodoアプリ。',
    image: '/works2.jpg',
  },
  {
    title: 'Tea Ceremony App',
    description: '茶道の道具や作法を管理できるアプリ。',
    image: '/works3.jpg',
  },
]
</script>

<style scoped>
.works {
  position: relative;
  min-height: 90vh;
  padding: 120px 60px;
  font-family: 'Hiragino Mincho ProN', serif;
  color: #f4f1ea;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 1000px;
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

/* 作品グリッド */
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  width: 100%;
}

.work-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.work-title {
  margin-top: 12px;
  font-size: 22px;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.work-description {
  font-size: 16px;
  margin-top: 6px;
  line-height: 1.8;
  color: #e6dfd3;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

/* スマホ対応 */
@media screen and (max-width: 768px) {
  .works {
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

  .works-grid {
    gap: 20px;
  }

  .work-title {
    font-size: 18px;
    text-align: center;
  }

  .work-description {
    font-size: 14px;
    text-align: center;
  }
}
</style>
