import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";

import '../../app/css/style.css'

import Head from "next/head"

import './global.css'

import ReactMarkdown from 'react-markdown';


export async function getStaticPaths() {
  const res = await fetch("https://admin.ipionierzy.pl/api/article?populate=*");
  const { data } = await res.json()

  return {
    paths: data.attributes.news.map(({ slug }: any) => {
      return {
        params: {
          slug
        }
      }
    }),
    fallback: false,
  }
}

type News = {
  slug: string
}
type Props = {
  data: {
    attributes: {
      news: Array<News>
    }
  }
}
export async function getStaticProps({ params: { slug } }: any) {
  const res = await fetch("https://admin.ipionierzy.pl/api/article?populate=*");
  const { data: { attributes: { news } } }: Props = await res.json();

  const obj = news.find(item => item.slug == slug);
  
  return {
    // Passed to the page component as props
    props: obj,
  }
}


const News = (props: any) => {

  return (
   <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Header />
    <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{props.title}</h2>
            </div>
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto p-5">
       {props.date}
       <ReactMarkdown className="content">
          { props.content }
       </ReactMarkdown>
      </div>
    </section>
    <Footer />
   </>
  );
};

export default News;
