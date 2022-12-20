import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero/Hero'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Wildlife</title>
                <meta name="description" content="Wild life portal content" />
            </Head>
            <Hero />
        </div>
    )
}

export default Home
