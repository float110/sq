<script setup>

import NavBar from "@/components/navbar/NavBar.vue";
import {onMounted} from "vue";
import api from "@/js/http/api.js";
import {useUserStore} from "@/stores/user.js";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const user = useUserStore()
onMounted(async ()=>{
  try{
    const res = await api('api/user/account/get_user_info/')
    const data = res.data
    if(data.result === 'success'){
      user.setUserInfo(data)
    }
  }catch (err){
    console.log(err)
  }finally {
    user.setHasPulledUserInfo(true)
  }

  if(route.meta.needLogin && !user.isLogin()){
    await router.replace({
      name:'user-account-login-page',
    })
  }

})
</script>

<template>
  <nav-bar>
    <RouterView/>
  </nav-bar>
</template>

<style scoped>

</style>
