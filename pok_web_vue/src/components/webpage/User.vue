<template>
<el-avatar >{{userId}}</el-avatar>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      userId: '',
      data: {}
    }
  },
  created() {

    console.log(JSON.parse(sessionStorage.getItem("user")))
  }
}
</script>

<style scoped>
.el-avatar{
  background-color: #409eff;
}
</style>
