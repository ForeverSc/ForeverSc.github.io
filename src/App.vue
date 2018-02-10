<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
html, body, #app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>