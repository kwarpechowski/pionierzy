import Link from "next/link";
import Quote from "../components/ui/quote"

export const metadata = {
  title: 'Testowa strona',
  description: 'xyz',
}

async function getOpinions() {
  const res = await fetch(`https://admin.ipionierzy.pl/api/opinions?populate=*`)
  return res.json()
}
 

const Home = async () => {

  const { data } = await getOpinions();
  return (
   <>
     <section className="relative">
     <Link href="/oferta" className="absolute z-20 -bottom-5 left-0 right-0 m-auto block width-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded" style={{width: 159}}>Sprawdź ofertę</Link>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-20 md:pt-40">
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
        <div className="py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                O nas
              </h2>
          </div>
          <div className="text-justify text-lg">
          Pionierzy Przyszłości - Instytut Rozwoju Zawodowego to innowacyjna placówka edukacyjna, oferująca zaawansowane kursy dla wszystkich grup wiekowych. Kursy, inspirowane ideologią Astra Nova School Elona Muska, pokrywają tematy od sztucznej inteligencji do umiejętności miękkich. Programy dla dorosłych, skierowane do profesjonalistów, obejmują specjalistyczne szkolenia i certyfikowane kursy online, dostosowane do dynamicznego rynku pracy. Prowadzone przez doświadczonych pedagogów, kursy kładą nacisk na praktyczne zastosowanie wiedzy. Instytut współpracuje z firmami technologicznymi i instytucjami naukowymi, tworząc środowisko inspirujące do ciągłego rozwoju i innowacji.
          </div>
        </div>
      </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Dlaczego my
              </h2>
          </div>
          <div className="text-justify text-lg">
          <p>
            Instytut Rozwoju Zawodowego oferuje różnorodne kursy i warsztaty, w tym sztuczną inteligencję, programowanie, umiejętności miękkie, krytyczne myślenie, oraz zajęcia w języku angielskim.
</p><p>
Instytut koncentruje się na praktycznym doświadczeniu, używając innowacyjnych metod nauczania z realnymi problemami, by przygotować uczestników do przyszłych wyzwań zawodowych i życiowych.
</p><p>
Instytut współpracuje z czołowymi firmami technologicznymi i instytucjami naukowymi, by dostarczać aktualną wiedzę i dostosowywać kursy do standardów branżowych.
</p><p>
Inspirujące środowisko które pobudza do ciągłej nauki i innowacji, wspierającego rozwój zarówno młodych, jak i doświadczonych profesjonalistów.
 </p>         </div>
        </div>
      </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20">
          <div className="mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold pb-12 md:pb-16">
                Opinie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 pt-10">
                {data.map(({ id, attributes: {author, text, photo: {data: { attributes: { url }}}} }: any) => {
                  return (
                    <Quote key={id} text={text} author={author} url={url}/>
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
