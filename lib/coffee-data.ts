export interface CoffeeBean {
  id: number;
  name: string;
  origin: string;
  process: string;
  notes: string;
  price: string;
  image: string;
  badge?: string;
  description?: string;
  roastLevel?: 'Light' | 'Medium' | 'Dark';
  acidity?: 'Low' | 'Medium' | 'High';
  body?: 'Light' | 'Medium' | 'Full';
}

export const coffeeBeans: CoffeeBean[] = [
  {
    id: 1,
    name: "에티오피아 예가체프",
    origin: "Ethiopia",
    process: "Washed",
    notes: "플로럴, 베리, 시트러스",
    price: "28,000원",
    image: "/ethiopian-coffee-beans-in-white-bowl.jpg",
    badge: "BEST SELLER",
    description: "에티오피아의 전통적인 예가체프 지역에서 생산되는 고품질 아라비카 원두입니다. 밝은 산미와 꽃향, 베리 노트가 특징적입니다.",
    roastLevel: "Light",
    acidity: "High",
    body: "Medium"
  },
  {
    id: 2,
    name: "콜롬비아 수프리모",
    origin: "Colombia",
    process: "Washed",
    notes: "초콜릿, 캐러멜, 견과류",
    price: "25,000원",
    image: "/colombian-coffee-beans-on-wooden-surface.jpg",
    badge: "NEW",
    description: "콜롬비아의 고지대에서 재배된 수프리모 등급의 원두로, 균형잡힌 맛과 깔끔한 마무리가 특징입니다.",
    roastLevel: "Medium",
    acidity: "Medium",
    body: "Medium"
  },
  {
    id: 3,
    name: "케냐 AA",
    origin: "Kenya",
    process: "Washed",
    notes: "블랙커런트, 와인, 시트러스",
    price: "32,000원",
    image: "/kenyan-coffee-beans-close-up.jpg",
    badge: "PREMIUM",
    description: "케냐의 최고 등급 AA 원두로, 강렬한 산미와 와인 같은 풍미가 특징입니다.",
    roastLevel: "Medium",
    acidity: "High",
    body: "Full"
  },
  {
    id: 4,
    name: "과테말라 안티구아",
    origin: "Guatemala",
    process: "Washed",
    notes: "스모키, 스파이시, 초콜릿",
    price: "26,000원",
    image: "/placeholder.jpg",
    badge: "LIMITED",
    description: "과테말라 안티구아 지역의 화산토에서 재배된 원두로, 스모키한 풍미와 스파이시한 노트가 특징입니다.",
    roastLevel: "Medium",
    acidity: "Medium",
    body: "Full"
  },
  {
    id: 5,
    name: "브라질 산토스",
    origin: "Brazil",
    process: "Natural",
    notes: "너트, 초콜릿, 크림",
    price: "22,000원",
    image: "/placeholder.jpg",
    description: "브라질 산토스 지역의 내추럴 프로세스 원두로, 부드러운 너트와 초콜릿 노트가 특징입니다.",
    roastLevel: "Dark",
    acidity: "Low",
    body: "Full"
  },
  {
    id: 6,
    name: "자메이카 블루마운틴",
    origin: "Jamaica",
    process: "Washed",
    notes: "밀크초콜릿, 허브, 스위트",
    price: "45,000원",
    image: "/placeholder.jpg",
    badge: "PREMIUM",
    description: "자메이카 블루마운틴의 레어 원두로, 부드럽고 균형잡힌 맛이 특징입니다.",
    roastLevel: "Medium",
    acidity: "Low",
    body: "Medium"
  },
  {
    id: 7,
    name: "파나마 게이샤",
    origin: "Panama",
    process: "Honey",
    notes: "자스민, 복숭아, 허니",
    price: "38,000원",
    image: "/placeholder.jpg",
    badge: "LIMITED",
    description: "파나마의 게이샤 품종으로, 독특한 자스민 향과 복숭아 노트가 특징입니다.",
    roastLevel: "Light",
    acidity: "High",
    body: "Light"
  },
  {
    id: 8,
    name: "코스타리카 타라주",
    origin: "Costa Rica",
    process: "Honey",
    notes: "캐러멜, 브라운슈가, 허니",
    price: "24,000원",
    image: "/placeholder.jpg",
    description: "코스타리카 타라주 지역의 허니 프로세스 원두로, 달콤한 캐러멜과 브라운슈가 노트가 특징입니다.",
    roastLevel: "Medium",
    acidity: "Medium",
    body: "Medium"
  },
  {
    id: 9,
    name: "페루 오가니크",
    origin: "Peru",
    process: "Washed",
    notes: "허브, 시트러스, 밀크",
    price: "23,000원",
    image: "/placeholder.jpg",
    description: "페루의 유기농 원두로, 깔끔한 허브와 시트러스 노트가 특징입니다.",
    roastLevel: "Light",
    acidity: "Medium",
    body: "Light"
  }
];
