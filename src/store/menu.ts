import { acceptHMRUpdate, defineStore } from 'pinia'
import requestMethod from '../api/system/menu'
import { SystemMenu } from '../entity/system/system-menu'

interface MenuStore {
	// 菜单部分
	menus: Array<SystemMenu>
	// 当前菜单的序号
	index: number
}

const STORE_KEY = 'menu-store'

export const useMenuStore = defineStore(STORE_KEY, {
	state: () =>
		<MenuStore>{
			menus: [],
			index: 0
		},
	getters: {
		/**
		 * 获取map类型的菜单，{ linkpath : systemMenu }
		 * 用于首页的面包屑和路由守卫
		 * @param state
		 */
		menuMap: state => {
			const menuMap = menuListToMap(state.menus)
			// 添加一下首页
			menuMap['/'] = <SystemMenu>{}
			return menuMap
		},
		/**
		 * 获取菜单
		 * @param state
		 */
		menuList: state => state.menus,
		/**
		 * 菜单的序号
		 * @param state
		 */
		menuIndex: state => state.index,
		/**
		 * 获取当前的菜单
		 * @param state
		 */
		currentMenu: state => {
			if (state.index >= state.menus.length) return null
			else return state.menus[state.index]
		},
		/**
		 * 是否显示menu 标签
		 * @param state
		 */
		showMenuTab: state => state.menus.length > 1
	},
	actions: {
		/**
		 * 注册菜单
		 */
		async registerMenu() {
			const { data } = await requestMethod.menuList({ siteCode: 'manage' })
			const menus = data.filter(value => value.isShow == 1)
			this.$patch({ menus })
		},
		/**
		 * 设置菜单index
		 * @param index
		 */
		setIndex(index: number) {
			// 验证一下值
			if (index >= this.menus.length) this.$patch({ index: 0 })
			// 直接推送
			else this.$patch({ index })
		},
		/**
		 * 通过id更新index
		 * @param id
		 */
		setIndexById(id: string) {
			const index = this.menus.findIndex(value => value.id == id)
			if (this.index != index) {
				this.$patch({ index })
			}
		},
		/**
		 * 获取的menus
		 * @param menus
		 */
		setMenu(menus: Array<SystemMenu>) {
			menus = menus.filter(value => value.isShow == 1)
			this.$patch({ menus })
		}
	},
	// 开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_KEY,
				storage: sessionStorage
			}
		]
	}
})

interface MenuMap {
	[key: string]: SystemMenu
}

/**
 * 遍历menu查找当前的menu
 * @param menus
 */
function menuListToMap(menus: Array<SystemMenu>): MenuMap {
	let result: MenuMap = {}
	for (const menu of menus) {
		if (menu.isShow == 1) {
			if (menu.linkUrl) result[menu.linkUrl] = menu
		}
		if (menu.children) {
			const systemItem = menuListToMap(menu.children)
			result = { ...result, ...systemItem }
		}
	}
	return result
}

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
}
