import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/webpage/Login";
import Home from "../components/webpage/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: '登录'
    }, {
      path: "/home",
      name: "home",
      component: Home,
    }

  ]
})
