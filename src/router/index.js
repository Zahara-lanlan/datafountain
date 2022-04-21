import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/**
 * 路由配置信息
 */
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "Competition",
      component: () => import("@/pages/competition.vue"),
      meta: {
        title: "比赛",
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/login.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      path: "/detail",
      name: "Detail",
      component: () => import("@/pages/detail.vue"),
      meta: {
        title: "详情",
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/login.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/register.vue"),
      meta: {
        title: "注册",
      },
    },
    {
      path: "/setting",
      name: "Setting",
      component: () => import("@/pages/setting.vue"),
      meta: {
        title: "设置",
      },
    },
    {
      path: "/setrule",
      name: "SetRule",
      component: () => import("@/pages/set-rule.vue"),
      meta: {
        title: "规则",
      },
    },
    {
      path: "/setdata",
      name: "SetData",
      component: () => import("@/pages/set-data.vue"),
      meta: {
        title: "数据",
      },
    },

    {
      path: "/setquestion",
      name: "SetQuestin",
      component: () => import("@/pages/set-question.vue"),
      meta: {
        title: "常见问题",
      },
    },
    {
      path: "/upload",
      name: "UploadData",
      component: () => import("@/pages/upload-data.vue"),
      meta: {
        title: "上传数据集",
      },
    },
    {
      path: "/evaluation",
      name: "Evaluation",
      component: () => import("@/pages/evaluation.vue"),
      meta: {
        title: "评价",
      },
    },
    {
      path: "/setevaluate",
      name: "SetEvaluate",
      component: () => import("@/pages/set-evaluate.vue"),
      meta: {
        title: "评估指标",
      },
    },
  ],
});
