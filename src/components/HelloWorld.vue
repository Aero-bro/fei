<template>
  <div class="hello">
    <div slot="header">
      <h1>{{msg}}</h1>
    </div>

      <a href="https://www.baidu.com/" target="_blank">
        <img  alt="baidu" class="baidu-png" src="@/assets/baidu.png" ></a>

      <a href="https://www.y80s.net/" target="_blank">
        <img class="80-png" src="@/assets/80s.png" style="width:400px"></a>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my app'
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

  .baidu-png {
    width:300px;
    height: 100px;
  }
</style>
