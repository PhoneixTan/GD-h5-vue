<template>
	<div class="page">
		<!--标题-->
		<div class="title"></div>
		<!--标签页-->
		<login-tabs v-model:active="active" />
		<!--登录表单-->
		<login-form v-show="active === 0" style="margin-top: 25px" />
		<login-code v-show="active === 1" style="margin-top: 25px" />
		<!--占位符-->
		<div class="spacer-2"></div>
		<!--帮助-->
		<div class="help">
			<div>帮助</div>
			<div>隐私</div>
			<div>条款</div>
		</div>
		<!--版权信息-->
		<div class="copy-right" v-if="copyRight">{{ copyRight }}</div>
	</div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import LoginCode from './component/LoginCode.vue'
import LoginForm from './component/LoginForm.vue'
import LoginTabs from './component/LoginTabs.vue'

const active = ref(0)
const copyRight = computed<string>(() => import.meta.env.VITE_APP_COPYRIGHT)
</script>
<style lang="scss" scoped>
.page {
	background: url("../../assets/images/login/bg.png");
	box-shadow: 0 4px 53px 7px rgba(3, 23, 22, 0.3);
	position: relative;
	align-items: center;
	--van-checkbox-checked-icon-color: #12b8af;
	.title {
    position: relative;
    top: 35px;
		width: 180px;
		height: 60px;
		margin-bottom: 60px;
		background: url('@/assets/images/login/logo.png') no-repeat;
		background-size: 100% 100%;
	}
	.help {
		display: flex;
		div {
			width: 80px;
			height: 22px;
			text-align: center;
			font-size: 14px;
			color: rgba(0, 0, 0, 0.45);
		}
	}
	.copy-right {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.45);
		margin: 8px 0 40px 0;
	}
}
</style>
