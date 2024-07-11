import { setContext } from '@apollo/client/link/context';
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client/index.js';

export function setClient() {
  const httpLink = createHttpLink({
    uri: '/api/graphql', // Теперь ваш endpoint на backend
  });

  const authLink = setContext((_, { headers }) => {

    return {
      headers: {
        ...headers,
        authorization: `Bearer `,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client
}


