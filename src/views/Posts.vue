<template>
  <div class="posts">
    <ul class="list">
      <li class="title"
        v-for="(post, index) in posts"
        :key="index">
        <router-link :to="`/posts/${post.number}`">
        {{ post.title }}
        </router-link>
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
              nodes {
                title,
                number
              }
            }
          }
        }
      }`).then(res => {
        this.posts = res.viewer.repository.issues.nodes || []
      })
    }

  }
}
</script>

<style lang="less">
.posts {
  display: flex;
  justify-content: center;
  .list {
    padding: 0;
    margin: 6rem 0;
    font-size: 2rem;
  }
}
</style>
