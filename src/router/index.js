import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    title: 'Home',
    component: Home
  }, {
    path: '/posts',
    title: 'posts',
    component: Posts
  }]
})
