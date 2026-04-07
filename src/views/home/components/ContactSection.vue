<template>
  <section class="contact" id="contact">
    <div class="section-inner">
      <h2>お問い合わせ</h2>
      <p>ご相談・お見積り・質問など。短い文で大丈夫です。</p>

      <form class="contact-form" @submit.prevent="submitForm">
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

        <button type="submit" class="submit-btn">送信</button>
      </form>

      <p v-if="submitted" class="submit-message">送信が完了しました。ありがとうございます！</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

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

/** textarea の input で呼ぶ（=編集開始を検知） */
function onMessageInput() {
  // 自動テンプレが入っている状態で、ユーザーが編集し始めたらロック
  //（以後、別メニューを押しても上書きしない）
  userEdited.value = true
}

/**
 * prefillKey が変わったらテンプレを入れる。
 * ただし「ユーザーが編集していない」or「前回テンプレそのまま」なら上書きOK
 */
watch(
  () => props.prefillKey,
  (key) => {
    if (!key) return

    const current = form.value.message
    const lastKey = lastAppliedKey.value
    const lastTemplate = lastKey ? templates[lastKey] : null

    const isStillAutoTemplate = lastTemplate != null && current === lastTemplate
    const isEmpty = current.trim().length === 0

    // ✅ ここが肝：
    // - 空なら当然入れる
    // - 前回テンプレのままなら、別メニューで差し替える（便利）
    // - ユーザーが編集してなければ差し替える（まだ触ってない）
    if (isEmpty || isStillAutoTemplate || !userEdited.value) {
      form.value.message = templates[key]
      lastAppliedKey.value = key
      userEdited.value = false // 新しいテンプレを入れた直後は「未編集」扱いに戻す
      return
    }

    // ここに来るのは「ユーザーが編集済み」なので何もしない（保護）
  },
  { immediate: true },
)

// ✅ ユーザーがメッセージを全部消したら、次のクリックで差し替え可能に戻す
watch(
  () => form.value.message,
  (msg) => {
    if (msg.trim().length === 0) {
      userEdited.value = false
      lastAppliedKey.value = null
    }
  },
)

async function submitForm() {
  try {
    const payload = {
      name: form.value.name.trim(),
      email: form.value.email.trim(),
      message: form.value.message.trim(),
    }

    // 軽いバリデーション
    if (!payload.name || !payload.email || !payload.message) return

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      console.error('送信失敗:', data)
      // ここでUIにエラー表示したければ stateを追加
      return
    }

    submitted.value = true
    form.value = { name: '', email: '', message: '' }

    setTimeout(() => {
      submitted.value = false
    }, 3000)
  } catch (e) {
    console.error(e)
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
    transform 0.2s;
}

.submit-btn:hover {
  background: #a07b54;
  transform: translateY(-2px);
}

.submit-message {
  margin-top: 16px;
  color: #6b4f3a;
  font-weight: 600;
}
</style>
