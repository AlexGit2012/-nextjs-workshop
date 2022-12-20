import { ReactNode } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Head from 'next/head'

type Props = {
    children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Head>
                <meta name="description" content="Wild life contacts" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
