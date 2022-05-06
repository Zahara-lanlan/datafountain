<template>
  <div>
    <div class="header22">
      <span @click="gotoIndex">首页</span>
      <button @click="gotoRegister">注册</button>
    </div>

    <div id="login-boxed">
      <h1>登录</h1>
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
          <button @click="handelClick">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    // 添加body图片
    // setBodyBackGround() {
    //   document.body.style.backgroundSize = "100%";
    //   document.body.style.backgroundImage = this.bodyBgImage;
    // },
    // // 清除背景图
    // clearBodyBackGround() {
    //   document.body.style.backgroundImage = "";
    // },
    handelClick() {
      this.$router.push({ path: "/setting" });
    },
    gotoRegister() {
      this.$router.push({ path: "/register" });
    },
    gotoIndex() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    // 进来的时候调用添加
    console.log("初始化登录");
    // this.util.setBodyBackGround();
  },
  // beforeDestroy() {
  //   // 离开页面的时候清除
  //   console.log("清除页面登录");
  //   this.util.clearBodyBackGround();
  // },
};
</script>
<style>
#login-boxed {
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
#login-boxed h1 {
  color: #9c9c9c;
  font-size: 14px;
}
#login-boxed .form .item {
  margin-top: 15px;
  /* margin-left: 43px; */
}
#login-boxed .form .item i {
  font-size: 18px;
  color: #9c9c9c;
}
input {
  border: none;
  outline: none;
  -webkit-tap-highlight-color: #9c9c9c;
  -webkit-tap-highlight-color: transparent;
}
#login-boxed .form .item input {
  /* width: 180px; */
  font-size: 12px;
  border: 0;
  border-bottom: 1px solid #9c9c9c;
  padding: 5px 10px;
  background: #fff;
  color: #9c9c9c;
  text-align: center;
}
#login-boxed button {
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
  /* margin-left: 11.33333vw; */
}

.header22 {
  width: 100%;
  height: 25px;
  background: #000;
}
.header22 span {
  color: #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  margin-left: 100px;
}
.header22 button {
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
