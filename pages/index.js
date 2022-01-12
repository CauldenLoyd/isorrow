import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caulden Loyd!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming Soon" />
        <p className="description">
          Caulden's Portfolio
        </p>
      </main>

      <Footer />
    </div>
  )
}
