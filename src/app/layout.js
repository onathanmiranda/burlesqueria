import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body 
        style={{
          backgroundImage: `url("Burlesqueria_Teatro_Café_Pequeno_por_Renan_Olivetti.jpeg")`,
          backgroundPosition: `center center`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
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