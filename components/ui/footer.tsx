

import Link from "next/link";

export default function Footer() {
  return (
    <>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-900 pointer-events-none"/>
      <div className="relative max-w-6xl mx-auto p-10">
        <div className="grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 dark:text-white">
          <div>
            <h2 className="text-2xl font-bold">
                Nieprzegap aktualności
            </h2>
            <h3 className="text-xl">
                Zasubskrybuj nasz newsletter
            </h3>
          </div>
          <div className="flex items-center">
              <form className="flex flex-1">
                <input type="text"  className="bg-gray-700 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Twój adres" required />
                <button type="submit" className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg ml-5">Wyślij</button>
              </form>
            </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              linki
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

        

          <div className="sm:col-span-6 md:col-span-3 lg:col-span3">
            <h6 className="text-gray-800 font-medium mb-2">Dla dzieci i młodziezy</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Link</Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Podstawowe</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Link</Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Zawodowe</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Link</Link>
              </li>
            </ul>
          </div>


         
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Pionierzy Przyszłości</div>

        </div>

      </div>
    </footer>
    </>
  )
}