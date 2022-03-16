const bodyBgImage = "url(" + require("./../assets/img/R.jpeg") + ")";
const util = {
  BASE_URL: "http://175.24.79.108:8080",
  // 添加body图片
  setBodyBackGround() {
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundImage = bodyBgImage;
  },
  // 清除背景图
  clearBodyBackGround() {
    document.body.style.backgroundImage = "";
  },
};
export default util;
