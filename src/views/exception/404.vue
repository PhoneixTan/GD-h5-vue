<template>
	<van-empty description="你访问的页面不存在！" image="error">
		<van-button round type="primary" @click="toHome">回到首页</van-button>
	</van-empty>
</template>

<script>
export default {
	name: '404',
	methods: {
		toHome() {
			this.$router.push({ path: '/' })
		}
	}
}
</script>
