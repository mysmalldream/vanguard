import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  // mode:'history',  
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/readme",
      component: resolve => require(["../components/common/Home.vue"], resolve),
      children: [
        {
          path: "/",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/Readme.vue"], resolve) //默认登录进去后显示欢迎页,
        },
        {
          path: "/ProductManage",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ProductManage.vue"], resolve) //产品信息管理
        },
        {
          path: "/ProductnewAdd",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ProductnewAdd.vue"], resolve) //产品信息新增
        },
        {
          path: "/ProductEdit",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/ProductEdit.vue"], resolve) //产品信息修改
        },
        {
          path: "/UserManagement",
          meta: { requiresAuth: true }, // 添加该字段，表示进入这个路由是需要登录的
          component: resolve =>
            require(["../components/page/UserManagement.vue"], resolve) // 用户管理
        },
        {
          path: "/Sparpreis",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/Sparpreis.vue"], resolve) // 华润商品
        },
        {
          path: "/SparpreisNewAdd",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/SparpreisNewAdd.vue"], resolve) // 华润商品新增
        },
        {
          path: "/SparpreisEdit",
          meta: { requiresAuth: false },
          component: resolve =>
            require(["../components/page/SparpreisEdit.vue"], resolve) // 华润商品修改
        },
      ]
    },
    {
      path: "/login",
      // name:'login',
      component: resolve => require(["../components/page/Login.vue"], resolve) //默认首页
    }
  ]
});



export default router;
