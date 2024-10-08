"use client";
import Script from "next/script";

function generateLabel({ date }) {
  const day = date.getDate();
  const month = date.toLocaleString("pt-BR", { month: "long" });
  //const year = date.getFullYear();
  const time = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day} de ${
    month.charAt(0).toUpperCase() + month.slice(1)
  } - ${time}`;
}

const ticketsLinks = [
  {
    href: `https://riocultura.eleventickets.com/#!/apresentacao/96bccc1e74a6c42d42a438a0b4230d5045b40138`,
    date: new Date("Oct 04 2024 19:30:00 GMT-0300"),
    soldOut: true,
  },
  {
    href: `https://riocultura.eleventickets.com/#!/apresentacao/c280cbca0be1ddbcbef587b0e92fbe6dd8955fc1`,
    date: new Date("Oct 05 2024 19:30:00 GMT-0300"),
    soldOut: false,
  },
  {
    href: `https://riocultura.eleventickets.com/#!/apresentacao/6c2f5f2aa0d131d405247f085e79938496c9a3df`,
    date: new Date("Oct 06 2024 18:30:00 GMT-0300"),
    soldOut: false,
  },
  {
    href: `https://riocultura.eleventickets.com/#!/apresentacao/9ac77e2dd9a5568989a8f3d7f2b69727372fdbe9`,
    date: new Date("Oct 11 2024 19:30:00 GMT-0300"),
    soldOut: false,
  },
  {
    href: `https://riocultura.eleventickets.com/#!/apresentacao/fca0cac255710ea92ea89ebd0dbb5147933db532`,
    date: new Date("Oct 12 2024 19:30:00 GMT-0300"),
    soldOut: false,
  },
  {
    href: `https://riocultura.eleventickets.com/#!/apresentacao/f62e90c70daf2cc150fb648f0286d16b8c2c0fcd`,
    date: new Date("Oct 13 2024 18:30:00 GMT-0300"),
    soldOut: false,
  },
].map((link) => ({
  ...link,
  label: generateLabel(link),
  inactive: link.date < new Date(),
}));

