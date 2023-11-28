import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import type { Metadata } from 'next'

import StoreProvider from '@/store/StoreProvider'

import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Namaz Tracker',
  description: 'This app is use to keep track record of your namaz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastContainer />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
