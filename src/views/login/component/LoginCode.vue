<template>
	<van-form>
		<van-field class="form-item" placeholder="用户名" left-icon="phone-o" center></van-field>
		<van-field class="form-item" placeholder="请输入验证码" left-icon="clock-o" center>
			<template #button>
				<van-text size="small" class="code">发送验证码</van-text>
			</template>
		</van-field>
		<van-button type="primary" class="submit-button" native-type="submit">登录</van-button>
	</van-form>
</template>
<script lang="ts" setup></script>
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
//验证码
.code {
	color: #999;
}
//登录按钮
.submit-button {
	height: 40px;
	border-radius: 4px;
	border: none;
	margin-top: 25px;
	background: rgb(245, 165, 165);
}
</style>
