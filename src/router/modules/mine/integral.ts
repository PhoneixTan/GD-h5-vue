
export default [
    {
        //我的评价
        name: '我的评价',
        path: '/integral/comments',
        component: () => import('@/views/mine/integral/Comments.vue')
    },
    {
        //投诉建议
        name: '投诉建议',
        path: '/index/suggestion',
        component: () => import('@/views/index/Suggestions.vue')
    },
    {
        //我的投诉建议
        name: '我的投诉建议',
        path: '/integral/suggestion',
        component: () => import('@/views/mine/integral/MySuggestion.vue')
    },
    //
    // {
    //     // 一键客服
    //     name: '一键客服',
    //     path: '/integral/service',
    //     component: () => import('@/views/mine/integral/Service.vue')
    // },


]



