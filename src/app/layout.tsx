import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://polkadot.com.br'),
  title: 'Polkadot Brasil - Blockchain Rio 2023',
  description: 'Polkadot Brasil  te leva para a Blockchain Rio 2023',
    openGraph: {
      images: '/opengraph-image.png',
    },
    twitter: {
        images: '/twitter-image.png' ,
    } ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-gradient-to-r from-black via-zinc-800 to-black`}>
      {children}
      </body>
      </html>
  );

}
