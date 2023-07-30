import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className={`bg-grey min-h-screen min-w-screen overflow-x-hidden flex flex-col ${inter.className}`}>
      <Head>
        <title>Tealfeed x Palak Jain</title>
        <meta name="description" content="Tealfeed x Palak Jain" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta property="og:title" content="Tealfeed x Palak Jain" />
        <meta property="og:description" content="Tealfeed x Palak Jain" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://tealfeed-x-palak.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      { children } 
    </div>
  )
}