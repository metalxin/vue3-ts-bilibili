<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const list = ref<ISwiper[]>([])
interface ISwiper {
    imgSrc: string,
    link: string
}
axios({
    url: '/swiperList',
    method: 'get'
}).then(res => {
    console.log(res.data)
    list.value = res.data.result
})
</script>

<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.imgSrc" >
            <img :src="item.imgSrc">
        </van-swipe-item>
    </van-swipe>
  
</template>

<style scoped>
</style>