import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>eBook Creator Pro - AI 전자책 제작 플랫폼</title>
        <meta name="description" content="AI 기반 전문 전자책 제작 플랫폼. PDF를 업로드하거나 콘텐츠를 입력하면 자동으로 아름다운 전자책을 생성합니다." />
        
        {/* Fonts - Professional Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        <style>{`
          /* ==========================================
             RESET & BASE
             ========================================== */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            /* Colors - Professional Light Theme */
            --bg-primary: #FFFFFF;
            --bg-secondary: #F9FAFB;
            --bg-tertiary: #F3F4F6;
            --text-primary: #1F2937;
            --text-secondary: #6B7280;
            --text-tertiary: #9CA3AF;
            --border-color: #E5E7EB;
            --accent-primary: #2563EB;
            --accent-hover: #1D4ED8;
            --accent-light: #DBEAFE;
            --success: #059669;
            --warning: #D97706;
            --error: #DC2626;
            
            /* Typography */
            --font-serif: 'Noto Serif KR', serif;
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            
            /* Spacing */
            --spacing-xs: 0.5rem;
            --spacing-sm: 1rem;
            --spacing-md: 1.5rem;
            --spacing-lg: 2rem;
            --spacing-xl: 3rem;
            --spacing-2xl: 4rem;
            
            /* Border Radius */
            --radius-sm: 0.375rem;
            --radius-md: 0.5rem;
            --radius-lg: 0.75rem;
            --radius-xl: 1rem;
            
            /* Shadows */
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
          }

          body {
            font-family: var(--font-sans);
            background-color: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* ==========================================
             NAVIGATION
             ========================================== */
          .navbar {
            position: sticky;
            top: 0;
            z-index: 100;
            background: var(--bg-primary);
            border-bottom: 1px solid var(--border-color);
            box-shadow: var(--shadow-sm);
          }

          .nav-content {
            max-width: 1280px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-primary);
          }

          .nav-logo h1 {
            font-size: 1.25rem;
            font-weight: 700;
            font-family: var(--font-sans);
          }

          .nav-logo svg {
            color: var(--accent-primary);
          }

          .nav-menu {
            display: flex;
            gap: 2rem;
          }

          .nav-link {
            text-decoration: none;
            color: var(--text-secondary);
            font-weight: 500;
            font-size: 0.9375rem;
            transition: color 0.2s;
            padding: 0.5rem 0;
            border-bottom: 2px solid transparent;
          }

          .nav-link:hover {
            color: var(--accent-primary);
          }

          .nav-link.active {
            color: var(--accent-primary);
            border-bottom-color: var(--accent-primary);
          }

          /* ==========================================
             HERO SECTION
             ========================================== */
          .hero {
            max-width: 1280px;
            margin: 0 auto;
            padding: var(--spacing-2xl) 2rem;
            text-align: center;
          }

          .hero-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: var(--accent-light);
            color: var(--accent-primary);
            border-radius: var(--radius-lg);
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: var(--spacing-md);
          }

          .hero-title {
            font-family: var(--font-serif);
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: var(--spacing-md);
            color: var(--text-primary);
          }

          .hero-description {
            font-size: 1.125rem;
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: var(--spacing-xl);
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          /* ==========================================
             BUTTONS
             ========================================== */
          .btn {
            padding: 0.875rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: var(--radius-md);
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
            display: inline-block;
          }

          .btn-primary {
            background: var(--accent-primary);
            color: white;
          }

          .btn-primary:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }

          .btn-secondary {
            background: var(--bg-primary);
            color: var(--text-primary);
            border: 2px solid var(--border-color);
          }

          .btn-secondary:hover {
            border-color: var(--accent-primary);
            color: var(--accent-primary);
          }

          /* ==========================================
             FEATURES SECTION
             ========================================== */
          .features {
            max-width: 1280px;
            margin: 0 auto;
            padding: var(--spacing-2xl) 2rem;
          }

          .section-title {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: var(--spacing-xl);
            color: var(--text-primary);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            margin-top: var(--spacing-xl);
          }

          .feature-card {
            padding: var(--spacing-lg);
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            transition: all 0.3s;
          }

          .feature-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-xl);
            border-color: var(--accent-primary);
          }

          .feature-icon {
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--accent-light);
            color: var(--accent-primary);
            border-radius: var(--radius-md);
            margin-bottom: var(--spacing-md);
          }

          .feature-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: var(--spacing-sm);
            color: var(--text-primary);
          }

          .feature-description {
            color: var(--text-secondary);
            line-height: 1.7;
          }

          /* ==========================================
             READER MODE
             ========================================== */
          .reader-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            grid-template-rows: auto 1fr;
            height: 100vh;
            background: var(--bg-secondary);
          }

          .reader-nav {
            grid-column: 1 / -1;
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 2rem;
            background: var(--bg-primary);
            border-bottom: 1px solid var(--border-color);
          }

          .nav-back {
            padding: 0.5rem 1rem;
            background: none;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            cursor: pointer;
            color: var(--text-secondary);
            font-weight: 500;
            transition: all 0.2s;
          }

          .nav-back:hover {
            border-color: var(--accent-primary);
            color: var(--accent-primary);
          }

          .reader-progress {
            flex: 1;
          }

          .progress-bar {
            width: 100%;
            height: 4px;
            background: var(--bg-tertiary);
            border-radius: 2px;
            overflow: hidden;
          }

          .progress-fill {
            height: 100%;
            background: var(--accent-primary);
            transition: width 0.3s;
          }

          .reader-controls {
            display: flex;
            gap: 0.5rem;
          }

          .control-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-color);
            background: var(--bg-primary);
            border-radius: var(--radius-sm);
            cursor: pointer;
            color: var(--text-secondary);
            transition: all 0.2s;
          }

          .control-btn:hover {
            border-color: var(--accent-primary);
            color: var(--accent-primary);
          }

          /* ==========================================
             SIDEBAR
             ========================================== */
          .sidebar {
            background: var(--bg-primary);
            border-right: 1px solid var(--border-color);
            overflow-y: auto;
          }

          .sidebar-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
          }

          .sidebar-header h3 {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-primary);
          }

          .sidebar-content {
            padding: 1rem;
          }

          .toc-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            text-decoration: none;
            color: var(--text-secondary);
            border-radius: var(--radius-sm);
            transition: all 0.2s;
            margin-bottom: 0.25rem;
          }

          .toc-item:hover {
            background: var(--bg-secondary);
            color: var(--accent-primary);
          }

          .toc-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            background: var(--bg-secondary);
            border-radius: var(--radius-sm);
            font-size: 0.875rem;
            font-weight: 600;
            flex-shrink: 0;
          }

          .toc-title {
            font-size: 0.9375rem;
            font-weight: 500;
          }

          /* ==========================================
             READER MAIN CONTENT
             ========================================== */
          .reader-main {
            overflow-y: auto;
            padding: 2rem;
          }

          .ebook-content {
            max-width: 800px;
            margin: 0 auto;
            background: var(--bg-primary);
            padding: 3rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
          }

          .ebook-cover {
            text-align: center;
            padding: 3rem 0;
            border-bottom: 2px solid var(--border-color);
            margin-bottom: 3rem;
          }

          .cover-title {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }

          .cover-subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
          }

          .cover-meta {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            color: var(--text-tertiary);
            font-size: 0.9375rem;
          }

          /* ==========================================
             CHAPTER CONTENT
             ========================================== */
          .chapter {
            margin-bottom: 3rem;
            padding-bottom: 3rem;
            border-bottom: 1px solid var(--border-color);
          }

          .chapter:last-child {
            border-bottom: none;
          }

          .chapter-title {
            font-family: var(--font-serif);
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }

          .chapter-subtitle {
            font-size: 1.125rem;
            color: var(--accent-primary);
            margin-bottom: 1.5rem;
            font-weight: 600;
          }

          .chapter-body {
            font-family: var(--font-serif);
            font-size: 1.0625rem;
            line-height: 1.8;
            color: var(--text-primary);
          }

          .paragraph {
            margin-bottom: 1.25rem;
          }

          .paragraph:last-child {
            margin-bottom: 0;
          }

          /* ==========================================
             SPECIAL BOXES
             ========================================== */
          .examples-box,
          .homework-box {
            margin-top: 2rem;
            padding: 1.5rem;
            background: var(--bg-secondary);
            border-left: 4px solid var(--accent-primary);
            border-radius: var(--radius-md);
          }

          .examples-box h4,
          .homework-box h4 {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }

          .examples-box ul,
          .homework-list {
            list-style: none;
            padding-left: 0;
          }

          .examples-box li,
          .homework-list li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            color: var(--text-secondary);
          }

          .examples-box li:before,
          .homework-list li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--accent-primary);
            font-weight: 700;
          }

          .homework-deadline {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border-color);
            color: var(--success);
            font-weight: 600;
            text-align: right;
          }

          /* ==========================================
             Q&A
             ========================================== */
          .qa-item {
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: var(--bg-secondary);
            border-radius: var(--radius-md);
          }

          .qa-question {
            font-size: 1.125rem;
            font-weight: 700;
            color: var(--accent-primary);
            margin-bottom: 0.75rem;
          }

          .qa-answer {
            font-family: var(--font-serif);
            font-size: 1.0625rem;
            line-height: 1.8;
            color: var(--text-primary);
          }

          /* ==========================================
             FOOTER
             ========================================== */
          .footer {
            background: var(--bg-secondary);
            border-top: 1px solid var(--border-color);
            padding: 3rem 2rem 2rem;
          }

          .footer-content {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .footer-section h4 {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }

          .footer-section p,
          .footer-section a {
            color: var(--text-secondary);
            font-size: 0.9375rem;
            line-height: 1.8;
            text-decoration: none;
            display: block;
          }

          .footer-section a:hover {
            color: var(--accent-primary);
          }

          .footer-bottom {
            max-width: 1280px;
            margin: 0 auto;
            padding-top: 2rem;
            border-top: 1px solid var(--border-color);
            text-align: center;
            color: var(--text-tertiary);
            font-size: 0.875rem;
          }

          /* ==========================================
             RESPONSIVE
             ========================================== */
          @media (max-width: 768px) {
            .nav-content {
              flex-direction: column;
              gap: 1rem;
            }

            .nav-menu {
              width: 100%;
              justify-content: center;
            }

            .hero-title {
              font-size: 2.5rem;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .reader-container {
              grid-template-columns: 1fr;
            }

            .sidebar {
              display: none;
            }

            .ebook-content {
              padding: 2rem 1.5rem;
            }

            .cover-title {
              font-size: 2rem;
            }

            .chapter-title {
              font-size: 1.75rem;
            }
          }

          /* ==========================================
             UTILITIES
             ========================================== */
          .app-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          ::selection {
            background: var(--accent-light);
            color: var(--accent-primary);
          }

          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
})
