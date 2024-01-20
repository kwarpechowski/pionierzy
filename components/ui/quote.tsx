
type Props = {
    text: string
    author: string
}

export default function Quote({ text, author }: Props) {
    return (
        <div className="relative border-2 border-gray-200 rounded bg-gray-100">
        <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
        <blockquote className="text-xl font-medium">
          “{text}“
        </blockquote>
        <cite className="block font-bold text-lg not-italic mb-1">{author}</cite>
        </div>
      </div>
    )
  }