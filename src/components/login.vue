<template>
    <div class="login">
        <Form >
          <Row>
            <i-Col span="6" offset="4">
            <FormItem label="用户名：">
              <Input type="text" v-model="userName" placeholder="请输入用户名" class="userName"></Input>
            </FormItem>
            </i-Col>
            <i-Col span="6" offset="2">
              <FormItem label="密码：">
                <Input type="password" v-model="password" placeholder="请输入密码" class="password"></Input>
              </FormItem>
            </i-Col>
            <i-Col span="4" offset="2">
              <FormItem>
                <Button type="default" ghost @click="login">ENTER</Button>
              </FormItem>
            </i-Col>
          </Row>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                userName:'',
                password:'',
        }
        },
        methods:{
            login(){
                let self = this;
                this.axios.get("/api/test/userLogin",{params:{userName:self.userName,password:self.password}}).then(function (resp) {
                    if(resp.data.code == '0'){
                        self.$Message.success("登录成功");
                        self.$router.push({name:"HelloWorld"})
                    }
                    else if(resp.data.code == '1'){
                        self.$Message.error("用户名或密码错误")
                    }else{
                        self.$Message.error("未注册用户")
                    }
                })
            }
        }
    }
</script>

<style lang="less">
  .login{
    position: absolute;
    top: 300px;
    width: 1200px;
    .ivu-form-item-label{
      color: #222f3f;
      font-weight: bold;
      font-size: 14px;
    }
    Button{
      border-radius: 20px;
    }
    input::-webkit-input-placeholder{

      opacity:0.4;

      font-size:14px;

    }

  }
  .userName{
    color: dodgerblue;
    border-radius: 30px;
    .ivu-input.ivu-input-large{
      width: auto;
      border-radius: 20px;
      color:#340d1d;
      background: transparent;
    }
  }
  .password{ 
    color: dodgerblue;
    border-radius: 30px;
    .ivu-input.ivu-input-large{
      width: auto;
      border-radius: 20px;
      color:#340d1d;
      background: transparent;
    }
  }
</style>
