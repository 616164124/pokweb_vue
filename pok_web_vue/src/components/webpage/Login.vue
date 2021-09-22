<template>
  <div class="vue-login">
    <div>
      <el-radio v-model="radio" label="lsyh">临时用户</el-radio>
      <el-radio v-model="radio" label="xs">学生</el-radio>
      <el-radio v-model="radio" label="gzry">工作人员</el-radio>
      <el-radio v-model="radio" label="admin">admin</el-radio>
    </div>
    <el-input placeholder="请输入用户名" v-model="name" name="name" clearable></el-input>
    <el-input placeholder="请输入密码" v-model="password" name="password" show-password></el-input>
    <el-button type="primary" @click="login()" style="font-size: 20px">登录</el-button>
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
      radio: "lsyh",
      name: '',
      password: '',
      date: ''
    }
  },

  methods: {
    login() {
      //判断是否有非法字符


      // console.log("login")
      axios.post("http://localhost:4000/pokweb/login", {name: this.username, password: this.password,radio:this.radio}).then((data) => {
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

<style>
button {
  margin-top: 10px;
}

.vue-login {
  margin-top: 20px;
  text-align: center;
}

.el-input__inner {
  width: 40%;
}

.el-input {
  margin-top: 10px;
}
.el-button{
  margin-top: 10px;
}
</style>
