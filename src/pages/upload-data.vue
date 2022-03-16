<template>
  <div class="pub-content">
    <p class="pub-title">上传数据集</p>

    <div class="pub-item5">
      <div class="pub-list5">
        <span>训练集</span>
        <input id="trainFile" type="file" placeholder="请输入比赛名称" />
      </div>
      <div class="pub-list5">
        <span>测试集</span>
        <input type="file" id="testFile" placeholder="请输入比赛类型" />
      </div>
      <button class="confirm5" @click="sumbitInfo">下一步</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UploadData",
  data() {
    return {
      bodyBgImage: "url(" + require("./../assets/img/R.jpeg") + ")",
    };
  },
  methods: {
    sumbitInfo() {
      var myFormData = new FormData();

      myFormData.append(
        "uploadTrainFile",
        document.getElementById("trainFile").files[0]
      );
      myFormData.append(
        "uploadTestFile",
        document.getElementById("testFile").files[0]
      );
      // myFormData.append('compId','31');
      myFormData.append("compId", this.$route.query.compId);
      // let params = {
      //   compId: '31',
      //   //  compId: this.$router.query("compId"),
      //   uploadTrainFile: document.getElementById('trainFile').files[0],
      //   uploadTestFile: document.getElementById('testFile').files[0],
      // };
      axios
        .post(this.util.BASE_URL + "/competition/uploadCompData", myFormData)
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
  },
  mounted() {
    // 进来的时候调用添加
    console.log("初始化登录");
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
.pub-list5 {
  border-bottom: 1px solid #eceeef;
  margin-top: 5px;
  padding-bottom: 10px;
}
.pub-item5 {
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
.pub-list5 span {
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
#trainFile,
#testFile {
  font-size: 14px;
  color: #a8adb2;
  transform: scale(0.5, 0.5);
  transform-origin: left;
  border: none;
  margin-left: 140px;
  outline: none;
}
.confirm5 {
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
  margin-top: 10px;
  margin-left: 120px;
}
input::-webkit-input-placeholder {
  color: #a8adb2;
}
</style>
