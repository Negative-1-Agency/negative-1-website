import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
