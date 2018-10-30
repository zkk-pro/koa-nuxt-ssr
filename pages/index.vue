<template>
  <section>
    <Header />
    <Nav />
    <section class="container">
      <div class="banner-box">
        <Banner></Banner>

      </div>
      <div class="goods-box">
        <h2 class="classify">/ 精选好货 /</h2>
        <div class="goods-list">
          <GoodsCard  v-for="item in 40" :key="item"/>
        </div>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :page-size=40
          :total="1000"
        ></el-pagination>
      </div>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from '~/components/header'
import Nav from '~/components/nav'
import GoodsCard from '~/components/goodsCard'
import Footer from '~/components/footer'
import Banner from '~/components/banner'

export default {
  async asyncData(ctx) {
    const { data } = await ctx.app.$axios.get('http://127.0.0.1:3000/api/goodsList')
    return { user: data }
  },
  data () {
    return {
      
    }
  },
  components: { Header, Nav, GoodsCard, Footer, Banner }
}
</script>

<style lang="less" scoped>
.goods-box {
  background: #fff;
  margin-top: 20px;
  h2 {
    display: inline-block;
    border-bottom: 2px solid #ff464e;
    margin: 10px;
  }
}
.classify {
  // margin-top: 20px;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
}
.page {
  text-align: center;
  margin: 20px 0;
  padding: 8px 0;
  background: #fff;
}

</style>
