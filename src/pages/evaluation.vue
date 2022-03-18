<template>
  <div class="pub-content">
    <h2 class="title">评委主观评价</h2>
    <table cellpadding="0" cellspacing="0">
      <tbody v-for="item in evaluaData" :key="item.id">
        <tr>
          <th class="item-img">
            <img :src="item.imgBefore" alt="" />
          </th>
          <th class="item-img">
            <img :src="item.imgAfter" alt="" />
          </th>
          <th class="item-text">
            <div>
              <span class="txt">相似合理行</span>
              <select name="" id="">
                <option value="">未选择</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <button class="submit">确定</button>
  </div>
</template>

<script>
export default {
  name: "Evaluation",
  data() {
    return {
      evaluaData: [
        {
          imgBefore: require("./../assets/img/head1.jpg"),
          imgAfter: require("./../assets/img/head4.png"),
        },
        {
          imgBefore: require("./../assets/img/head3.png"),
          imgAfter: require("./../assets/img/head4.png"),
        },
        {
          imgBefore: require("./../assets/img/head5.png"),
          imgAfter: require("./../assets/img/head6.png"),
        },
      ],
    };
  },
  methods: {},
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
  margin-top: 20px;
  width: 520px;
  border: 0.13333vw solid #f5f5f5;
  margin-bottom: 2.66667vw;
  height: 100%;
}
table {
  margin: auto;
}
tbody {
  width: 400px;
}
/* tbody tr{
    padding: 10px;
} */
tbody img {
  width: 70px;
  height: 77px;

  padding: 5px;
}
.item-img {
  width: 100px;
}
.item-text {
  width: 200px;
}
th {
  font-weight: normal;
}
.txt {
  font-size: 2.4vw;
  transform: scale(0.5, 0.5);
  display: inline-block;
  color: #909399;
}
select {
  margin-left: -28px;
  border: 1px solid #a8adb2;
  font-size: 16px;
  color: #a8adb2;
  transform: scale(0.5, 0.5);
  outline: none;
  width: 100px;
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
</style>
