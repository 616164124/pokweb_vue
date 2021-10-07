<template>
  <div id="app">
    <div>
      {{date}}
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      date:""
    }
  },
  methods:{

  },
  created() {

      this.date =new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日"  ;

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
