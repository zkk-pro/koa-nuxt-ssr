<template>
  <div class="top">
    <div class="container top-box">
      <div class="top-left">正品好货 | 人工精选 | 内部领券 | 全场包邮，尽在大有折扣网🚀</div>
      <div class="top-right">
        <nuxt-link :to="{path: '/login', query: {mark: 'Login'}}">亲，请登录</nuxt-link>
        <span>或</span>
        <nuxt-link :to="{path: '/login', query: {mark: 'Register'}}">免费注册</nuxt-link>
        <nuxt-link to="/" class="left-spance">联系我们</nuxt-link>
        <nuxt-link to="/" class="left-spance">商家合作</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.top {
  background: #f0f0f0;
  .top-box {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    .top-right {
      & a:nth-child(1) {
        color: #ff0235;
      }
      span {
        margin: 0 2px;
      }
      .left-spance {
        margin-left: 15px;
      }
    }
  }
}
</style>
