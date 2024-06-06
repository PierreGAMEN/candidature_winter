import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Candidature-PierreGAMEN",
  description: "Créer par Pierre GAMEN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
