import './css/style.css'

import { Inter } from 'next/font/google'
import Footer from '../components/ui/footer'
import Header from '../components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
          <main>
            <section className="relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {children}
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
