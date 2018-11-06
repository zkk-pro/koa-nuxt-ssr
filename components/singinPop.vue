<template>
  <div class="sigin" v-show="showSignin">
    <div class="sigin-container">
      <h2>登录</h2>
      <i class="iconfont icon-pc-qingchu close-btn" @click="close"></i>
      <Input type="text" placeholder="邮箱账号" :value.sync="email" />
      <Input type="password" placeholder="密码" :value.sync="password"/>
      <div class="forget">
        <nuxt-link to="/">忘了密码？</nuxt-link>
      </div>
      <button class="btn" @click="signin">登录</button>
      <div class="link-center">
        <nuxt-link to="/register" @click.native="close">还没账号？立即注册</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '~/components/input'
export default {
  props: {
    showSignin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    close() {
      this.$emit('update:showSignin', false)
    },
    signin() {

    }
  },
  components: {Input}
}
</script>

<style lang="less" scoped>

.sigin {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .sigin-container {
    background: #fff;
    width: 400px;
    padding: 30px;
    position: relative;
    border-radius: 8px;
    h2 {
      display: inline-block;
      line-height: 48px;
      border-bottom: 1px solid #333;
    }
    .forget {
      text-align: right;
      margin-top: 8px;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      opacity: .3;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 38PX;
      line-height: 38px;
      font-size: 16px;
      font-weight: 700;
      background: #416EAF;
      color: #fff;
      margin: 26px auto 0;
      &:hover {
        background: #5b8bc3;
      }
    }
  }
}
</style>


