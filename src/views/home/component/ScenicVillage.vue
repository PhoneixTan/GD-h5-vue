<template>
  <div class="card" >
    <div class="card-left">
      <div class="card-left-img">
        <van-image :src="props.villagePic"/>
      </div>
      <div class="card-left-icon">
        {{props.villageGrade}}
      </div>
    </div>
    <div class="card-right">
      <div class="card-right-title">
        {{props.villageName}}
      </div>
      <div class="card-right-describe">
       {{props.villageEvaluate}}
      </div>

    </div>
  </div>

</template>

<script lang="ts" setup>
import ct from '../../../assets/images/sqlPic/hotel/img.png'
interface Props{
  //描述
  villageEvaluate:string
  // 等级
  villageGrade:string
  // 村名字
  villageName:string
  //景区村图片
  villagePic:string
}
const props=defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';

.card {
  width: 100%;
  //height: 100px;
  background-color: var(--van-white);
  margin-bottom: 15px;
  border-radius: 20px;
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
      font-size: 2px;
      background: #aaedec;
      color: #ffffff;
      height: 16px;
      position: relative;
      z-index: 1;
      left: -157px;
      border-radius: 2px;
    }
  }
  &-right {
    &-title {
      position: absolute;
      left: 180px;
      @include fontMixer(var(--van-font-size-md), #2c2c2c, 400);
      @include pointMixer();
    }
    &-describe{
      transform: translateY(10px);
      position: relative;
      left: -90px;
      font-size: 5px;
      background: #fdf9ee;
      color: #fdb445;
      border-radius: 20px;
      padding-left:8px;
      padding-top: 5px;
      margin: 10px;
      width: 55px;
      height: 20px;
    }

  }
}
</style>