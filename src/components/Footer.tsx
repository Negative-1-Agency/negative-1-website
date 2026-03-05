function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="n1-footer">
      <div className="n1-footer-inner">
        <div className="n1-footer-grid">

          {/* Brand col */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: '1.25rem',
              color: 'var(--color-accent-primary)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-3)',
            }}>−1</div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              maxWidth: '28ch',
              marginBottom: 'var(--space-4)',
            }}>
              An AI-native creative agency. Nine specialized agents. One unified system.
            </p>
            <span className="n1-badge n1-badge-success" style={{ fontSize: '0.7rem' }}>
              <span className="n1-badge-dot" />
              operational
            </span>
          </div>

          {/* System col */}
          <div>
            <div className="n1-footer-col-title">System</div>
            <ul className="n1-footer-links">
              <li><a href="#">Agents</a></li>
              <li><a href="#">Capabilities</a></li>
              <li><a href="#">Workflows</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>

          {/* Company col */}
          <div>
            <div className="n1-footer-col-title">Company</div>
            <ul className="n1-footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal col */}
          <div>
            <div className="n1-footer-col-title">Legal</div>
            <ul className="n1-footer-links">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="n1-footer-legal">
          <span>© {year} −1 Agency. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-tertiary)' }}>
            v0.1.0-alpha
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
