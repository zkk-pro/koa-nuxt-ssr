<template>
  <section>
    <div class="container ">
      <div class="signup">
        <div class="signup-box">
          <div class="tap_btn">
            <span :class="active === 'Login' ? 'active' : ''" @click="btnTap(1)">登录</span><span :class="active === 'Register' ? 'active' : ''" @click="btnTap(2)">注册</span>
          </div>
          <!-- <Login></Login> -->
          <component :is="active"></component>
          <div class="btn-box">
            <button @click="signup" v-text="login_or_register"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Login from "~/components/login";
import Register from "~/components/register";
export default {
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
            let { username, email, password, repassword } = this;
            let { data } = await this.$axios.post("/api/signup", {
                username,
                email,
                password,
                repassword
            });
            if (data.code === 1000) {
                alert(data.msg);
                setTimeout(() => {
                    window.location.href = "/signin";
                }, 1500);
            } else {
                alert(data.msg);
            }
        },
        btnTap(index) {
            if (index === 1) {
                (this.active = "Login"), (this.login_or_register = "登录");
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 500px;
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
    // display: flex;
    // justify-content: flex-end;
    // align-items: center;
    .signup-box {
        display: inline-block;
        background: rgba(255, 255, 255, 0.9);
        padding: 25px;
        position: absolute;
        top: 20px;
        right: 0;
        .tap_btn {
            span {
                display: inline-block;
                padding: 5px 10px;
                cursor: pointer;
                color: #000;
                font-size: 16px;
                &.active {
                    border-bottom: 2px solid #f22;
                }
                &:nth-child(1) {
                    margin-right: 20px;
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
