import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import Layout from "../components/Layout";
import Script from "next/script";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

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
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Head>
        <title>GamePayy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${clash.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </main>
    </>
  );
}

export default MyApp;
