import Link from "next/link";

export const metadata = {
  title: 'Testowa strona',
  description: 'xyz',
}

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter">Pionierzy Przyszłości</h1>
      <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Instytut Rozwoju Zawodowego</h2>
      <h3 className="text-2xl md:text-3xl">Odkrywaj przyszłość dzięki innowacyjnym kursom. Rozwijaj się z nami!</h3>
    </div>
  );
};

export default Home;
