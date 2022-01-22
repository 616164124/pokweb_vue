<template>
  <div class="register">
    <el-input
      placeholder="电子邮箱（例如：123@vt.com）"
      v-model="email"
      name="email"
      clearable
    ></el-input
    >
    <br/><br/>
    <el-input
      placeholder="请输入密码(6-13位字母或者数字)"
      v-model="password"
      name="password1"
      show-password
    ></el-input
    >
    <br/><br/>
    <el-input
      placeholder="确认密码"
      v-model="password2"
      name="password2"
      show-password
    ></el-input
    >
    <br/><br/>
    <el-input
      placeholder="输入邮箱中的验证码"
      v-model="password2"
      name="password2"
      show-password
    ></el-input
    >
    <br/><br/>
    <el-button @click="register()">注册</el-button>
    <el-button @click="getVerification()">获取验证码</el-button>
  </div>
</template>

<script>
import axios from "../../plugin/axios";
import URLData from "../../plugin/UrlData";

export default {
  name: "Register.vue",
  data() {
    return {
      name: "",
      password: "",
      password2: "",
      email: "",
      yzm: "",//用户输入的验证码
    };
  },
  methods: {
    //  验证验证码成功后，注册成功后  ， 跳转到登录页面
    register() {

      console.log(this.yzm);
      axios("post", URLData.register, {
        name: this.name,
        password: this.password,
        password2: this.password2,
        email: this.email,
        yzm: this.yzm,
      }).then((res) => {
        open("注册成功")
      });
    },
    open(msg) {
      this.$alert(msg, {
        confirmButtonText: '确定',
      });
    },


    //
    getVerification() {

      if (this.name.split("@")[0].length < 7) {
        open("邮箱名太短")
      }

      if (this.password != this.password2) {
        open("2次密码输入不一致！")
        return;
      }
      //发送验证码邮件
      axios("post", URLData.Verification, {
        email: this.email,
      }).then((res) => {
        open("已发送验证码，3分钟内有效")
      });
    },
  },
}
;
</script>

<style scoped>
.register {
  width: 300px;
  text-align: center;
  margin: auto;
}
</style>
