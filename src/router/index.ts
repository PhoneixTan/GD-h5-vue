import { createRouter, createWebHistory, RouteRecordRaw, Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import component from '*.vue'
import { useSystemStore } from '../store/system'

//动态导入所有modules下的路由信息
const modelsFile = import.meta.glob('./modules/**/*.ts', { eager: true })
//路由去中心化
const children =
	Object.keys(modelsFile)
		.map((key: string) => (modelsFile[key] as Record<any, any>).default)
		.flat(1) || []

/**
 * 系统路由信息
 */
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/home', //重定向
		component: () => import('../views/index/Index.vue'),
		children: [
			{
				path: '/home',
				name: '首页',
				component: () => import('../views/index/Home.vue')
			},
			{
				path: '/district',
				name: '当地活动',
				component: () => import('../views/index/Activity.vue')
			},
			{
				path: '/houseKeeper',
				name: '善管家',
				component: () => import('../views/index/HouseKeeper.vue')
			},
			{
				path: '/mine',
				name: '我的',
				component: () => import('../views/index/Mine.vue')
			}
		]
	},
	{
		path: '/business',
		name: 'business',
		component: () => import('@/views/Main.vue'),
		children: children,
		//这里用来显示标题
		props: (route: RouteLocationNormalized) => ({
			title: route.params.title || route.query.title || route.name
		})
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/Login.vue')
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes
})
export const defaultBeforeEach = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	//使用系统存储
	const systemStore = useSystemStore()
	//常见页面直接进入
	if (['/login', '/404', '/403', '/500'].includes(to.path)) {
		next()
		return
	}
	if (systemStore.isLogin) {
		next()
	} else {
		next({ path: '/login' })
	}
}
/**
 * 路由守卫
 */
router.beforeEach(defaultBeforeEach)
/**
 * 获取路由信息
 */
export const getRouter = (): Router => {
	return router
}
export default router
