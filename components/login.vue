<template>
  <div id="login">
    <form>
      <label for="email">
        <p>邮箱：</p>
        <input class="input" type="text" id="email" name="email" placeholder="请输入邮箱" v-model="email">
      </label>
      <label for="password">
        <p>密码：</p>
        <input class="input" type="password" id="password" name="password" placeholder="请输入密码" v-model="password">
      </label>
    </form>
    <div class="btn-box">
      <button @click="signin">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // 登录事件
    signin () {
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  margin: 20px 0;
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
}
</style>
