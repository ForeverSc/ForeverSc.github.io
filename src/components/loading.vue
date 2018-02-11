<template>
  <div class="loading" v-if="show">
    <span class="wait">loading...</span>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #fff;
  .wait {
    animation: blink 0.9s step-end infinite;
  }
  @keyframes blink {
    50% {
      box-shadow: 4px 0 #000;
    }
  }
}
</style>
