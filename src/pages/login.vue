<template>
  <div>
    <router-link to="/register">
      <div class="register-btn" @click="gotoRegister">注册</div>
    </router-link>

    <div id="login-box">
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
      </div>
      <button @click="handelClick">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      bodyBgImage: "url(" + require("./../assets/img/R.jpeg") + ")",
    };
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
      console.log("提交登录");
      this.$router.push({ path: "/competition" });
    },
    gotoRegister() {},
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
#login-box {
  width: 30%;
  height: auto;
  margin: 0 auto;
  margin-top: 13%;
  text-align: center;
  background: #fff;
  padding: 10px 50px;
  position: relative;
  /* 9c9c9c */
}
#login-box h1 {
  color: #9c9c9c;
  font-size: 14px;
}
#login-box .form .item {
  margin-top: 15px;
}
#login-box .form .item i {
  font-size: 18px;
  color: #9c9c9c;
}
input {
  border: none;
  outline: none;
  -webkit-tap-highlight-color: #9c9c9c;
  -webkit-tap-highlight-color: transparent;
}
#login-box .form .item input {
  width: 180px;
  font-size: 12px;
  border: 0;
  border-bottom: 2px solid #9c9c9c;
  padding: 5px 10px;
  background: #fff;
  color: #9c9c9c;
}
#login-box button {
  margin-top: 20px;
  width: 190px;
  height: 30px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  /* background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%); */
margin-bottom: 15px;
  background-image: linear-gradient(140deg, #5a92b7 0%, #363448 100%);
  border: 0;
  border-radius: 15px;
}
.register-btn {
  /* position: absolute; */
  float: right;
  font-weight: 400;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #6a6a6a;
  font-size: 12px;
  padding: 0 28px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 2px;
  color: #9c9c9c !important;
  border: none;
  margin-top: -12%;
  /* background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%); */
}
</style>
