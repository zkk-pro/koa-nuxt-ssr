<template>
  <nav>
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <nuxt-link :to="item.path" :class="{ active: active === index }" @click.native="currentNav(index)">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {name:'精选', path: '/'}, 
        {name:'每日上新', path: '/'}, 
        {name:'人气商品', path: '/'}, 
        {name:'九块九包邮', path: '/'}
      ],
      active: 0,
    }
  },
  methods: {
    currentNav(index) {
      this.active = index
    }
  }
}
</script>

<style lang="less" scoped>
nav {
  background: #444;
  height: 40px;
  font-size: 16px;
  ul {
    width: 1200px;
    margin: 0 auto;
    li {
        float: left;
        width: 120px;
      a {
        display: inline-block;
        height: 100%;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-weight: 400;

        &.active {
          background: #fd8104;
          font-weight: 600;
        }
      }
      &:hover a {
        text-decoration: none;
        border-bottom: 2px solid #fd8104;
        font-weight: 600;
      }
    }
  }
}
</style>

