import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { renderer } from './renderer'
import { 
  bookMetadata, 
  chapters, 
  homeworkAssignment, 
  qaSection 
} from './data/content'

type Bindings = {
  KV?: KVNamespace;
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS 설정
app.use('/api/*', cors())

// 렌더러 적용
app.use(renderer)

// ==========================================
// 메인 페이지 - eBook Creator Pro
// ==========================================
app.get('/', (c) => {
  return c.render(
    <div class="app-container">
      {/* Navigation Bar */}
      <nav class="navbar">
        <div class="nav-content">
          <div class="nav-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <h1>eBook Creator Pro</h1>
          </div>
          <div class="nav-menu">
            <a href="/" class="nav-link active">홈</a>
            <a href="/reader" class="nav-link">독서 모드</a>
            <a href="/creator" class="nav-link">생성 도구</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="hero">
        <div class="hero-content">
          <span class="hero-badge">전문 전자책 제작 플랫폼</span>
          <h1 class="hero-title">AI로 만드는<br/>전문적인 전자책</h1>
          <p class="hero-description">
            PDF를 업로드하거나 콘텐츠를 입력하면 AI가 자동으로<br/>
            아름답고 인터랙티브한 전자책을 생성합니다
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary" onclick="window.location.href='/creator'">
              전자책 만들기
            </button>
            <button class="btn btn-secondary" onclick="window.location.href='/reader'">
              샘플 보기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="features">
        <h2 class="section-title">주요 기능</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">PDF 자동 변환</h3>
            <p class="feature-description">
              PDF를 업로드하면 콘텐츠를 분석하여 자동으로 전자책 레이아웃을 생성합니다
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">챕터 네비게이션</h3>
            <p class="feature-description">
              사이드바 목차, 진행률 표시, 북마크 기능으로 쉬운 탐색이 가능합니다
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">인터랙티브 요소</h3>
            <p class="feature-description">
              퀴즈, 하이라이트, 메모 기능으로 학습 효과를 극대화합니다
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">자동 이미지 생성</h3>
            <p class="feature-description">
              AI가 콘텐츠에 맞는 다이어그램, 차트, 일러스트를 자동 생성합니다
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">학습 진행률</h3>
            <p class="feature-description">
              읽은 내용을 자동 추적하고 이어서 읽기 기능을 제공합니다
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">다양한 포맷 지원</h3>
            <p class="feature-description">
              완성된 전자책을 PDF, EPUB, HTML 등 다양한 형식으로 내보낼 수 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h4>eBook Creator Pro</h4>
            <p>AI 기반 전문 전자책 제작 플랫폼</p>
          </div>
          <div class="footer-section">
            <h4>강사 정보</h4>
            <p>{bookMetadata.instructor}</p>
            <p>{bookMetadata.email}</p>
            <p>{bookMetadata.website}</p>
          </div>
          <div class="footer-section">
            <h4>링크</h4>
            <a href="/reader">독서 모드</a>
            <a href="/creator">생성 도구</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 StudioJu AI. All rights reserved. Version {bookMetadata.version}</p>
        </div>
      </footer>
    </div>
  )
})

// ==========================================
// 독서 모드 - 전자책 리더
// ==========================================
app.get('/reader', (c) => {
  return c.render(
    <div class="reader-container">
      {/* Reader Navigation */}
      <nav class="reader-nav">
        <button class="nav-back" onclick="window.location.href='/'">
          ← 홈으로
        </button>
        <div class="reader-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
        </div>
        <div class="reader-controls">
          <button class="control-btn" title="글자 크기">A</button>
          <button class="control-btn" title="테마">◐</button>
          <button class="control-btn" title="목차">≡</button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3>목차</h3>
        </div>
        <div class="sidebar-content">
          {chapters.map((chapter, index) => (
            <a href={`#${chapter.id}`} class="toc-item">
              <span class="toc-number">{index + 1}</span>
              <span class="toc-title">{chapter.title}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main class="reader-main">
        <article class="ebook-content">
          {/* Cover */}
          <div class="ebook-cover">
            <h1 class="cover-title">{bookMetadata.title}</h1>
            <p class="cover-subtitle">{bookMetadata.subtitle}</p>
            <div class="cover-meta">
              <p>저자: {bookMetadata.instructor}</p>
              <p>버전: {bookMetadata.version}</p>
              <p>발행일: {bookMetadata.date}</p>
            </div>
          </div>

          {/* Chapters */}
          {chapters.map((chapter) => (
            <section class="chapter" id={chapter.id}>
              <h2 class="chapter-title">{chapter.title}</h2>
              {chapter.subtitle && (
                <p class="chapter-subtitle">{chapter.subtitle}</p>
              )}
              <div class="chapter-body">
                {chapter.content.map((paragraph) => (
                  <p class="paragraph">{paragraph}</p>
                ))}
              </div>
              {chapter.examples && chapter.examples.length > 0 && (
                <div class="examples-box">
                  <h4>예시</h4>
                  <ul>
                    {chapter.examples.map((example) => (
                      <li>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Homework */}
          <section class="chapter">
            <h2 class="chapter-title">{homeworkAssignment.title}</h2>
            <div class="homework-box">
              <ul class="homework-list">
                {homeworkAssignment.tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
              <p class="homework-deadline">제출 기한: {homeworkAssignment.deadline}</p>
            </div>
          </section>

          {/* Q&A */}
          <section class="chapter">
            <h2 class="chapter-title">{qaSection.title}</h2>
            {qaSection.questions.map((item) => (
              <div class="qa-item">
                <h4 class="qa-question">Q. {item.q}</h4>
                <p class="qa-answer">A. {item.a}</p>
              </div>
            ))}
          </section>
        </article>
      </main>
    </div>
  )
})

// ==========================================
// API 엔드포인트
// ==========================================
app.get('/api/chapters', (c) => {
  return c.json(chapters)
})

app.get('/api/chapters/:id', (c) => {
  const id = c.req.param('id')
  const chapter = chapters.find(ch => ch.id === id)
  
  if (!chapter) {
    return c.json({ error: 'Chapter not found' }, 404)
  }
  
  return c.json(chapter)
})

app.get('/api/metadata', (c) => {
  return c.json(bookMetadata)
})

// 북마크 저장 (KV 사용)
app.post('/api/bookmark', async (c) => {
  try {
    const { chapterId, position } = await c.req.json()
    
    if (c.env.KV) {
      await c.env.KV.put('bookmark', JSON.stringify({ chapterId, position }))
      return c.json({ success: true })
    }
    
    return c.json({ success: false, message: 'KV not configured' }, 500)
  } catch (error) {
    return c.json({ success: false, error: String(error) }, 500)
  }
})

// 북마크 불러오기
app.get('/api/bookmark', async (c) => {
  try {
    if (c.env.KV) {
      const bookmark = await c.env.KV.get('bookmark')
      return c.json(bookmark ? JSON.parse(bookmark) : null)
    }
    
    return c.json(null)
  } catch (error) {
    return c.json({ error: String(error) }, 500)
  }
})

export default app
