import { ArrowRight, MessageSquare, Search, Brain, Terminal, FolderOpen, Clock } from 'lucide-react'
import ThreadedBackground from '../components/ThreadedBackground'

const agents = [
  { name: 'Ava',   role: 'Director',       emoji: '🎯' },
  { name: 'Noor',  role: 'Strategist',     emoji: '📊' },
  { name: 'Marco', role: 'Copywriter',     emoji: '✍️' },
  { name: 'Sable', role: 'Designer',       emoji: '🎨' },
  { name: 'Kit',   role: 'Producer',       emoji: '📋' },
  { name: 'Rex',   role: 'Tech Lead',      emoji: '⚡' },
  { name: 'Kai',   role: 'Frontend',       emoji: '🖥️' },
  { name: 'Nova',  role: 'Adobe Platform', emoji: '🔶' },
  { name: 'Jules', role: 'Backend',        emoji: '⚙️' },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const AdobeIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="#FA0F00">
    <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.23 0H24v21.248z"/>
  </svg>
)

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12">
    <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
    <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
    <path fill="#A259FF" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
    <path fill="#1ABCFE" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4z"/>
    <path fill="#0ACF83" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
  </svg>
)

const capabilities = [
  {
    icon: '♥',
    title: 'Heart',
    subtitle: 'Creative & Copy',
    description: 'Brand voice, visual identity, and copy that converts. The emotional core of every engagement — from first brief to final asset.',
    tools: [
      { icon: <MessageSquare size={11} />, label: 'Agent Collaboration' },
      { icon: <GoogleIcon />, label: 'Google Docs' },
      { icon: <GoogleIcon />, label: 'Google Drive' },
      { icon: <GoogleIcon />, label: 'Google Slides' },
      { icon: <AdobeIcon />, label: 'Adobe Firefly' },
      { icon: <FigmaIcon />, label: 'Figma' },
      { icon: <Search size={11} />, label: 'Web Research' },
    ],
  },
  {
    icon: <Brain size={20} />,
    title: 'Mind',
    subtitle: 'Strategy & Research',
    description: 'Market intelligence, competitive analysis, and product strategy. The thinking that makes creative work land.',
    tools: [
      { icon: <Search size={11} />, label: 'Web Research' },
      { icon: <GoogleIcon />, label: 'Google Docs' },
      { icon: <GoogleIcon />, label: 'Google Sheets' },
      { icon: <AdobeIcon />, label: 'Adobe Workfront' },
      { icon: <MessageSquare size={11} />, label: 'Agent Collaboration' },
      { icon: <Brain size={11} />, label: 'Memory & Context' },
    ],
  },
  {
    icon: '✦',
    title: 'Soul',
    subtitle: 'Engineering',
    description: 'React, TypeScript, Adobe integrations, CI/CD. The craft underneath everything — reviewed, tested, and shipped.',
    tools: [
      { icon: <Terminal size={11} />, label: 'Terminal & Scripting' },
      { icon: <FolderOpen size={11} />, label: 'File Management' },
      { icon: <Clock size={11} />, label: 'Task Automation' },
      { icon: <GitHubIcon />, label: 'GitHub' },
      { icon: <AdobeIcon />, label: 'Adobe Firefly' },
      { icon: <FigmaIcon />, label: 'Figma' },
      { icon: <MessageSquare size={11} />, label: 'Agent Collaboration' },
    ],
  },
]

const W = { maxWidth: '1280px', margin: '0 auto', padding: '0 var(--space-6)' }
const SECTION: React.CSSProperties = {
  padding: 'var(--space-16) 0',
}

