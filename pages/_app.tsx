import type { AppProps } from "next/app";
import { CommandProvider } from "@/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandProvider>
      <Component {...pageProps} />
    </CommandProvider>
  );
}

export default MyApp;
