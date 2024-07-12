import type { Metadata } from "next";

import localfont from "next/font/local";
import "./globals.css";
import Header from "./components/header";

import "swiper/css";
import "swiper/css/pagination";

const degular = localfont({
  src: [
    {
      path: "../../public/font/Degular/Degular-Black.otf",
      weight: "900",
    },
    {
      path: "../../public/font/Degular/Degular-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/font/Degular/Degular-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/font/Degular/Degular-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/Degular/Degular-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../public/font/Degular/Degular-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/font/Degular/Degular-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/font/Degular/Degular-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/Degular/Degular-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/font/Degular/Degular-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/Degular/Degular-light.otf",
      weight: "200",
    },
    {
      path: "../../public/font/Degular/Degular-lightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/font/Degular/Degular-Thin.otf",
      weight: "100",
    },
    {
      path: "../../public/font/Degular/Degular-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Mitul's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={degular.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
