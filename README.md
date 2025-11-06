# AI란 무엇인가? - StudioJu AI E-Book

## 프로젝트 개요
- **이름**: StudioJu AI E-Book
- **목표**: AI 초급반 1회차 강의 내용을 인터랙티브한 전자책 형태로 제공
- **도메인**: studiojuai-ebook

## ✨ 주요 기능
- 📖 **8개 챕터** 구성 (AI 정의부터 실습까지)
- 🎨 **반응형 디자인** (PC/모바일 최적화)
- 🚀 **Cloudflare Pages** 엣지 배포
- 📊 **REST API** 제공 (콘텐츠 데이터)
- 🎭 **인터랙티브 UI** (카드 호버 효과, 애니메이션)

## 🌐 URL
- **개발 서버**: https://3000-ilyuqsyp4d2yi1imkjk9q-2e77fc33.sandbox.novita.ai
- **Health Check**: https://3000-ilyuqsyp4d2yi1imkjk9q-2e77fc33.sandbox.novita.ai/api/metadata
- **Production**: (배포 후 추가됨)
- **GitHub**: (저장소 생성 후 추가됨)

## 📚 콘텐츠 구조

### 목차
1. AI의 정의
2. AI의 역사 타임라인
3. AI vs 머신러닝 vs 딥러닝
4. 생성형 AI의 등장과 변화
5. 실생활 AI 사례
6. ChatGPT 실습(가입/첫 대화)
7. 무료 vs 유료 비교
8. 과제 안내 & Q&A

### API 엔드포인트
- `GET /api/metadata` - 책 메타데이터 조회
- `GET /api/chapters` - 전체 챕터 목록
- `GET /api/chapters/:id` - 특정 챕터 조회

## 🎨 디자인 스펙

### 컬러 팔레트
- **배경색**: #000000 (검정)
- **글자색**: #FFFFFF (흰색)
- **강조색**: #4a9eff (파란색 그라디언트)
- **카드 배경**: #1a1a1a (어두운 회색)

### 타이포그래피
- **제목 크기**: 64px (모바일: 40px)
- **부제목 크기**: 24px (모바일: 18px)
- **본문**: 18px
- **글씨체**: Helvetica, Noto Sans KR
- **줄높이**: 135%

### 레이아웃
- **Card 크기**: 자동 조정 (minmax(280px, 1fr))
- **간격**: 24px / 36px
- **최대 너비**: 1400px
- **반응형**: 768px 브레이크포인트

## 💾 데이터 구조
- **저장 방식**: 정적 TypeScript 데이터 (src/data/content.ts)
- **데이터 모델**: 
  - `bookMetadata` - 강사 정보, 버전, 날짜
  - `chapters[]` - 8개 챕터 배열 (id, title, subtitle, content, icon)
  - `homeworkAssignment` - 과제 정보
  - `qaSection` - Q&A 3개

## 🚀 사용 방법

### 로컬 개발
```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 개발 서버 시작 (PM2)
pm2 start ecosystem.config.cjs

# 서버 테스트
curl http://localhost:3000
```

### Cloudflare Pages 배포
```bash
# Cloudflare API 키 설정 (필수)
# setup_cloudflare_api_key 도구 호출 필요

# 프로젝트 생성
npx wrangler pages project create studiojuai-ebook \
  --production-branch main \
  --compatibility-date 2025-11-06

# 배포
npm run deploy:prod
```

## 🛠️ 기술 스택
- **Backend**: Hono v4.10 (Edge Framework)
- **Frontend**: JSX/TSX (Server-Side Rendering)
- **Styling**: Inline CSS (반응형 그리드, 애니메이션)
- **Deployment**: Cloudflare Pages
- **Process Manager**: PM2 (개발 환경)
- **Build Tool**: Vite 6.3

## 📁 프로젝트 구조
```
webapp/
├── src/
│   ├── index.tsx          # 메인 Hono 애플리케이션
│   ├── renderer.tsx       # HTML 렌더러 (스타일 포함)
│   └── data/
│       └── content.ts     # 강의 콘텐츠 데이터
├── public/
│   └── static/            # 정적 파일 (필요시)
├── dist/                  # 빌드 결과물
├── temp_files/            # 업로드된 원본 파일
├── ecosystem.config.cjs   # PM2 설정
├── wrangler.jsonc         # Cloudflare 설정
├── package.json           # 프로젝트 설정
└── README.md             # 프로젝트 문서

```

## ✅ 완료된 기능
- ✅ Hono 프로젝트 초기화 및 Git 설정
- ✅ AI 교육 콘텐츠 데이터 구조화 (8개 챕터)
- ✅ 반응형 전자책 UI (지정 디자인 스펙 완벽 적용)
- ✅ REST API 엔드포인트 3개
- ✅ 로컬 개발 서버 테스트 완료
- ✅ PM2 프로세스 관리 설정

## 🔜 다음 단계
1. **Cloudflare Pages 배포** (setup_cloudflare_api_key 필요)
2. **GitHub 저장소 연동** (setup_github_environment 필요)
3. **커스텀 도메인 설정** (studiojuai-ebook)
4. **콘텐츠 추가** (세션 2, 3 강의 내용)

## 📝 배포 상태
- **Platform**: Cloudflare Pages
- **Status**: 🔄 준비 완료 (배포 대기)
- **Last Updated**: 2025-11-06

## 👨‍🏫 강사 정보
- **이름**: 방익주
- **이메일**: ikjoobang@gmail.com
- **연락처**: 010-3988-0124
- **웹사이트**: https://www.studiojuai.com

## 📄 라이센스
교육용 프로젝트 - StudioJu AI © 2025
