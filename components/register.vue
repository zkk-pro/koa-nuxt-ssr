<template>
  <div id="register">
    <form>
      <label for="username">
        <!-- <p>用户名：</p> -->
        <input type="text" id="username" name="username" placeholder="请输入用户名" v-model="username">
      </label>
      <label for="email">
        <!-- <p>邮箱：</p> -->
        <input type="text" id="email" name="email" placeholder="请输入邮箱" v-model="email">
      </label>
      <label for="password">
        <!-- <p>密码：</p> -->
        <input type="password" id="password" name="password" placeholder="请输入密码" v-model="password">
      </label>
      <label for="repassword">
        <!-- <p>确认密码：</p> -->
        <input type="password" id="repassword" name="repassword" placeholder="确认密码" v-model="repassword">
      </label>
      <label for="idCode">
        <!-- <p>验证码：</p> -->
        <div class="vcode"><input type="text" id="idCode" name="idCode" placeholder="验证码" v-model="idCode"><span></span></div>
      </label>
    </form>
  </div>
</template>
<script>
export default {
    name: "regiter",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            repassword: "",
            idCode: ""
        };
    },
    methods: {}
};
</script>
<style lang="less" scoped>
#register {
    margin: 20px 0;
}
form{
  width:100%;
}
p {
    display: inline-block;
    width: 80px;
    margin-right: 10px;
}

.vcode {
    position: relative;
    #idCode {
        width: 60%;
        & + span {
            display: block;
            position: absolute;
            top: 10px;
            right: 0;
            width: 40%;
            height: 38px;
            background: red;
        }
    }
}
</style>


