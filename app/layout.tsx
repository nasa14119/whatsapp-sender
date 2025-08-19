import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const font_main = Poppins({
  variable: "--font-main",
  weight: ["400", "700"],
  fallback: ["latin"],
});
export const metadata: Metadata = {
  title: "Whatsapp Sender",
  description: "App para enviar mensajes masivos en whasapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font_main.variable} antialiased`}>{children}</body>
    </html>
  );
}
