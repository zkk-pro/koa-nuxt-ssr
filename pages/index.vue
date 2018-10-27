<template>
  <section class="container">
    {{ user}}
    <a href="/signup">去注册</a>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  async asyncData(ctx) {
    const { data } = await ctx.app.$axios('http://127.0.0.1:3000/api/goodsList')
    return { user: data }
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
