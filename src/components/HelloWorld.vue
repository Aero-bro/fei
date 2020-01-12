<template>

  <div class="hello">
    <div class='header' slot="header">
      <h1>{{msg}}</h1>
    </div>

      <a href="https://www.baidu.com/" target="_blank">
        百度</a>

      <a href="https://www.y80s.net/" target="_blank">
        80s</a>

    <h1>慈航普渡</h1>
    <div class="button">
    <Button type="primary" @click="openCard"><h4>hello</h4></Button>
    </div>
    <Card class="topCard">
      <p>Good {{time}}</p>
    </Card>

  <Modal v-model="modal1" title="爱你一万年">
    <p >今朝有酒今朝醉</p>
  </Modal>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my app',
        time:'',
        modal1:false,
    }
  },
    mounted() {
      let self = this;
      self.time = '';
      const d = moment.tz("Asia/Shanghai");

      console.log(d)
      if(d.hours()>=12&&d.hours()<=18){
          self.time = 'afternoon'
      }
      if(d.hours()>18&&d.hours()<=23){
          self.time = 'evening'
      }
      console.log(self.time)
    },
    methods:{
      openCard(){
          let self = this;
          self.modal1 = !self.modal1;
          console.log(self.modal1);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .topCard {
    width: 500px;
    position:absolute;
    top:0px;
    text-align: left;
    background-color: rgba(0,0,0,0);
    border-color: rgba(0,0,0,0);
  }

  /*Button:hover{*/
  /*  transform: rotate3d(10,20,30,30deg);*/
  /*  background-color: #2BAEB9;*/
  /*}*/
  Button {

    background-color: rgba(0,125,125,0);
    border-radius: 10px;
    border-width: 0px;
  }
  .header{
    text-shadow: 1px 2px 3px  red;
  }
  a:first-of-type{
    position: relative;
    -webkit-animation: move 5s infinite;
    -webkit-animation-iteration-count: 1;
  }
  @-webkit-keyframes move {
    from {top:0px}
    to {top: 100px}
  }
h1, h2 {
  color: dodgerblue;
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
  font-size: 30px;
  color: #42b983;
}
  hr{
  position: relative;

  }
  p{
    font-size: 28px;
    color: dodgerblue;
    text-shadow: 1px -2px 3px red;
  }

</style>
