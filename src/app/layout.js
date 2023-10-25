import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anuvrat Digital Detox',
  description: 'Prag-man',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
