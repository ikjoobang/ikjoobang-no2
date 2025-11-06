import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI란 무엇인가? - StudioJu AI</title>
        <meta name="description" content="AI 초급반 1회차 - 인공지능의 기본 개념부터 실습까지" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --bg-color: #000000;
            --text-color: #FFFFFF;
            --card-bg: #1a1a1a;
            --accent-color: #4a9eff;
            --spacing-sm: 24px;
            --spacing-lg: 36px;
            --title-size: 64px;
            --subtitle-size: 24px;
            --line-height: 1.35;
          }

          body {
            font-family: Helvetica, 'Noto Sans KR', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: var(--line-height);
            overflow-x: hidden;
          }

          .ebook-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: var(--spacing-lg);
          }

          /* Hero Section */
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: var(--spacing-lg) 0;
            background: linear-gradient(135deg, #000000 0%, #1a1a2e 100%);
          }

          .hero-content {
            animation: fadeInUp 1s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .title {
            font-size: var(--title-size);
            font-weight: 700;
            margin-bottom: var(--spacing-sm);
            background: linear-gradient(135deg, #4a9eff 0%, #00d4ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .subtitle {
            font-size: var(--subtitle-size);
            margin-bottom: var(--spacing-lg);
            opacity: 0.9;
          }

          .instructor-info {
            margin-top: var(--spacing-lg);
            padding: var(--spacing-sm);
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            backdrop-filter: blur(10px);
          }

          .instructor-info p {
            margin: 8px 0;
            font-size: 16px;
          }

          .instructor-info a {
            color: var(--accent-color);
            text-decoration: none;
            transition: opacity 0.3s;
          }

          .instructor-info a:hover {
            opacity: 0.7;
          }

          /* Section Styles */
          .toc-section,
          .chapters-section,
          .homework-section,
          .qa-section {
            margin: var(--spacing-lg) 0;
            padding: var(--spacing-lg) 0;
          }

          .section-title {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: var(--spacing-lg);
            text-align: center;
          }

          /* Table of Contents Grid */
          .toc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--spacing-sm);
            margin-top: var(--spacing-lg);
          }

          .toc-card {
            background: var(--card-bg);
            padding: var(--spacing-sm);
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 16px;
            transition: all 0.3s;
            border: 2px solid transparent;
          }

          .toc-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color);
            box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
          }

          .toc-number {
            font-size: 32px;
            font-weight: 700;
            color: var(--accent-color);
            min-width: 50px;
            text-align: center;
          }

          .toc-text {
            font-size: 18px;
            flex: 1;
          }

          /* Chapter Cards */
          .chapter-card {
            background: var(--card-bg);
            padding: var(--spacing-lg);
            margin: var(--spacing-lg) 0;
            border-radius: 16px;
            border: 2px solid rgba(74, 158, 255, 0.2);
            transition: all 0.3s;
          }

          .chapter-card:hover {
            border-color: var(--accent-color);
            box-shadow: 0 10px 40px rgba(74, 158, 255, 0.2);
          }

          .chapter-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: var(--spacing-sm);
          }

          .chapter-icon {
            font-size: 48px;
          }

          .chapter-title {
            font-size: 36px;
            font-weight: 700;
          }

          .chapter-subtitle {
            font-size: 20px;
            color: var(--accent-color);
            margin-bottom: var(--spacing-sm);
          }

          .chapter-content {
            margin: var(--spacing-sm) 0;
          }

          .content-item {
            font-size: 18px;
            margin: 12px 0;
            line-height: var(--line-height);
            padding-left: 20px;
            position: relative;
          }

          .content-item:before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: 700;
          }

          /* Examples Grid */
          .examples-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-top: var(--spacing-sm);
          }

          .example-badge {
            background: rgba(74, 158, 255, 0.2);
            padding: 12px 20px;
            border-radius: 8px;
            text-align: center;
            font-weight: 500;
            transition: all 0.3s;
          }

          .example-badge:hover {
            background: rgba(74, 158, 255, 0.4);
            transform: scale(1.05);
          }

          /* Homework Section */
          .homework-card {
            background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
            padding: var(--spacing-lg);
            border-radius: 16px;
            border: 2px solid var(--accent-color);
          }

          .homework-list {
            list-style: none;
            margin: var(--spacing-sm) 0;
          }

          .homework-list li {
            font-size: 18px;
            padding: 12px 0;
            padding-left: 30px;
            position: relative;
          }

          .homework-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #00ff88;
            font-weight: 700;
            font-size: 20px;
          }

          .homework-deadline {
            margin-top: var(--spacing-sm);
            font-size: 16px;
            color: #00ff88;
            text-align: right;
            font-weight: 500;
          }

          /* Q&A Section */
          .qa-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--spacing-sm);
            margin-top: var(--spacing-lg);
          }

          .qa-card {
            background: var(--card-bg);
            padding: var(--spacing-sm);
            border-radius: 12px;
            border-left: 4px solid var(--accent-color);
          }

          .qa-question {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--accent-color);
          }

          .qa-answer {
            font-size: 16px;
            line-height: var(--line-height);
          }

          /* Footer */
          .footer {
            text-align: center;
            padding: var(--spacing-lg) 0;
            margin-top: var(--spacing-lg);
            border-top: 2px solid rgba(255, 255, 255, 0.1);
            opacity: 0.7;
          }

          .footer p {
            margin: 8px 0;
            font-size: 14px;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            :root {
              --title-size: 40px;
              --subtitle-size: 18px;
              --spacing-sm: 16px;
              --spacing-lg: 24px;
            }

            .ebook-container {
              padding: var(--spacing-sm);
            }

            .section-title {
              font-size: 32px;
            }

            .chapter-title {
              font-size: 24px;
            }

            .chapter-icon {
              font-size: 32px;
            }

            .toc-grid,
            .qa-grid {
              grid-template-columns: 1fr;
            }

            .examples-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Smooth Scroll */
          html {
            scroll-behavior: smooth;
          }

          /* Selection */
          ::selection {
            background: var(--accent-color);
            color: var(--bg-color);
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
})
