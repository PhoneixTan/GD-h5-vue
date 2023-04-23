import { acceptHMRUpdate, defineStore } from 'pinia'

interface SystemStore {
	// 登录令牌
	token: string
}

const STORE_KEY = 'system-store'

export const useSystemStore = defineStore(STORE_KEY, {
	state: () =>
		<SystemStore>{
			token: ''
		},
	getters: {
		isLogin: state => !!state.token
	},
	actions: {
		/**
		 * 设置登录的token
		 * @param token
		 */
		setToken(token: string) {
			this.$patch({ token })
		}
	},
	// 开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_KEY,
				storage: localStorage
			}
		]
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSystemStore, import.meta.hot))
}
