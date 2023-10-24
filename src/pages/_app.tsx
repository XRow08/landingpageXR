import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Metadata } from "next/types";

const microTecni = localFont({
  src: "../../public/fonts/microTecni.ttf",
  display: "swap",
  variable: "--font-microTecni",
});

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/helvetica_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "XR Tech",
  description: "Developed by @xrsistemas",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${microTecni.variable} ${helvetica.variable} scroll-smooth`}
    >
      <Component {...pageProps} />
    </main>
  );
}
