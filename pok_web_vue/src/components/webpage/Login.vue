<template>
  <div class="vue-login">
    <div>
      <el-radio v-model="radio" label="lsyh">临时用户</el-radio>
      <el-radio v-model="radio" label="xs">学生</el-radio>
      <el-radio v-model="radio" label="gzry">工作人员</el-radio>
      <el-radio v-model="radio" label="admin">admin</el-radio>
    </div>
    <div class="vue-login1" style="margin: 10px 60% 10% 42%; text-align: center; width: 200px">
      <el-input placeholder="请输入用户名" v-model="name" name="name" clearable ></el-input>
      <el-input placeholder="请输入密码" v-model="password" type="password" show-password></el-input>
      <el-button type="primary" @click="login()" style="font-size: 20px">登录</el-button>
    </div>

  </div>
</template>

<script>
import axios1 from "../../plugin/axios"
import axios from "axios"
import Home from "./Home";
import URLData from "../../plugin/UrlData"

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
      axios.post(URLData.baseurl+URLData.login, {
        name: this.name,
        password: this.password,
        radio: this.radio
      }).then((data) => {
        //data.data.resultObj.token
        if (data.data.resultCode == "200") {
          // console.log(data.data.resultObj.user)
          sessionStorage.setItem("token",data.data.resultObj.token);
          sessionStorage.setItem("user",JSON.stringify(data.data.resultObj.user));
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

    },
    test(){
      axios1("post",URLData.login,{
        h:123,
        uuu:"1234"
      }).then((res)=>{
        console.log(res);
      })
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

.el-input {
  margin-top: 10px;
}

.el-button {
  margin-top: 10px !important;
}
</style>
