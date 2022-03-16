<template>
  <div class="pub-content">
    <p class="pub-title">设置数据与评测</p>

    <div class="pub-item3">
      <div class="pub-list3">
        <span>数据说明</span>
        <textarea
          id="dataIntro"
          rows="5"
          cols="45"
          placeholder="请输入数据说明"
        />
      </div>
      <div class="pub-list3">
        <span>提交要求</span>
        <textarea
          id="submissionRule"
          rows="5"
          cols="45"
          placeholder="请输入提交要求"
        />
      </div>
      <div class="pub-list3">
        <span>提交示例</span>
        <textarea
          id="submissionExample"
          rows="5"
          cols="45"
          placeholder="请输入提交示例"
        />
      </div>
      <div class="pub-list3">
        <span>评测标准</span>
        <textarea
          id="evalCriteria"
          rows="5"
          cols="45"
          placeholder="请输入评测标准"
        />
      </div>
      <button class="confirm3" @click="submitInfo">下一步</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SetRule",
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
        dataIntro: document.getElementById("dataIntro").innerHTML,
        submissionRule: document.getElementById("submissionRule").innerHTML,
        submissionExample:
          document.getElementById("submissionExample").innerHTML,
        evalCriteria: document.getElementById("evalCriteria").innerHTML,
      };
      // this.$router.push({ path: "/setquestion" });
      axios
        .post(this.util.BASE_URL + "/competition/setCompDataEval", params)
        .then((data) => {
          if (data.data.status == "1") {
            console.log("设置数据成功");
            this.$router.push({
              path: "/setquestion",
              query: { compId: this.$route.query.compId },
            });
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // 进来的时候调用添加
    console.log("初始化登录");
    this.util.setBodyBackGround();
  },
  beforeDestroy() {
    // 离开页面的时候清除
    console.log("清除页面登录");
    this.util.clearBodyBackGround();
  },
};
</script>
<style>
.pub-content {
  margin: auto;
  background: #ffffff;
  padding: 30px;
  margin-top: 8vw;
  /* margin-top: 20px; */
  width: 520px;
  border: 0.13333vw solid #f5f5f5;
  margin-bottom: 2.66667vw;
  height: 100%;
}
.pub-title {
  font-size: 16px;
  color: #1a1a1a;
}

input::-webkit-input-placeholder {
  color: #a8adb2;
}
.pub-list3 {
  border-bottom: 1px solid #eceeef;
  margin-top: 1.66667vw;
}
.pub-item3 {
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
.pub-list3 span {
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
.pub-list3 textarea {
  font-size: 14px;
  color: #a8adb2;
  transform: scale(0.5, 0.5);
  transform-origin: center;
  display: inline-block;
  margin-top: -6.66667vw;
  margin-left: -37px;
  margin-bottom: -10px;
  padding: 10px;
}

.confirm3 {
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
