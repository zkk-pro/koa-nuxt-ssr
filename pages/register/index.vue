<template>
  <div class="register">
    <h2>注册账号</h2>
    <Input type="text" placeholder="用户名（只能是中、英文或数字哦）" :value.sync="username"/>
    <!-- <p style="color:#ccc">只能是中、英文或数字哦</p> -->
    <Input type="text" placeholder="邮箱账号" :value.sync="email" />
    <Input type="password" placeholder="密码" :value.sync="password"/>
    <Input type="password" placeholder="确认密码" :value.sync="repassword" />
    <div class="idCode">
      <Input type="text" placeholder="验证码" :value.sync="idCode" hideClear />
      <span v-html="c" @click="changeCaptcha"></span>
    </div>
    <button class="btn" @click="register">注册</button>
    <div class="have-account">
      <nuxt-link to="/">我已有账号,立即登录</nuxt-link>
    </div>
  </div>
</template>

<script>
import Input from '~/components/input'
export default {
  async asyncData(ctx) {
    const c = await ctx.app.$axios.get('/api/captcha')
    return {c: c.data.data}
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repassword: '',
      idCode: ''
    }
  },
  methods: {
    // 注册按钮事件
    register() {
      let { username, email, password, repassword, idCode } = this
      this.$axios.post('/api/signup', { 
        username, 
        email, 
        password, 
        repassword, 
        idCode 
        }).then(res => {
          if (res.data.code === 1000) {
            window.location.reload()
          } else {
            alert(res.data.msg)
          }
      })
    },
    // 换验证码
    changeCaptcha() {
      this.$axios.get('/api/captcha').then(res => {
        if(res.data.code === 1000) {
          this.c = res.data.data
          // this.$emit('update:captcha', res.data.data)
        } else {
          alert(res.data.msg)
        }
      })
    }
  },
  components: { Input },
}
</script>

<style lang="less" scoped>
.register {
  width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 50px;
  margin-top: 50px;
  .btn {
    display: block;
    width: 120px;
    height: 38PX;
    font-size: 16px;
    font-weight: 700;
    background: #416EAF;
    color: #fff;
    margin: 26px auto 0;
    &:hover {
      background: #5b8bc3;
    }
  }
  .have-account {
    margin-top: 26px;
    text-align: center;
  }
  .idCode {
    display: flex;
    position: relative;
    span {
      margin-left: 16px;
      align-self: flex-end;
    }
  }
}


</style>
