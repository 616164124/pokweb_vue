<template>
  <div class="vue-login">
    <div style="">
      <!-- <el-radio v-model="radio" label="lsyh">临时用户</el-radio>
      <el-radio v-model="radio" label="xs">学生</el-radio>
      <el-radio v-model="radio" label="gzry">工作人员</el-radio>
      <el-radio v-model="radio" label="admin">admin</el-radio> -->
    </div>
    <div class="vue-login1" style="text-align: center; margin: auto;width: 200px">
      <el-input placeholder="请输入邮箱" v-model="name" name="name" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="password" type="password" show-password></el-input>

      <el-input placeholder="请输入邮箱的验证码" v-model="verify" name="verify" clearable
                style="width: 200px; float: left"></el-input>
      <el-button @click="getVerify()" style="    width: 150px;
    padding: 0px;">发送验证码
      </el-button>
      &nbsp;&nbsp;<span style="width:60px;height:50px;background-color: burlywood;FONT-SIZE: xxx-large;"></span>
      <br/>
      <br/>
      <div>
        <el-button type="primary" @click="login()" style="font-size: 20px">登录</el-button>
        <el-button type="primary" @click="register()" style="font-size: 20px">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import sha256 from "js-sha256"
import axios from "../../plugin/axios"
import Home from "./Home";
import URLData from "../../plugin/UrlData";

export default {
  name: "Login",
  components: {Home},
  data() {
    return {
      radio: "xs",//默认为学生
      name: '',
      password: '',
      date: '',
      verify: "",
      verifycode: ""
    }
  },
  methods: {
    // sha256加密密码
    setSha(value) {
      let sha256 = require("js-sha256").sha256//这里用的是require方法，所以没用import
      return sha256(value) + "";

    },
    login() {
      axios("post", URLData.login, {
        username: this.name,
        password: this.setSha(this.password),
        verify: this.verify
      }).then((data) => {
        // console.log(data)
        if (data.data.resultCode == "000000") {
          // console.log(data.data.resultObj.user)
          sessionStorage.setItem("token", data.data.resultObj);
          sessionStorage.setItem("user", "john");
          this.$router.push("/home")
        } else if (data.data.resultCode == "888888") {
          alert(data.data.resultMsg)
        }
      })
    },
    //只注册成为临时用户
    register() {
      this.$router.push("/register");
    },
    anniu: function () {
      console.log(this.date);
    },
    getVerify() {
      if (this.name == "") {
        this.$alert("不能为空")
        return;
      }
      //发送验证码邮件
      axios("post", URLData.Verification, {
        username: this.name,
      }).then((res) => {

      });
    },

    test() {
      axios1("post", URLData.login, {
        h: 123,
        uuu: "1234"
      }).then((res) => {
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


.verify {
  width: 100px;
  height: 50px;
}

.el-input {
  margin-top: 10px;
}

.el-button {
  margin-top: 10px !important;
}
</style>
