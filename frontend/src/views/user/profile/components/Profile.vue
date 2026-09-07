<script setup>
import {ref, watch} from "vue";

const props = defineProps(['profile'])
const myProfile = ref(props.profile)

watch(() => props.profile, newVal => {
  myProfile.value = newVal
})
</script>

<template>
  <fieldset class="fieldset">
    <label class="label text-base">简介</label>
    <textarea v-model="myProfile" class="textarea w-108" rows="10" ></textarea>
  </fieldset>
</template>

<style scoped>

</style>