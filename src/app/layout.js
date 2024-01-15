import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import '@/assets/css/style.css'
import '@/assets/css/dropdownmenu.css'
import '@/assets/css/sidebar.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewsWebsite',
  description: 'Best Online Newspaper is here bru.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#E60000" height={2} speed={200} />
        {children}
      </body>
    </html>
  )
}
