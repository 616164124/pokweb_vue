<template>
  <div class="login">


    <form>
    <el-input placeholder="请输入内容" v-model="input" name="name" clearable></el-input>
    <el-input placeholder="请输入密码" v-model="input" name="password" show-password></el-input>
    </form>
    <!--    <input class="login-input" type="text" v-model="username" placeholder="请输入账号">-->
    <!--    <input class="login-input" type="password" v-model="password" placeholder="请输入密码">-->
    <!--    <button @click="login()">登录</button>-->
    <!--    <button @click="register()">注册</button>-->
    <!--    <button @click="anniu">按钮</button>-->
    <!--    <button @click="myget">调用封装的方法</button>-->

  </div>
</template>

<script>
import {get} from "../../plugin/axios"
import axios from "axios"
import Home from "./Home";

export default {
  name: "Login",
  components: {Home},
  data() {
    return {
      username: '',
      password: '',
      date: ''
    }
  },

  methods: {
    login() {
      // console.log("login")
      axios.post("http://localhost:4000/pokweb/login", {id: this.username, password: this.password}).then((data) => {
        //data.data.resultObj.token
        if (data.data.resultCode == "200") {
          sessionStorage.setItem("token", this.username + "_" + data.data.resultObj.token);
          this.$router.push("/home")
        } else {
          alert(data.data.resultMsg)
        }

      })
      console.log(this.username)
      console.log(this.password)
    },
    register() {
      //    this.$router.push("/register");
    },
    anniu: function () {
      console.log(this.date);
    },
    myget() {
      get("")
    }


  },
  created: {
    create: function () {
      console.log("created");
      const date = new Date();
      this.date = date.getDay()
    }
  }
}
</script>

<style scoped>

</style>
