import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const link = new HttpLink({
  uri: "https://api.graphql.jobs/"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
