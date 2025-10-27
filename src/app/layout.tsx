import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "(주)누리온홀딩스 - 미래를 향한 등불",
  description: "기업컨설팅, 응용 소프트웨어 개발, 부동산 개발, PM계약대행 서비스를 제공하는 (주)누리온홀딩스입니다. 대표: 최인석 | 웹사이트: www.nurionholdings.com",
  keywords: "누리온홀딩스, 기업컨설팅, 소프트웨어개발, 부동산개발, PM계약대행, 최인석, nurionholdings.com",
  authors: [{ name: "최인석", url: "https://www.nurionholdings.com" }],
  openGraph: {
    title: "(주)누리온홀딩스 - 미래를 향한 등불",
    description: "기업컨설팅, 응용 소프트웨어 개발, 부동산 개발, PM계약대행 서비스",
    url: "https://www.nurionholdings.com",
    siteName: "누리온홀딩스",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "(주)누리온홀딩스 - 미래를 향한 등불",
    description: "기업컨설팅, 응용 소프트웨어 개발, 부동산 개발, PM계약대행 서비스",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
