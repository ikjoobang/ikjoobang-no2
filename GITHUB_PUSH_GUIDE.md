# 🚀 GitHub 푸시 가이드

## 프로젝트를 GitHub에 업로드하는 방법

---

## 📦 현재 상태

✅ **프로젝트 준비 완료**
- Git 저장소 초기화 완료
- 4개 커밋 완료
- Netlify 배포 설정 완료

⚠️ **GitHub 푸시 필요**
- 저장소: https://github.com/ikjoobang/ikjoobang-no2
- 현재 로컬에만 존재

---

## 🎯 방법 선택

### Option 1: GitHub Desktop 사용 (추천) ✨

**가장 쉬운 방법!**

1. **GitHub Desktop 다운로드**
   - https://desktop.github.com

2. **프로젝트 추가**
   - "File" → "Add Local Repository"
   - 경로 선택: `/home/user/webapp`

3. **푸시**
   - "Publish repository" 클릭
   - 저장소 이름: `ikjoobang-no2`
   - "Publish repository" 버튼 클릭

4. **완료!** 🎉

---

### Option 2: 웹 인터페이스로 업로드

1. **GitHub 저장소 생성**
   - https://github.com/new
   - 저장소 이름: `ikjoobang-no2`
   - Public/Private 선택
   - **"Create repository"** 클릭

2. **프로젝트 파일 압축**
   ```bash
   cd /home/user/webapp
   tar -czf ../ebook-project.tar.gz .
   ```

3. **GitHub에 업로드**
   - 저장소 페이지에서 "uploading an existing file" 클릭
   - 압축 파일을 압축 해제 후 모든 파일 드래그 & 드롭
   - "Commit changes" 클릭

---

### Option 3: Git CLI (개발자용)

**GitHub Personal Access Token 필요**

1. **GitHub 토큰 생성**
   - https://github.com/settings/tokens
   - "Generate new token (classic)" 클릭
   - 권한 선택: `repo` (전체 선택)
   - 토큰 복사 (한 번만 표시됨!)

2. **Git Credentials 설정**
   ```bash
   cd /home/user/webapp
   
   # GitHub 토큰을 credentials에 저장
   echo "https://ikjoobang:YOUR_TOKEN_HERE@github.com" > ~/.git-credentials
   
   # Git 설정 확인
   git config --global credential.helper store
   git config --global user.name "IKJOOBANG"
   git config --global user.email "ikjoobang@gmail.com"
   ```

3. **Remote 추가 및 푸시**
   ```bash
   # Remote 추가 (이미 추가됨)
   git remote add origin https://github.com/ikjoobang/ikjoobang-no2.git
   
   # 푸시
   git push -u origin main
   ```

---

### Option 4: 프로젝트 백업 다운로드 후 업로드

1. **백업 다운로드**
   ```
   https://page.gensparksite.com/project_backups/ebook-creator-pro-v2.1.0-netlify.tar.gz
   ```

2. **압축 해제**
   - 로컬 컴퓨터에서 압축 해제

3. **GitHub Desktop 또는 VS Code로 푸시**
   - GitHub Desktop: "Add Local Repository"
   - VS Code: Source Control 탭에서 "Publish to GitHub"

---

## 🎯 추천 순서

### 초보자
1. **GitHub Desktop** 다운로드 → 가장 쉬움
2. 프로젝트 추가
3. Publish 클릭

### 개발자
1. **GitHub Token** 생성
2. Git CLI로 푸시
3. 완료

---

## 🔗 푸시 완료 후

### GitHub 저장소 확인
```
https://github.com/ikjoobang/ikjoobang-no2
```

### 다음 단계: Netlify 배포
1. Netlify 로그인: https://app.netlify.com
2. "Import from Git" 선택
3. "ikjoobang-no2" 저장소 연결
4. 자동 배포 시작!

자세한 내용은 `NETLIFY_DEPLOY.md` 참조

---

## 📁 프로젝트 구조 (GitHub에 업로드될 파일)

```
webapp/
├── src/                    # 소스 코드
├── public/                 # 정적 파일
├── netlify/                # Netlify Functions
├── netlify.toml           # Netlify 설정
├── wrangler.jsonc         # Cloudflare 설정
├── package.json           # 의존성
├── README.md              # 프로젝트 문서
├── NETLIFY_DEPLOY.md      # 배포 가이드
├── GITHUB_PUSH_GUIDE.md   # 이 파일
└── .gitignore            # Git 제외 파일
```

---

## ⚠️ 주의사항

### 제외되는 파일 (.gitignore)
- `node_modules/` - 의존성 (자동 설치됨)
- `dist/` - 빌드 결과 (Netlify가 자동 빌드)
- `.env` - 환경 변수 (보안)
- `.wrangler/` - Cloudflare 캐시
- `.netlify/` - Netlify 캐시

### 포함되는 파일
- ✅ 모든 소스 코드
- ✅ 설정 파일
- ✅ 문서 파일
- ✅ package.json (의존성 목록)

---

## 🆘 문제 해결

### "Authentication failed"
→ GitHub Token이 필요합니다. Option 3 참조

### "Permission denied"
→ 저장소 권한 확인 필요

### "Already exists"
→ 기존 원격 저장소 제거 후 재시도
```bash
git remote remove origin
git remote add origin https://github.com/ikjoobang/ikjoobang-no2.git
```

---

## 💡 빠른 참조

### Git 상태 확인
```bash
cd /home/user/webapp
git status
git log --oneline
```

### Remote 확인
```bash
git remote -v
```

### 최신 변경사항 커밋
```bash
git add .
git commit -m "update: 설명"
git push origin main
```

---

## 📞 도움이 필요하신가요?

**GitHub 가이드**: https://docs.github.com/ko
**GitHub Desktop**: https://docs.github.com/desktop

**문의**: ikjoobang@gmail.com

---

푸시 완료 후 → `NETLIFY_DEPLOY.md` 참조하여 배포하세요! 🚀
