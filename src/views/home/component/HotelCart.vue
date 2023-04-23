<template>
  <div class="card" >
    <div class="card-left">
      <div class="card-left-img">
        <van-image :src="props.hotelPic"/>
      </div>
      <div class="card-left-icon">
        {{props.hotelGrade}}
      </div>
      <div class="card-left-text-title">
        {{props.hotelTitle}}
      </div>
    </div>
    <div class="card-right">
      {{props.hotelPrice}}<span class="qi">起</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import hotelIcon from '../../../assets/images/sqlPic/hotel/img.png'

interface Props{
  // 等级
  hotelGrade:string
  //图片
  hotelPic:string
  //价格
  hotelPrice:string
  //酒店名
  hotelTitle:string
  // 主键id
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