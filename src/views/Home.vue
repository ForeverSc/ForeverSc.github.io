<template>
  <div class="home">
    <a :href="url">
      <img class="avatar"
        v-show="showAvatar"
        :src="avatarUrl"
        @load="handleAvatarLoad">
    </a>
    <p class="login">{{ login }}</p>
    <p>in construction ...</p>
    <loading :show="isLoading"></loading>
  </div>
</template>

<script>
import { request } from '../util/graphql'
import Loading from '../components/loading.vue'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data () {
    return {
      avatarUrl: '',
      login: '',
      url: '',
      showAvatar: false,
      isLoading: true
    }
  },
  created () {
    this.query()
  },
  methods: {
    query () {
      request(`{
        viewer {
          avatarUrl,
          login,
          url
        }
      }`).then(res => {
        if (res && res.viewer) {
          const { avatarUrl, login, url } = res.viewer || {}

          this.avatarUrl = avatarUrl
          this.login = login
          this.url = url
        }
      })
    },
    handleAvatarLoad () {
      this.showAvatar = true
    }
  }
}
</script>

<style lang="less">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}
</style>
