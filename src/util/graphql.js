import { GraphQLClient } from 'graphql-request'
import config from '../config'

const URL = 'https://api.github.com/graphql'
const token = config.readOnlyToken.replace('#', '')
const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export function request (query) {
  return client.request(query)
}
