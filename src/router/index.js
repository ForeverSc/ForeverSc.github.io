import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    title: 'Home',
    component: Home
  }, {
    path: '/posts',
    title: 'posts',
    component: Posts
  }, {
    path: '/posts/:number',
    title: '',
    component: Post,
    props: true
  }]
})
