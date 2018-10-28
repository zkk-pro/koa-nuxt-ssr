<template>
  <section class="">
    <Header />
    <Nav />
  </section>
</template>

<script>
import Header from '../components/header'
import Nav from '../components/nav'
export default {
  async asyncData(ctx) {
    const { data } = await ctx.app.$axios.get('http://127.0.0.1:3000/api/goodsList')
    return { user: data }
  },
  data () {
    return {
      
    }
  },
  components: { Header, Nav }
}
</script>

<style lang="less" scoped>

</style>
