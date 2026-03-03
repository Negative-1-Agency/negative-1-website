import { Outlet } from 'react-router-dom'
import { Flex, View } from '@adobe/react-spectrum'
import Header from './Header'

function Layout() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <View flexGrow={1}>
        <Outlet />
      </View>
    </Flex>
  )
}

export default Layout
