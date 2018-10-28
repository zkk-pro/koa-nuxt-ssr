<template>
  <div id="register">
    <form>
      <label for="username">
        <!-- <p>用户名：</p> -->
        <input class="input" type="text" id="username" name="username" placeholder="请输入用户名" v-model="username">
      </label>
      <label for="email">
        <!-- <p>邮箱：</p> -->
        <input class="input" type="text" id="email" name="email" placeholder="请输入邮箱" v-model="email">
      </label>
      <label for="password">
        <!-- <p>密码：</p> -->
        <input class="input" type="password" id="password" name="password" placeholder="请输入密码" v-model="password">
      </label>
      <label for="repassword">
        <!-- <p>确认密码：</p> -->
        <input class="input" type="password" id="repassword" name="repassword" placeholder="请再次输入密码" v-model="repassword">
      </label>
      <label for="idCode">
        <!-- <p>验证码：</p> -->
        <div class="vcode">
          <input class="input" type="text" id="idCode" name="idCode" placeholder="请输入右侧验证码" v-model="idCode">
          <span @click="changeCaptcha" v-html="captcha"></span>
        </div>
      </label>
    </form>
    <div class="btn-box">
      <button @click="register">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "regiter",
  props: {
    captcha: {
      type: String
    }
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repassword: "",
      idCode: ""
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
          this.$emit('update:captcha', res.data)
        } else {
          alert(res.data.msg)
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
#register {
  margin: 20px 0;
}
form {
  width: 100%;
}
p {
  display: inline-block;
  width: 80px;
  margin-right: 10px;
}
.vcode {
  position: relative;
  #idCode {
    width: 65%;
  }
  span {
    position: absolute;
    top: 10px;
    right: 0;
    height: 38px;
  }
}
.btn-box {
  margin-top: 20px;
  button {
    background: #2185d0;
    color: #fff;
    height: 38px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>


