import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IPC Shalom Assembly - Making Jesus Known to Everyone, Everywhere',
  description: 'Welcome to IPC Shalom Assembly. Everyone is welcome. Everyone has a next best step. Everyone can make a difference. Join us in following Jesus.',
  keywords: ['IPC Shalom Assembly', 'Church', 'Christian', 'Community', 'Worship', 'Jesus', 'Faith'],
  authors: [{ name: 'IPC Shalom Assembly' }],
  openGraph: {
    title: 'IPC Shalom Assembly - Making Jesus Known to Everyone, Everywhere',
    description: 'A diverse church learning to follow Jesus in the 21st century.',
    type: 'website',
    locale: 'en_US',
    siteName: 'IPC Shalom Assembly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPC Shalom Assembly',
    description: 'Making Jesus Known to Everyone, Everywhere',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
