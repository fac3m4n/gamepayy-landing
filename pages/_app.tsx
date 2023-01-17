import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const clash = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Extralight.woff",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.woff",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${clash.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
