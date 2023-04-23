<template>
<div class="page">
<!--  轮播图-->
  <div class="swipe-box" >
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerList" :key="item.id">
            <van-image :src="item.bannerPic"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>

<!--  通知公告-->
  <div class="notice-box">
    <van-image :src="notice" />
    <van-notice-bar mode="link" background="#ffff" :color="noticeColor">
      <template #right-icon>
        <van-image class="arrow" :src="rightArrow" />
      </template>
      <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="6000"
          :show-indicators="false"
      >
        <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
        <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
        <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

  </div>
<!--  菜单栏-->
  <div class="tab-content">
    <div class="top">
      <van-row gutter="15" >
        <van-col span="8">
          <router-link to="/part/must">
          <van-image :src="Tab1"></van-image>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/part/food">
            <van-image :src="Tab4"></van-image>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/part/jiudian">
            <van-image :src="Tab3"></van-image>
          </router-link>
        </van-col>
      </van-row>
    </div>


  </div>
<!--  热门推荐-->
  <div class="recommend">
    <div class="top">
<!--      <van-image :src="goodIcon"/>-->
      <div class="title">热门推荐</div>
    </div>
    <div class="button">
      <router-link to="/district">
        <van-button class="an1" round size="small"  color="linear-gradient(to right, #f8b0bc, #fd637b)">热门活动</van-button>
      </router-link>
      <router-link to="/part/must">
        <van-button class="an1" round size="small" color="linear-gradient(to right, #93c6fb, #3b8bfc)">网红打卡</van-button>
      </router-link>
      <router-link to="/part/food">
        <van-button class="an1" round size="small" color="linear-gradient(to right, #fbc86f, #fba737)">超级美食</van-button>
      </router-link>
      <router-link to="/part/jiudian">
        <van-button class="an1" round size="small" color="linear-gradient(to right, #90ece9, #58dddc)">嘉善好物</van-button>
      </router-link>
    </div>

  </div>
<!--  地图-->
  <div class="map">
    <van-image :src="mapIcon" ></van-image>
  </div>
</div>
</template>

<script lang="ts" setup>
//图片引用
import mapIcon from '../../assets/images/home/map.png'

//公告栏图片
import notice from '../../assets/images/home/notice/notification.gif'
import rightArrow from '../../assets/images/home/notice/rightArrow.png'
//菜单栏图片
import Tab1 from '../../assets/images/home/mest.png'
import Tab2 from '../../assets/images/home/score.png'
import Tab3 from '../../assets/images/home/jiudian.png'
import Tab4 from '../../assets/images/home/food.png'
import Tab5 from '../../assets/images/home/music.png'
import Tab6 from '../../assets/images/home/data.png'

//热门推荐
import goodIcon from '../../assets/images/home/recommend/like.png'



//通知公告字体颜色
const noticeColor = ref('#353b45')

//轮播图
import {onMounted, ref} from "vue";
import requestBanner from '../../api/home/banner'
import {BannerVo} from "../../entity/home/banner";
import {BaseUtil} from "../../utils/base-util";
const bannerList = ref<BannerVo[]>([])
onMounted(() => {
  requestBanner.page({pageNum:1,pageSize: 10}).then(res => {
    console.log(res.data.list)
    bannerList.value = res.data.list.map(item => {
      item.bannerPic = item.bannerPic ? BaseUtil.getUploadPath(item.bannerPic) : ''
      return item
    })
  })
})

</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page {
  background-color: rgba(234, 233, 233, 0.5);
 .notice-swipe {
  height: 40px;
  line-height: 40px;
 }
  //通告公栏
  .notice-box{
    @include widthMixer(95vw,47.5px);
    background: var(--van-white);
    border-radius: var(--zlb-radius-r4);
    margin: 0 auto;
    transform: translateY(-17px);
    @include flexMixer(flex-start);
    .van-image{
      @include widthMixer(32.5px,29px);
      margin-left: 15px;
    }
    .arrow{
      @include widthMixer(20px,25px)
    }
    .van-notice-bar{
      @include widthMixer(80%,25px);
      .notice-swipe{
        flex: 1;
        @include widthMixer(55vw,50px)
      }
      .van-swipe-item{
        @include widthMixer(55vw,50px);
        @include flexMixer(flex-start,center);
        .notice-item{
          @include pointMixer();
        }
      }

    }
  }
  //菜单栏
  .tab-content{
    @include widthMixer(95vw,47.5px);
    margin: 0 auto;
    .top{
      margin-bottom: 10px;
    }
  }
  .recommend{
   width: 350.25px;
    position: relative;
    top: 45px;
    left: 13px;
    border-radius: var(--zlb-radius-r4);
    background: url("../../assets/images/home/recommend/background.jpg");
    .top{
      height: 60px;
      .title{
        padding:20px 20px;
        font-weight: 400;
      }
    }
    .button{
      height: 45px;
      padding-top: 15px;
      .an1{
        margin: 0 11px;
      }
    }
  }



  //地图
  .map{
    width: 350.25px;
    position: relative;
    top:65px;
    left: 13px;
    border-radius: var(--zlb-radius-r4);
  }


}
</style>