import { Box } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
