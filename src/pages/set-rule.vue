<template>
  <div class="pub-content">
    <p class="pub-title">设置比赛规则</p>

    <div class="pub-item2">
      <div class="pub-list2">
        <span>比赛背景</span>
        <textarea
          rows="5"
          cols="45"
          id="compBackGround"
          placeholder="请输入比赛背景"
        />
      </div>
      <div class="pub-list2">
        <span>比赛介绍</span>
        <textarea
          rows="5"
          cols="45"
          id="compIntro"
          placeholder="请输入比赛介绍"
        />
      </div>
      <div class="pub-list2">
        <span>比赛日程</span>
        <textarea
          rows="5"
          cols="45"
          id="compSchedule"
          placeholder="请输入比赛日程"
        />
      </div>
      <div class="pub-list2">
        <span>比赛规则</span>
        <textarea
          rows="5"
          cols="45"
          id="compRule"
          placeholder="请输入比赛规则"
        />
      </div>
      <button class="confirm2" @click="submitInfo">下一步</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Testing",
  data() {
    return {
      bodyBgImage: "url(" + require("./../assets/img/R.jpeg") + ")",
    };
  },
  methods: {
    submitInfo() {
      let params = {
        compId: this.$route.query.compId,
        // compId: "31",
        compBackGround: document.getElementById("compBackGround").value,
        compIntro: document.getElementById("compIntro").value,
        compSchedule: document.getElementById("compSchedule").value,
        compRule: document.getElementById("compRule").value,
      };
      // this.$router.push({ path: "/setdata" });
      axios
        .post(this.util.BASE_URL + "/competition/setCompRule", params)
        .then((data) => {
          if (data.data.status == "1") {
            console.log("创建规则成功");
            this.$router.push({
              path: "/setdata",
              query: { compId: this.$route.query.compId },
            });
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      // this.$router.push({ path: "/setdata" });
    },
  },
  mounted() {
    // 进来的时候调用添加
    console.log("初始化登录");
    console.log(this.$route.query.compId);
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
.pub-content {
  margin: auto;
  background: #ffffff;
  padding: 30px;
  margin-top: 20px;
  width: 520px;
  border: 0.13333vw solid #f5f5f5;
  margin-bottom: 2.66667vw;
  height: 100%;
}
.pub-title {
  font-size: 16px;
  color: #1a1a1a;
}
.pub-list2 {
  border-bottom: 1px solid #eceeef;
  margin-top: 1.66667vw;
}
.pub-item2 {
  border-radius: 8px;
  margin-left: 40px;
  border: 0.13333vw solid #f5f5f5;
  margin-right: 40px;
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 20px;
  padding-right: 40px;
  /* box-shadow: -2px 0 3px -1px #ffffff; */
}
.pub-list2 span {
  font-family: FZLTHJW--GB1-0;
  font-size: 16px;
  transform: scale(0.5, 0.5);
  transform-origin: left;
  color: #5f656b;
  padding-top: -5px;
  display: inline-block;
  margin-left: 25px;
  /* border: 1px solid red; */
}
.pub-list2 textarea {
  font-size: 14px;
  color: #a8adb2;
  transform: scale(0.5, 0.5);
  transform-origin: center;
  display: inline-block;
  margin-top: -6.66667vw;
  margin-left: -37px;
  margin-bottom: -10px;
  padding: 10px;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #a8adb2;
}
.confirm2 {
  background-image: linear-gradient(140deg, #5a92b7 0%, #363448 100%);
  border-radius: 20px;
  border-radius: 20px;
  font-family: FZLTZHJW--GB1-0;
  font-size: 18px;
  color: #ffffff;
  border: none;
  outline: none;
  transform: scale(0.5, 0.5);
  transform-origin: left;
  width: 220px;
  height: 40px;
  margin-top: 10px;
  margin-left: 120px;
}
</style>
