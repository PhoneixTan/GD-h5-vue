<template>
	<div class="page">
    <div class="head">
      <van-image :src="bannerImg" />
<!--      头像-->
      <van-image :src="avatar" class="avatar" round />
    </div>
    <div class="body">
      <van-cell-group inset>
        <van-cell icon="comment-o" title="我的评价" is-link to="/integral/comments"/>
        <van-cell icon="warning-o" title="投诉建议" is-link to="/integral/suggestion"/>
      </van-cell-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
import bannerImg from '../../assets/images/mine/bannerHeader.png'
import avatar from '../../assets/images/mine/avatar.png'
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: rgba(234, 233, 233, 0.5);
  .head{
    .avatar{
      @include widthMixer(85px,85px);
      margin-right: 8px;
      position: relative;
      top: -63.5px;
      left: 20px;

    }
  }
  .body{
    transform: translateY(-70px);
  }
}
</style>
