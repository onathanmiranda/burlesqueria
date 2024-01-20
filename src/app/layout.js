import { Inter } from "next/font/google";
import "./globals.css";

import Image from 'next/image';
import BackgroundImage from '../images/Burlesqueria_Teatro_Café_Pequeno_por_Renan_Olivetti.jpeg';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-black`}>
        <Image 
          className='fixed top-0 left-0 w-full h-full object-cover object-center z-0 opacity-70'
          src={BackgroundImage} 
          alt="Burlesqueria no Teatro Café Pequeno" 
        />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Burlesqueria | Cia. Coros Por Um",
  description: "Cia. formada por artistas, professores e alunos do Espaço de Artes Patrícia Evans, a partir da vontade de se criar um movimento artístico diferenciado, com um humor crítico, consciente e inovador, trazendo uma mensagem de igualdade e empoderamento através das histórias dos personagens. Sejam bem-vindes à Burlesqueria, um show ágil, leve e bem-humorado, criado e dirigido por Patrícia Evans e André Sigaud."
}