import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.css'
import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
import '@/mock/index'
import { Swipe, SwipeItem } from 'vant';
const app=createApp(App)
app 
.use(Tab)
.use(Tabs)
.use(Swipe)
.use(SwipeItem)
.use(router).mount('#app')
