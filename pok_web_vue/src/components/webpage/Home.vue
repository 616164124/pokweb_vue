<template>
  <div class="home">
    <div  class="name">
      用户ID: <User/>
    </div>
    <br/>
    <br/>
    <br/>
    <div  v-for="(item ,i) in data">
      <el-button  @click="menu(item.menu_url)">{{ item.menu_name }}</el-button>
      <p></p>
    </div>
  </div>
</template>

<script>
import Url from "../../url"
import axios from "axios";
import User from "./User";
export default {
  name: "Home",
  components: {User},
  data() {
    return {
      userId: '',
      items: ["qeq", "qeqe"],
      data: {}
    }
  },
  created() {

    console.log("home.vue")
    var data = new Date();
    this.data = data.getDate();
    var item = sessionStorage.getItem("token");
    var userId = item.split("_")[0];
    this.userId=userId;

    console.log(item)
    //获取菜单
    axios.post("http://localhost:4000/pokweb/getMenu",{
      "token":item
    }).then((res) => {
      this.data = res.data.resultObj
    })

  },
  methods: {
    menu(e) {
      this.$router.push("/"+e);
    }
  }
}
</script>

<style >

.name{
  float: right !important;
  position: relative;
  font-size: 20px;
  font-family: Cambria;
}

</style>
