<template>
  <div class="container ">
    <div class="signup">
      <h2>注册</h2>
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
</template>

<script>
export default {
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
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup {
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  form {
    p {
      margin-top: 10px;
    }
    input {
      width: 300px;
      height: 30px;
      outline: none;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    input:focus {
      border: 1px solid #57a3f3;
      box-shadow: 0 0 0 2px rgba(45,140,240,.2);
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
