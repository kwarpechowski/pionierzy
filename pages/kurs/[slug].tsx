import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";

import '../../app/css/style.css'

import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch("https://admin.ipionierzy.pl/api/courses");
  const { data } = await res.json()

  return {
    paths: data.map(({ attributes: { slug }}: any) => {
      return {
        params: {
          slug
        }
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const res = await fetch(`https://admin.ipionierzy.pl/api/courses?filters%5Bslug%5D%5B$eq%5D=${slug}`);
  const { data } = await res.json()
  
  return {
    // Passed to the page component as props
    props: data[0]
  }
}

const Course = (props: any) => {

  return (
   <>
    <Header />
     <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32">
            <div>
              <Link href="/oferta">Powrót</Link>
              <h1 className="text-2xl md:text-3xl font-extrabold">Kurs</h1>
              <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{props.attributes.title}</h2>
            </div>
          </div>
          <div className="pb-5">
            {props.attributes.shortText}
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-20">
        <h1 className="text-2xl">Dostępne terminy</h1>
        <p>Brak</p>
        <div className="pt-10">
        <Link href="/kontakt" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded" >Skontaktuj się z nami</Link>
        </div>
        </div>
      </div>
    </section>
    <Footer />
   </>
  );
};

export default Course;
