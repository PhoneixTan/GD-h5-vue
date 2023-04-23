<template>
	<div class="page">
    <img src="../../assets/images/index/keeper/bg.png">
<!--    一键拨打-->
    <div class="call">
      <van-image :src="callIcon" class="img" @click="showPopup" ></van-image>
      <van-popup v-model:show="show" closeable round position="bottom" :style="{height:'30%'}">
        <a :href="'tel:' + 18169322119" rel="external nofollow"  style="position: relative;left: 80px;top: 50px;font-size: 30px">18169322119</a>
      </van-popup>
<!--      <a :href="`tel:${item.keeperPhone}`">-->
<!--        <van-image :src="callIcon" class="img"></van-image>-->
<!--      </a>-->
      <div class="title">一键拨打</div>
    </div>
<!--    投诉建议-->
    <div class="complaint">
      <router-link to="/index/suggestion">
      <van-image :src="complaintIcon" class="img"></van-image>
      </router-link>
      <div class="title"> 投诉建议</div>

    </div>
  </div>
</template>
<script lang="ts" setup>
//引入图片
import serviceIcon from '../../assets/images/index/keeper/service.png'
import callIcon from '../../assets/images/index/keeper/call.png'
import complaintIcon from '../../assets/images/index/keeper/complaint.png'

import {ref} from 'vue'
const show=ref(false);
const showPopup=()=>{
  show.value=true;
};




</script>
<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
.page{
  img{
    opacity: 0.2;
  }
  //.service{
  //  .img{
  //    width: 86px;
  //    height: 86px;
  //    position: absolute;
  //    top: 50px;
  //    right: 140px;
  //  }
  //  .title{
  //    position: absolute;
  //    top: 155px;
  //    right: 155px;
  //  }
  //}
  .call{
    .img{
      width: 86px;
      height: 86px;
      position: absolute;
      top: 50px;
      right: 140px;
    }
    .title{
      position: absolute;
      top: 155px;
      right: 155px;
    }
  }
  .complaint{
    .img{
      width: 86px;
      height: 86px;
      position: absolute;
      top: 250px;
      right: 140px;
    }
    .title{
      position: absolute;
      top: 355px;
      right: 155px;
    }
  }

}
</style>
