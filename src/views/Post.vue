<template>
  <div class="article">
    <h1 class="title">{{ post.title }}</h1>
    <article class="markdown-body">
      <section v-html="post.bodyHTML">
      </section>
    </article>
  </div>
</template>

<script>
import { request } from '../util/graphql'

export default {
  name: 'Post',
  props: ['number'],
  data () {
    return {
      post: {}
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
            issue(number: ${this.number}) {
              title,
              bodyHTML
            }
          }
        }
      }`).then(res => {
        this.post = res.viewer.repository.issue || []
      })
    }
  }
}
</script>

<style lang="less">
.article {
  .title {
    text-align: center;
  }
  margin: 2rem;
}
</style>
