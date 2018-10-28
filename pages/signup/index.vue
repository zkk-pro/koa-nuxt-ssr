<template>
<section>
  <div class="holder"></div>
  <div class="holder"></div>
  <div class="container ">
    <div class="signup">
      <div class="signup-box">
        <h2>账号注册</h2>
        <form>
          <label for="username">
            <p>用户名：</p>
            <input type="text" id="username" name="username" placeholder="请输入用户名" v-model="username">
          </label>
          <label for="email">
            <p>邮箱：</p>
            <input type="text" id="email" name="email" placeholder="请输入邮箱" v-model="email">
          </label>
          <label for="password">
            <p>密码：</p>
            <input type="password" id="password" name="password" placeholder="请输入密码" v-model="password">
          </label>
          <label for="repassword">
            <p>再次输入密码：</p>
            <input type="password" id="repassword" name="repassword" placeholder="确认密码" v-model="repassword">
          </label>
        </form>
        <div class="btn-box">
          <button @click="signup">注册</button>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  async asyncData(ctx) {
  },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    async signup () {
      let { username, email, password, repassword } = this
      let { data } = await this.$axios.post('/api/signup', { username, email, password, repassword })
      if (data.code === 1000) {
        window.location.href = '/signin'
      } else {
        alert(data.msg)
      }
    },
  }
}
</script>

<style lang="less" scoped>
.holder {
  height:100px; 
  border: 1px solid #1fcb1f;
}
.container {
  width: 100%;
  height: 500px;
  // background: url('~assets/img/signup-bg.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
}
.signup {
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  .signup-box {
    display: inline-block;
    background: rgba(255, 255, 255, .9);
    padding: 25px;
  }
  h2 {
    margin-bottom: 10px;
  }
  form {
    p {
      margin-top: 10px;
    }
  }
  .btn-box {
    margin-top: 20px;
    button {
      background: #2185D0;
      color: #fff;
      outline: none;
      border: none;
      padding: 5px 10px;
    }
  }
}
</style>
