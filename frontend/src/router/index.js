import { createRouter, createWebHistory } from 'vue-router'
import HomepageIndex from "@/views/homepage/HomepageIndex.vue";
import FriendIndex from "@/views/friend/FriendIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";
import LoginIndex from "@/views/user/account/LoginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import ProfileIndex from "@/views/user/profile/ProfileIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:HomepageIndex,
      name:'home-page'
    },
    {
      path:'/friend/',
      component:FriendIndex,
      name:'friend-page'
    },
    {
      path:'/create/',
      component:CreateIndex,
      name:'create-page'
    },
    {
      path:'/404/',
      component:NotFoundIndex,
      name:'not-found'
    },
    {
      path:'/user/account/login/',
      component:LoginIndex,
      name:'user-account-login-page'
    },
    {
      path:'/user/account/register/',
      component:RegisterIndex,
      name:'user-account-register-page'
    },
    {
      path:'/user/space/:user_id/',
      component:SpaceIndex,
      name:'user-space-page'
    },
    {
      path:'/profile/',
      component:ProfileIndex,
      name:'profile-page'
    },
    {
      path: '/:pathMatch(.*)*',
      component:NotFoundIndex,
      name:'not foune'
    },
  ],
})

export default router
