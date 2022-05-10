<template>
  <div>
    <div class="header">
      <!-- <span>首页</span> -->
      <span @click="gotoPublish">我要发布</span>
      <button class="login" @click="gotoLogin">登录</button>
      <button @click="gotoRegister">注册</button>
    </div>
    <div class="cmpt-container1" id="cmptContainer">
      <div
        class="compt-item"
        v-for="item of competList"
        :key="item.key"
        @click="handelDetails(item.compId, item.name, item.compType, item.img)"
      >
        <img class="image" :src="item.img" alt="" />

        <div class="compt-info">
          <div class="compt__header">
            <a
              class="el-tooltip compt__title item"
              aria-describedby="el-tooltip-2560"
              tabindex="0"
            >
              {{ item.name }}
            </a>
            <span class="compt__cmpt-type">{{ item.compType }}</span>
          </div>
          <div class="compt__summary">
            <div class="compt__oview">
              <div class="cmp-date">比赛开始日期: {{ item.startDate }}</div>
              <div class="cmp-date">比赛结束日期: {{ item.endDate }}</div>
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
  name: "Competition",
  pageId: 0,
  data() {
    return {
      competList: [],
      page: 1,
    };
  },
  mounted() {
    console.log("初始化列表");
    // this.util.setBodyBackGround();
    this.getCompetitioninfo();
    window.addEventListener("scroll", this.scrollMethod);

    console.log("全局路径" + process.env.URL_PATH);
  },
  destroyed() {
    console.log("离开当前页面");
    window.removeEventListener("scroll", this.scrollMethod);
  },
  methods: {
    scrollMethod() {
      console.log("滚动监听");
      console.log(
        document.documentElement.scrollTop,
        window.innerHeight,
        document.body.scrollHeight
      );
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        this.page++;
        console.log("拉到底了", this.page);
        axios
          .post(this.util.BASE_URL + "/competition/getCompList", {
            page: this.page,
          })
          .then((data) => {
            console.log("获取的数据1111");
            console.log(data);
            if (data.data.status === "1") {
              this.competList = this.competList.concat(data.data.compList);
              console.log(this.competList);
              if (data.data.lastPage === "1") {
                console.log("最后一页了");
                window.removeEventListener("scroll", this.scrollMethod);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    handelDetails(compId, name, compType, image) {
      console.log("比赛id是", name);
      this.$router.push({
        path: "/detail",
        query: { compId: compId, name: name, compType: compType, img: image },
      });
    },
    getCompetitioninfo() {
      console.log("请求数据");
      // axios.post('http://175.24.79.108:8080/subEval/getImageEvalType?shortUrl=BVrqAb').then((data)=>{
      //   console.log(data)
      // }).catch((error)=>{
      //   console.log(error)

      // })
      axios
        .post(this.util.BASE_URL + "/competition/getCompList", {
          page: this.page,
        })
        .then((data) => {
          console.log("获取的数据");
          if (data.data.status === "1") {
            this.competList = data.data.compList;
            console.log(this.competList);
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
    gotoPublish() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style scoped>
.compt__header {
  padding-left: 11px;
}
.header {
  width: 100%;
  height: 25px;
  background: #000;
  padding-left: 70px;
}
.header span {
  color: #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  /* margin-left: 100px; */
}
.header button {
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
.login {
  margin-left: 450px;
}
.header button:last-child {
  /* margin-right: 100px; */
  margin-left: -30px;
  background: #00c1de;
}
.cmpt-container1 {
  margin-left: 100px;
  width: 77.33333vw;
  height: 100%;
  margin-top: 12px;
  margin-bottom: 20px;
}
.compt-item {
  background: #fff;
  width: 100%;
  margin-bottom: 7px;
  position: relative;
  overflow: hidden;
  border: 1px solid #f5f5f5;
  display: flex;
}
.compt__avatar {
  height: 82px;
  width: 120px;
}
.compt__avatar-container {
  margin-top: 15px;
  margin-left: 15px;
}
.compt-info {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5px;
  width: 400px;
}
.compt__cmpt-type {
  padding-left: 12px;
  padding-right: 12px;
  height: 20px;
  line-height: 20px;
  border-radius: 3px;
  background-color: rgb(135, 208, 104);
  font-size: 12px;
  transform: scale(0.5);
  font-family: PingFangSC-Regular, PingFang SC;
  color: #fff;
  text-align: center;
  vertical-align: top;
  display: inline-block;
}
.compt__title {
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  /* transform: scale(0.8); */
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #222;
  line-height: 22px;
  text-decoration: none;
  /* margin-left: -26px; */
}
.compt__summary {
  width: 400px;
  margin-top: -5px;
}
.compt__oview {
  /* display: flex; */
  width: 600px;
  margin-top: -5px;
}
.compt__oview div:last-child {
  margin-top: -5px;
}
.cmp-date {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #949fb8;
  transform: scale(0.6, 0.6);
  transform-origin: left;
  /* display: inline-block; */
  margin-left: 1.53333vw;
}
.image {
  width: 70px;
  height: 50px;
  object-fit: cover;
  margin-top: 14px;
  margin-left: 20px;
}
</style>
