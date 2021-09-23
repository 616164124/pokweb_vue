<template>
  <div class="vue-login">
    <div>
      <el-radio v-model="radio" label="lsyh">临时用户</el-radio>
      <el-radio v-model="radio" label="xs">学生</el-radio>
      <el-radio v-model="radio" label="gzry">工作人员</el-radio>
      <el-radio v-model="radio" label="admin">admin</el-radio>
    </div>
    <div class="vue-login1">
      <el-input placeholder="请输入用户名" v-model="name" name="name" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="password" name="password" show-password></el-input>
      <el-button type="primary" @click="login()" style="font-size: 20px">登录</el-button>
    </div>
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
      // console.log("login")
      axios.post("http://localhost:4000/pokweb/login", {
        name: this.name,
        password: this.password,
        radio: this.radio
      }).then((data) => {
        //data.data.resultObj.token
        if (data.data.resultCode == "200") {
          sessionStorage.setItem("token", this.name + "_" + data.data.resultObj.token);
          sessionStorage.setItem("user", JSON.parse(data.data.resultObj.user));
          this.$router.push("/home")
        } else if (data.data.resultCode == "888888") {
          alert(data.data.resultMsg)
        }

      })

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

.login-input {
  margin: 0 0 0 0;
}


.vue-login {
  margin-top: 20px;
  text-align: center;
}


.el-input__inner {
  width: 40% !important;
}

.el-input {
  margin-top: 10px;
}

.el-button {
  margin-top: 10px !important;
}
</style>
