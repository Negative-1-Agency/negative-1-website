import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('n1-theme') as 'dark' | 'light') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('n1-theme', next)
  }

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--space-6)',
      background: scrolled ? 'rgba(6,6,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid transparent',
      transition: 'background 200ms ease, backdrop-filter 200ms ease',
    }}>

      {/* Gradient accent underline */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, var(--color-accent-primary) 30%, var(--color-accent-secondary) 60%, var(--color-accent-tertiary) 85%, transparent 100%)',
        opacity: scrolled ? 0.5 : 0,
        transition: 'opacity 200ms ease',
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: '1.125rem',
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}>
            <span style={{ color: 'var(--color-accent-primary)' }}>−1</span>
            <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400, fontSize: '0.875rem' }}>Agency</span>
          </span>
        </a>

        {/* Right: status + theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span className="n1-badge n1-badge-success" style={{ fontSize: '0.7rem' }}>
            <span className="n1-badge-dot" />
            operational
          </span>

          <button
            className="n1-theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark'
              ? <Sun size={15} />
              : <Moon size={15} />
            }
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
