<template>
  <div class="home">
    <div v-for="(item,i) in items">
      <p>{{i}} {{ item }}</p>
    </div>
    <div>{{data}}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: '',
      items: ["qeq", "qeqe","uiuuu","ooooo"],
      data:""
    }
  },
  created() {
    var data =new Date();
    this.data = data.getDate();
    console.log(this.data)

  },
  mounted() {
    localStorage.clear();
    console.log(this.data)
    if(localStorage.name ){
      localStorage.name="oooo";
    }else {
      localStorage.setItem("name","1312")
    }

  }

}
</script>

<style scoped>

</style>
