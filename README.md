# eBook Creator Pro - AI 전자책 제작 플랫폼

## 🎯 프로젝트 개요
**eBook Creator Pro**는 AI 기반 전문 전자책 제작 플랫폼입니다. PDF를 업로드하거나 콘텐츠를 입력하면 자동으로 아름답고 인터랙티브한 전자책을 생성합니다.

- **프로젝트명**: eBook Creator Pro
- **도메인**: studiojuai-ebook
- **버전**: 2.0.0 (전면 개편)
- **최종 업데이트**: 2025-11-06

---

## ✨ 주요 기능

### 📖 현재 구현된 기능
- ✅ **전문적인 UI/UX 디자인**
  - 밝은 테마 (#FFFFFF 배경)
  - Noto Serif KR 세리프 폰트 (가독성 최우선)
  - 깔끔한 타이포그래피
  - 전문적인 아이콘 (이모티콘 제거)
  
- ✅ **독서 모드**
  - 사이드바 목차 네비게이션
  - 진행률 표시 바
  - 부드러운 스크롤
  - 최대 800px 가독성 최적화 레이아웃
  
- ✅ **챕터 시스템**
  - 8개 AI 교육 챕터
  - 목차 자동 생성
  - 앵커 링크 네비게이션
  
- ✅ **REST API**
  - `/api/chapters` - 전체 챕터 목록
  - `/api/chapters/:id` - 특정 챕터
  - `/api/metadata` - 메타데이터
  - `/api/bookmark` - 북마크 저장/불러오기 (KV 준비)

### 🚧 개발 예정 기능
- ⏳ **PDF 파싱 엔진** - PDF 자동 변환
- ⏳ **AI 레이아웃 생성** - 자동 전자책 레이아웃
- ⏳ **학습 진행률 추적** - Cloudflare KV 통합
- ⏳ **인터랙티브 퀴즈** - 학습 효과 극대화
- ⏳ **이미지 자동 생성** - AI 다이어그램/차트
- ⏳ **다크모드** - 사용자 선택 가능
- ⏳ **내보내기** - PDF/EPUB 생성

---

## 🌐 접속 URL

### 🚀 라이브 데모
```
메인 페이지: https://3000-ilyuqsyp4d2yi1imkjk9q-2e77fc33.sandbox.novita.ai/
독서 모드: https://3000-ilyuqsyp4d2yi1imkjk9q-2e77fc33.sandbox.novita.ai/reader
```

### 📡 API 엔드포인트
```
GET /api/metadata
GET /api/chapters
GET /api/chapters/:id
POST /api/bookmark
GET /api/bookmark
```

---

## 🎨 디자인 시스템

### 컬러 팔레트 (전문적인 밝은 테마)
```css
--bg-primary: #FFFFFF       /* 메인 배경 */
--bg-secondary: #F9FAFB     /* 보조 배경 */
--text-primary: #1F2937     /* 메인 텍스트 */
--text-secondary: #6B7280   /* 보조 텍스트 */
--accent-primary: #2563EB   /* 강조 색상 */
--border-color: #E5E7EB     /* 테두리 */
```

### 타이포그래피
- **본문 폰트**: Noto Serif KR (세리프) - 가독성 최우선
- **UI 폰트**: Inter (산세리프) - 인터페이스
- **본문 크기**: 1.0625rem (17px)
- **줄높이**: 1.8 (180%)
- **제목**: 2rem ~ 3.5rem

### 레이아웃 원칙
- 최대 너비: 1280px (전체), 800px (독서 모드)
- 여백: 1rem ~ 4rem (반응형)
- Border Radius: 0.375rem ~ 1rem
- 그림자: 4단계 (sm/md/lg/xl)

---

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx           # Hono 메인 앱
│   │   ├── / (메인 페이지)
│   │   ├── /reader (독서 모드)
│   │   └── /api/* (REST API)
│   ├── renderer.tsx        # 디자인 시스템
│   └── data/
│       └── content.ts      # 콘텐츠 데이터
├── public/
│   └── static/             # 정적 파일
├── dist/                   # 빌드 결과물
├── temp_files/             # 업로드 원본
│   ├── ai_basic_class.pdf
│   ├── ebook_creator_prompts.js
│   └── ebook_creator_prompts.json
├── ecosystem.config.cjs    # PM2 설정
├── wrangler.jsonc          # Cloudflare 설정
├── package.json
└── README.md
```

---

## 🛠️ 기술 스택

| 구분 | 기술 |
|------|------|
| **Framework** | Hono v4.10.4 (Edge Framework) |
| **Rendering** | JSX/TSX Server-Side Rendering |
| **Styling** | CSS Variables + Responsive Grid |
| **Typography** | Noto Serif KR + Inter |
| **Build** | Vite 6.3.5 |
| **Process Manager** | PM2 |
| **Target Platform** | Cloudflare Pages |
| **Future Storage** | Cloudflare KV (북마크/진행률) |

---

## 🚀 사용 방법

### 로컬 개발
```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 개발 서버 시작 (PM2)
pm2 start ecosystem.config.cjs

# 서버 재시작
pm2 restart studiojuai-ebook

# 상태 확인
pm2 list

# 로그 확인
pm2 logs studiojuai-ebook --nostream
```

### Cloudflare Pages 배포
```bash
# 1. Cloudflare API 키 설정 (Deploy 탭)
# 2. 프로젝트 생성
npx wrangler pages project create studiojuai-ebook \
  --production-branch main \
  --compatibility-date 2025-11-06

# 3. 배포
npm run deploy:prod
```

---

## 📚 콘텐츠 구조

### 현재 포함된 챕터 (AI 기초 강의)
1. AI의 정의
2. 일상 속 AI 예시
3. AI의 역사 타임라인
4. AI vs 머신러닝 vs 딥러닝
5. 생성형 AI의 등장과 변화
6. 실생활 AI 사례
7. ChatGPT 실습
8. 무료 vs 유료 비교
+ 과제 안내
+ Q&A 섹션

---

## 🎯 디자인 개선 내역

### Before (v1.0.0) ❌
- 검은 배경 (#000000) - 가독성 떨어짐
- 이모티콘 과다 사용 - 전문성 부족
- 과도한 애니메이션
- 일관성 없는 타이포그래피

### After (v2.0.0) ✅
- 밝은 배경 (#FFFFFF) - 가독성 우수
- 전문적인 아이콘 - 세련된 디자인
- 부드러운 전환 효과
- 일관된 디자인 시스템
- 세리프 폰트 - 독서 최적화

---

## 💾 데이터 구조

### 콘텐츠 타입
```typescript
interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  examples?: string[];
}

interface BookMetadata {
  title: string;
  subtitle: string;
  instructor: string;
  email: string;
  phone: string;
  website: string;
  version: string;
  date: string;
}
```

### 저장 방식
- **현재**: 정적 TypeScript 데이터 (`src/data/content.ts`)
- **향후**: Cloudflare KV (북마크, 진행률, 메모)

---

## 📱 반응형 디자인

### 브레이크포인트
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### 모바일 최적화
- 사이드바 숨김
- 단일 컬럼 레이아웃
- 작은 타이틀 크기
- 터치 최적화 버튼

---

## 🔒 보안 & 성능

### Edge 최적화
- Cloudflare Workers 런타임
- 전역 CDN 배포
- 서버리스 아키텍처

### 향후 보안
- API Rate Limiting
- CORS 정책
- 사용자 인증 (선택사항)

---

## 🎓 사용 사례

### 1. 교육용 전자책
- 강의 자료를 전자책으로 변환
- 학습 진행률 추적
- 인터랙티브 퀴즈

### 2. 기술 문서
- PDF 매뉴얼 → 인터랙티브 가이드
- 목차 네비게이션
- 검색 기능

### 3. 비즈니스 리포트
- 보고서를 전자책 형식으로
- 차트/그래프 자동 생성
- 공유 및 배포

---

## 📦 백업 & 배포 상태

### 프로젝트 백업
```
https://page.gensparksite.com/project_backups/studiojuai-ebook-v1.0.0.tar.gz
```

### 배포 상태
- **Platform**: Cloudflare Pages (준비 완료)
- **Status**: 🟢 로컬 개발 완료
- **Production**: 🔄 배포 대기 (API 키 필요)
- **GitHub**: 🔄 연동 대기

---

## 👨‍🏫 강사 정보

- **이름**: 방익주
- **이메일**: ikjoobang@gmail.com
- **연락처**: 010-3988-0124
- **웹사이트**: https://www.studiojuai.com

---

## 📝 버전 히스토리

### v2.0.0 (2025-11-06) - 전면 개편
- ✅ 전문적인 밝은 디자인 시스템
- ✅ 세리프 폰트 적용 (Noto Serif KR)
- ✅ 독서 모드 구현
- ✅ 챕터 네비게이션
- ✅ 이모티콘 제거
- ✅ UI/UX 전면 개선

### v1.0.0 (2025-11-06) - 초기 버전
- ✅ AI 교육 콘텐츠 전자책
- ✅ 8개 챕터 구현
- ✅ REST API
- ❌ 검은 배경 (개선 필요)

---

## 🔜 다음 단계

### 단기 (1-2주)
1. PDF 파싱 엔진 구축
2. 북마크 기능 (Cloudflare KV)
3. 학습 진행률 추적

### 중기 (1개월)
4. 인터랙티브 퀴즈
5. AI 이미지 생성 통합
6. 다크모드 옵션

### 장기 (2-3개월)
7. AI 레이아웃 자동 생성
8. PDF/EPUB 내보내기
9. 사용자 계정 시스템

---

## 📄 라이센스
교육용 프로젝트 - StudioJu AI © 2025

---

## 🙏 기여

이 프로젝트는 AI 교육을 위해 제작되었습니다. 
피드백과 제안은 언제든 환영합니다!

**문의**: ikjoobang@gmail.com
