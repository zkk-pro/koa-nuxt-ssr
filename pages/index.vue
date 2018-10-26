<template>
  <section class="container">
    {{ user}}
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios('http://127.0.0.1:3000/api/main/goodsList')
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
