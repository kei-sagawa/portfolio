import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type Body = {
  name?: string
  email?: string
  message?: string
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS（同一ドメイン運用なら基本不要だけど、保険）
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method Not Allowed' })

  const body = (req.body ?? {}) as Body
  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' })
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email' })
  }
  if (message.length > 4000) {
    return res.status(400).json({ ok: false, error: 'Message too long' })
  }

  try {
    const to = process.env.CONTACT_TO_EMAIL
    if (!to) return res.status(500).json({ ok: false, error: 'CONTACT_TO_EMAIL is not set' })

    const from = process.env.CONTACT_FROM_EMAIL || 'Tsuzuri <onboarding@resend.dev>'

    // あなた宛（通知）
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `【綴】お問い合わせ：${name}`,
      text: `名前: ${name}\nメール: ${email}\n\n---\n${message}\n`,
    })

    // 任意：送信者へ自動返信（不要なら消してOK）
    const autoReplyFrom = process.env.CONTACT_AUTOREPLY_FROM_EMAIL || from
    await resend.emails.send({
      from: autoReplyFrom,
      to: email,
      subject: '【綴】お問い合わせありがとうございます',
      text:
        `お問い合わせありがとうございます。\n` +
        `内容を確認し、折り返しご連絡します。\n\n` +
        `--- 送信内容 ---\n${message}\n`,
    })

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    console.error(e)
    return res.status(500).json({ ok: false, error: 'Internal Error' })
  }
}
