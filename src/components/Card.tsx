import { Box, Button, Center, Input, Text } from '@chakra-ui/react'
import { welcomeMsg } from '../service/welcomeMsg'

export default function Card() {
  return (
    <Box backgroundColor="#271730" padding="25px">
      <Center minH='75vh'>
        <Box
          maxWidth="576px"
          padding="25px"
          backgroundColor="#efefef"
          borderRadius="15px">
          <Text as='b'>Faça seu login</Text>

          <Input marginTop="15px" placeholder="email" />

          <Input marginTop="15px" placeholder="password" />

          <Button onClick={welcomeMsg} marginTop="15px" colorScheme="teal" size="sm" width="100%">
            Login
          </Button>
        </Box>
      </Center>
    </Box>
  )
}
