// Gustavo Ávila Santos - 10753199
// Guilherme Ferraz Cabral - 10749385
// João Vitor Alves de Freitas - 10756078
// Enzo Marinho Bertoldo - 10752887

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Canal Center",
  description: "Especialistas em centrais de gás, reguladores, fogões camping e kits de instalação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      
      <body>
        <Header/>
        <main className="mainContent">
          {children}
        </main>
        <Footer/>
      </body>
      
    </html>
  );
}
