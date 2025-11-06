/**
 * AI 교육 전자책 콘텐츠
 * Based on: AI 초급반 1회차 강의 자료
 */

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  examples?: string[];
  icon?: string;
}

export const bookMetadata = {
  title: "AI란 무엇인가?",
  subtitle: "AI 초급반 1회차 - 인공지능의 기본 개념부터 실습까지",
  instructor: "방익주",
  email: "ikjoobang@gmail.com",
  phone: "010-3988-0124",
  website: "https://www.studiojuai.com",
  version: "1.0.0",
  date: "2025-11-05"
};

export const tableOfContents = [
  "AI의 정의",
  "AI의 역사 타임라인",
  "AI vs 머신러닝 vs 딥러닝",
  "생성형 AI의 등장과 변화",
  "실생활 AI 사례",
  "ChatGPT 실습(가입/첫 대화)",
  "무료 vs 유료 비교",
  "과제 안내 & Q&A"
];

export const chapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "AI의 정의",
    subtitle: "핵심 개념",
    icon: "🤖",
    content: [
      "인공지능(AI): 사람의 지능적 행동을 기계가 수행하도록 하는 기술",
      "지각(인식) · 추론 · 학습 · 의사결정 자동화",
      "약한 AI(특정 작업) vs 강한 AI(범용 지능)",
      "컴퓨터가 인간처럼 사고하고 판단하는 능력 구현"
    ]
  },
  {
    id: "chapter-2",
    title: "일상 속 AI 예시",
    icon: "📱",
    content: [
      "사진에서 얼굴 자동 인식 - 갤러리 앱의 사람별 사진 분류",
      "내비게이션 경로 추천 - 실시간 교통 상황 기반 최적 경로",
      "스팸 메일 필터링 - 스팸/피싱 메일 자동 분류",
      "스마트 스피커 음성명령 - 시리/빅스비/알렉사 대화",
      "은행 이상거래 탐지 - 비정상적 금융 패턴 자동 감지"
    ],
    examples: [
      "얼굴 인식",
      "경로 추천",
      "스팸 필터링",
      "음성 인식"
    ]
  },
  {
    id: "chapter-3",
    title: "AI의 역사 타임라인",
    subtitle: "인공지능의 발전 과정",
    icon: "📚",
    content: [
      "1950년대: AI의 태동기 - 튜링 테스트 제안",
      "1956년: '인공지능' 용어 탄생 (다트머스 회의)",
      "1960-70년대: 첫 AI 겨울 - 기술적 한계 직면",
      "1980년대: 전문가 시스템 등장",
      "1990-2000년대: 머신러닝의 발전",
      "2010년대: 딥러닝 혁명 시작",
      "2020년대: 생성형 AI의 시대 (ChatGPT, GPT-4, Claude)"
    ]
  },
  {
    id: "chapter-4",
    title: "AI vs 머신러닝 vs 딥러닝",
    subtitle: "개념 구분하기",
    icon: "🎯",
    content: [
      "AI (인공지능): 가장 넓은 개념 - 인간의 지능을 모방하는 모든 기술",
      "Machine Learning (머신러닝): AI의 하위 분야 - 데이터로부터 학습하는 알고리즘",
      "Deep Learning (딥러닝): 머신러닝의 하위 분야 - 인공신경망을 사용한 학습",
      "관계: AI ⊃ Machine Learning ⊃ Deep Learning"
    ]
  },
  {
    id: "chapter-5",
    title: "생성형 AI의 등장과 변화",
    subtitle: "새로운 AI 시대",
    icon: "✨",
    content: [
      "생성형 AI란? 새로운 콘텐츠를 생성하는 AI (텍스트, 이미지, 음악, 비디오)",
      "주요 서비스:",
      "• ChatGPT (OpenAI) - 대화형 AI",
      "• Claude (Anthropic) - 안전하고 유용한 AI",
      "• Midjourney, DALL-E - 이미지 생성",
      "• GitHub Copilot - 코드 생성",
      "산업 전반의 변화: 콘텐츠 제작, 교육, 의료, 법률, 예술 분야 혁신"
    ]
  },
  {
    id: "chapter-6",
    title: "실생활 AI 사례",
    subtitle: "우리 주변의 인공지능",
    icon: "💡",
    content: [
      "의료: AI 의료 영상 분석, 질병 조기 진단",
      "교육: 맞춤형 학습 플랫폼, AI 튜터",
      "금융: 자동화된 트레이딩, 신용평가",
      "제조: 품질 검사 자동화, 예측 정비",
      "엔터테인먼트: 추천 알고리즘 (Netflix, YouTube)",
      "자율주행: 테슬라, 웨이모의 자율주행 시스템"
    ]
  },
  {
    id: "chapter-7",
    title: "ChatGPT 실습",
    subtitle: "가입과 첫 대화",
    icon: "💬",
    content: [
      "1. ChatGPT 접속: chat.openai.com",
      "2. 계정 만들기: 이메일 또는 Google 계정으로 가입",
      "3. 첫 질문 해보기:",
      "   예시: '인공지능에 대해 쉽게 설명해줘'",
      "   예시: '파이썬 코드 작성 도와줘'",
      "4. 효과적인 프롬프트 작성법:",
      "   • 구체적으로 질문하기",
      "   • 맥락 제공하기",
      "   • 단계별로 요청하기"
    ]
  },
  {
    id: "chapter-8",
    title: "무료 vs 유료 비교",
    subtitle: "ChatGPT 플랜 선택 가이드",
    icon: "💰",
    content: [
      "무료 (GPT-3.5):",
      "• 기본적인 대화 기능",
      "• 제한된 응답 속도",
      "• 피크 시간대 접속 제한 가능",
      "",
      "유료 Plus ($20/월, GPT-4):",
      "• 더 정확하고 창의적인 답변",
      "• 더 긴 맥락 이해",
      "• 우선 접속 권한",
      "• 이미지 생성 (DALL-E)",
      "• 플러그인 사용 가능",
      "",
      "추천: 먼저 무료로 시작 → 필요시 유료 전환"
    ]
  }
];

export const homeworkAssignment = {
  title: "과제 안내",
  tasks: [
    "ChatGPT에 가입하고 다양한 질문 해보기",
    "자신의 관심 분야에 AI를 어떻게 활용할 수 있을지 생각해보기",
    "일상에서 사용하는 AI 서비스 3가지 찾아보기"
  ],
  deadline: "다음 수업 전까지"
};

export const qaSection = {
  title: "자주 묻는 질문",
  questions: [
    {
      q: "AI를 배우려면 수학을 잘해야 하나요?",
      a: "사용자 관점에서 AI를 활용하는 것은 수학 지식 없이도 가능합니다. 다만 AI를 개발하려면 선형대수, 확률론 등의 기초가 필요합니다."
    },
    {
      q: "ChatGPT는 항상 정확한가요?",
      a: "아니요. ChatGPT는 때때로 잘못된 정보를 제공할 수 있습니다. 중요한 결정을 내릴 때는 반드시 사실 확인이 필요합니다."
    },
    {
      q: "AI가 제 직업을 대체할까요?",
      a: "AI는 반복적인 작업을 자동화하지만, 창의성과 인간관계가 중요한 업무는 대체하기 어렵습니다. AI를 도구로 활용하는 능력이 중요해질 것입니다."
    }
  ]
};
