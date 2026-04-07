<template>
  <section class="contact" id="contact">
    <div class="section-inner">
      <h2>お問い合わせ</h2>
      <p>ご相談・お見積り・質問など。短い文で大丈夫です。</p>

      <form class="contact-form" @submit.prevent="openConfirm">
        <div class="form-group">
          <label for="name">お名前</label>
          <input type="text" id="name" v-model="form.name" placeholder="例: 山田 太郎" required />
        </div>

        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="example@tsuzuri.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">内容</label>
          <textarea
            id="message"
            v-model="form.message"
            @input="onMessageInput"
            placeholder="メッセージをどうぞ"
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="sending">
          {{ sending ? '送信中…' : '送信' }}
        </button>
      </form>

      <p v-if="submitted" class="submit-message">送信が完了しました。ありがとうございます！</p>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
    </div>

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

            <div class="preview-row is-message">
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
              @click="confirmSubmit"
            >
              {{ sending ? '送信中…' : 'はい、送信する' }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type ConsultKey = 'hub' | 'ui' | 'records' | null

const props = defineProps<{
  prefillKey?: ConsultKey
}>()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const sending = ref(false)
const errorMessage = ref('')
const showConfirm = ref(false)

/** どのテンプレを最後に自動適用したか */
const lastAppliedKey = ref<Exclude<ConsultKey, null> | null>(null)

/** ユーザーが手動で文章を編集したか（＝上書きしない） */
const userEdited = ref(false)

const templates: Record<Exclude<ConsultKey, null>, string> = {
  hub: `【ご相談】拠点サイト制作

- 目的：
- 参考URL（あれば）：
- 期限（あれば）：
- 予算感（あれば）：
- 相談したい内容：
`,
  ui: `【ご相談】UI改善 / デザイン調整

- 対象ページ：
- 気になっている点（余白/文字/配色/動き など）：
- 参考（スクショやURLがあれば）：
- 相談したい内容：
`,
  records: `【ご相談】記録・ギャラリー機能の実装

- したいこと（例：年フィルタ/モーダル/管理画面など）：
- 現状（技術/構成）：
- 相談したい内容：
`,
}

const preview = computed(() => ({
  name: form.value.name.trim(),
  email: form.value.email.trim(),
  message: form.value.message.trim(),
}))

/** textarea の input で呼ぶ（=編集開始を検知） */
function onMessageInput() {
  userEdited.value = true
}

watch(
  () => props.prefillKey,
  (key) => {
    if (!key) return

    const current = form.value.message
    const lastKey = lastAppliedKey.value
    const lastTemplate = lastKey ? templates[lastKey] : null

    const isStillAutoTemplate = lastTemplate != null && current === lastTemplate
    const isEmpty = current.trim().length === 0

    if (isEmpty || isStillAutoTemplate || !userEdited.value) {
      form.value.message = templates[key]
      lastAppliedKey.value = key
      userEdited.value = false
      return
    }
  },
  { immediate: true },
)

watch(
  () => form.value.message,
  (msg) => {
    if (msg.trim().length === 0) {
      userEdited.value = false
      lastAppliedKey.value = null
    }
  },
)

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

async function confirmSubmit() {
  await submitForm()
}

async function submitForm() {
  submitted.value = false
  errorMessage.value = ''
  sending.value = true

  try {
    const payload = {
      name: form.value.name.trim(),
      email: form.value.email.trim(),
      message: form.value.message.trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      errorMessage.value = '入力内容を確認してください。'
      showConfirm.value = false
      return
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

defineExpose({ onMessageInput })
</script>

<style scoped>
.contact {
  padding: 120px 40px;
  text-align: center;
}

.contact-form {
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #3a2a1f;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid #d8cfc0;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Noto Serif JP', serif;
  background: #fff8f0;
  color: #2b2b2b;
  transition:
    border 0.3s,
    box-shadow 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #b89773;
  box-shadow: 0 0 8px rgba(184, 151, 115, 0.4);
}

.submit-btn {
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  background: #b89773;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s,
    opacity 0.2s;
}

.submit-btn:hover {
  background: #a07b54;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: default;
  transform: none;
}

.submit-message {
  margin-top: 16px;
  color: #6b4f3a;
  font-weight: 600;
}

.error-message {
  margin-top: 16px;
  color: #a14b4b;
  font-weight: 600;
}

.confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(24, 18, 14, 0.36);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.confirm-modal {
  width: min(720px, 100%);
  background: rgba(255, 248, 240, 0.96);
  border: 1px solid rgba(216, 207, 192, 0.95);
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
  padding: 28px 24px 24px;
  text-align: left;
}

.confirm-head h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #2b2b2b;
}

.confirm-head p {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.9;
  color: rgba(58, 42, 31, 0.78);
}

.confirm-preview {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.preview-row {
  padding: 16px 18px;
  border-radius: 12px;
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
  color: #2b2b2b;
  word-break: break-word;
}

.preview-message {
  white-space: pre-wrap;
}

.confirm-actions {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.confirm-btn {
  min-width: 140px;
  padding: 12px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition:
    transform 0.2s,
    opacity 0.2s,
    background 0.2s,
    border-color 0.2s;
}

.confirm-btn:hover {
  transform: translateY(-1px);
}

.confirm-btn:disabled {
  opacity: 0.7;
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
  background: #a07b54;
  border-color: #a07b54;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .contact {
    padding: 100px 20px;
  }

  .contact-form {
    margin-top: 32px;
    gap: 20px;
  }

  .confirm-overlay {
    padding: 16px;
  }

  .confirm-modal {
    padding: 22px 18px 18px;
    border-radius: 16px;
  }

  .confirm-head h3 {
    font-size: 18px;
    line-height: 1.6;
  }

  .confirm-head p {
    font-size: 13px;
    line-height: 1.8;
  }

  .preview-row {
    padding: 14px 14px;
  }

  .preview-value {
    font-size: 14px;
    line-height: 1.8;
  }

  .confirm-actions {
    flex-direction: column-reverse;
  }

  .confirm-btn {
    width: 100%;
  }
}
</style>
