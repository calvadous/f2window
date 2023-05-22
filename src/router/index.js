import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path:'/',
    name:'home',
    component: ()=> import('@/views/Home/HomePage.vue')
  },
  {
    path:'/actual',
    name:'actual',
    component: () => import('@/views/Actual/ActualTable.vue')
  },
  {
    path:'/contrast',
    name:'contrast',
    component: () => import('@/views/contrast/contrastPage.vue'),
    meta:{
      keepAlive:true,
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
