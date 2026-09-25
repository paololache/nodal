import type { Metadata } from "next";
import { Anybody, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
});

const body = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const data = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nodal — Diagnóstico e ingeniería de redes",
  description:
    "Medimos cómo se comporta su red en horario real de trabajo y la dejamos estable, segmentada y monitoreada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${data.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
