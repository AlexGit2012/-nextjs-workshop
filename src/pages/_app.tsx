import type { AppProps } from "next/app";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import "../styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ApolloProvider>
  );
}

export default MyApp;
