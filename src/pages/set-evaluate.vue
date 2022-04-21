<template>
  <div>
    <div class="header1">
      <span>首页</span>
      <button @click="gotoIndex">退出</button>
    </div>
    <div class="pub-content">
      <h2 class="title">评委主观评价</h2>

      <div class="wrapper">
        <div class="item">
          <span>推荐数据集</span>
          <div>
            <select name="" id="">
              <option value="">未选择</option>
              <option value="1">分类</option>
              <option value="1">图像修复</option>
              <option value="1">图像分割</option>
            </select>
          </div>
        </div>
        <div class="item second-item">
          <span>客观指标</span>
          <div>
            <input type="radio" name="target" id="yes" />
            <label for="yes">是</label>
            <input type="radio" name="target" id="no" />
            <label for="no">否</label>
          </div>
        </div>
        <div class="sub-item">
          <input id="checkbox1" type="checkbox" />
          <label for="checkbox1">PSNR</label> <br />
          <input id="checkbox2" type="checkbox" />
          <label for="checkbox2">SSIM</label> <br />
          <input id="checkbox3" type="checkbox" />
          <label for="checkbox3">IOU</label> <br />
          <input id="checkbox3" type="checkbox" />
          <label for="checkbox3">FI</label> <br />
        </div>
        <div class="item third-item">
          <span>主观评价</span>
          <div>
            <input type="radio" name="evaluate" value="yess" />
            <label for="yess">是</label>
            <input type="radio" name="evaluate" value="noo" />
            <label for="noo">否</label>
          </div>
        </div>
        <div class="item fourth-item">
          <span>颜值评分</span>
          <div>
            <input id="checkbox3" type="checkbox" />
            <label for="checkbox3">评分模型</label> <br />
            <input id="checkbox3" type="checkbox" />
            <label for="checkbox3">旷视API</label> <br />
            <input id="checkbox3" type="checkbox" />
            <label for="checkbox3">主观评价</label> <br />
          </div>
        </div>
      </div>

      <button class="submit" @click="nextToStep">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetEvaluate",
  data() {
    return {
      selectClassData: [
        { title: "未选择" },
        { title: "分类" },
        { title: "图像修复" },
        { title: "图像分割" },
      ],
      show: false,
    };
  },
  methods: {
    nextToStep() {
      this.$router.push({
        path: "/setrule",
        query: { compId: this.$route.query.compId },
      });
    },
    gotoIndex() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    // 进来的时候调用添加
    console.log("初始化登录");
  },
};
</script>
<style>
.pub-content {
  margin: auto;
  background: #ffffff;
  padding: 30px;
  margin-top: 12px;
  width: 520px;
  border: 0.13333vw solid #f5f5f5;
  margin-bottom: 2.66667vw;
  height: 100%;
}

.submit {
  background-color: rgb(135, 208, 104);
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
  margin-left: 175px;
}
.title {
  margin: 0;
  font-size: 1.6vw;
  line-height: 1.5em;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin-left: 1.73333vw;
  margin-bottom: 5px;
}
.wrapper {
  border-radius: 1.06667vw;
  margin-left: 5.33333vw;
  border: 0.13333vw solid #f5f5f5;
  margin-right: 5.33333vw;
  padding-top: 2.66667vw;
  padding-left: 5.33333vw;
  padding-bottom: 2.66667vw;
  padding-right: 5.33333vw;
}
.item {
  display: flex;
}
.second-item {
  margin-top: 20px;
}
.third-item,
.fourth-item {
  margin-top: 5px;
}
.item div {
  margin-left: 37px;
}
.sub-item {
  margin-left: 128px;
}
.item span {
  font-family: FZLTHJW--GB1-0;
  font-size: 2.13333vw;
  transform: scale(0.5, 0.5);
  transform-origin: left;
  color: #5f656b;
  padding-top: -0.66667vw;
  display: inline-block;
  margin-left: 3.33333vw;
  /* border: 1px solid red; */
}

select {
  margin-left: -7.73333vw;
  border: 0.13333vw solid #a8adb2;
  font-size: 2.13333vw;
  color: #a8adb2;
  transform: scale(0.5, 0.5);
  outline: none;
  width: 25.33333vw;
}

.wrapper input {
  font-size: 12px;
  transform: scale(0.7);
  /* zoom: 4; */
}
.wrapper label {
  font-size: 0.6vw;
  transform: scale(0.8);
  display: inline-block;
  color: #5f656b;
}

.header1 {
  width: 100%;
  height: 25px;
  background: #000;
}
.header1 span {
  color: #cdcdcd;
  font-size: 14px;
  display: inline-block;
  transform: scale(0.5);
  margin-left: 100px;
}
.header1 button {
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
</style>
