export type TeaUtensil = {
  id: string
  category: string
  name: string
  mei?: string
  author?: string
  season?: string
  image?: string
  note: string
}

export const teaUtensils: TeaUtensil[] = [
  {
    id: 'chawan-001',
    category: '茶碗',
    name: '季節の茶碗',
    mei: '未定',
    author: '未詳',
    season: '春・秋',
    image: '/images/tea/chawan-001.webp',
    note: '稽古や茶会の中で手に取った茶碗を、季節の記憶とともに残していきます。',
  },
  {
    id: 'chashaku-001',
    category: '茶杓',
    name: '銘のある茶杓',
    mei: '未定',
    author: '未詳',
    season: '通年',
    image: '/images/tea/chashaku-001.webp',
    note: '小さな道具に込められた言葉や景色を、会記や取り合わせとともに見つめます。',
  },
  {
    id: 'kakemono-001',
    category: '掛物',
    name: '床の間の言葉',
    season: '通年',
    image: '/images/tea/kakemono-001.webp',
    note: 'その日の場を決める言葉。余白の中心に置かれるものとして記録します。',
  },
  {
    id: 'natsume-001',
    category: '棗',
    name: '薄茶器',
    author: '未詳',
    season: '通年',
    image: '/images/tea/natsume-001.webp',
    note: '点前の中で自然に手に触れる道具。形、塗り、佇まいを静かに残します。',
  },
  {
    id: 'kama-001',
    category: '釜',
    name: '湯の気配',
    season: '炉・風炉',
    image: '/images/tea/kama-001.webp',
    note: '湯が沸く音、釜の姿、場の温度。茶の時間を支える道具として扱います。',
  },
  {
    id: 'hanaire-001',
    category: '花入',
    name: '季節を受ける器',
    season: '通年',
    image: '/images/tea/hanaire-001.webp',
    note: '花そのものではなく、季節を迎える器としての佇まいを記録します。',
  },
]
