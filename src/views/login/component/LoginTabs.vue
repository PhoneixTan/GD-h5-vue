<template>
	<div class="tabs">
		<div class="tab-item" v-for="(item, index) in tabs" :key="item" :class="{ 'tab-active': index === props.active }" @click="onTabClick(index)">
			{{ item }}
		</div>
		<div class="indicator" v-for="(item, index) in tabs" :key="'indicator' + index" :class="{ 'indicator-active': index === props.active }"></div>
	</div>
</template>
<script lang="ts" setup>
const tabs = ['账号密码登录', '手机号登录']
let props = defineProps<{ active: number }>()
let emits = defineEmits<{ (e: 'update:active', active: number): void }>()
//点击事件
function onTabClick(index: number) {
	emits('update:active', index)
}
</script>
<style lang="scss" scoped>
.tabs {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1px;
	justify-self: center;
	width: 300px;
	padding: 5px 25px;
	.tab-item {
		font-size: 16px;
		color: #021c1b;
		text-align: center;
		gird-row: 2/1;
	}
	.tab-active {
		color: #fff;
	}
	.indicator {
		width: 140px;
		height: 2px;
		margin-top: 8px;
		justify-self: center;
		grid-row: 3/2;
	}
	.indicator-active {
		background: #fff;
	}
}
</style>
