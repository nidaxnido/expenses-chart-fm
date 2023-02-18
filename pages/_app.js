import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    brand:{
      softRed: "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",
      darkBrown: "hsl(25, 47%, 15%)",
      mediumBrown: "hsl(28, 10%, 53%)",
      cream: "hsl(27, 66%, 92%)",
      orange: "hsl(33, 100%, 98%)"
    }
  },
  breakpoints:{
    sm:'376px',
    xl:'1440px'
  }
})
export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
     <Component {...pageProps} />
  </ChakraProvider>
}
