<template>
  <div class="card" >
    <div class="card-left">
      <div class="card-left-img">
        <van-image :src="props.bbPic"/>
      </div>
      <div class="card-left-icon">
        {{props.bbGrade}}
      </div>
      <div class="card-left-text-title">
        {{props.bbTitle}}
      </div>
    </div>
    <div class="card-right">
      {{props.bbPrice}}<span class="qi">起</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BBIcon from '../../../assets/images/sqlPic/BB/img_2.png'

interface Props{
  //民宿地址
  bbAddress:string
  //等级
  bbGrade:string
  //民宿介绍
  bbIntroduce:string
  //名宿咨询电话
  bbPhone:string
  //图片
  bbPic:string
  //价格
  bbPrice:string
  //民宿名
  bbTitle:string
  //主键id
  id:string
  //备注
  memo:string
}
const props=defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';
.card {
  width: 100%;
  background-color: var(--van-white);
  margin-bottom: 15px;
  border-radius: 8px;
  padding: 15px;
  @include flexMixer(space-between, center);
  box-sizing: border-box;
  .card-left {
    display: flex;
    .card-left-img {
      max-width: 150px;
      min-height: 85px;
      margin-right: 7px;
      position: relative;
      z-index: 0;
    }
    .card-left-icon{
      padding: 2px;
      font-size: 2px;
      background: #aaedec;
      color: #ffffff;
      height: 16px;
      position: relative;
      z-index: 1;
      left: -157px;
      border-radius: 2px;
    }
    &-text {
      &-title {
        position: relative;
        left: -25px;
        @include fontMixer(var(--van-font-size-md), #404040, 700);
        @include pointMixer();
      }
    }
  }
  &-right {
    color: red;
    .qi{
      font-size: 2px;
      color:#353b45;
    }
  }
}
</style>