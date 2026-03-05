import { Zap, Eye, Cpu, ArrowRight } from 'lucide-react'
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

const capabilities = [
  {
    icon: <Eye size={20} />,
    title: 'Strategy & Research',
    description: 'Market analysis, competitive intelligence, and product strategy — driven by data, refined by taste.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Creative & Copy',
    description: 'Brand identity, visual design, and copy that converts — from concept to production-ready assets.',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Engineering & Deployment',
    description: 'React, TypeScript, CI/CD, live deployment — code reviewed, tested, and shipped by AI agents.',
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

      {/* ── Capabilities ── */}
      <section style={SECTION}>
        <div style={W}>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <div className="n1-label" style={{ marginBottom: 'var(--space-3)' }}>What We Do</div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2.25rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}>
              Full-stack creative intelligence
            </h2>
          </div>

          <div className="n1-stagger" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'var(--space-4)',
          }}>
            {capabilities.map((cap) => (
              <div key={cap.title} className="n1-card n1-card-interactive">
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-accent-primary)',
                  marginBottom: 'var(--space-4)',
                }}>
                  {cap.icon}
                </div>
                <h3 style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  marginBottom: 'var(--space-2)',
                  color: 'var(--color-text-primary)',
                }}>{cap.title}</h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-secondary)',
                }}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              }}>−1 Agency · Dashboard</span>
            </div>

            <img
              src="/negative-1-website/app-screenshot.png"
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
