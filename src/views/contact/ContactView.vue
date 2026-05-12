<template>
  <main class="contact-page">
    <NavbarSection />

    <section class="contact-hero">
      <p class="kicker">Contact</p>

      <h1>
        必要なかたちを、<br />
        静かに整える。
      </h1>

      <p class="lead">
        サイト制作、見せ方の整理、UI調整、小さな実装まで。<br />
        まずは短いメッセージからでも大丈夫です。
      </p>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-guide">
          <p class="small-label">Consultation</p>
          <h2>ご相談について</h2>

          <p>内容を伺いながら、必要なものを見極め、できる範囲で丁寧に整えていきます。</p>

          <div class="consult-list">
            <span>Web制作</span>
            <span>UI調整</span>
            <span>見せ方の整理</span>
            <span>実装相談</span>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="openConfirm">
          <div class="form-group">
            <label for="name">お名前</label>
            <input id="name" v-model="form.name" type="text" placeholder="例: 山田 太郎" required />
          </div>

          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="example@tsuzuri.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">内容</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="メッセージをどうぞ"
              rows="7"
              required
            />
          </div>

          <button type="submit" class="submit-btn" :disabled="sending">
            {{ sending ? '送信中…' : '送信内容を確認する' }}
          </button>

          <p v-if="submitted" class="submit-message">送信が完了しました。ありがとうございます。</p>

          <p v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </section>

    <transition name="fade">
      <div v-if="showConfirm" class="confirm-overlay" @click.self="closeConfirm">
        <div class="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div class="confirm-head">
            <h3 id="confirm-title">この内容で送信しますか</h3>
            <p>送信前に内容をご確認ください。</p>
          </div>

          <div class="confirm-preview">
            <div class="preview-row">
              <div class="preview-label">お名前</div>
              <div class="preview-value">{{ preview.name }}</div>
            </div>

            <div class="preview-row">
              <div class="preview-label">メールアドレス</div>
              <div class="preview-value">{{ preview.email }}</div>
            </div>

            <div class="preview-row">
              <div class="preview-label">内容</div>
              <div class="preview-value preview-message">{{ preview.message }}</div>
            </div>
          </div>

          <div class="confirm-actions">
            <button
              type="button"
              class="confirm-btn secondary"
              :disabled="sending"
              @click="closeConfirm"
            >
              戻る
            </button>

            <button
              type="button"
              class="confirm-btn primary"
              :disabled="sending"
              @click="submitForm"
            >
              {{ sending ? '送信中…' : 'はい、送信する' }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import NavbarSection from '../home/components/NavbarSection.vue'
import FooterSection from '../home/components/FooterSection.vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const sending = ref(false)
const errorMessage = ref('')
const showConfirm = ref(false)

const preview = computed(() => ({
  name: form.value.name.trim(),
  email: form.value.email.trim(),
  message: form.value.message.trim(),
}))

function openConfirm() {
  submitted.value = false
  errorMessage.value = ''

  if (!preview.value.name || !preview.value.email || !preview.value.message) {
    errorMessage.value = '入力内容を確認してください。'
    return
  }

  showConfirm.value = true
}

function closeConfirm() {
  if (sending.value) return
  showConfirm.value = false
}

async function submitForm() {
  submitted.value = false
  errorMessage.value = ''
  sending.value = true

  try {
    const payload = {
      name: preview.value.name,
      email: preview.value.email,
      message: preview.value.message,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      console.error('送信失敗:', data)
      errorMessage.value = '送信に失敗しました。時間を置いて再度お試しください。'
      return
    }

    showConfirm.value = false
    submitted.value = true
    form.value = { name: '', email: '', message: '' }

    setTimeout(() => {
      submitted.value = false
    }, 5000)
  } catch (e) {
    console.error(e)
    errorMessage.value = '通信エラーが発生しました。'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  font-family: 'Noto Serif JP', serif;
  color: #2b2b2b;
}

.contact-hero {
  width: min(920px, 100%);
  margin: 0 auto;
  padding: 180px 40px 108px;
}

.kicker {
  margin: 0 0 22px;
  font-size: 13px;
  letter-spacing: 0.36em;
  color: rgba(107, 79, 58, 0.68);
}

h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.65;
  letter-spacing: 0.16em;
  font-weight: 500;
}

.lead {
  margin: 38px 0 0;
  font-size: 15px;
  line-height: 2.35;
  letter-spacing: 0.07em;
  color: rgba(43, 43, 43, 0.76);
}

.contact-hero > * {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.contact-hero .kicker {
  animation-delay: 0.1s;
}

.contact-hero h1 {
  animation-delay: 0.3s;
}

.contact-hero .lead {
  animation-delay: 0.6s;
}

.contact-section {
  padding: 20px 40px 150px;
}

.contact-inner {
  width: min(980px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 88px;
  align-items: start;
}

.small-label {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: 0.34em;
  color: rgba(107, 79, 58, 0.62);
}

.contact-guide h2 {
  margin: 0;
  font-size: 30px;
  line-height: 1.7;
  letter-spacing: 0.16em;
  font-weight: 500;
}

.contact-guide p:not(.small-label) {
  margin: 30px 0 0;
  font-size: 15px;
  line-height: 2.3;
  letter-spacing: 0.06em;
  color: rgba(43, 43, 43, 0.74);
}

.consult-list {
  margin-top: 38px;
  display: grid;
  border-top: 1px solid rgba(107, 79, 58, 0.14);
}

.consult-list span {
  padding: 18px 0;
  border-bottom: 1px solid rgba(107, 79, 58, 0.14);
  font-size: 14px;
  letter-spacing: 0.14em;
  color: rgba(58, 42, 31, 0.76);
}

.contact-form {
  display: grid;
  gap: 24px;
  padding: 42px 44px;
  background: rgba(255, 252, 245, 0.42);
  border: 1px solid rgba(107, 79, 58, 0.12);
  box-shadow: 0 28px 80px rgba(58, 42, 31, 0.045);
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 10px;
  font-size: 13px;
  letter-spacing: 0.12em;
  color: rgba(58, 42, 31, 0.82);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid rgba(216, 207, 192, 0.9);
  border-radius: 0;
  font-size: 15px;
  font-family: 'Noto Serif JP', serif;
  background: rgba(255, 248, 240, 0.58);
  color: #2b2b2b;
  transition:
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.form-group textarea {
  resize: vertical;
  min-height: 180px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(107, 79, 58, 0.38);
  background: rgba(255, 252, 245, 0.9);
  box-shadow: 0 0 0 3px rgba(184, 151, 115, 0.12);
}

.submit-btn {
  margin-top: 8px;
  width: 100%;
  padding: 15px 18px;
  border: 1px solid rgba(107, 79, 58, 0.28);
  background: #b89773;
  color: #fff;
  font-family: 'Noto Serif JP', serif;
  font-size: 14px;
  letter-spacing: 0.16em;
  cursor: pointer;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  background: #a9825e;
}

.submit-btn:disabled {
  opacity: 0.68;
  cursor: default;
  transform: none;
}

.submit-message,
.error-message {
  margin: 0;
  font-size: 13px;
  line-height: 2;
  letter-spacing: 0.08em;
}

.submit-message {
  color: #6b4f3a;
}

.error-message {
  color: #9d4c4c;
}

.confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(24, 18, 14, 0.36);
  backdrop-filter: blur(4px);
}

.confirm-modal {
  width: min(720px, 100%);
  padding: 30px 28px 26px;
  background: rgba(255, 248, 240, 0.96);
  border: 1px solid rgba(216, 207, 192, 0.95);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
  text-align: left;
}

.confirm-head h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.confirm-head p {
  margin: 12px 0 0;
  font-size: 14px;
  line-height: 1.9;
  color: rgba(58, 42, 31, 0.72);
}

.confirm-preview {
  margin-top: 24px;
  display: grid;
  gap: 14px;
}

.preview-row {
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(216, 207, 192, 0.85);
}

.preview-label {
  font-size: 12px;
  letter-spacing: 0.12em;
  color: rgba(107, 79, 58, 0.85);
}

.preview-value {
  margin-top: 8px;
  font-size: 15px;
  line-height: 1.9;
  word-break: break-word;
}

.preview-message {
  white-space: pre-wrap;
}

.confirm-actions {
  margin-top: 26px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.confirm-btn {
  min-width: 140px;
  padding: 12px 18px;
  font-family: 'Noto Serif JP', serif;
  font-size: 14px;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    background 0.25s ease;
}

.confirm-btn:hover {
  transform: translateY(-1px);
}

.confirm-btn:disabled {
  opacity: 0.68;
  cursor: default;
  transform: none;
}

.confirm-btn.secondary {
  background: transparent;
  color: #6b4f3a;
  border: 1px solid rgba(184, 151, 115, 0.45);
}

.confirm-btn.primary {
  background: #b89773;
  color: #fff;
  border: 1px solid #b89773;
}

.confirm-btn.primary:hover {
  background: #a9825e;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .contact-hero {
    padding: 150px 24px 86px;
  }

  .contact-section {
    padding: 20px 24px 112px;
  }

  .contact-inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .contact-guide h2 {
    font-size: 24px;
  }

  .contact-form {
    padding: 32px 26px;
  }

  h1 {
    font-size: 34px;
  }
}

@media (max-width: 640px) {
  .confirm-overlay {
    padding: 16px;
  }

  .confirm-modal {
    padding: 24px 18px 20px;
  }

  .confirm-actions {
    flex-direction: column-reverse;
  }

  .confirm-btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-hero > * {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
