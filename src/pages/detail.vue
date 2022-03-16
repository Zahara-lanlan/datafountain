<template>
  <div class="container">
    <div class="cmpt-container">
      <div class="competition-wrapper">
        <!-- <div class="competition__avatar">
          <img src="./../assets/img/game.jpg" />
        </div> -->
        <div class="competition-info">
          <div class="competition__survey">
            <h2 class="competition__title">
              {{ this.name }}
            </h2>
            <span class="compt__cmpt-type">{{ this.compyType }}</span>
          </div>
          <div class="competition__sponsor inline-vcenter">
            <p>{{ this.compBackGround }}</p>
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
          <li tabindex="3" @click="changeDetailInfo">
            <span class="el-menu-item">排行榜</span>
          </li>
          <li tabindex="4" @click="changeDetailInfo">
            <span class="el-menu-item">参赛队伍</span>
          </li>
        </ul>
      </div>
      <div class="page-content">
        <!-- 赛制规则  -->
        <div v-show="ruleVisible">
          <div id="background">
            <p id="back">
              <i class="bg-img"></i><span class="page-title">大赛背景</span>
              <span class="page-text">{{ this.compBackGround }}</span>
            </p>
          </div>

          <div id="commIntro">
            <p id="intro">
              <i class="bg-img"></i><span class="page-title">赛题介绍</span>
              <span class="page-text">{{ this.compIntro }}</span>
            </p>
          </div>

          <div id="compRule">
            <p id="rule">
              <i class="bg-img"></i><span class="page-title">赛制规则</span>
              <span class="page-text">{{ this.compRule }}</span>
            </p>
          </div>

          <div id="compSchedule">
            <p id="schedule">
              <i class="bg-img"></i><span class="page-title">参赛规则</span>
              <span class="page-text">{{ this.compSchedule }}</span>
            </p>
          </div>
        </div>
        <!-- 数据与评测  -->
        <div v-show="dataVisible">
          <div class="data-set" v-show="setVisiable">
            <div class="set">
              <p class="setItem">
                <span :fileName="fileName1" :type="type1"
                  >测试集 - {{ this.fileName1 }}</span
                >
                <img
                  src="./../assets/img/up3.png"
                  alt=""
                  @click="downCompData(fileName1, type1)"
                />
              </p>
            </div>
            <div class="set">
              <p class="setItem">
                <span :fileName="fileName2" :type="type2"
                  >训练集 - {{ this.fileName2 }}</span
                >
                <img
                  src="./../assets/img/up3.png"
                  alt=""
                  @click="downCompData(fileName2, type2)"
                />
              </p>
            </div>
          </div>
          <div id="dataIntro">
            <p id="data">
              <i class="bg-img"></i><span class="page-title">数据说明</span>
              <span v-html="dataIntro" class="page-text"></span>
            </p>
          </div>

          <div id="submissionRule">
            <p id="submission">
              <i class="bg-img"></i><span class="page-title">提交要求</span>
              <span v-html="submissionRule" class="page-text"></span>
            </p>
          </div>

          <div id="submissionExample">
            <p id="example">
              <i class="bg-img"></i><span class="page-title">提交实例</span>
              <span v-html="submissionExample" class="page-text"></span>
            </p>
          </div>

          <div id="evalCriteria">
            <p id="criteria">
              <i class="bg-img"></i> <span class="page-title">评测标准</span>
              <span v-html="evalCriteria" class="page-text"></span>
            </p>
          </div>
        </div>
        <!-- 常见问题  -->
        <div v-show="questionVisible">
          <p>
            <i class="bg-img"></i><span class="page-title">常见问题</span>
            <span v-html="commonProblem" class="page-text"></span>
          </p>
        </div>
        <!-- 排行榜  -->
        <div v-show="rankVisible">
          <table id="tbl" width="440" cellpadding="0" cellspacing="0">
            <thead>
              <tr>
                <th>
                  <div class="table_header">
                    <span>排名</span>
                  </div>
                </th>
                <th>
                  <div class="table_header">
                    <span>提交队伍</span>
                  </div>
                </th>
                <th>
                  <div class="table_header">
                    <span>提交时间</span>
                  </div>
                </th>
                <th>
                  <div class="table_header">
                    <span>最高得分</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item of rankData" :key="item.id">
                <td>
                  <div class="table_container">
                    <span>{{ item.rank }}</span>
                  </div>
                </td>
                <td>
                  <div class="table_container">
                    <span>{{ item.submitTeam }}</span>
                  </div>
                </td>
                <td>
                  <div class="table_container">
                    <span>{{ item.submitTime }}</span>
                  </div>
                </td>
                <td>
                  <div class="table_container">
                    <span>{{ item.highScore }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 参赛队伍  -->
        <div v-show="teamVisible" class="team">
          <div class="team-container" v-for="item of teamData" :key="item.id">
            <img :src="item.img" alt="" />
            <div class="team-item">
              <div class="team-name">
                <span>{{ item.name }}</span>
              </div>
              <div class="team-slogan">
                <span>{{ item.slogan }}</span>
              </div>
            </div>
          </div>
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
      compyType: this.$route.query.compType,
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
      pageId: "",
      fileName1: "",
      type1: "",
      fileName2: "",
      type2: "",
      setVisiable: false,
      rankVisible: false,
      teamVisible: false,
      rankData: "",
      teamData: "",
    };
  },
  mounted() {
    console.log("初始化详情");
    // this.util.setBodyBackGround();
    console.log(this.$route.query);
    this.getDetailInfo();
    this.getCompDataEval();
    this.getCompProblem();
    this.getCompDataName();
    this.rankData = [
      {
        rank: 1,
        submitTeam: "阳光炼丹炉",
        submitTime: "2022-03-03 11:27",
        highScore: 0.7437505,
      },
      {
        rank: 2,
        submitTeam: "尼古拉斯-土土",
        submitTime: "2022-03-09 23:27",
        highScore: 0.9437505,
      },
      {
        rank: 3,
        submitTeam: "代码搬运工",
        submitTime: "2022-03-14 23:27",
        highScore: 0.8437505,
      },
      {
        rank: 4,
        submitTeam: "我吃西红柿",
        submitTime: "2022-03-08 16:27",
        highScore: 0.5437505,
      },
    ];
    this.teamData = [
      {
        img: require("./../assets/img/pro1.jpeg"),
        name: "阳光炼丹炉",
        slogan: "加油干鸭",
      },
      {
        img: require("./../assets/img/pro2.jpeg"),
        name: "尼姑拉斯-土土",
        slogan: "这个家伙很懒，还没留下任何宣言~",
      },
      {
        img: require("./../assets/img/pro3.jpeg"),
        name: "代码搬运工",
        slogan: "这个家伙很懒，还没留下任何宣言~",
      },
      {
        img: require("./../assets/img/pro4.jpeg"),
        name: "我吃西红柿",
        slogan: "这个家伙很懒，还没留下任何宣言~",
      },
    ];
  },
  beforeDestroy() {
    // 离开页面的时候清除
    console.log("清除详情");
    // this.util.clearBodyBackGround();
  },
  updated() {
    console.log("pageId", this.pageId);
    if (this.pageId === "1") {
      var nodeList = Array.prototype.slice.call(
        document.querySelectorAll(".set")
      );
      nodeList.forEach((item) => {
        item.style.height =
          item.firstChild.getBoundingClientRect().height + "px";
      });
      this.setDomHeight("dataIntro", "data");
      this.setDomHeight("submissionRule", "submission");
      this.setDomHeight("submissionExample", "example");
      this.setDomHeight("evalCriteria","criteria")
    } else {
      this.setDomHeight("background", "back");
      this.setDomHeight("commIntro", "intro");
      this.setDomHeight("compRule", "rule");
      this.setDomHeight("compSchedule", "schedule");
      
    }
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
          console.log("获取数据与测评详细数据", data);
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
    getCompDataName: function () {
      let getParams = {
        compId: this.$route.query.compId,
      };
      axios
        .post(
          "http://175.24.79.108:8080/competition/getCompDataName",
          getParams
        )
        .then((data) => {
          console.log("数据集的详情", data);
          if (data.data.status === "1") {
            console.log(data.data);
            if (
              JSON.stringify(data.data.testData) !== "{}" &&
              JSON.stringify(data.data.trainData) !== "{}"
            ) {
              this.setVisiable = true;
              this.fileName1 = data.data.testData.fileName;
              this.type1 = data.data.testData.type;
              this.fileName2 = data.data.trainData.fileName;
              this.type2 = data.data.trainData.type;
            }
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
      switch (tabindex) {
        case "0":
          this.ruleVisible = true;
          this.dataVisible = false;
          this.questionVisible = false;
          this.rankVisible = false;
          this.teamVisible = false;
          this.pageId = "0";
          break;
        case "1":
          this.ruleVisible = false;
          this.dataVisible = true;
          this.questionVisible = false;
          this.rankVisible = false;
          this.teamVisible = false;
          this.pageId = "1";
          break;
        case "2":
          this.ruleVisible = false;
          this.dataVisible = false;
          this.questionVisible = true;
          this.rankVisible = false;
          this.teamVisible = false;
          this.pageId = "2";
          break;
        case "3":
          this.ruleVisible = false;
          this.dataVisible = false;
          this.questionVisible = false;
          this.rankVisible = true;
          this.teamVisible = false;
          this.pageId = "3";
          break;
        case "4":
          this.ruleVisible = false;
          this.dataVisible = false;
          this.questionVisible = false;
          this.rankVisible = false;
          this.teamVisible = true;
          this.pageId = "4";
          break;
      }
    },
    setDomHeight(parent, child) {
      document.getElementById(parent).style.height =
        document.getElementById(child).getBoundingClientRect().height +
        10 +
        "px";
    },
    downCompData(fileName, type) {
      console.log(fileName);
      console.log(type);
      let getParams = {
        compId: this.$route.query.compId,
        fileName: fileName,
        type: type,
      };
      axios
        .post("http://175.24.79.108:8080/competition/downCompData", getParams)
        .then((data) => {
          console.log("下载详情", data);
          // if (data.data.status === "1") {
          console.log(data.data);
          let url = window.URL.createObjectURL(new Blob([data.data]));
          let a = document.createElement("a");
          a.setAttribute("download", fileName);
          a.href = url;
          a.click();
          // }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
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
  /* height: 94px; */
}
.competition__survey {
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 12px;
}
.competition__title {
  margin: 0;
  font-size: 12px;
  line-height: 1.5em;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  /* transform: scale(0.5, 0.5); */
  margin-left: 1.73333vw;
  /* transform-origin: left; */
}
.page-title {
  margin-bottom: 12px;
  font-family: PingFangSC-Medium;
  font-size: 2.16667vw;
  color: #1a1a1a;
  letter-spacing: 0;
  /* line-height: 40px; */
  margin-left: 11px;
  /* margin-top: 10px; */
  display: inline-block;
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
  /* display: flex; */
  padding-left: 20px;
}
.competition__sponsor-icon {
  margin-left: -9.26667vw;
}
.competition__sponsor p {
  font-size: 1.26667vw;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #888;
  line-height: 20px;
  display: inline-block;
  transform: scale(0.6, 0.6);
  transform-origin: left;
  width: 707px;
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
.page-content {
  margin-left: 20px;
}
.page-content p,
.table_header span,
.table_container span,
.team-slogan span {
  color: inherit;
  font-family: inherit;
  font-size: 1.6vw;
  line-height: 2em;
  display: block;
  transform: scale(0.5, 0.5);
}
.page-content p,
.team-slogan span {
  transform-origin: left top;
  width: 129.2vw;
  position: relative;
}
.table_header span,
.table_container span,
.team-slogan span {
  /* margin-top: 3px; */

  height: 20px;
  color: #909399;
}
.table_container span {
  color: #666;
}
.table_header div,
.table_container div,
.team-slogan {
  height: 20px;
}
#tbl {
  margin: 20px;
  margin-left: 20px;
}
#tbl tr {
  text-align: center;
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
.data-set p span:first-child {
  font-weight: bolder;
}
.data-set p {
  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f9fafd;
  /* width: 1020px; */
}
.data-set {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  /* margin-bottom: 5px; */
  border-radius: 4px;
  background-color: #fafafa;
  /* padding-left: 20px; */
}
.setItem {
  margin-top: 0vw;
}
.setItem img {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-left: 30px;
  /* padding-top: 10px; */
  position: absolute;
  top: 2px;
}
.team {
  margin-top: 20px;
}
.team-name span {
  color: #333;
  font-size: 18px;
  transform: scale(0.5, 0.5);
  transform-origin: left top;
  display: inline-block;
  height: 20px;
}
.team-name {
  height: 15px;
}
.team-container {
  display: flex;
  margin-top: 8px;
  border: 0.5px solid #f5f5f5;
  padding-left: 32px;
  padding-bottom: 10px;
  padding-top: 10px;
}
.team-container img {
  width: 40px;
  height: 40px;
  padding-top: 2.5px;
}
.team-item {
  padding-top: 5px;
  padding-left: 10px;
}
.compt__cmpt-type {
  padding-left: 12px;
  padding-right: 12px;
  height: 20px;
  line-height: 20px;
  border-radius: 3px;
  margin-left: 20px;
  margin-top: 2px;
  /* border: 1px solid #dde2e7; */
  border: none;
  background-color: rgb(135, 208, 104);
  font-size: 12px;
  transform: scale(0.8);
  transform-origin: left top;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #fff;
  text-align: center;
  vertical-align: top;
  display: inline-block;
}
.bg-img {
  margin-top: 3px;
  height: 20px;
  width: 4px;
  /* border: 1.5px solid #5a92b7; */
  position: absolute;
  /* background: rgb(135, 208, 104); */
  background: #5a92b7;
  /* background-position: 0 0; */
  border: none;
  outline: none;
}
.page-text {
  display: block;
}
</style>
