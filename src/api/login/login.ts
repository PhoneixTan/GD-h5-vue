import { GetRequestModel, PostRequestModel, QueryType } from '../../http/request-model'
import { AccountLoginRsa } from '../../entity/login/login-rsa'
import { AccountUserVo } from '../../entity/account/account-user'
import { getDefaultConfig } from '../../http/config/custom-config'
import { LogLogin } from '../../entity/system-log/log-login'

const apiLogin = import.meta.env.VITE_APP_API_LOGIN || '/login'
const apiLoginOut = import.meta.env.VITE_APP_API_LOGIN_OUT || '/loginOut'
const apiMessage = import.meta.env.VITE_APP_API_MESSAGE || ''
const apiCodeLogin = import.meta.env.VITE_APP_API_CODE_LOGIN || ''

export default {
	/**
	 * 获取rsa公钥key
	 */
	rsa: () => new GetRequestModel<AccountLoginRsa>('/getRsaPublicKey', {}).request(),
	/**
	 * 登录接口
	 * @param query
	 */
	login: (query?: QueryType) => new PostRequestModel<AccountUserVo>(apiLogin, query).request(),
	/***
	 * 登录日志
	 * @param query
	 */
	page: (query?: QueryType) => new PostRequestModel<LogLogin>('/logLogin/home', query).request(),

	/**
	 * 退出登录
	 */
	loginOut: () => new GetRequestModel<LogLogin>(apiLoginOut).request(),
	/**
	 * 获取手机验证码
	 */
	getCode: (query?: QueryType) => {
		const defaultConfig = getDefaultConfig<boolean>()
		defaultConfig.contentType = 'application/x-www-form-urlencoded'
		return new PostRequestModel<boolean>(apiMessage, query, defaultConfig).request()
	},
	/**
	 * 通过手机验证码登录
	 */
	loginByCode: (query?: QueryType) => {
		const defaultConfig = getDefaultConfig<AccountUserVo>()
		defaultConfig.contentType = 'application/x-www-form-urlencoded'
		return new PostRequestModel<AccountUserVo>(apiCodeLogin, query, defaultConfig).request()
	}
}
