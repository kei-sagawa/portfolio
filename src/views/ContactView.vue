<template>
  <section class="contact-page">
    <div class="background-overlay"></div>

    <div class="content">
      <h1 class="title">Contact</h1>
      <p class="subtitle">ご質問・お問い合わせはこちらから。</p>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <label>
          お名前
          <input type="text" v-model="name" required />
        </label>

        <label>
          メールアドレス
          <input type="email" v-model="email" required />
        </label>

        <label>
          メッセージ
          <textarea v-model="message" rows="6" required></textarea>
        </label>

        <button type="submit">送信</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  alert(`送信内容確認\n名前: ${name.value}\nメール: ${email.value}\nメッセージ: ${message.value}`)
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.contact-page {
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
  max-width: 600px;
  width: 100%;
  z-index: 1;
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

/* フォーム */
.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  font-size: 16px;
}

.contact-form input,
.contact-form textarea {
  margin-top: 8px;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #f4f1ea;
  resize: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(244, 241, 234, 0.6);
}

.contact-form button {
  padding: 14px 24px;
  font-size: 18px;
  background: #ffffff30;
  color: #f4f1ea;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: #ffffff50;
}

/* スマホ対応 */
@media screen and (max-width: 768px) {
  .contact-page {
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

  .contact-form label {
    font-size: 14px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 14px;
  }

  .contact-form button {
    font-size: 16px;
  }
}
</style>
