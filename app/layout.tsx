import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const fontDisplay = Playfair_Display({
  subsets: ["cyrillic", "latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const fontSans = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Егор Прокопенков — Frontend-разработчик",
  description:
    "Портфолио frontend-разработчика Егора Прокопенкова. Отзывчивые веб-интерфейсы на React и Next.js, в основе которых — человеческое восприятие.",
  keywords: [
    "frontend разработчик",
    "веб-разработка",
    "React",
    "Next.js",
    "UX",
    "портфолио",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Егор Прокопенков — Frontend-разработчик",
    description:
      "Интерфейсы, в центре которых — человеческое восприятие. React, Next.js, Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* Fixed film-grain overlay for a premium analog texture */}
        <div
          aria-hidden
          className="grain pointer-events-none fixed inset-0 z-[90] opacity-[0.05]"
        />
        {children}
      </body>
    </html>
  );
}
