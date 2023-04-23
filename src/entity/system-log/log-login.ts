import { BusinessPo } from '../common/base'

export interface LogLogin extends BusinessPo {
	//失败状态
	failureState: number
	//设备imei
	imei: string
	//是否是最后一次登录
	isLast: number
	//登录地址，ip解析后的地址
	loginAddress: string
	//登陆时间
	loginDate: string
	//登出消息
	loginMessage: string
	//登出类型
	loginOutType: number
	//登陆状态0失败1成功
	loginState: number
	//登录类型
	loginType: number
	//手机/浏览器型号
	modelNumber: string
	//请求的ip地址
	requestIp: string
	//用户姓名
	rfUserName: string
	//会话id/token
	sessionId: string
	//站点/终端
	siteCode: string
	//用户提交的账号
	userAccount: string
	//用户提交的密码
	userPassword: string
	//手机版本号
	versionNum: string
}
