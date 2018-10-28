<template>
<section>
  <div class="holder"></div>
  <div class="holder"></div>
  <div class="container ">
    <div class="signin">
      <div class="signin-box">
        <h3>账号登入</h3>
        <form>
          <label for="email">
            <p>邮箱：</p>
            <!-- <span>邮箱：</span> -->
            <input type="text" id="email" name="email" placeholder="请输入邮箱号登录" v-model="email">
          </label>
          <label for="password">
            <p>密码：</p>
            <!-- <span>密码：</span> -->
            <input type="password" id="password" name="password" placeholder="请输入密码" v-model="password">
          </label>
        </form>
        <div class="btn-box">
          <button @click="signin">登录</button><span>还没有账号？<a href="/signin" rel="noopener noreferrer">去注册</a></span>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async signin () {
      let { email, password } = this
      let { data } = await this.$axios.post('/api/signin', { email, password })
      if (data.code === 1000) {
        window.location.href = '/'
      } else {
        alert(data.msg)
      }
    }
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
  background: url('~assets/img/signup-bg.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
}
.signin {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  .signin-box {
    position: absolute;
    right: 0;
    top: 30px;
    background: rgba(255, 255, 255, .9);
    padding: 25px;
    font-size: 14px;
  }
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #3c3c3c;
  }
  form {
    p {
      margin-top: 20px;
      color: #3c3c3c;
    }
    input {
      margin-top: 5px;
    }
  }
  .btn-box {
    margin-top: 20px;
    button {
      background: rgb(3, 127, 223);
      color: #fff;
      outline: none;
      border: none;
      padding: 8px 20px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 3px;
      &:hover {
        background: rgba(3, 127, 223, .7);
      }
    }
    span {
      margin-left: 15px;
      font-size: 14px;
    }
  }
}
</style>
