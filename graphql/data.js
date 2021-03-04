/**
 * Data
 */

import {
  request,
  GraphQLClient
} from 'graphql-request'

//impo
import query from './query'

// Run GraphQL queries/mutations using a static function
request(endpoint, query).then((data) => console.log(data))

// ... or create a GraphQL client instance to send requests
const client = new GraphQLClient(endpoint, { headers: {} })
client.request(query, variables).then(
  (data) => console.log(data)
)
