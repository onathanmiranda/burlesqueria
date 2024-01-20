import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    </html>
  );
}

export const metadata = {
  title: "Burlesqueria | Cia. Coros Por Um",
  description: "Cia. formada por artistas, professores e alunos do Espaço de Artes Patrícia Evans, a partir da vontade de se criar um movimento artístico diferenciado, com um humor crítico, consciente e inovador, trazendo uma mensagem de igualdade e empoderamento através das histórias dos personagens. Sejam bem-vindes à Burlesqueria, um show ágil, leve e bem-humorado, criado e dirigido por Patrícia Evans e André Sigaud."
}