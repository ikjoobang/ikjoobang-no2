# 🚀 Netlify 배포 가이드

## GitHub + Netlify 자동 배포 설정

이 프로젝트는 GitHub에 푸시하면 Netlify가 자동으로 빌드하고 배포합니다.

---

## 📋 사전 준비

### 필수 계정
- ✅ **GitHub 계정** (이미 설정됨: ikjoobang)
- ⚠️ **Netlify 계정** (https://app.netlify.com 가입 필요)

---

## 🎯 배포 단계

### Step 1: GitHub에 코드 푸시 ✅

이미 GitHub 저장소가 설정되어 있습니다:
- **저장소**: https://github.com/ikjoobang/ikjoobang-no2
- **사용자**: ikjoobang

```bash
# 현재 변경사항 커밋 및 푸시
cd /home/user/webapp
git add .
git commit -m "feat: Netlify 배포 설정 추가"
git push origin main
```

---

### Step 2: Netlify에서 사이트 생성

1. **Netlify 로그인**: https://app.netlify.com

2. **"Add new site" 클릭** → "Import an existing project" 선택

3. **GitHub 연결**
   - "GitHub" 선택
   - "ikjoobang" 계정 승인
   - "ikjoobang-no2" 저장소 선택

4. **빌드 설정 확인**
   ```
   Build command: npm run build
   Publish directory: dist
   ```
   
   ✅ **자동으로 감지됨** (`netlify.toml` 덕분에!)

5. **"Deploy site" 클릭**

---

### Step 3: 배포 완료 🎉

약 1-2분 후:
- ✅ 빌드 완료
- ✅ 사이트 배포 완료
- ✅ 고유 URL 생성 (예: `https://ebook-creator-pro-abc123.netlify.app`)

---

## 🔧 배포 설정 (netlify.toml)

현재 프로젝트에 설정된 내용:

```toml
[build]
  command = "npm run build"    # Vite 빌드
  publish = "dist"             # 배포 디렉토리
  
[build.environment]
  NODE_VERSION = "20"          # Node.js 버전

[[redirects]]
  from = "/*"
  to = "/index.html"           # SPA 라우팅
  status = 200
```

---

## 🌐 커스텀 도메인 설정 (선택사항)

### studiojuai-ebook.com 연결하기

1. Netlify 대시보드에서 **"Domain settings"** 클릭

2. **"Add custom domain"** → `studiojuai-ebook.com` 입력

3. **DNS 설정** (도메인 제공자에서):
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify IP)
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

4. **SSL 인증서 자동 발급** (Let's Encrypt)

---

## 🔄 자동 배포 워크플로우

### 개발 → 배포 흐름

```
1. 로컬에서 코드 수정
   ↓
2. Git 커밋 & 푸시
   git push origin main
   ↓
3. Netlify 자동 감지
   ↓
4. 자동 빌드 시작
   npm install → npm run build
   ↓
5. 자동 배포 완료
   https://your-site.netlify.app
   ↓
6. 브라우저에서 즉시 확인 ✅
```

---

## 📊 Netlify 기능

### ✅ 현재 사용 가능
- 자동 빌드 & 배포
- SSL 인증서 (HTTPS)
- 전역 CDN
- 브랜치 프리뷰
- 폼 처리
- 리다이렉트 & 헤더

### ⏳ 향후 추가 가능
- Netlify Functions (서버리스 API)
- Netlify Identity (인증)
- Netlify Forms (폼 제출)
- Analytics

---

## 🐛 문제 해결

### 빌드 실패 시

1. **Netlify 대시보드** → "Deploys" → 실패한 빌드 클릭
2. **로그 확인**
3. 로컬에서 `npm run build` 테스트
4. 문제 해결 후 다시 푸시

### 일반적인 문제

**문제**: Module not found
```bash
# 해결: package.json 확인
npm install
```

**문제**: Build command failed
```bash
# 해결: 로컬에서 빌드 테스트
npm run build
```

---

## 📱 환경 변수 설정

### Netlify 대시보드에서

1. **Site settings** → **Environment variables**
2. **Add variable** 클릭
3. 키-값 입력 (예: `API_KEY=your-key`)
4. **Save** → 자동 재배포

---

## 🚀 배포 상태 확인

### Netlify 대시보드
- **URL**: https://app.netlify.com
- **빌드 로그**: 실시간 확인
- **배포 히스토리**: 모든 배포 기록
- **롤백**: 이전 버전으로 즉시 복구

---

## 🎯 다음 단계

### 완료 체크리스트
- [ ] GitHub에 코드 푸시
- [ ] Netlify 사이트 생성
- [ ] 첫 배포 완료
- [ ] 사이트 URL 확인
- [ ] 커스텀 도메인 연결 (선택)

---

## 💡 팁

### 빠른 배포
```bash
# 한 번에 커밋 & 푸시
git add . && git commit -m "update" && git push
```

### 브랜치 프리뷰
```bash
# feature 브랜치 생성 & 푸시
git checkout -b feature/new-feature
git push origin feature/new-feature

# Netlify가 자동으로 프리뷰 생성
# URL: https://feature-new-feature--your-site.netlify.app
```

---

## 📞 문의

**Netlify 서포트**: https://www.netlify.com/support/
**문서**: https://docs.netlify.com

**프로젝트 관리자**: ikjoobang@gmail.com

---

배포 완료 후 README.md에 Netlify URL을 추가하세요! 🎉
