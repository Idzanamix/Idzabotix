/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { gql } from '@apollo/client/index.js';
import * as Types from '../../types.generated';

import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RepositorysDataByStarsQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type RepositorysDataByStarsQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', repositoryCount: number, nodes?: Array<{ __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository', name: string, stargazerCount: number, updatedAt: any, url: any, id: string } | { __typename?: 'User' } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };


export const RepositorysDataByStarsDocument = gql`
    query repositorysDataByStars($query: String!, $after: String, $before: String) {
  search(
    query: $query
    type: REPOSITORY
    first: 10
    after: $after
    before: $before
  ) {
    nodes {
      ... on Repository {
        name
        stargazerCount
        updatedAt
        url
        id
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    repositoryCount
  }
}
    `;

/**
 * __useRepositorysDataByStarsQuery__
 *
 * To run a query within a React component, call `useRepositorysDataByStarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepositorysDataByStarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepositorysDataByStarsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useRepositorysDataByStarsQuery(baseOptions: Apollo.QueryHookOptions<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables> & ({ variables: RepositorysDataByStarsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables>(RepositorysDataByStarsDocument, options);
      }
export function useRepositorysDataByStarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables>(RepositorysDataByStarsDocument, options);
        }
export function useRepositorysDataByStarsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables>(RepositorysDataByStarsDocument, options);
        }
export type RepositorysDataByStarsQueryHookResult = ReturnType<typeof useRepositorysDataByStarsQuery>;
export type RepositorysDataByStarsLazyQueryHookResult = ReturnType<typeof useRepositorysDataByStarsLazyQuery>;
export type RepositorysDataByStarsSuspenseQueryHookResult = ReturnType<typeof useRepositorysDataByStarsSuspenseQuery>;
export type RepositorysDataByStarsQueryResult = Apollo.QueryResult<RepositorysDataByStarsQuery, RepositorysDataByStarsQueryVariables>;
