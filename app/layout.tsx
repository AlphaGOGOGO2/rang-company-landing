import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { absoluteUrl, company, siteUrl } from "./site";

const metadataTitle = "주식회사 랑 | 도매 소매 위탁 납품 수출";
const metadataDescription =
  "주식회사 랑은 도매, 소매, 위탁, 납품, 수출까지 연결하며 전국 거래처의 판매 방식과 물량, 일정, 채널에 맞춰 안정적인 공급 흐름을 설계합니다.";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/pretendard-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/pretendard-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  fallback: ["Apple SD Gothic Neo", "Noto Sans KR", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: metadataTitle,
    template: "%s | 주식회사 랑",
  },
  description: metadataDescription,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  category: "distribution",
  keywords: [
    "주식회사 랑",
    "랑컴퍼니",
    "도매",
    "소매",
    "위탁",
    "납품",
    "수출",
    "전국 납품",
    "온라인 공급",
    "사업장 납품",
    "대구 유통",
    "도매 납품",
    "위탁 판매",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: company.name,
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: "/og-rang.jpg",
        width: 1200,
        height: 630,
        alt: "주식회사 랑 유통 파트너",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [absoluteUrl("/og-rang.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: "/assets/logo/favicon.png",
    shortcut: "/assets/logo/favicon.png",
    apple: "/assets/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>{children}</body>
    </html>
  );
}
