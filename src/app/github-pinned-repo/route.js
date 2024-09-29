

import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';
const token = process.env.GITHUB_TOKEN; 

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const query = gql`
  {
    user(login: "Tajbir23") {
      pinnedItems(first: 6, types: REPOSITORY) {
        edges {
          node {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              updatedAt
              createdAt
              openGraphImageUrl
              id
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const data = await graphQLClient.request(query);

    const headers = new Headers();
    headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...headers },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
