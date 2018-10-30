<template>
  <div class="banner">
    <div class="left-nav">
      <LeftNav></LeftNav>
    </div>
    <div class="slideshow">
      <el-carousel :interval="4000" arrow="always" trigger="click"  height="290px">
        <el-carousel-item v-for="item in 6" :key="item">
          <img src="~/assets/img/lb2.jpg" alt="" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import LeftNav from '~/components/leftNav'

export default {
  components: { LeftNav }
}
</script>

<style lang="less" scoped>
.banner {
  height: 300px;
  display: flex;
  justify-content: space-between;
  .left-nav {
    width: 200px;
    margin-right: 10px;
    height: 100%;
    background: #ccc;
  }
  .slideshow {
    flex-grow: 1;
    margin-top: 10px;
  }
}
</style>

