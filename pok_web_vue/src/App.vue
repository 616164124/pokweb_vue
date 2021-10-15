<template>
  <div id="app">
    <div id="date">
      {{ date }}
    </div>
    <router-view />
  </div>
</template>

<script>
import URLData from "../src/plugin/UrlData"
export default {
  name: "App",
  data() {
    return {
      date: "",
    };
  },
  methods: {
   
  },
  created() {
  
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
      _this.date = this.date =
        new Date().getFullYear() +
        "年" +
        (new Date().getUTCMonth() + 1) +
        "月" +
        new Date().getDate() +
        "日" +
        new Date().getHours() +
        "时" +
        new Date().getMinutes() +
        "分" +
        new Date().getSeconds() +
        "秒";
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },

 

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0c0c;
  margin-top: 60px;
}
#date {
  margin-bottom: 20px;
}
</style>
