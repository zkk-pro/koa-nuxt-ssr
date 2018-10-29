<template>
  <section>
    <Header />
    <Nav />
    <section class="container">
      <div class="goods-list">
        <GoodsCard  v-for="item in 10" :key="item"/>
      </div>
    </section>
  </section>
</template>

<script>
import Header from '~/components/header'
import Nav from '~/components/nav'
import GoodsCard from '~/components/goodsCard'

export default {
  async asyncData(ctx) {
    const { data } = await ctx.app.$axios.get('http://127.0.0.1:3000/api/goodsList')
    return { user: data }
  },
  data () {
    return {
      
    }
  },
  components: { Header, Nav, GoodsCard }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
