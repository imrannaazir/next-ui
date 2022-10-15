import "../styles/globals.css";
// import type { AppProps } from "next/app";
// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }: any) {
  const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        emonColor: "$pink500",
      },
    },
  });
  return (
    <SessionProvider session={pageProps.session}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
