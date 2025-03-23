<template>
    <van-tabs v-model:active="active">
        <van-tab title="标签 1" name="a"></van-tab>
    
    </van-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const list=ref([])

const active = ref(0)
axios({
    url: '/swiperList',
    method: 'get'
}).then(res=>{
    console.log(res.data)
    list.value=res.data
})
</script>