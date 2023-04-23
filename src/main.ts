import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import { getRouter } from './router'
/**
 * 状态管理
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
/*
 * vant组件
 * */
import Vant from 'vant'
import 'vant/lib/index.css'
/*
 * 本地主题，覆盖
 * */
import './assets/scss/theme.css'

/*
 * 全局样式
 * */
import './assets/scss/global.scss'

/*
 * 字体样式
 * */
import '@/assets/fonts/font.css'

createApp(App)
	.use(Vant)
	// 使用pinia代替vuex缓存
	.use(createPinia().use(piniaPluginPersist))
	.use(getRouter())
	.mount('#app')
