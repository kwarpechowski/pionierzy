import Link from "next/link";


export const metadata = {
  title: 'Aktualności',
  description: 'xyz',
}

async function getNews() {
  const res = await fetch(`https://admin.ipionierzy.pl/api/article?populate=*`)
  const { data } = await res.json()
  return data.attributes.news
}



const News = async () => {

  const news = await getNews();


  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Aktualności</h2>
            </div>
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto p-5">
       <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {news.map(({ title, slug, date}: any) => {
          return (
              <li key={slug} className="p-6 bg-white rounded-2xl shadow-sm">
                  <Link href={`/aktualnosci/${slug}`}>
                    <h2 className="mb-4 text-lg font-semibold leading-normal">{title}</h2>
                    <h3>{date}</h3>
                    </Link>
              </li>
          )
        })}
        </ul>
      </div>
    </section>
    </>
  );
}

export default News