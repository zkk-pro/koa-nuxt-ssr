<template>
  <section>
    <div class="container ">
      <div class="signup">
        <div class="signup-box">
          <div class="tap_btn">
            <span :class="active === 'Login' ? 'active' : ''" @click="btnTap(1)">登录</span>
            <span :class="active === 'Register' ? 'active' : ''" @click="btnTap(2)">注册</span>
          </div>
          <component :is="active" :captcha.sync="c"></component>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Login from "~/components/login";
import Register from "~/components/register";
export default {
  async asyncData(ctx) {
    const c = await ctx.app.$axios.get('http://127.0.0.1:3000/api/captcha')
    return {c: c.data}
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repassword: "",
      active: "Login",
      login_or_register: "登录"
    };
  },
  components: {
    Login,
    Register
  },
  methods: {
    async signup() {
    },
    btnTap(index) {
      if (index === 1) {
        this.active = "Login"
        this.login_or_register = "登录"
      } else if (index === 2) {
        this.active = "Register";
        this.login_or_register = "注册";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.holder {
  height: 100px;
  border: 1px solid #1fcb1f;
}
.container {
  width: 100%;
  height: 600px;
  background: url("~assets/img/signup-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
}
.signup {
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  .signup-box {
    display: inline-block;
    background: rgba(255, 255, 255, 0.9);
    padding: 25px;
    position: absolute;
    top: 50px;
    right: 25px;
    .tap_btn {
      font-size: 0;
      span {
        display: inline-block;
        padding: 0 5px 5px;
        cursor: pointer;
        color: #000;
        font-size: 16px;
        &.active {
          border-bottom: 2px solid #f5a23b;
        }
        &:nth-child(1) {
          margin-right: 10px;
        }
      }
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  form {
    p {
      margin-top: 10px;
    }
  }

}
</style>
