import { GraphQLClient } from 'graphql-request'
import config from '../config'

const URL = 'https://api.github.com/graphql'
const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${config.readOnlyToken}`
  }
})

export function request (query) {
  return client.request(query)
}
