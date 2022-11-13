import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          {children}
        </Box>
      <Footer />
    </>
  )
}
