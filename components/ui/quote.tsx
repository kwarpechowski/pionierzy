import Image from 'next/image'

type Props = {
    text: string
    author: string
    url: string
}

export default function Quote({ text, author, url }: Props) {
    return (
        <div className="relative rounded bg-white flex flex-col shadow-md">
          <Image src={url} alt={author} width={100} height={100} className="rounded-full absolute -top-10 inset-x-0 mx-auto shadow-md pointer-events-none"/>
          <blockquote className="block text-l font-medium flex-1 p-10 pt-20">
            “{text}“
          </blockquote>
          <cite className="block font-bold text-lg not-italic mb-1 py-5">{author}</cite>
      </div>
    )
  }