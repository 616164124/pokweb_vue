<template>
  <div class="HelloWorld">
    <button @click="jump()">To Login</button>
    <!-- <select v-model="selected">
      <option v-for="option in options" v-bind:option="option.value">
        {{ option.text }}
      </option>
    </select> -->
    <span>Selected: {{ selected }}</span>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 'A',//selectѡ�е�ֵ
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ]
    }
  },
  methods:{
    jump(){
      this.$router.push("/login")
    }
  },
  created: {
    test: function () {
      console.log("123");
    }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lange="less" scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
