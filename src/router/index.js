import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'


 const routes = [
 {
     path: '/',
     name: 'home',
     component: Home
 },
 {
     path: '/about',
     name: 'about',
     component: () => import(/* webpackChunkName: "about" */ '../components/About')
 }

 ,
 {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NoPageFound"*/'../components/404')
 }
 ]



 const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes
 })

 export default router