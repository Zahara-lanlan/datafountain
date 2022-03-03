<template>
  <div class="pub-content">
    <p class="pub-title">设置常见问题</p>

    <div class="pub-item">
      <div class="pub-list">
        <span>常见问题</span>
        <!-- <input
          type="textarea"
          id="commonProblem"
          placeholder="请输入常见问题"
        /> -->
        <textarea
          id="commonProblem"
          rows="15"
          cols="30"
          placeholder="请输入常见问题"
        >
        </textarea>
      </div>
      <!-- <div class="pub-list">
        <span>比赛介绍</span>
        <input type="text" placeholder="请输入比赛介绍" />
      </div>
      <div class="pub-list">
        <span>比赛日程</span>
        <input
          type="text"
          placeholder="请输入比赛日程"
          style="margin-left: 14px"
        />
      </div>
      <div class="pub-list">
        <span>比赛规则</span>
        <input
          type="text"
          placeholder="请输入比赛规则"
          style="margin-left: 14px"
        />
      </div> -->
      <button class="confirm" @click="submitInfo">下一步</button>
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
        compId: this.$router.query("compId"),
        // compId: "31",
        commonProblem: document.getElementById("commonProblem").value,
      };
      axios
        .post("http://175.24.79.108:8080/competition/setCompProblem", params)
        .then((data) => {
          if (data.data.status == "1") {
            // alert("比赛常见问题更新成功");
            console.log("比赛常见问题更新成功");
            this.$router.push({
              path: "/upload",
              query: { compId: this.$router.query("compId") },
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
.pub-list {
  /* border-bottom: 1px solid #eceeef; */
  margin-top: 5px;
}
.pub-item {
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
.pub-list span {
  font-family: FZLTHJW--GB1-0;
  font-size: 16px;
  transform: scale(0.5, 0.5);
  transform-origin: left;
  color: #5f656b;
  padding-top: -5px;
  display: inline-block;
  margin-left: 25px;
  width: 100px;
  /* border: 1px solid red; */
}
.pub-list textarea {
  font-size: 2.13333vw;
  color: #a8adb2;
  transform: scale(0.5, 0.5);
  transform-origin: left;
  border: none;
  margin-left: 45px;
  outline: none;
  width: 500px;
  margin-top: -8.6vw;
  border: 1px solid #eceeef;
  padding: 15px;
}

.confirm {
  /* background-image: linear-gradient(140deg, #5a92b7 0%, #584dc4 100%); */
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
  margin-top: -7.66667vw;
  margin-left: 16vw;
  position: absolute;
}
</style>
