<template>

  <div class="hello">
    <div class='header'>
      <span class="head">{{msg}}</span>
      <span class="showTime">{{curTime}}</span>
    </div>
    <div class="link">
      <a href="https://www.baidu.com/" target="_blank">
        百度</a>
      <a href="https://www.y80s.net/" target="_blank">
        80s</a>
    </div>
    <h1>慈航普渡！</h1>
    <div class="button">
    <Button type="primary" @click="openCard"><h4>hello</h4></Button>
    </div>
    <div class="topCard">
      <p>Good {{time}}</p>
    </div>
    <div class="search">
      <Input  search size="large" placeholder="请输入something" v-model="inputVal" @on-search="search"/>
    </div>
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
        curTime:'时间：',
        inputVal:'',
    }
  },
    mounted() {
      let self = this;


      self.time = '';
      const d = moment.tz("Asia/Shanghai");

      console.log(d)
      if(d.hours()>=12&&d.hours()<=18){
          self.time = 'afternoon!'
      }
      if(d.hours()>18&&d.hours()<=23){
          self.time = 'evening!'
      }
      else{
          self.time = 'morning!'
      }
      console.log(self.time)
    },
    methods:{
      openCard(){
          let self = this;
          self.modal1 = !self.modal1;
          console.log(self.modal1);
      },
      search(){
          let self = this;
          window.location.assign("https://www.baidu.com/s?wd="+self.inputVal);
      }
    },
      created(){
          let self = this;
          setInterval(function () {
              self.curTime = moment.tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
              },1000);
      },
    beforeDestroy() {
      let self = this;
      clearInterval();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .hello{
    position: relative;
  }
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
  .button {
    Button {

      background-color: rgba(0, 125, 125, 0);
      border-radius: 10px;
      border-width: 0px;
    }
  }
  .header{
    position: relative;
    text-align: center;
    vertical-align: middle;
  }
  .header .head{
    position: relative;
    display: block;
    font-size: 28px;
    color: dodgerblue;
    text-shadow: 1px 2px 1px red;
    text-align: center;
  }
  .header .showTime{
      position: absolute;
      top:0px;
      right: 0px;
      vertical-align: middle;
      display: inline-block;
      color:dodgerblue;
  }
  .link{
    position: relative;
    display: inline-block;
  }
  .search {
    position: absolute;
    width: 50%;
    top:100%;
    left: 25%;
  }
   .search {
     .ivu-input-with-suffix {
         border-radius: 15px;
       }
     .ivu-input-wrapper-large .ivu-input-icon{
       font-size: 20px;
     }
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
