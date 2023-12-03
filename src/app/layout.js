import { Nunito } from 'next/font/google'
import '../styles/globals.css'
import Nav from '../components/Nav.jsx'
import { Toaster } from 'react-hot-toast'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Anuvrat Digital Detox',
  description: 'Prag-man',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <Nav />
        {children}
      </body>
    </html>
  )
}
