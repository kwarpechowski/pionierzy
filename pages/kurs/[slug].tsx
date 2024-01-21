import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";

import '../../app/css/style.css'

import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch("http://srv23.mikr.us:20198/api/courses");
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
  const res = await fetch(`http://srv23.mikr.us:20198/api/courses?filters%5Bslug%5D%5B$eq%5D=${slug}`);
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
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <Link href="/oferta">Powrót</Link>
              <h1 className="text-2xl md:text-3xl font-extrabold">Kurs</h1>
              <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{props.attributes.title}</h2>
            </div>
          </div>
          <div>
            {props.attributes.shortText}
          </div>
        </div>
    </section>
    <Footer />
   </>
  );
};

export default Course;
