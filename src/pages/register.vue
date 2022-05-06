<template>
  <div>
    <div class="header11">
      <span @click="gotoIndex">首页</span>
      <button @click="gotoLogin">登录</button>
    </div>

    <div id="login-box2">
      <h1>注册</h1>
      <div class="form">
        <div class="item">
          <i class="fa fa-github-alt" style="font-size: 24px"></i>
          <input type="text" placeholder="请输入邮箱" />
        </div>
        <div class="item">
          <i class="fa fa-search" style="font-size: 24px"></i>
          <input type="text" placeholder="请输入密码" />
        </div>
        <div class="item">
          <button @click="handelClick">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    handelClick() {
      console.log("提交登录");
    },
    gotoLogin() {
      this.$router.push({ path: "/login" });
    },
    gotoIndex() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    console.log("初始化注册");
    // this.util.setBodyBackGround();
  },
  beforeDestroy() {
    // 离开页面的时候清除
    console.log("清除注册");
    // this.util.clearBodyBackGround();
  },
};
</script>
<style>
#login-box2 {
  width: 36%;
  height: auto;
  margin: 0 auto;
  margin-top: 13%;
  text-align: center;
  background: #fff;
  padding: 10px 50px;
  position: relative;
  /* border: 1px solid #d9d9d9; */
  /* 9c9c9c */
}
#login-box2 h1 {
  color: #9c9c9c;
  font-size: 14px;
}
#login-box2 .form .item {
  margin-top: 15px;
  /* margin-left: 43px; */
}
#login-box2 .form .item i {
  font-size: 18px;
  color: #9c9c9c;
}
input {
  border: none;
  outline: none;
  -webkit-tap-highlight-color: #9c9c9c;
  -webkit-tap-highlight-color: transparent;
}
#login-box2 .form .item input {
  /* width: 180px; */
  font-size: 12px;
  border: 0;
  border-bottom: 1px solid #9c9c9c;
  padding: 5px 10px;
  background: #fff;
  color: #9c9c9c;
  text-align: center;
}
#login-box2 button {
  background-color: rgb(135, 208, 104);
  border-radius: 2.66667vw;
  font-family: FZLTZHJW--GB1-0;
  font-size: 10px;
  color: #ffffff;
  border: none;
  outline: none;
  width: 16.33333vw;
  height: 3.33333vw;
  margin-top: 1.33333vw;
  /* margin-left: -13px; */
}
.header11 {
  width: 100%;
  height: 25px;
  background: #000;
}
.header11 span {
  color: #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  margin-left: 100px;
}
.header11 button {
  margin-top: -2px;
  float: right;
  margin-right: 90px;
  color: #fff;
  border: 0.5px solid #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  background: #000;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>
