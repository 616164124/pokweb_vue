<template>
  <el-container>
<!--    <el-aside width="200px" hight="100%">Aside</el-aside>-->
    <el-container>
      <el-header>
        欢迎！！！
      </el-header>
      <el-main >
      <div class="login">
        <Login/>
      </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Login from "./webpage/Login";
export default {
  name: 'HelloWorld',
  components:{Login},
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 'A',//selectѡ�е�ֵ
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ]
    }
  },
  methods:{
    jump(){
      this.$router.push("/login")
    }
  },
  created: {
    test: function () {
      console.log("123");
    }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lange="less" scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.login{
  float: left;
  text-align: left;
  relative:top;

}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 700px;

}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 560px;

}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
