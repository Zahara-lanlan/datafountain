<template>
  <div>
    <div class="header2">
      <span @click="gotoIndex">首页</span>
      <button @click="gotoPublish">创建比赛</button>
      <button @click="gotoIndex">已发布比赛</button>
    </div>
    <div class="pub-content">
      <p class="pub-title">创建比赛</p>

      <div class="pub-item1">
        <div class="pub-list1">
          <span>比赛名称</span>
          <input id="name" type="text" placeholder="请输入比赛名称" />
        </div>
        <div class="pub-list1">
          <span>比赛类型</span>
          <div class="divInput">
            <div class="input" @click="openValue">
              <input
                v-model="value"
                readonly="true"
                type="text"
                class="input-box"
                placeholder="未选择"
              />
              <img src="../assets/img/arrow.png" alt="" />
            </div>
            <div class="list" v-show="show">
              <ul>
                <li
                  @click="getvalue(index, item)"
                  v-for="(item, index) in selectClassData"
                  :key="item.index"
                >
                  {{ item.title }}
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="option" style="display: inline-block">
          <select class="pub-type" @change="selectClass($event)">
            <option value="NONE">未选择</option>
            <option
              v-for="(options, id) in selectClassData"
              :key="id"
              :value="options.title"
            >
              {{ options.title }}
            </option>
          </select>
        </div> -->

          <!-- <input type="text" id="compType" placeholder="请输入比赛类型" /> -->
        </div>
        <div class="pub-list11">
          <span>比赛开始时间</span>
          <div class="timePicker">
            <a-date-picker
              @change="changeStartTime"
              default-value="2021-01-01"
            />
          </div>
        </div>
        <div class="pub-list11">
          <span>比赛结束时间</span>
          <div class="timePicker">
            <a-date-picker @change="changeEndTime" default-value="2022-01-01" />
          </div>
        </div>
        <button class="confirm1" @click="sumbitInfo">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
//设置中文
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
Vue.use(DatePicker);
export default {
  name: "Setting",
  data() {
    return {
      selectClassData: [
        { title: "未选择" },
        { title: "分类" },
        { title: "图像修复" },
        { title: "图像分割" },
      ],
      show: false,
      value: "",
      compType: "",
      moment, // 日历
      startTime: "2021-01-01",
      endTime: "2022-01-01",
    };
  },
  methods: {
    //类别选中
    selectClass(event) {
      console.log("选中的类别", event.target.value);
      this.compType = event.target.value;
    },
    sumbitInfo() {
      let params = {
        name: document.getElementById("name").value,
        compType: this.compType,
        startDate: this.startTime,
        endDate: this.endTime,
      };
      axios
        .post(this.util.BASE_URL + "/competition/createComp", params)
        .then((data) => {
          if (data.data.status == "1") {
            console.log("创建比赛成功");
            this.$router.push({
              path: "/setevaluate",
              query: { compId: data.data.compId },
            });
          } else {
            console.log(data.data.msg);
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeStartTime(date, dateString) {
      console.log(date, dateString);
      this.startTime = dateString;
      console.log("开始日期", this.startTime);
    },
    changeEndTime(date, dateString) {
      console.log(date, dateString);
      this.endTime = dateString;
      console.log("结束日期", this.endTime);
    },

    changeHandel() {
      console.log("22223333");
    },
    openValue() {
      this.show = !this.show;
    },
    getvalue(index, item) {
      this.value = item.title;
      this.show = false;
      this.compType = item.title;
    },
    gotoIndex() {
      this.$router.push({ path: "/" });
    },
    gotoPublish() {
      this.$router.push({ path: "/setting" });
    },
  },
  mounted() {
    // 进来的时候调用添加
    console.log("初始化登录");
    document.addEventListener("click", (e) => {
      console.log(e.target);
      // this.handelInputList();
      if (e.target !== document.querySelector(".input-box")) {
        this.show = false;
      }
    });
  },
};
</script>
<style>
.ant-calendar-picker-container {
  transform: scale(0.5) !important;
  transform-origin: top left !important ;
}
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

input::-webkit-input-placeholder {
  color: #a8adb2;
}
.pub-title {
  font-size: 16px;
  color: #1a1a1a;
}
.pub-list1,
.pub-list11 {
  border-bottom: 1px solid #eceeef;
  margin-top: 5px;
}
.pub-type {
  margin-left: -28px;
  border: none;
  font-size: 16px;
  color: #a8adb2;
  /* zoom: 0.6; */
  transform: scale(0.5, 0.5);
  outline: none;
  width: 200px;
}

.pub-type select:focus {
  width: 100%;
  border: none;
  height: 3.6rem;
  background: red;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  vertical-align: top;
  padding-left: 1rem;
}

.pub-item1 {
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
.pub-list1 span,
.pub-list11 span {
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
.pub-list1 input {
  font-size: 2.13333vw;
  color: #a8adb2;
  /* transform: scale(0.5, 0.5); */
  transform-origin: left;
  border: none;
  margin-left: 6vw;
  /* width: 29.33333vw; */
  outline: none;
  zoom: 0.5;
  width: 400px;
  /* border: 1px solid red; */
  position: absolute;
  top: px;
  margin-top: 10px;
}
.confirm1 {
  /* background-image: linear-gradient(140deg, #5a92b7 0%, #584dc4 100%); */
  background-color: rgb(135, 208, 104);
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
  margin-left: 100px;
}
.timePicker {
  display: inline-block;
  width: 200px;
  margin-left: -34px;
}

.divInput {
  /* margin: 200px; */
  display: inline-block;
}
ul li {
  list-style: none;
}
.input {
  width: 140px;
  height: 15px;
  line-height: 40px;
  padding-left: 10px;
  position: relative;
}
.input-box {
  border: none;
  outline: none;
  width: 90%;
  height: 55px !important;
}
.input img {
  position: absolute;
  width: 10px;
  right: 50px;
  top: 18%;
}
.list {
  width: 115px;
  border: 0.13333vw solid #fff;

  box-shadow: 0 0.26667vw 1.06667vw rgb(0 0 0 / 15%);

  overflow: hidden;
  position: absolute;
  z-index: 999;
  background: rgb(255, 255, 255);
}
.list ul {
  padding: 0;
  margin: 0;
}
.list ul li {
  width: 100%;
  /* height: 30px; */
  cursor: pointer;
  /* line-height: 30px; */
  padding-left: 10px;
  transform: scale(0.6);
}
.list ul li:hover {
  background-color: #cccccc;
}
.input-box {
  margin-top: -13px !important;

  margin-left: 28px !important;
}
.header2 {
  width: 100%;
  height: 25px;
  background: #000;
}
.header2 span {
  color: #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  margin-left: 100px;
}
.header2 button {
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
.header2 button:last-child {
  /* margin-right: 100px; */
  margin-right: -42px;
  background: #00c1de;
}
</style>
