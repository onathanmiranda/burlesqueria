import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";
import "./index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body 
        className={`bg-black`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-L41WDCH6HK" />
    </html>
  );
}

export const metadata = {
  title: "Burlesqueria | Cia. Coros Por Um",
  description: "A Cia. Coros Por Um apresenta Burlesqueria: um show ágil, leve e bem-humorado, com uma mensagem de igualdade e empoderamento."
}