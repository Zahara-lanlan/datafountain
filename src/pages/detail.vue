<template>
  <div>
    <div class="headers">
      <span @click="gotoIndex">首页</span>
      <button class="login" @click="gotoLogin">登录</button>
      <button @click="gotoRegister">注册</button>
    </div>
    <div class="container">
      <div class="cmpt-container2">
        <!-- <div class="competition-wrapper" style="diplay: flex"> -->
        <div class="competition__avatar">
          <img :src="this.image" />
        </div>
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
        <!-- </div> -->
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
              <span class="el-menu-item">参赛信息</span>
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
            <div id="ranks">
              <p id="rank">
                <i class="bg-img"></i><span class="page-title">排行榜</span>
              </p>
            </div>
            <table id="tbl" class="tbl" cellpadding="0" cellspacing="0">
              <thead>
                <tr>
                  <th class="th1">
                    <div class="table_container">
                      <span class="item-line1">排名</span>
                    </div>
                  </th>
                  <th class="th2">
                    <div class="table_container">
                      <span class="item-line2">提交队伍</span>
                    </div>
                  </th>
                  <th class="th3">
                    <div class="table_container">
                      <span class="item-line3">提交时间</span>
                    </div>
                  </th>
                  <th class="th4">
                    <div class="table_container">
                      <span class="item-line4">最高得分</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of compRank" :key="item.id">
                  <td>
                    <div class="table_container">
                      <span class="item-line1">{{ item.upResultId }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="table_container">
                      <span class="item-line2">{{ item.groupName }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="table_container">
                      <span class="item-line3">{{ item.updateTime }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="table_container">
                      <span class="item-line3">{{ item.score }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 参赛队伍  -->
          <div v-show="teamVisible" class="team">
            <div id="uploadsets">
              <p id="set">
                <i class="bg-img"></i><span class="page-title">上传数据集</span>
                <span class="data-train" style="display: block">
                  <input
                    id="dataTrain"
                    type="file"
                    placeholder="请输入比赛名称"
                  />
                </span>
                <button class="confirm-upload" @click="submitCompResult">
                  确定
                </button>
              </p>
            </div>
            <div id="teams">
              <p id="team">
                <i class="bg-img"></i><span class="page-title">参赛队伍</span>
              </p>
            </div>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      // bodyBgImage: "url(" + require("./../assets/img/R.jpeg") + ")",
      compId: this.$route.query.compId,
      name: this.$route.query.name,
      compyType: this.$route.query.compType,
      image: decodeURIComponent(this.$route.query.img),
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
      compRank: [],
      teamData: [],
    };
  },
  mounted() {
    console.log("初始化详情");
    console.log("11111" + decodeURIComponent(this.$route.query.img));
    // this.util.setBodyBackGround();
    console.log(this.$route.query);
    this.getDetailInfo();
    this.getCompDataEval();
    this.getCompProblem();
    this.getCompDataName();
    this.getCompRanking();
    this.compRank = [
      {
        upResultId: 1,
        groupName: "阳光炼丹炉",
        updateTime: "2022-03-03 11:27",
        score: 0.7437505,
      },
      {
        upResultId: 2,
        groupName: "尼古拉斯-土土",
        updateTime: "2022-03-09 23:27",
        score: 0.9437505,
      },
      {
        upResultId: 3,
        groupName: "代码搬运工",
        updateTime: "2022-03-14 23:27",
        score: 0.8437505,
      },
      {
        upResultId: 4,
        groupName: "我吃西红柿",
        updateTime: "2022-03-08 16:27",
        score: 0.5437505,
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
      this.setDomHeight("evalCriteria", "criteria");
    } else if (this.pageId === "3") {
      console.log("pageId");

      document.getElementById("ranks").style.height =
        document.getElementById("rank").getBoundingClientRect().height + "px";
      let tableList = Array.prototype.slice.call(
        document.querySelectorAll(".table_container")
      );
      tableList.forEach((item) => {
        item.style.width =
          item.children[0].getBoundingClientRect().width + "px";

        item.style.height =
          item.children[0].getBoundingClientRect().height + "px";
      });
    } else if (this.pageId === "4") {
      this.setDomHeight("uploadsets", "set");
      // document.getElementById("uploadsets").style.height =
      //   document.getElementById("set").getBoundingClientRect().height + "px";
      document.getElementById("teams").style.height =
        document.getElementById("team").getBoundingClientRect().height + "px";
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
          this.util.BASE_URL +
            "/competition/getCompRule?compId=" +
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
          this.util.BASE_URL +
            "/competition/getCompDataEval?compId=" +
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
          this.util.BASE_URL +
            "/competition/getCompProblem?compId=" +
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
        .post(this.util.BASE_URL + "/competition/getCompDataName", getParams)
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

    getCompRanking() {
      let getParams = {
        compId: this.$route.query.compId,

        // compId: "28",
      };

      axios
        .post(this.util.BASE_URL + "/competition/getCompRanking", getParams)
        .then((data) => {
          console.log("获取排行榜", data);
          if (data.data.status === "1") {
            console.log(data.data.compRank);
            this.compRank = data.data.compRank;
            console.log("排行榜", this.compRank);
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
        .post(this.util.BASE_URL + "/competition/downCompData", getParams)
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
    submitCompResult() {
      console.log("上传数据");
      let myFormData = new FormData();

      myFormData.append(
        "uploadResultFile",
        document.getElementById("dataTrain").files[0]
      );
      myFormData.append("compId", this.$route.query.compId);
      axios
        .post(this.util.BASE_URL + "/competition/submitCompResult", myFormData)
        .then((data) => {
          if (data.data.status == "1") {
            alert("上传数据成功");
            console.log("上传数据成功");
            // this.$router.push({ path: "/competition" });
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    gotoLogin() {
      this.$router.push({ path: "/login" });
    },
    gotoRegister() {
      this.$router.push({ path: "/register" });
    },
    gotoIndex() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
.headers {
  width: 100%;
  height: 25px;
  background: #000;
}
.headers span {
  color: #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  margin-left: 100px;
}
.headers button {
  margin-top: -2px;
  /* float: right; */
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
.headers button:last-child {
  /* margin-right: 100px; */
  margin-left: -30px;
  background: #00c1de;
}
.login {
  margin-left: 450px;
}
.container {
  width: 550px;
  height: 100%;
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom: 20px;

  /* border: 1px solid red; */
}
.el-menu li {
  list-style: none;
  display: inline-block;
}
.cmpt-container2 {
  /* margin-left: 100px; */
  width: 77.33333vw;
  height: 100px;
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
  width: 100px;
  height: 75px;
  vertical-align: middle;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 6px;
  margin-left: 27px;
  margin-top: 15px;
}
.competition-info {
  /* margin-left: 260px; */
  padding-left: 24px;
  padding-top: 20px;
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
  /* padding-left: 20px; */
}
.competition__sponsor-icon {
  margin-left: -9.26667vw;
}
.competition__sponsor p {
  font-size: 1.26667vw;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #888;
  line-height: 2.66667vw;
  /* display: inline-block; */
  transform: scale(0.6, 0.6);
  transform-origin: left;
  width: 94.26667vw;
  margin-left: 15.6vw;
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
  margin-top: 20px;
}
.page-content p,
.table_container span,
.team-slogan span {
  color: inherit;
  font-family: inherit;
  font-size: 1.6vw;
  line-height: 2em;
  display: block;
  transform: scale(0.5, 0.5);
}
.table_container span {
  transform-origin: left top;
}
.page-content p,
.team-slogan span {
  transform-origin: left top;
  width: 129.2vw;
  position: relative;
}
.table_container span,
.team-slogan span {
  /* margin-top: 3px; */

  height: 20px;
  color: #909399;
}

.table_container {
  /* border: 1px solid red; */
  padding-top: 5px;
  padding-bottom: 5px;
  margin: auto;
}
.table_container span {
  color: #666;
  /* border: 1px solid red; */
}
.table_container div,
.team-slogan {
  height: 20px;
}
#tbl {
  /* margin: 20px; */
  margin-bottom: 20px;
  margin-left: 10px;
}
#tbl tr {
  text-align: center;
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
  /* margin-top: 20px; */
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
.tbl {
  width: 440px;
}
.th1 {
  width: 60px;
}
.th2 {
  width: 140px;
}
.th3 {
  width: 130px;
}
.th4 {
  width: 110px;
}
.item-line1 {
  width: 120px;
}
.item-line2 {
  width: 280px;
}
.item-line3 {
  width: 260px;
}
.item-line4 {
  width: 220px;
}
.data-train {
  display: block;
  margin-left: 30px;
  margin-top: 5px;
}
.confirm-upload {
  border: none;
  outline: none;
  background-color: rgb(135, 208, 104);
  color: #fff;
  /* padding: 10px; */
  width: 200px;
  height: 40px;
  border-radius: 20px;
  margin-left: 250px;
  margin-top: 40px;
  font-size: 18px;
}
</style>
