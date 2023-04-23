<template>
	<van-empty description="你没有权限访问当前页面！" image="search">
		<van-button round type="primary" @click="toHome">回到首页</van-button>
	</van-empty>
</template>

<script>
export default {
	name: '403',
	methods: {
		toHome() {
			this.$router.push({ path: '/' })
		}
	}
}
</script>
