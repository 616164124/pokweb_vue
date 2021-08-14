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
      items: ["qeq", "qeqe"],
      data:""
    }
  },
  created() {
    var data =new Date();
    this.data = data.getDate();

  }

}
</script>

<style scoped>

</style>
