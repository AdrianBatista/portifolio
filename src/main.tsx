import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError((response) => {
  console.log(response);
});

const providerLink = from([
  errorLink,
  new HttpLink({
    uri: "https://graphql.datocms.com/preview",
    headers: {
      Authorization: "Bearer 1a8946e7c23f40d804f29a817d707e",
    },
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: providerLink,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
