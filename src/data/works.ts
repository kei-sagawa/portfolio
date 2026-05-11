export type WorkItem = {
  id: string
  title: string
  subtitle: string
  status: string
  description: string
  tags: string[]
  url?: string
}

export const works: WorkItem[] = [
  {
    id: 'chachou',
    title: '茶帳',
    subtitle: '茶道の記録アプリ',
    status: '開発中',
    description:
      '茶道具、稽古ログ、会記を記録するためのアプリ。茶道の記憶を、あとから振り返れるかたちで残すことを目指しています。',
    tags: ['Vue 3', 'TypeScript', 'Supabase', 'Vercel'],
    url: 'https://chachou.jp',
  },
  {
    id: 'tsuzuri',
    title: '綴 TSUZURI',
    subtitle: '思索と創作の記録',
    status: '運用中',
    description:
      '茶道、制作、思索を静かに置くための個人サイト。このサイト自体も、思想と表現を整える制作物の一つです。',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'Vercel'],
  },
  // {
  //   id: 'tsuzuriha',
  //   title: '綴葉',
  //   subtitle: '古書を管理するためのアプリ',
  //   status: '制作中',
  //   description:
  //     '古書の情報を管理するためのアプリ。自分の蔵書をデジタルで整理し、古書店での買い物や蔵書管理を便利にすることを目指しています。',
  //   tags: ['Vue 3', 'TypeScript', 'Supabase', 'Vercel'],
  // },
  {
    id: 'hakuu',
    title: '白雨 - hakuu -',
    subtitle: '静かな時間を描く音と映像の作品',
    status: '公開中',
    description:
      '雨音、お茶、静かな言葉をテーマにしたYouTubeチャンネル。白雨という人物の人生の一場面を、アンビエント音楽と映像で静かに描いています。',
    tags: ['YouTube', 'Ambient Music', 'AI Creation', 'Storytelling'],
    url: 'https://www.youtube.com/channel/UCIjkbj7GZdwmBxXBJIr2izA',
  },
]
