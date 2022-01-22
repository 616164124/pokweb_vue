<template>
  <div class="home">
    <div class="name">
      用户ID:
      <User/>
    </div>
    <br/>
    <br/>
    <br/>
    <el-row >
      <el-col :span="6" v-for="(i,item) in data">
        <div class="grid-content bg-purple"  key="i">
          <span @click="menu(item.menu_url)">{{ item.menu_name }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import User from "./User";
import axios1 from "../../plugin/axios"
import URLData from "../../plugin/UrlData";

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
    var data = new Date();
    this.data = data.getDate();
    var item = sessionStorage.getItem("user");
    var user = JSON.parse(item);

    axios("post",URLData.getMenu,{
      id:user.id
    }).then((res)=>{
      this.data = res.data.resultObj
    })
  },
  methods: {
    menu(e) {
      this.$router.push("/" + e);
    }
  }
}
</script>

<style>

.name {
  float: right !important;
  position: relative;
  font-size: 20px;
  font-family: Cambria;
}

</style>
