import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/src/app/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  
  title: 'Génie Corporation - Bâtiment, Formation & Expertise',
  description: 'Expertise en bâtiment, aménagement, conception architecturale, formation et expertise technique en Côte d\'Ivoire',
  keywords: 'BTP, construction, formation, expertise, Abidjan, Côte d\'Ivoire',
  authors: [{ name: 'Génie Corporation' }],
  openGraph: {
    title: 'Génie Corporation SARL',
    description: 'Votre partenaire en construction et formation',
    images: ['/images/LOGO.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}