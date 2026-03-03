import { Flex, View, Text } from '@adobe/react-spectrum'

function Header() {
  return (
    <View
      paddingX="size-400"
      paddingY="size-200"
      borderBottomWidth="thin"
      borderBottomColor="dark"
    >
      <Flex alignItems="center" justifyContent="space-between" maxWidth="size-6000" marginX="auto" width="100%">
        <Text UNSAFE_style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          -1
        </Text>
        <Flex gap="size-200" alignItems="center">
          <Text UNSAFE_style={{ fontSize: '0.875rem', opacity: 0.7 }}>
            The Agency That Builds Itself
          </Text>
        </Flex>
      </Flex>
    </View>
  )
}

export default Header
