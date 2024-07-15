/* eslint-disable @typescript-eslint/no-explicit-any */
import { setContext } from '@apollo/client/link/context';
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client/index.js';

export function useClient(token: string) {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client
}

