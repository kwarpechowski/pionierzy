import Link from "next/link";
import Quote from "../components/ui/quote"

export const metadata = {
  title: 'Testowa strona',
  description: 'xyz',
}

async function getOpinions() {
  const res = await fetch(`http://srv23.mikr.us:20198/api/opinions`)
  return res.json()
}
 

const Home = async () => {

  const { data } = await getOpinions();
  return (
   <>
     <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter">Pionierzy Przyszłości</h1>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Instytut Rozwoju Zawodowego</h2>
              <h3 className="text-2xl md:text-3xl">Odkrywaj przyszłość dzięki innowacyjnym kursom. Rozwijaj się z nami!</h3>
            </div>
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                O nas
              </h2>
          </div>
        </div>
      </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Dlaczego my
              </h2>
          </div>
        </div>
      </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-20">
          <div className="mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold pb-12 md:pb-16">
                Opinie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map(({ id, attributes: {author, text} }: any) => {
                  return (
                    <Quote key={id} text={text} author={author} />
                  )
                })}
              </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default Home;
