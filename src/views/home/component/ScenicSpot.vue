<template>
  <div class="card" >
    <div class="card-left">
      <div class="card-left-img">
        <van-image :src="props.photo"/>
      </div>
      <div class="card-left-icon">
        {{props.grade}}
      </div>
    </div>
    <div class="card-right">
      <div class="card-right-title">
        {{props.spotname}}
      </div>
      <div class="card-right-describe">
        {{props.miaosu}}
      </div>
<!--      <div class="card-right-talk">-->
<!--&lt;!&ndash;        <img src="https://img.icons8.com/external-filled-outline-design-circle/64/null/external-Talking-startup-and-development-filled-outline-design-circle.png">&ndash;&gt;-->
<!--&lt;!&ndash;        <span class="card-right-talk-num">{{props.spotTalk}}</span>&ndash;&gt;-->
<!--      </div>-->
    </div>
  </div>

</template>

<script lang="ts" setup>
import ct from '../../../assets/images/sqlPic/hotel/img.png'

interface Props{
  //描述
  miaosu: string
  //等级
  grade: string
  // 景区图片
  photo: string
  //景区名
  spotname: string
  //评价
  spotTalk:string
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
      position: relative;
      transform: translateY(10px);
      left: -90px;
      font-size: 5px;
      background: #fdf9ee;
      color: #fdb445;
      border-radius: 20px;
      padding-left:8px;
      padding-top: 5px;
      margin: 10px;
      max-width: 200px;
      height: 20px;
    }
    &-talk{
      position: relative;
      right: 80px;
      &-num{
        color: #696969;
      }
      img{
        width: 20px;
        height: 20px;
        position: relative;
        top: 5px;
        padding-right: 10px;
      }
    }

  }
}
</style>