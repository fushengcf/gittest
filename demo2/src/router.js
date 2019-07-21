import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const AUTH_TOKEN = "watson-token";
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/login.vue')
    },
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './components/CKEditor.vue')
    // },
    {
      path: '/404',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/404.vue')
    },
    { path: "*", redirect: "/404", hidden: true },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/home.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/user.vue')
    },
    {
      path: '/avatar',
      name: 'avatar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Avatar.vue')
    }
  ],
})

router.beforeEach((to,from,next) => {
 const token = localStorage.getItem(AUTH_TOKEN);
  if(to.path==="/login" && token){
    next("/home");
  }else if(to.path!=="/login" && !token){
    next("/404")
  }else{
    next()
  }
});

export default router;