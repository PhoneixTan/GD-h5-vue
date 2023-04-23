import { acceptHMRUpdate, defineStore } from 'pinia'
import { CheckVo } from '@/entity/home/resident-info'
import authenticationRequest from '@/api/login/authentication_record'

interface ResidentCheckStore {
	//认证信息
	check: CheckVo
}
const STORE_key = 'resident-check-store'
export const useResidentCheckStore = defineStore(STORE_key, {
	state: () =>
		<ResidentCheckStore>{
			check: {
				value: -1,
				name: '未登录'
			}
		},
	getters: {
		/*
		 * 是否已认证
		 * */
		identity: state => state.check?.value === 2 || state.check?.value === 3
	},
	actions: {
		//注册认证信息
		async registerCheckInfo(): Promise<CheckVo> {
			const { data } = await authenticationRequest.check()
			this.$patch({ check: data })
			return data
		}
	},
	//开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_key,
				storage: sessionStorage
			}
		]
	}
})
//热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useResidentCheckStore, import.meta.hot))
}
