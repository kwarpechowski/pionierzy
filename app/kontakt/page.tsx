import Link from "next/link";


export const metadata = {
  title: 'Kontakt',
  description: 'xyz',
}


async function getFaqs() {
  const res = await fetch(`https://admin.ipionierzy.pl/api/faq-page?populate=*`)
  const { data } = await res.json()
  return data.attributes.faq
}

const Contact = async () => {

  const faq = await getFaqs();

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Kontakt</h2>
            </div>
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto p-10">
        <h2 className="text-3xl">FAQ</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {faq.map(({ id, question, response}: any) => {
            return (
              <li key={id} className="p-6 bg-white rounded-2xl shadow-sm">
                  <h3 className="mb-4 text-lg font-semibold leading-normal">{question}</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">{response}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
    </>
  );
}

export default Contact