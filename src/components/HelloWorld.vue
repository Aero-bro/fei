<template>
  <div class="hello">
    <div class='header' slot="header">
      <h1>{{msg}}</h1>
    </div>

      <a href="https://www.baidu.com/" target="_blank">
        <img  alt="baidu" class="baidu-png" src="@/assets/baidu.png" ></a>

      <a href="https://www.y80s.net/" target="_blank">
        <img class="80-png" src="@/assets/80s.png" style="width:400px"></a>

    <div class="button">
    <Button type="primary" ><h4>hello</h4></Button>
    </div>
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
  Button:hover{
    transform: rotate3d(10,20,30,30deg);
    background-image: url(../assets/logo.png);
    background-color: #2BAEB9;
  }
  .header{
    text-shadow: 1px 2px 3px  red;
  }
  a{
    position: relative;
    -webkit-animation: move 5s infinite;
    -webkit-animation-iteration-count: 1;
  }
  @-webkit-keyframes move {
    from {top:0px}
    to {top: 300px}
  }
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
