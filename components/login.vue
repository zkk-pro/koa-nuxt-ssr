<template>
  <div id="login">
    <form>
      <label for="email">
        <p>邮箱：</p>
        <input type="text" id="email" name="email" placeholder="请输入邮箱" v-model="email">
      </label>
      <label for="password">
        <p>密码：</p>
        <input type="password" id="password" name="password" placeholder="请输入密码" v-model="password">
      </label>
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
  #login{
    margin:20px 0;
  }
</style>
