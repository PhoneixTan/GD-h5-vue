<template>
	<div class="page">
		<div class="header">
			<div class="icon" @click="back">
				<!--判断路由是否是一级路由-->
				<template v-if="canBack">
					<van-icon name="arrow-left" />
					<span class="back">返回</span>
				</template>
			</div>
			<div class="title">{{ props.title }}</div>
			<div class="icon"></div>
		</div>
		<!--
		<transtion>:过渡  <keep-alive>:页面缓存
		 Component: VNodes，传递给<component>的is prop
		 Router：解析出标准化路由地址，router就是RouterLocalNormalized,meta中自定义内容keepAlive,通过keepAlive这个参数，用来区分是否需要缓存组件
		 <component :is="...">：在多个组件之间切换，被切换掉的组件就会被卸载
		 <keep-alive>功能：在多个组件动态切换时缓存被移除的组件实例
		 -->
		<router-view v-slot="{ Component, route }">
			<keep-alive>
				<component :is="Component" :key="route.fullPath" v-if="route.meta.keepAlive"></component>
			</keep-alive>
			<component :is="Component" :key="route.fullPath" v-if="!route.meta.keepAlive"></component>
		</router-view>
	</div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

//路由
let router = useRouter()
const props = defineProps<{ title: string }>()

/*
 * vue2.0
 * 设置router的模式：hash\history
 * hash模式下url带#号，history模式下默认不带
 * vue3.0
 * hash: createWebHashHistory
 * history: createWebHistory
 * */
let history = router.options.history
console.log(history)
/*
 *  state:
 *  back: 上一层路由地址
 *  current: 当前路由地址
 *  forward: 下一层路由地址
 *  position: 当前路由在历史记录中的位置
 *  replaced: 是否是替换路由
 *  scroll: 页面位置信息
 * */
//当前页面是否有上一层路由地址  back：上一级路由地址
const canBack = history.state.back
//返回点击事件
function back() {
	router.back()
}
</script>
<style lang="scss" scoped>
/*
less语法里面使用变量使用@
scss语法里面使用变量使用$
调用vant组件样式变量使用var()
*/
.header {
	height: var(--title-bar-height);
	background: #fff;
	padding-top: var(--title-bar-padding-top);
	padding-left: 16px;
	padding-right: 16px;
	display: flex;
	align-items: center;
	flex: 0 0 auto;
	.icon {
		width: 60px;
		flex: 0 0 auto;
		.back {
			margin-left: 2px;
		}
	}
	.title {
		font-size: 20px;
		font-weight: 800;
		color: #353b45;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex: 1 1 auto;
	}
}
</style>
