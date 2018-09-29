<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>up</div>
    <button v-on:click="testFunction()">Test</button>
  </div>
</template>

<script>
  const tron = require('../utils/tron');

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods: {
      testFunction: async () => {
        let response = await tron.postMessage("dsadsa");
        console.log('response:');
        console.log(response);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
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
