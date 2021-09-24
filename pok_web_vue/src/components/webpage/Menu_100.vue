<template>
  <h1>1221</h1>
</template>

<script>
import axios from "../../plugin/axios";
import URLData from "../../plugin/UrlData";
export default {
  name: "Menu_100",
  created() {
    axios("get",URLData.studentInformation,{
      token: ''
    })


  },

}
</script>



<style scoped>

</style>
