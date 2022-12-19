import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:5002/graphql" });

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
