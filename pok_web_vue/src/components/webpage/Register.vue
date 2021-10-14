<template>
  <div class="register">
    <el-input
      placeholder="请输入用户名6-13位字母或者数字"
      v-model="name"
      name="name"
      clearable
    ></el-input
    ><br /><br />
    <el-input
      placeholder="请输入密码"
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
      placeholder="邮箱"
      v-model="email"
      name="email"
      clearable
    ></el-input>

    <el-button v-on="register()">注册</el-button>
  </div>
</template>

<script>
export default {
  name: "Register.vue",
  data() {
    return {
      name: "",
      password1: "",
      password2: "",
      email: "",
    };
  },
  methods:{
    register(){
      console.log("12344");
    }
  }
};
</script>

<style scoped>
.register {
  width: 200px;
  text-align: center;
  margin: auto;
}
</style>
