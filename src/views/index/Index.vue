<template>
	<div class="page">
		<router-view v-slot="{ Component, route }">
			<keep-alive>
				<component :is="Component" :key="route.fullPath"></component>
			</keep-alive>
		</router-view>
		<!--tabs标签页-->
		<!--safe-area-inset-bottom：开启底部安全区适配-->
		<!--@change="onChange"：返回当前的索引-->
		<van-tabbar v-model="active" safe-area-inset-bottom @change="onChange">
			<van-tabbar-item v-for="item in tabInfo.tabs" :key="item.label">
				<span>{{ item.label }}</span>
				<template #icon="props">
					<img :alt="item.label" :src="props.active ? item.activeIcon : item.icon" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script lang="ts" setup>
import {ref, watchEffect} from 'vue'
//将tabs里面所有的东西导出,*：代表所有的东西，as：重命名
import * as tabInfo from './tabs'
import { useRoute } from 'vue-router'
import {useRouter} from "vue-router";
//进入标签栏选择第几个
const active = ref(0)
//获取路由
const router = useRouter()
/*
 * 切换标签时触发事件
 * */
async function onChange(index: number) {
	if (tabInfo.onTabBefore) {
		const canRoute = await tabInfo.onTabBefore(index, tabInfo.tabs[index]) //index：标签索引；tabInfo.tabs[index]：标签对象
		if (!canRoute) return
	}
	//索引要等于当前索引
	active.value = index
	//获取要跳转的路由地址
	const routerPath = tabInfo.tabs[index].router
	//跳转到获取的路由
	router.replace(routerPath)
}

/**
 * 从界面进入，选中tab
 */
let route = useRoute()
watchEffect(() => {
  let number = tabInfo.tabs.findIndex((tab: tabInfo.TabItem) => tab.router == route.path)
  if (number != -1) {
    active.value = number
  }
})

</script>
<style lang="scss" scoped></style>
