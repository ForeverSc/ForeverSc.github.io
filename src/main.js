// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:3020/graphql'
  }),
  connectToDevTools: true
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  template: '<App/>',
  components: { App }
})
