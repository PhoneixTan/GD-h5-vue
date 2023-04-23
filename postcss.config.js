module.exports = {
	plugins: {
		'postcss-px-to-viewport-8-plugin': {
			//设计稿宽度
			viewportWidth: 375,
			//移除node_modules
			exclude: /(\\)(node_modules)(\\)/,
			//不换的类名
			selectorBlackList: ['.ignore', 'hairlines']
		}
	}
}
