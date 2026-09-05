import Link from "next/link";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
