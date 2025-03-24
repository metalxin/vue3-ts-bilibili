<script setup lang="ts">
import AppHeader from '@/components/app-header.vue';
import HomeChannel from './components/home-channel.vue';
import HomeSwiper from './components/home-swiper.vue';
</script>

<template>
    <AppHeader></AppHeader>
   
   
    <HomeSwiper></HomeSwiper>
    <HomeChannel></HomeChannel>

    <!-- <h1>Bilibili 主页</h1>
    <router-link to="/video/1">点击去视频详情页</router-link> -->
</template>