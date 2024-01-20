import Link from "next/link";
import Course from "../../components/ui/course";

export const metadata = {
  title: 'Oferta',
  description: 'xyz',

}

async function getCourses(category: string) {
  const res = await fetch(`http://srv23.mikr.us:20198/api/courses?filters%5Bcategory%5D%5B$eq%5D=${category}`)
  return res.json()
}


const Oferta = async () => {

  const { data: pro } = await getCourses("pro");
  const { data: kids } = await getCourses("kids");
  const { data: basic } = await getCourses("basic");

  return (
    <>
      <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Oferta</h2>
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
                  Kursy dla dzieci i młodzieży
                  </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {kids.map(({ id, attributes: { title, slug } }: any) => (
                <Course key={id} title={title} slug={slug} />
              ))}
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
                  Kursy podstawowe (certyfikowane)
                  </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {basic.map(({ id, attributes: { title, slug } }: any) => (
                <Course key={id} title={title} slug={slug}/>
              ))}
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
                    Kursy Zawodowe -specialistyczne (certyfikowane)
                  </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pro.map(({ id, attributes: { title, slug } }: any) => (
                <Course key={id} title={title} slug={slug} />
              ))}
              </div>
            </div>
          </div>
      </section>
    </>
  );
}


export default Oferta;