import "../styles/globals.css";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
