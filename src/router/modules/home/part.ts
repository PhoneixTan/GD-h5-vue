import {RouteLocationNormalized} from "vue-router";

export default [
    {
        //必游榜单
        name: '必游榜单',
        path: '/part/must',
        component: () => import('@/views/home/part/Must.vue')
    },
    {
        //文旅体资源
        name: '文旅体资源',
        path: '/part/score',
        component: () => import('@/views/home/part/Score.vue')
    },
    {
        //今夜好眠
        name: '今夜好眠',
        path: '/part/jiudian',
        component: () => import('@/views/home/part/Jiudian.vue')
    },
    {
        //佳膳十碗
        name: '佳膳十碗',
        path: '/part/food',
        component: () => import('@/views/home/part/Food2.vue')
    },
    {
        //音画嘉善
        name: '音画嘉善',
        path: '/part/music',
        component: () => import('@/views/home/part/Music.vue')
    },
    {
        //智慧数据
        name: '智慧数据',
        path: '/part/data',
        component: () => import('@/views/home/part/Data.vue')
    },
    {
        path:'/detail',
        component:()=>import('@/views/home/component/detail/Detailed.vue')
    },
    {
        path:'/villageDetail',
        component:()=>import('@/views/home/component/detail/VillageDetail.vue')
    },
    {
        path:'/venusDetail',
        component:()=>import('@/views/home/component/detail/VenusDetail.vue')
    },
    {
        path:'/hotelDetail',
        component:()=>import('@/views/home/component/detail/HotelDetail.vue')
    },
    {
        path:'/BBDetail',
        component:()=>import('@/views/home/component/detail/BBDetail.vue')
    },
    {
        path: '/foodDetail',
        component:()=>import('@/views/home/part/food/FoodDetail.vue')
    },
    {
      name:'活动详情',
      path:'/Activity/detail',
      component:()=>import('@/views/home/component/detail/ActivityDetail.vue')
    },
    {
        name:'景区评论',
        path: '/spotTalk',
        component:()=>import('@/views/home/component/talk/spotTalk.vue'),
        props: (route: RouteLocationNormalized) => ({
            id: route.params.id || route.query.id
        })
    },
    {
        name:'评价',
        path: '/addSpotTalk',
        component:()=>import('@/views/home/component/talk/talkDetail/addSpotTalkList.vue'),
        props: (route: RouteLocationNormalized) => ({
            id: route.params.id || route.query.id
        })
    }

]