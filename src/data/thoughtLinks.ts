export type ThoughtLink = {
  id: string
  title: string
  description: string
  href: string
  label: string
}

export const thoughtLinks: ThoughtLink[] = [
  {
    id: 'note',
    title: 'note',
    description: '茶道、制作、暮らしの中で考えたことを、少し長い文章として残しています。',
    href: 'https://note.com/tsuzuri_official',
    label: 'noteへ',
  },
  {
    id: 'x',
    title: 'X',
    description: '日々の制作過程や小さな気づきを、短い言葉で綴っています。',
    href: 'https://x.com/tsuzuri_lab',
    label: 'Xへ',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: '茶道の稽古や茶会、茶道具など。目で見るものを残しています。',
    href: 'https://www.instagram.com/tsuzuri_lab/',
    label: 'Instagramへ',
  },
]
