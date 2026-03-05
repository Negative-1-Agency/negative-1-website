import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('n1-theme') as 'dark' | 'light') || 'dark'
    }
    return 'dark'
  })

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('n1-theme', next)
  }

  return (
    <header className="n1-navbar">
      <a href="/" className="n1-logo">
        <span className="n1-logo-accent">−1</span>
        <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400, fontSize: '0.875rem' }}>Agency</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <span className="n1-badge n1-badge-success">
          <span className="n1-badge-dot n1-pulse" />
          operational
        </span>
        <button className="n1-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </header>
  )
}

export default Header