export default function Home() {
  return (
    <main className="z-1 relative text-white py-16 lg:py-8 px-4 text-center bg-black bg-opacity-60 min-h-svh lg:flex lg:gap-10 lg:justify-center lg:items-center">
      <div className="lg:w-3/6 lg:text-left lg:pl-16">
        <h1 className="text-4xl font-bold">BURLESQUERIA</h1>
        <p className="mt-1">Cia. Coros por Um</p>
        <p className="mt-4">De 04/10 a 13/10 no Teatro Café Pequeno</p>
        <p className="">Sextas e Sábados 19:30 e Domingos 18:30</p>
        <p className="uppercase mt-4">
          Leve 1KG de alimento não perecível e<mb /> pague meia.
        </p>
        <h2 className="mt-8">Garanta seu Ingresso:</h2>
        <ul className="mt-2 max-w-80 mx-auto lg:ml-0 lg:mr-auto">
          {ticketsLinks.map(({ label, href, inactive, soldOut }) => (
            <li
              className={`relative mt-2 rounded-full bg-white text-black inline-flex items-center justify-center h-12 ${
                inactive || soldOut ? "bg-opacity-60" : "cursor-pointer"
              }`}
              key={label}
            >
              {!inactive && !soldOut && (
                <a
                  className="h-full w-full flex items-center justify-center px-8"
                  target="_blank"
                  href={href}
                  title={`Bulesqueria | ${label}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M480.578-311.384q7.961 0 13.384-5.386 5.423-5.385 5.423-13.346t-5.386-13.384q-5.385-5.423-13.346-5.423t-13.384 5.385q-5.423 5.385-5.423 13.346t5.385 13.384q5.386 5.424 13.347 5.424Zm0-150.462q7.961 0 13.384-5.385 5.423-5.386 5.423-13.347 0-7.961-5.386-13.384-5.385-5.423-13.346-5.423t-13.384 5.386q-5.423 5.385-5.423 13.346t5.385 13.384q5.386 5.423 13.347 5.423Zm0-150.462q7.961 0 13.384-5.385t5.423-13.346q0-7.961-5.386-13.384-5.385-5.423-13.346-5.423t-13.384 5.385q-5.423 5.385-5.423 13.346t5.385 13.384q5.386 5.423 13.347 5.423Zm292.345 406.77H187.692q-25.384 0-43.461-18.077-18.077-18.077-18.077-43.462v-100q35.307-13.077 57.346-43.84 22.038-30.763 22.038-69.173t-21.959-69.391q-21.959-30.98-57.425-44.057v-100.001q0-25.384 18.077-43.461 18.077-18.077 43.461-18.077h585.231q25.385 0 43.462 18.077t18.077 43.461v100.001q-35.308 13.077-57.346 44.024-22.039 30.947-22.039 69.264 0 38.476 21.959 69.286 21.959 30.81 57.426 43.887v100q0 25.385-18.077 43.462t-43.462 18.077Zm0-36.924q10.769 0 17.692-6.923t6.923-17.692v-76.769q-36.884-21.385-58.134-57.64-21.25-36.255-21.25-78.618 0-42.733 21.192-79.007 21.192-36.274 58.192-57.658v-76.77q0-10.769-6.923-17.692t-17.692-6.923H187.692q-10.769 0-17.692 6.923t-6.923 17.692v76.77q37 21.384 58.192 57.628 21.193 36.244 21.193 78.943 0 42.698-21.25 78.833-21.25 36.134-58.135 57.519v76.769q0 10.769 6.923 17.692t17.692 6.923h585.231ZM480.5-480.5Z" />
                  </svg>
                  <span className="ml-2 text-xs uppercase">{label}</span>
                </a>
              )}
              {(inactive || soldOut) && (
                <div className="flex flex-col justify-center items-center">
                  <div className="line-through h-full w-full flex items-center justify-center px-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M480.578-311.384q7.961 0 13.384-5.386 5.423-5.385 5.423-13.346t-5.386-13.384q-5.385-5.423-13.346-5.423t-13.384 5.385q-5.423 5.385-5.423 13.346t5.385 13.384q5.386 5.424 13.347 5.424Zm0-150.462q7.961 0 13.384-5.385 5.423-5.386 5.423-13.347 0-7.961-5.386-13.384-5.385-5.423-13.346-5.423t-13.384 5.386q-5.423 5.385-5.423 13.346t5.385 13.384q5.386 5.423 13.347 5.423Zm0-150.462q7.961 0 13.384-5.385t5.423-13.346q0-7.961-5.386-13.384-5.385-5.423-13.346-5.423t-13.384 5.385q-5.423 5.385-5.423 13.346t5.385 13.384q5.386 5.423 13.347 5.423Zm292.345 406.77H187.692q-25.384 0-43.461-18.077-18.077-18.077-18.077-43.462v-100q35.307-13.077 57.346-43.84 22.038-30.763 22.038-69.173t-21.959-69.391q-21.959-30.98-57.425-44.057v-100.001q0-25.384 18.077-43.461 18.077-18.077 43.461-18.077h585.231q25.385 0 43.462 18.077t18.077 43.461v100.001q-35.308 13.077-57.346 44.024-22.039 30.947-22.039 69.264 0 38.476 21.959 69.286 21.959 30.81 57.426 43.887v100q0 25.385-18.077 43.462t-43.462 18.077Zm0-36.924q10.769 0 17.692-6.923t6.923-17.692v-76.769q-36.884-21.385-58.134-57.64-21.25-36.255-21.25-78.618 0-42.733 21.192-79.007 21.192-36.274 58.192-57.658v-76.77q0-10.769-6.923-17.692t-17.692-6.923H187.692q-10.769 0-17.692 6.923t-6.923 17.692v76.77q37 21.384 58.192 57.628 21.193 36.244 21.193 78.943 0 42.698-21.25 78.833-21.25 36.134-58.135 57.519v76.769q0 10.769 6.923 17.692t17.692 6.923h585.231ZM480.5-480.5Z" />
                    </svg>
                    <span className="ml-2 text-xs uppercase">{label}</span>
                  </div>
                  {soldOut && (
                    <div className="font-bold text-xs text-red-500">
                      ESGOTADO
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-3/6 lg:pr-16">
        <a
          className="mt-8 lg:mt-0 max-w-80 mx-auto flex justify-center items-center"
          target="_blank"
          href="https://instagram.com/burlesqueriarj"
        >
          <svg
            className="fill-white w-[36px] mh-auto block"
            viewBox="0 0 24 24"
          >
            <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z" />
            <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z" />
            <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z" />
          </svg>
          <p className="ml-2 uppercase text-sm">
            Siga o Instagram <br />
            <strong>@burlesqueriarj</strong>
          </p>
        </a>
        <div className="flex justify-center mt-8">
          <blockquote
            className="instagram-media w-full"
            data-instgrm-permalink="https://www.instagram.com/burlesqueriarj"
            data-instgrm-version="14"
          ></blockquote>
          <Script async src="//www.instagram.com/embed.js" />
        </div>
      </div>
    </main>
  );
}
