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
    this.userId=JSON.parse(sessionStorage.getItem("user")).name;
  }
}
</script>

<style scoped>
.el-avatar{
  background-color: #409eff;
}
</style>
