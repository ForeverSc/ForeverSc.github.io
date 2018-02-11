<template>
  <div>
    <ul>
      <li
        v-for="(post, index) in posts"
        :key="index">
        {{ post.node.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { request } from '../util/graphql'

export default {
  name: 'Posts',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.query()
  },
  methods: {
    query () {
      const login = localStorage.getItem('login')

      request(`{
        viewer {
          repository(name: "${login}.github.io") {
            issues(last: 10, states: OPEN) {
              edges {
                node {
                  title,
                  author {
                    avatarUrl
                    login
                    resourcePath
                    url
                  },
                  bodyHTML
                }
              }
            }
          }
        }
      }`).then(res => {
        this.posts = res.viewer.repository.issues.edges || []
      })
    }

  }
}
</script>

<style>

</style>
