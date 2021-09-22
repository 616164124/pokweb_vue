<template>
  <div class="home">

    <div v-for="(item ,i) in data">
      <a @dblclick="menu(item.menu_url)">{{ item.menu_name }}</a>
      <p></p>
    </div>
  </div>
</template>

<script>
import Url from "../../url"
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      username: '',
      items: ["qeq", "qeqe"],
      data: {}
    }
  },
  created() {
    console.log("home.vue")
    var data = new Date();
    this.data = data.getDate();
    var item = sessionStorage.getItem("token");
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

<style scoped>

</style>
