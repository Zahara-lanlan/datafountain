<template>
  <div class="container">
    <div class="cmpt-container">
      <div class="competition-wrapper">
        <div class="competition__avatar">
          <img src="./../assets/img/game.jpg" />
        </div>
        <div class="competition-info">
          <div class="competition__survey">
            <h2 class="competition__title">
              {{ this.name }}
            </h2>
          </div>
          <div class="competition__sponsor inline-vcenter">
            <span> {{ this.compBackGround }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-page">
      <div class="nav-wrapper">
        <ul role="menubar" class="el-menu">
          <li tabindex="0" @click="changeDetailInfo">
            <span class="el-menu-item is-active">赛制规则</span>
          </li>
          <li tabindex="1" @click="changeDetailInfo">
            <span class="el-menu-item">数据与测评</span>
          </li>
          <li tabindex="2" @click="changeDetailInfo">
            <span class="el-menu-item">常见问题</span>
          </li>
        </ul>
        <!-- <button class="btn-enroll">报名参赛</button> -->
      </div>
      <div class="page-content">
        <div v-show="ruleVisible">
          <p style="margin-top: 0vw">
            <span id="page-title">大赛背景</span>
            <span>{{ this.compBackGround }}</span>
          </p>
          <p>
            <span id="page-title">赛题介绍</span>
            <span>{{ this.compIntro }}</span>
          </p>
          <p>
            <span id="page-title">赛制规则</span>
            <span>{{ this.compRule }}</span>
          </p>
          <p>
            <span id="page-title">参赛规则</span>
            <span>{{ this.compSchedule }}</span>
          </p>
        </div>
        <!-- 提交要求，提交实例，评测标准  -->
        <div v-show="dataVisible">
          <p style="margin-top: 0vw">
            <span id="page-title">数据说明</span>
            <span v-html="dataIntro"></span>
          </p>

          <p class="page-main-title">
            <span id="page-title">提交要求</span>
            <span v-html="submissionRule"></span>
          </p>
          <p>
            <span id="page-title">提交实例</span>
            <span v-html="submissionExample"></span>
          </p>
          <p>
            <span id="page-title">评测标准</span>
            <span v-html="evalCriteria"></span>
          </p>
        </div>
        <div v-show="questionVisible">
          <p style="margin-top: -10vw">
            <span id="page-title">常见问题</span>
            <span v-html="commonProblem"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      bodyBgImage: "url(" + require("./../assets/img/R.jpeg") + ")",
      compId: this.$route.query.compId,
      name: this.$route.query.name,
      compBackGround: "", //大赛背景
      compIntro: "", //赛题介绍
      compRule: "", //赛制规则
      compSchedule: "", //参赛规则
      dataRule: {},
      evalCriteria: "",
      dataIntro: "",
      submissionRule: "",
      submissionExample: "",
      ruleVisible: true,
      dataVisible: false,
      questionVisible: false,
      commonProblem: "",
    };
  },
  mounted() {
    console.log("初始化详情");
    this.util.setBodyBackGround();
    console.log(this.$route.query);
    this.getDetailInfo();
    this.getCompDataEval();
    this.getCompProblem();
  },
  beforeDestroy() {
    // 离开页面的时候清除
    console.log("清除详情");
    this.util.clearBodyBackGround();
  },
  methods: {
    getDetailInfo() {
      axios
        .post(
          "http://175.24.79.108:8080/competition/getCompRule?compId=" +
            this.$route.query.compId
        )
        .then((data) => {
          if (data.data.status === "1") {
            // console.log("比赛详情", data.data.compRule.compIntro);
            this.compIntro = data.data.compRule.compIntro;
            this.compBackGround = data.data.compRule.compBackGround;
            this.compRule = data.data.compRule.compRule;
            this.compSchedule = data.data.compRule.compSchedule;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompDataEval: function () {
      axios
        .post(
          "http://175.24.79.108:8080/competition/getCompDataEval?compId=" +
            this.$route.query.compId
        )
        .then((data) => {
          console.log("获取数据与测评详细数据",data);
          if (data.data.status === "1") {
            this.dataRule = data.data.compDataEval;
            console.log("1111", data.data.compDataEval.evalCriteria);
            this.evalCriteria = this.dataRule.evalCriteria.replace(
              /\n/g,
              "<br/>"
            );
            this.dataIntro = this.dataRule.dataIntro.replace(/\n/g, "<br/>");
            this.submissionRule = this.dataRule.submissionRule.replace(
              /\n/g,
              "<br/>"
            );

            this.submissionExample = this.dataRule.submissionExample.replace(
              /\n/g,
              "<br/>"
            );
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompProblem: function () {
      axios
        .post(
          "http://175.24.79.108:8080/competition/getCompProblem?compId=" +
            this.$route.query.compId
        )
        .then((data) => {
          console.log("常见问题详细数据");
          if (data.data.status === "1") {
            this.commonProblem = data.data.commonProblem.commonProblem.replace(
              /\n/g,
              "<br/>"
            );
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeDetailInfo() {
      console.log("切换tab");
      console.log(event.currentTarget);
      let list = Array.prototype.slice.call(document.querySelectorAll("li"));
      list.forEach((item) => {
        item.querySelector(".el-menu-item").classList.remove("is-active");
      });
      event.currentTarget
        .querySelector(".el-menu-item")
        .classList.add("is-active");
      let tabindex = event.currentTarget.getAttribute("tabindex");
      if (tabindex === "0") {
        this.ruleVisible = true;
        this.dataVisible = false;
        this.questionVisible = false;
      } else if (tabindex === "1") {
        this.ruleVisible = false;
        this.dataVisible = true;
        this.questionVisible = false;
        Array.prototype.slice.call(document.querySelectorAll('.page-main-title')).forEach(item=>{
          item.style.marginTop = "-6vw"
        })
      } else {
        this.ruleVisible = false;
        this.dataVisible = false;
        this.questionVisible = true;
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 550px;
  height: 100%;
  margin-left: 100px;
  margin-top: 60px;
  margin-bottom: 20px;

  /* border: 1px solid red; */
}
.el-menu li {
  list-style: none;
  display: inline-block;
}
.cmpt-container {
  /* margin-left: 100px; */
  width: 77.33333vw;
  height: 100%;
  border: 0.13333vw solid #f5f5f5;
  padding-bottom: 15px;
  background: #ffffff;

  /* border: 1px solid red; */
}
.competition-wrapper:before {
  display: table;
  content: "";
}
.competition-wrapper {
  margin-top: 15px;
  margin-left: 15px;
  /* border: 0.13333vw solid #f5f5f5; */

  /* display: flex; */
}
.competition__avatar {
  /* border: 1px solid red; */
  position: relative;
  float: left;
  /* width: 150px;
  height: 94px; */
  overflow: hidden;
}
.competition__avatar img {
  width: 150px;
  height: 94px;
  vertical-align: middle;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 6px;
}
.competition-info {
  /* margin-left: 260px; */
  padding-left: 24px;
  /* border: 1px solid red; */
  height: 94px;
}
.competition__survey {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 12px;
}
.competition__title {
  margin: 0;
  font-size: 20px;
  line-height: 1.5em;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  transform: scale(0.5, 0.5);
  margin-left: 1.73333vw;
  transform-origin: left;
}
#page-title {
  font-family: PingFangSC-Medium;
  font-size: 2.16667vw;
  color: #1a1a1a;
  letter-spacing: 0;
  /* line-height: 40px; */
  /* margin-left: 30px; */
  margin-top: 10px;
  display: block;
}

.compt__sponsor-icon {
  width: 12px;
  height: 12px;
  -webkit-transform: translateY(1px);
  -ms-transform: translateY(1px);
  transform: translateY(1px);
  margin-right: 6px;
}
.competition__sponsor {
  margin-top: -3vw;
  display: flex;
}
.competition__sponsor-icon {
  margin-left: -9.26667vw;
}
.competition__sponsor span {
  font-size: 1.26667vw;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #888;
  /* line-height: 20px; */
  display: inline-block;
  transform: scale(0.6, 0.6);
  transform-origin: left;
  /* width: 307px; */
  margin-left: 1.83333vw;
}

.sub-page {
  background: #ffffff;
  padding: 30px;
  /* margin-top: 20px; */
  width: 520px;
  border: 0.13333vw solid #f5f5f5;
  height: 100%;
}
.nav-wrapper {
  height: 32px;
  position: relative;
  display: flex;
  /* margin-top: -10px; */
  border-bottom: 0.13333vw solid #f5f5f5;
}
.el-menu {
  margin-top: -8px;
}
.el-menu-item {
  font-size: 16px;
  /* margin-right: 2.5em; */
  height: 32px;
  line-height: 32px;
  font-weight: 500;
  display: inline-block;
  transform: scale(0.5);
}
.page-content p {
  color: inherit;
  font-family: inherit;
  font-size: 1.6vw;
  line-height: 2em;
  display: inline-block;
  /* border: 1px solid red; */
  transform: scale(0.5, 0.5);
  transform-origin: left;
  width: 1000px;
  /* margin-left: -450px;  */
  margin-top: -11vw;
  /* width: 100%; */
  height: 100%;
  position: relative;
  /* left: 227px; */
}
.btn-enroll {
  display: inline-block;
  background-color: #2979ff;
  color: #fff;
  cursor: pointer;
  /* width: 100%; */
  text-align: center;
  font-size: 16px;
  min-width: 120px;

  height: 50px;
  line-height: 50px;
  border: none;
  outline: none;
  transform: scale(0.5);
  margin-left: 250px;
  margin-top: -15px;
}
.is-active {
  border-bottom: 2px solid #1bb465;
}
</style>
