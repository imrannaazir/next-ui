import "../styles/globals.css";
import type { AppProps } from "next/app";
// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react";
function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        emonColor: "$pink500",
      },
    },
  });
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
