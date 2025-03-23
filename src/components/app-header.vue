
<template>
    <header class="app-header">
      <!-- logo -->
      <div class="logo">
        <i class="iconfont icon-bilibili"></i>
      </div>
      <!-- 搜索 -->
      <!-- eslint-disable-next-line -->
      <div class="search" @click="handleJump">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <!-- 头像 -->
      <div class="face">
        <img :src="require('@/assets/images/login.png')" alt="">
      </div>
      <!-- 下载按钮 -->
      <div class="down-app">
        <a href="https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe?t=20220722&spm_id_from=333.47.b_646f776e6c6f61642d6c696e6b.9">
          下载app
        </a>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  const myRouter = useRouter()
  const handleJump = () => {
    myRouter.push({ path: '/search' })
  }
  </script>
  
  <style scoped lang="less">
  .app-header {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 16px 24px;
    .logo {
      flex: 1;
      .icon-bilibili {
        color: #fb7299;
        font-size: 20px;
      }
    }
    .search {
      .icon-sousuo {
        color: #ccc;
        font-size: 20px;
      }
    }
    .face {
      padding: 0 5px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .down-app {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      color: #fff;
      background-color: hsl(343, 94%, 72%);
      padding: 5px 5px;
      border-radius: 5px;
    }
  }
  </style>
  