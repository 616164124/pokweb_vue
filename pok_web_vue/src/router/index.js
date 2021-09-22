import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from "../components/webpage/Login";
import Home from "../components/webpage/Home";
import Menu_100 from "../components/webpage/Menu_100";

Vue.use(Router)


export default new Router({
    routes: [
      {
        path: '/',
        mode: 'history',
        base: '/vue/',
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
      }, {
        path: "/menu_100",
        name: "menu_100",
        component: Menu_100,
      }

    ]
  },
)

