import { GetRequestModel } from '@/http/request-model'
import { CheckVo } from '@/entity/home/resident-info'

const MODULE_API_PREFIX = '/h5/authentication_record'
export default {
	/*
	 * 验证当前用户是否已经认证
	 * */
	check: () => new GetRequestModel<CheckVo>(`${MODULE_API_PREFIX}/check`, {}).request()
}
