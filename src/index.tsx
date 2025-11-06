import { Hono } from 'hono'
import { renderer } from './renderer'
import { 
  bookMetadata, 
  tableOfContents, 
  chapters, 
  homeworkAssignment, 
  qaSection 
} from './data/content'

const app = new Hono()

app.use(renderer)

// 메인 페이지
app.get('/', (c) => {
  return c.render(
    <div class="ebook-container">
      {/* Hero Section */}
      <section class="hero">
        <div class="hero-content">
          <h1 class="title">{bookMetadata.title}</h1>
          <p class="subtitle">{bookMetadata.subtitle}</p>
          <div class="instructor-info">
            <p>강사: {bookMetadata.instructor}</p>
            <p>이메일: <a href={`mailto:${bookMetadata.email}`}>{bookMetadata.email}</a></p>
            <p>연락처: {bookMetadata.phone}</p>
            <p>웹사이트: <a href={bookMetadata.website} target="_blank">{bookMetadata.website}</a></p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section class="toc-section">
        <h2 class="section-title">오늘의 목차</h2>
        <div class="toc-grid">
          {tableOfContents.map((item, index) => (
            <div class="toc-card">
              <span class="toc-number">{index + 1}</span>
              <span class="toc-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section class="chapters-section">
        {chapters.map((chapter) => (
          <div class="chapter-card" id={chapter.id}>
            <div class="chapter-header">
              {chapter.icon && <span class="chapter-icon">{chapter.icon}</span>}
              <h2 class="chapter-title">{chapter.title}</h2>
            </div>
            {chapter.subtitle && <h3 class="chapter-subtitle">{chapter.subtitle}</h3>}
            <div class="chapter-content">
              {chapter.content.map((item) => (
                <p class="content-item">{item}</p>
              ))}
            </div>
            {chapter.examples && (
              <div class="examples-grid">
                {chapter.examples.map((example) => (
                  <div class="example-badge">{example}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Homework Section */}
      <section class="homework-section">
        <div class="homework-card">
          <h2 class="section-title">📝 {homeworkAssignment.title}</h2>
          <ul class="homework-list">
            {homeworkAssignment.tasks.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
          <p class="homework-deadline">제출 기한: {homeworkAssignment.deadline}</p>
        </div>
      </section>

      {/* Q&A Section */}
      <section class="qa-section">
        <h2 class="section-title">❓ {qaSection.title}</h2>
        <div class="qa-grid">
          {qaSection.questions.map((item) => (
            <div class="qa-card">
              <div class="qa-question">Q: {item.q}</div>
              <div class="qa-answer">A: {item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <p>© 2025 {bookMetadata.instructor} | StudioJu AI</p>
        <p>Version {bookMetadata.version} | Updated {bookMetadata.date}</p>
      </footer>
    </div>
  )
})

// API 엔드포인트 - 챕터 데이터 가져오기
app.get('/api/chapters', (c) => {
  return c.json(chapters)
})

// API 엔드포인트 - 특정 챕터 가져오기
app.get('/api/chapters/:id', (c) => {
  const id = c.req.param('id')
  const chapter = chapters.find(ch => ch.id === id)
  
  if (!chapter) {
    return c.json({ error: 'Chapter not found' }, 404)
  }
  
  return c.json(chapter)
})

// API 엔드포인트 - 메타데이터 가져오기
app.get('/api/metadata', (c) => {
  return c.json(bookMetadata)
})

export default app
