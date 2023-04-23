import home from '@/assets/images/index/home.png'
import homeActive from '@/assets/images/index/home-active.png'
import district from '@/assets/images/index/district.png'
import districtActive from '@/assets/images/index/district-active.png'
import houseKeeper from '@/assets/images/index/housekeeper.png'
import housekeeperActive from '@/assets/images/index/housekeeper-active.png'
import mine from '@/assets/images/index/mine.png'
import mineActive from '@/assets/images/index/mine-active.png'
import { useSystemStore } from '../../store/system'
import { messageMethod } from '../../utils/message-util'

export interface TabItem {
	/*
	 * 标题
	 * */
	label: string
	/*
	 * 图标
	 * */
	icon: string
	/*
	 * 激活图标
	 * */
	activeIcon: string
	/*
	 * 要跳转的路由地址
	 * */
	router: string
}
export const tabs: Array<TabItem> = [
	{
		label: '首页',
		icon: home,
		activeIcon: homeActive,
		router: '/home'
	},
	{
		label: '当地活动',
		icon: district,
		activeIcon: districtActive,
		router: '/district'
	},
	{
		label: 'AI管家',
		icon: houseKeeper,
		activeIcon: housekeeperActive,
		router: '/houseKeeper'
	},
	{
		label: '我的',
		icon: mine,
		activeIcon: mineActive,
		router: '/mine'
	}
]
//用户登录才能使用该功能 点击标签切换之前事件
export const onTabBefore = async function (index: number, tab: TabItem): Promise<boolean> {
	//使用系统存储判断用户是否登录
	const systemStore = useSystemStore()
	//判断用户是否点击到该页面 [1, 2]：下标为1和2的
	if ([1, 2].includes(index)) {
		if (systemStore.isLogin) {
			return true
		} else {
			messageMethod.info('当前功能需要登录才能使用')
			return false
		}
	} else {
		return true
	}
}
