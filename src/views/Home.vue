<template>
  <div class="home">
    <a :href="url">
      <img class="avatar"
        v-show="showAvatar"
        :src="avatarUrl"
        @load="handleAvatarLoad">
    </a>
    <p class="login">{{ login }}</p>
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
      isLoading: false
    }
  },
  created () {
    this.query()
  },
  methods: {
    query () {
      this.isLoading = true
      request(`{
        viewer {
          avatarUrl,
          login,
          url
        }
      }`).then(res => {
        this.isLoading = false
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
@import '../assets/less/animate.less';

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .avatar {
    width: 10rem;
    height: 10rem;
    border-radius: 10rem;
    animation: fadeInDown .9s ease-in-out;
  }
  .login {
    animation: fadeInUp .9s ease-in-out;
    &:hover {
      cursor: pointer;
      &::before {
        padding-right: 2px;
        content: '{'
      }
      &::after {
        padding-left: 2px;
        content: '}'
      }
    }
  }
}
</style>
