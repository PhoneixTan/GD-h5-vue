import { acceptHMRUpdate, defineStore } from 'pinia'

interface WelcomeStore {
	// 登录令牌
	welcome: boolean
}

const STORE_KEY = 'system-welcome'

export const useWelcomeStore = defineStore(STORE_KEY, {
	state: () =>
		<WelcomeStore>{
			welcome: true
		},
	actions: {
		/**
		 * 更新登录状态
		 * @param welcome
		 */
		updateWelcome(welcome: boolean) {
			this.$patch({ welcome })
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
	import.meta.hot.accept(acceptHMRUpdate(useWelcomeStore, import.meta.hot))
}
