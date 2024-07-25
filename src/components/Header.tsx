import { Box, Text } from '@chakra-ui/react'

function Header() {
  return (
    <Box padding='.625rem 1.2rem' backgroundColor='#0D0D0D'>
      <Box color='#FFFFFF'>
        <Text fontSize={['lg', 'xl', '3xl']} as='b'>Dio Bank</Text>
      </Box>
    </Box>
  )
}

export default Header
