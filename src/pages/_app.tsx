import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import '../styles/global.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../apollo-client/apollo-client'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <ApolloProvider client={client}>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </ApolloProvider>
        </SessionProvider>
    )
}

export default MyApp
