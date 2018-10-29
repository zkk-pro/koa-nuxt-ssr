<template>
  <div>
    <Top />
    <nuxt :key="key" />
  </div>
</template>
<script>
import Top from '../components/top'

export default {
  components: { Top },
  // 页面切换时并不会触发vue的created或者mounted钩子，
  // 官方说可以通过watch $route的变化来做处理，但其实说真的还是蛮麻烦的
  // 可以简单的在 router-view上加上一个唯一的key，
  // 来保证路由切换时都会重新渲染触发钩子
  computed: {
    key() {
      return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
 }
}
</script>

<style>

</style>
