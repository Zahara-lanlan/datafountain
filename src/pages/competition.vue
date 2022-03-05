<template>
  <div class="cmpt-container">
    <div
      class="compt-item"
      v-for="item of competList"
      :key="item.key"
      @click="handelDetails(item.compId, item.name, item.compType)"
    >
      <!-- <div class="compt__avatar-container">
        <img
          src="https://wid.s3.cn-north-1.amazonaws.com.cn/uploads/images/2021-12-23/OPPO-6G%E8%B5%9B%E9%A2%98%E5%9B%BE-192402.jpg"
          class="compt__avatar"
        />
      </div> -->
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
          <!-- <div class="compt__sponsor">
            <span> {{ item.cmpUnit }}</span>
          </div> -->
          <div class="compt__oview">
            <div class="cmp-date">
              比赛日期: {{ item.startDate }}-{{ item.endDate }}
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
  data() {
    return {
      bodyBgImage: "url(" + require("./../assets/img/R.jpeg") + ")",
      competList: [
        {
          img: "https://wid.s3.cn-north-1.amazonaws.com.cn/uploads/images/2021-12-23/OPPO-6G%E8%B5%9B%E9%A2%98%E5%9B%BE-192402.jpg",
        },
        {
          img: require("./../assets/img/traffic.png"),
        },
        {
          img: require("./../assets/img/game.jpg"),
        },
        {
          img: require("./../assets/img/game.jpg"),
        },
      ],
    };
  },
  mounted() {
    console.log("初始化列表");
    this.util.setBodyBackGround();
    this.getCompetitioninfo();
  },
  methods: {
    handelDetails(compId, name, compType) {
      console.log("比赛id是", name);
      this.$router.push({
        path: "/detail",
        query: { compId: compId, name: name, compType: compType },
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
        .post("http://175.24.79.108:8080/competition/getCompList", {
          page: "1",
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
  },
  beforeDestroy() {
    // 离开页面的时候清除
    console.log("清除列表");
    this.util.clearBodyBackGround();
  },
};
</script>
<style scoped>
.compt__header {
  padding-left: 11px;
}
.cmpt-container {
  margin-left: 100px;
  width: 77.33333vw;
  height: 100%;
  margin-top: 60px;

  /* border: 1px solid red; */
}
.compt-item {
  background: #fff;
  /* min-height: 150px; */
  width: 100%;
  margin-bottom: 7px;
  position: relative;
  overflow: hidden;
  border: 1px solid #f5f5f5;
  display: flex;
  /* padding-top: 20px; */
}
.compt__avatar {
  /* height: 120px;
  width: 160px; */
  height: 82px;
  width: 120px;
}
.compt__avatar-container {
  margin-top: 15px;
  margin-left: 15px;
}
.compt-info {
  margin-top: 15px;
  margin-bottom: 12px;
  margin-left: 5px;
  width: 400px;
}
.compt__cmpt-type {
  padding-left: 12px;
  padding-right: 12px;
  height: 20px;
  /* width: 40px; */
  line-height: 20px;
  border-radius: 3px;
  /* border: 1px solid #dde2e7; */
  background-color: rgb(135, 208, 104);
  font-size: 12px;
  transform: scale(0.5);
  font-family: PingFangSC-Regular, PingFang SC;
  /* font-weight: 400; */
  color: #fff;
  text-align: center;
  vertical-align: top;
  display: inline-block;
  /* margin-right: 8px; */
}
.compt__title {
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  /* margin-top: 5px; */
  width: 400px;
  margin-top: -5px;
}
.compt__oview {
  display: flex;
  width: 600px;
  margin-top: -5px;
}

.cmp-date {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #949fb8;
  transform: scale(0.6, 0.6);
  transform-origin: left;
  display: inline-block;
  margin-left: 1.53333vw;
}
</style>
