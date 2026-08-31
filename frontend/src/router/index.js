import {createRouter, createWebHistory} from 'vue-router'
import HomepageIndex from "@/views/homepage/HomepageIndex.vue";
import FriendIndex from "@/views/friend/FriendIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";
import LoginIndex from "@/views/user/account/LoginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import ProfileIndex from "@/views/user/profile/ProfileIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";
import {useUserStore} from "@/stores/user.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomepageIndex,
            name: 'home-page',
            meta: {
                needLogin: false,
            }
        },
        {
            path: '/friend/',
            component: FriendIndex,
            name: 'friend-page',
            meta: {
                needLogin: true,
            }
        },
        {
            path: '/create/',
            component: CreateIndex,
            name: 'create-page',
            meta: {
                needLogin: true,
            }
        },
        {
            path: '/404/',
            component: NotFoundIndex,
            name: 'not-found',
            meta: {
                needLogin: false,
            }
        },
        {
            path: '/user/account/login/',
            component: LoginIndex,
            name: 'user-account-login-page',
            meta: {
                needLogin: false,
            }
        },
        {
            path: '/user/account/register/',
            component: RegisterIndex,
            name: 'user-account-register-page',
            meta: {
                needLogin: false,
            }
        },
        {
            path: '/user/space/:user_id/',
            component: SpaceIndex,
            name: 'user-space-page',
            meta: {
                needLogin: false,
            }
        },
        {
            path: '/profile/',
            component: ProfileIndex,
            name: 'profile-page',
            meta: {
                needLogin: false,
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundIndex,
            name: 'not found',
            meta: {
                needLogin: false,
            }
        },
    ],
})

router.beforeEach((to,from)=>{
    const user = useUserStore()
    if(to.meta.needLogin && user.hasPulledUserInfo && !user.isLogin()){
        return {
            name:"user-account-login-page"
        }
    }
    return true
})

export default router
