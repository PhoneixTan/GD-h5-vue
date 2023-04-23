<template>
	<van-form :model="formState" autocomplete="off" class="form" @submit="onSubmit">
		<van-field v-model.trim="formState.userAccount" autocomplete="off" class="form-item" left-icon="contact" name="userAccount" placeholder="用户名" />
		<van-field
			v-model="formState.password"
			autocomplete="off"
			class="form-item"
			left-icon="eye-o"
			name="password"
			placeholder="请输入密码"
			type="password"
		/>
		<div style="display: flex; margin-top: 20px">
			<van-checkbox v-model:model-value="formState.checked" class="remember">记住密码</van-checkbox>
			<div class="spacer"></div>
			<span class="forget">忘记密码</span>
		</div>
		<van-button type="primary" class="submit-button" native-type="submit">登录</van-button>
	</van-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { messageMethod } from '../../../utils/message-util'
import requestMethod from '../../../api/login/login'
import { JSEncrypt } from 'jsencrypt'
import { useSystemStore } from '../../../store/system'
import { useUserStore } from '../../../store/user'
import { useRouter } from 'vue-router'

interface FormState {
	userAccount: string
	password: string
	checked: boolean
}
//创建表单数据
const formState = reactive<FormState>({
	userAccount: '',
	password: '',
	checked: true
})
//使用系统缓存
const systemStore = useSystemStore()
//使用用户信息缓存
const useStore = useUserStore()
//使用路由
const router = useRouter()
/*
 * 提交表单且数据验证成功后的回调事件
 * */
async function onSubmit(params: FormState) {
	//获取rsa公钥信息
	//提示用户
	messageMethod.success('登录环境安全验证中...')
	const rsa = await requestMethod.rsa()
	const { publicKey, rsaKey } = rsa.data
	//加密密码信息
	const encrypt = new JSEncrypt({})
	encrypt.setPublicKey(publicKey)
	const password = encrypt.encrypt(params.password)
	//执行登录
	const { data } = await requestMethod.login({
		...params,
		password,
		rsaKey,
		siteCode: 'h5'
	})
	//设置系统信息缓存
	systemStore.setToken(data.authToken)
	//设置用户信息缓存
	useStore.setInfo(data)
	//提示用户登录成功
	messageMethod.success('登录成功')
	//跳转到首页
	setTimeout(() => {
		router.replace({ path: '/' })
	}, 1000)
}
</script>
<style lang="scss" scoped>
//form表单
.van-form {
	width: 100%;
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	padding: 0 35px;
	--van-checkbox-checked-icon-color: #12b8af;
}
//输入框
.form-item {
	height: 40px;
	background: #fff;
	border-radius: 4px;
	overflow: hidden;
	margin-top: 10px;
}
//登录按钮
.submit-button {
	height: 40px;
	border-radius: 4px;
	border: none;
	margin-top: 25px;
	background: rgb(245, 165, 165);
}
//记住密码
.remember {
	font-size: 14px;
	:deep(.van-checkbox__label) {
		color: #fff;
	}
}
.forget {
	font-size: 14px;
	color: #021c1b;
}
</style>
