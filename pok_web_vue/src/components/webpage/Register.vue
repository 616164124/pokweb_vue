<template>
  <div class="register">
    <el-input
      placeholder="请输入用户名（6-13位字母或者数字）"
      v-model="name"
      name="name"
      clearable
    ></el-input
    ><br /><br />
    <el-input
      placeholder="请输入密码(6-13位字母或者数字)"
      v-model="password1"
      name="password1"
      show-password
    ></el-input
    ><br /><br />
    <el-input
      placeholder="确认密码"
      v-model="password2"
      name="password2"
      show-password
    ></el-input
    ><br /><br />
    <el-input
      placeholder="电子邮箱（例如：123@qq.com）"
      v-model="email"
      name="email"
      clearable
    ></el-input
    ><br /><br />

    <el-button @click="open()">注册</el-button>
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
      password1: "",
      password2: "",
      email: "123@qq.com",
      yzm: "",//用户输入的验证码
    };
  },
  methods: {
    //  验证验证码成功后，注册成功后  ， 跳转到登录页面
    register() {
      console.log(this.yzm);
      axios("post", URLData.register, {
        name: this.name,
        password1: this.password1,
        password2: this.password2,
        email: this.email,
        yzm: this.yzm,
      }).then((res) => {
        console.log(res);
      });
    },

    //
    open() {
      //发送验证码邮件
      axios("post", URLData.Verification, {
        email: this.email,
      }).then((res) => {
        console.log("");

        this.$prompt("请输入邮件中的6位验证码(3分钟内有效)", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        })
          .then(({ value }) => {
            this.yzm = value;
          })
          .then(() => {
            this.register();
          });
      });
    },
  },
};
</script>

<style scoped>
.register {
  width: 300px;
  text-align: center;
  margin: auto;
}
</style>
