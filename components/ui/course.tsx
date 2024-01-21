import Link from "next/link";
import Image from 'next/image'

type Props = {
    title: string
    slug: string
    url: string
    shortText: string
}

export default function Course({ title, slug, shortText, url  }: Props) {
    return (
        <div className="shadow-md rounded bg-white flex flex-col">
           <div className="h-40 relative">
           <Link href={`/kurs/${slug}`}>
                <Image
                    src={url}
                    fill={true}
                    objectFit="cover"
                    alt=""
                    className="rounded shadow-sm"
                />
           </Link>
            </div>
            <div className="text-center flex-1 p-4">
                <h3 className="font-extrabold pb-4">
                    {title}
                </h3>
                {shortText}
            </div>
            <Link href={`/kurs/${slug}`} className="block mt-8 text-center bg-gray-300 hover:bg-blue-700 text-gray-600 hover:text-blue-100 py-2 px-4 rounded">
                    Zobacz
            </Link>
      </div>
    )
  }