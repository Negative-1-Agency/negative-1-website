import { Zap, Eye, Cpu, ArrowRight } from 'lucide-react'

const agents = [
  { name: 'Ava', role: 'Director', emoji: '🎯' },
  { name: 'Noor', role: 'Strategist', emoji: '📊' },
  { name: 'Marco', role: 'Copywriter', emoji: '✍️' },
  { name: 'Sable', role: 'Designer', emoji: '🎨' },
  { name: 'Kit', role: 'Producer', emoji: '📋' },
  { name: 'Rex', role: 'Tech Lead', emoji: '🔧' },
  { name: 'Kai', role: 'Frontend', emoji: '🖥️' },
  { name: 'Nova', role: 'Adobe Platform', emoji: '🔶' },
  { name: 'Jules', role: 'Backend', emoji: '⚙️' },
]

const capabilities = [
  {
    icon: <Eye size={24} />,
    title: 'Strategy & Research',
    description: 'Market analysis, competitive intelligence, and product strategy &mdash; driven by data, refined by taste.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Creative & Copy',
    description: 'Brand identity, visual design, and copy that converts &mdash; from concept to production-ready assets.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Engineering & Deployment',
    description: 'React, TypeScript, CI/CD, live deployment &mdash; code reviewed, tested, and shipped by AI agents.',
  },
]

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: 'var(--space-32) var(--space-6) var(--space-16)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow effects */}
        <div style={{
          position: 'absolute', top: '-200px', right: '-200px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-150px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-accent-primary)',
            marginBottom: 'var(--space-4)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--color-status-success)',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            AI-Native Creative Agency
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
          }}>
            Before zero,<br />
            there is <span style={{ color: 'var(--color-accent-primary)' }}>-1</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            maxWidth: '55ch',
          }}>
            An AI-native creative agency that designs, builds, and ships &mdash; autonomously.
            Nine specialized agents. One unified system. Zero busywork.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{
        padding: 'var(--space-16) var(--space-6)',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'var(--space-6)',
        }}>
          {capabilities.map((cap) => (
            <div key={cap.title} style={{
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              transition: 'border-color 200ms ease, transform 200ms ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent-primary)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              <div style={{ color: 'var(--color-accent-primary)', marginBottom: 'var(--space-4)' }}>
                {cap.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
                marginBottom: 'var(--space-2)',
              }}>{cap.title}</h3>
              <p style={{
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
              }}>{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{
        padding: 'var(--space-16) var(--space-6)',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--color-accent-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 'var(--space-2)',
            }}>The System</div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2.25rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>Nine agents. One mission.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 140px), 1fr))',
            gap: 'var(--space-4)',
          }}>
            {agents.map((agent) => (
              <div key={agent.name} style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-5)',
                textAlign: 'center',
                transition: 'border-color 200ms ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>{agent.emoji}</div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{agent.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-tertiary)',
                  marginTop: '2px',
                }}>{agent.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status banner */}
      <section style={{
        padding: 'var(--space-16) var(--space-6) var(--space-24)',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            padding: 'var(--space-5) var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(124, 58, 237, 0.08)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
              This website was architected, coded, reviewed, and deployed by AI agents. You are looking at the proof.
            </div>
            <ArrowRight size={20} style={{ color: 'var(--color-accent-primary)' }} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
