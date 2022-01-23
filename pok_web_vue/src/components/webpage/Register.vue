<template>
  <div class="register">
    <el-input
      placeholder="电子邮箱（例如：123@vt.com）"
      v-model="username"
      name="username"
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
      v-model="yzm"
      name="yzm"
    ></el-input
    >
    <br/><br/>
    <el-button @click="register()">注册</el-button>
    <el-button @click="getVerification()">获取验证码</el-button>
    <el-button @click="openmsg()">测试</el-button>

  </div>
</template>

<script>
import sha256 from "js-sha256"
import axios from "../../plugin/axios";
import URLData from "../../plugin/UrlData";

export default {
  name: "Register.vue",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      email: "",
      yzm: "",//用户输入的验证码
    };
  },

  methods: {
    // sha256加密密码
    setSha(value) {
      let sha256 = require("js-sha256").sha256//这里用的是require方法，所以没用import
      return sha256(value) + "";

    },
    openmsg(msg) {
      this.$alert(msg, '消息', {
        confirmButtonText: '确定',
      });
    },

    //  验证验证码成功后，注册成功后  ， 跳转到登录页面
    register() {
      if(this.setSha(this.password) != this.setSha(this.password2)){
        this.openmsg("2次密码不同")
        return;
      }
     var password=  this.setSha(this.password)
      axios("post", URLData.register, {
        username: this.username,
        password: password,
        email: this.email,
        yzm: this.yzm,
      }).then((res) => {
        this.openmsg("注册成功")
      });
    },


    //
    getVerification() {
      if (this.username.split("@")[0].length <5) {
        this.openmsg("邮箱名太短")
        return;
      }

      if(this.setSha(this.password) != this.setSha(this.password2)){
        this.openmsg("2次密码不同")
        return;
      }
      //发送验证码邮件
      axios("post", URLData.Verification, {
        username: this.username,
      }).then((res) => {
        this.openmsg("已发送验证码，3分钟内有效")
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
