import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const localUri = "http://localhost:5002/graphql";
const remoteUri = "https://nextjs-backend-production.up.railway.app/graphql";

const httpLink = new HttpLink({ uri: remoteUri });

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Animal: {
        keyFields: ["title", "description", "image"],
      },
    },
  }),
});
