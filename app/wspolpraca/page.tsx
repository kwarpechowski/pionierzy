import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: 'Współpraca',
  description: 'xyz',
}

async function getData() {
  const res = await fetch(`https://admin.ipionierzy.pl/api/partner?populate=*`)
  const { data } = await res.json()
  return data.attributes
}



const Partners = async () => {

  const { content, partners } = await getData();

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Współpraca</h2>
            </div>
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto p-10">
          <ReactMarkdown className="content">
            {content}
          </ReactMarkdown>
      </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto p-10">
        <h2 className="text-2xl font-extrabold pb-5">Partnerzy</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {partners.map(({ id, title }: any) => {
            return (
              <li className="p-6 bg-white rounded-2xl shadow-sm" key={id}>{title}</li>
            )
          })}
        </ul>
      </div>
    </section>
    </>
  );
}

export default Partners;
