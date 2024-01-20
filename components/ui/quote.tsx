
type Props = {
    text: string
    author: string
}

export default function Quote({ text, author }: Props) {
    return (
        <div className="border-2 border-gray-200 rounded bg-gray-100 p-10 pb-0 flex flex-col">
          <blockquote className="block text-xl font-medium flex-1">
            “{text}“
          </blockquote>
          <cite className="block font-bold text-lg not-italic mb-1 py-5">{author}</cite>
      </div>
    )
  }