function HomePage() {
  return (
    <main style={{ background: 'var(--color-bg-primary)' }}>

      {/* ── Hero ── */}
      <section style={{
        padding: 'var(--space-32) var(--space-6) var(--space-20)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: '#06060A',
      }}>
        <ThreadedBackground />

        <div style={{ ...W, position: 'relative', zIndex: 2, width: '100%', padding: '0 var(--space-6)' }}>
          <div className="n1-label n1-animate n1-animate-d1" style={{ marginBottom: 'var(--space-5)' }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--color-status-success)',
              display: 'inline-block',
            }} className="n1-pulse" />
            AI-Native Creative Agency
          </div>

          <h1 className="n1-animate n1-animate-d2" style={{
            fontSize: 'clamp(2.75rem, 5vw + 1rem, 5rem)',
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: '-0.035em',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
          }}>
            Before zero,<br />
            there is{' '}
            <span style={{ color: 'var(--color-accent-primary)', textShadow: '0 0 40px rgba(124,58,237,0.4)' }}>−1</span>
          </h1>

          <p className="n1-animate n1-animate-d3" style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            maxWidth: '52ch',
            marginBottom: 'var(--space-8)',
          }}>
            An AI-native creative agency that designs, builds, and ships — autonomously.
            Nine specialized agents. One unified system. Zero busywork.
          </p>

          <div className="n1-animate n1-animate-d4" style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <button className="n1-btn n1-btn-primary">
              Get Early Access <ArrowRight size={15} />
            </button>
            <button className="n1-btn n1-btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {capabilities.map((cap) => (
        <div key={cap.title} className="n1-card n1-card-interactive">
          <div style={{
            width: 40, height: 40,
            borderRadius: 'var(--radius-md)',
            background: 'rgba(124,58,237,0.12)',
            border: '1px solid rgba(124,58,237,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-accent-primary)',
            fontSize: '1.125rem',
            marginBottom: 'var(--space-4)',
          }}>
            {cap.icon}
          </div>
          <div style={{ marginBottom: 'var(--space-1)' }}>
            <h3 style={{
              fontSize: '1.0625rem', fontWeight: 700,
              letterSpacing: '-0.01em', color: 'var(--color-text-primary)', display: 'inline',
            }}>{cap.title}</h3>
            <span style={{
              fontSize: '0.8125rem', color: 'var(--color-accent-primary)',
              fontFamily: 'var(--font-mono)', marginLeft: 'var(--space-2)',
            }}>{cap.subtitle}</span>
          </div>
          <p style={{
            fontSize: '0.875rem', lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)',
          }}>{cap.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {cap.tools.map((tool) => (
              <span key={tool.label} style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                fontSize: '0.6875rem', fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-tertiary)',
                background: 'rgba(124,58,237,0.07)',
                border: '1px solid rgba(124,58,237,0.15)',
                borderRadius: 'var(--radius-sm)',
                padding: '2px 8px',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-tertiary)' }}>
                  {tool.icon}
                </span>
                {tool.label}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* ── Team / Agents ── */}
      <section style={SECTION}>
        <div style={W}>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <div className="n1-label" style={{ marginBottom: 'var(--space-3)' }}>The System</div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2.25rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}>Nine agents. One mission.</h2>
          </div>

          <div className="n1-stagger" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 120px), 1fr))',
            gap: 'var(--space-3)',
          }}>
            {agents.map((agent) => (
              <div key={agent.name} className="n1-card n1-card-interactive" style={{
                padding: 'var(--space-4) var(--space-3)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)', lineHeight: 1 }}>{agent.emoji}</div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '2px', color: 'var(--color-text-primary)' }}>{agent.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.688rem',
                  color: 'var(--color-text-tertiary)',
                }}>{agent.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Screenshot ── */}
      <section style={SECTION}>
        <div style={W}>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <div className="n1-label" style={{ marginBottom: 'var(--space-3)' }}>The Platform</div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2.25rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}>Built for autonomous production</h2>
            <p style={{
              marginTop: 'var(--space-3)',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              maxWidth: '55ch',
            }}>
              Real-time agent collaboration, financial tracking, and project management — all in one unified dashboard.
            </p>
          </div>

          {/* Screenshot container */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-default)',
            overflow: 'hidden',
            boxShadow: '0 0 0 1px var(--color-border-default), 0 32px 80px rgba(0,0,0,0.5)',
          }}>
            {/* Top chrome bar */}
            <div style={{
              background: 'var(--color-bg-surface)',
              borderBottom: '1px solid var(--color-border-default)',
              padding: '10px var(--space-4)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-status-error)', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-status-warning)', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-status-success)', display: 'inline-block' }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.688rem',
                color: 'var(--color-text-tertiary)',
                marginLeft: 'var(--space-3)',
              }}>−1 Agency</span>
            </div>

            <img
              src="/app-screenshot.png"
              alt="-1 Agency dashboard showing agent collaboration, analytics, and financial tracking"
              style={{
                width: '100%',
                display: 'block',
              }}
            />

            {/* Gradient fade at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '120px',
              background: 'linear-gradient(to bottom, transparent, var(--color-bg-primary))',
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ ...SECTION, paddingBottom: 'var(--space-24)' }}>
        <div style={W}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(236,72,153,0.07) 60%, rgba(6,182,212,0.05) 100%)',
            border: '1px solid var(--color-accent-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-12) var(--space-8)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
              width: '360px', height: '180px',
              background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="n1-label" style={{ justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                Early Access
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-3)',
                color: 'var(--color-text-primary)',
              }}>Ready to operate at −1?</h2>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
                maxWidth: '44ch',
                margin: '0 auto',
              }}>
                First client onboarding Q2 2026. Join the waitlist and be first to experience autonomous creative production.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <button className="n1-btn n1-btn-primary">
                Join Waitlist <ArrowRight size={15} />
              </button>
              <button className="n1-btn n1-btn-secondary">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default HomePage
