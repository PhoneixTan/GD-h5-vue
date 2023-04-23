<template>
	<van-empty description="当前页面繁忙，请稍后再试！" image="network">
		<van-button round type="primary" @click="toHome">回到首页</van-button>
	</van-empty>
</template>

<script>
export default {
	name: '500',
	methods: {
		toHome() {
			this.$router.push({ path: '/' })
		}
	}
}
</script>
