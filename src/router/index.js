import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import('../views/home/home')
  },
  {
    path:'/car',
    component:() => import('../views/car/car')
  },
  {
    path:'/category',
    component:() => import('../views/category/category')
  },
  {
    path:'/profile',
    component:() => import('../views/profile/profile')
  }
]

const router = new VueRouter({
  routes,
  model:'history'
})

export default router
