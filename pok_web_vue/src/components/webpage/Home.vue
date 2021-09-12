<template>
  <div class="home">
    <div v-for="(item,i) in items">
      <p>{{i}} {{ item }}</p>
    </div>
    <div>{{data}}</div>
  </div>
</template>

<script>
import Url from "../../url"
export default {
  name: "Home",
  data() {
    return {
      username: '',
      items: ["qeq", "qeqe"],
      data:""
    }
  },
  created() {
    var data =new Date();
    this.data = data.getDate();
    //获取菜单
    axios.get("hostlocal:4000\pokweb\getMenu",{

  }).then((res)=>{
      console.log(res);

    })

  }

}
</script>

<style scoped>

</style>
