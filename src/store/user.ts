import { acceptHMRUpdate, defineStore } from 'pinia'
import { AccountUser, AccountUserInfo, AccountUserVo } from '../entity/account/account-user'
import { AccountRole } from '../entity/account/account-role'
import { AccountDept } from '../entity/account/account-dept'
import { AccountOrg } from '../entity/account/account-org'
import { BaseUtil } from '../utils/base-util'

interface UserStore {
	// 用户账号信息
	user: AccountUser | undefined
	// 基本信息
	info: AccountUserInfo | undefined
	// 所属角色信息
	roleList: Array<AccountRole>
	// 所属部门信息
	deptList: Array<AccountDept>
	// 所属单位信息
	orgList: Array<AccountOrg>
	// 权限
	permissionMap: { [key: string]: string[] }
}

const STORE_KEY = 'user-store'

export const useUserStore = defineStore(STORE_KEY, {
	state: () =>
		<UserStore>{
			user: undefined,
			info: undefined,
			deptList: [],
			orgList: [],
			roleList: [],
			permissionMap: {}
		},
	getters: {
		/**
		 * 获取用户头像
		 * @param state
		 */
		avatar: state => {
			// 获取用户头像
			const headPath = state.info?.headPath
			if (headPath) {
				return BaseUtil.getUploadPath(headPath)
			} else {
				return false
			}
		},
		/**
		 * 获取用户姓名
		 * @param state
		 */
		userName: state => {
			// 获取用户头像
			return state.user?.userName || '请登录'
		}
	},
	actions: {
		/**
		 * 设置用户头像
		 * @param avatar
		 */
		setAvatar(avatar: string) {
			if (this.info) {
				this.info.headPath = avatar
			}
		},
		/**
		 * 设置登录的信息
		 * @param userVo
		 */
		setInfo(userVo: AccountUserVo) {
			const permissionMap: { [key: string]: string[] } = {}
			Object.entries(userVo.permissionMap).forEach(([key, value]) => {
				permissionMap[key] = (value as string).split(',')
			})
			userVo.permissionMap = {}
			this.$patch({
				deptList: userVo.deptList,
				info: userVo.userInfo,
				orgList: userVo.orgList,
				roleList: userVo.roleList,
				permissionMap,
				user: {
					...userVo,
					permissionMap: {},
					deptList: [],
					userInfo: {},
					orgList: {},
					roleList: {}
				} as AccountUser
			})
		},
		/**
		 * 清除用户信息
		 */
		clearInfo() {
			this.$patch({
				user: undefined,
				info: undefined,
				deptList: [],
				orgList: [],
				roleList: [],
				permissionMap: {}
			})
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
	import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
