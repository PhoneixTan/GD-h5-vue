import { acceptHMRUpdate, defineStore } from 'pinia'
import { ResidentInfoVO } from '@/entity/home/resident-info'
import residentRequest from '@/api/home/resident'
import { useResidentCheckStore } from '@/store/resident-check'
import { BaseUtil } from '@/utils/base-util'

interface ResidentStore {
	resident: ResidentInfoVO
}
const STORE_KEY = 'resident-store'
export const useResidentStore = defineStore(STORE_KEY, {
	state: () =>
		<ResidentStore>{
			resident: {}
		},
	getters: {
		/*
		 * 当前所在社区
		 * */
		community: state => {
			if (state.resident?.roomList && state.resident?.roomList?.length > 0) {
				return state.resident?.roomList[0].community
			} else {
				return null
			}
		},
		/**
		 * 返回人脸照片
		 * @param state
		 */
		faceImanageUrl: (state): string | undefined => (state.resident?.faceImageUrl ? BaseUtil.getUploadPath(state.resident?.faceImageUrl) : undefined)
	},
	actions: {
		/**
		 * 注册住户信息
		 */
		async registerResidentInfo(): Promise<ResidentInfoVO> {
			const { data } = await residentRequest.my()
			this.$patch({ resident: data })
			return data
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
//热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useResidentCheckStore, import.meta.hot))
}
