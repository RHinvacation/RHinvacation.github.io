// import { createMemoryHistory, createRouter } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import PwLogin from '../components/Login/LoginComps/PwLogin.vue'
import QrLogin from '../components/Login/LoginComps/QrLogin.vue'
import NotFound from '../views/NotFound.vue'
import ForgetPassword from '../views/ForgetPassword.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    redirect: '/login/PwLogin', /* 默认重定向到 PwLogin */
    children: [
      { path: '/login/PwLogin', name: 'pwlogin', component: PwLogin },
      { path: '/login/QrLogin', name: 'qrlogin', component: QrLogin }
    ]
  },
  { path: '/forgetpassword', name: 'forgetpassword', component: ForgetPassword },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),  
  routes,
})

export default router