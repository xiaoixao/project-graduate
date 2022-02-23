/*
 * @Author: your name
 * @Date: 2022-02-21 10:15:02
 * @LastEditTime: 2022-02-21 10:31:41
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \official-webe:\vue+element UI\shop\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import ('../components/login/Login')
const Home = () => import('../components/home/Home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
  ]
})
