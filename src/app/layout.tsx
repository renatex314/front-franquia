import { Nunito } from "next/font/google";
import "./globals.css";
import AppProvider from "@/providers/AppProvider";

const nunito = Nunito({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <title>Front-end loja</title>
        <link rel="icon" href="./icone.ico" sizes="any" />
      </head>
      <body className={nunito.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
