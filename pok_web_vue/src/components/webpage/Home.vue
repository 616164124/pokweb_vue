<template>
<div class="home">
  <div v-for:key="item in items">
  <a>{{item}}</a>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: '',
      items:{}
    }
  },
  created:{
    create(){
      console.log("home")
    }
  }

}
</script>

<style scoped>

</style>
