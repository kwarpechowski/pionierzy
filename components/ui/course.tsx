import Link from "next/link";

type Props = {
    title: string
    slug: string
}

export default function Course({ title, slug }: Props) {
    return (
        <div className="relative border-2 border-gray-200 rounded bg-gray-100 flex flex-col p-4">
            <h3 className="text-center flex-1 text-bold">
            {title}
            </h3>
            <Link href={`/kurs/${slug}`} className="block mt-8 text-center bg-gray-300 hover:bg-blue-700 text-gray-600 hover:text-blue-100 py-2 px-4 rounded">
                    Zobacz
            </Link>
      </div>
    )
  }