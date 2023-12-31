import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Search from "./Search/page";
import {Navbar} from "./components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The movie DB',
  description: 'Web app para assistir filme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        
      <Navbar/>

        {children}
      </body>
   
    </html>
  )
}
