<template>
  <div class="cart">
    <van-image :src="detail?.photo"></van-image>
    <div class="cart-top">
      <div class="cart-top-title">
        <h3>{{detail?.spotname}} </h3>
      </div>
      <div class="card-top-grade" style="position: absolute;right: 100px;top: 25px;color: #ffcf7d">{{detail?.grade}}</div>
      <div @click="onSpotDetail(detail?.id)" class="cart-top-talking" style="font-size: 13px;color: #51565d;position:relative;top: -12px;right: -20px">
        评论：{{detail?.spotTalk}}
      </div>
      <div class="cart-top-number">
        <div class="cart-top-number-one" style="position: relative;top:45px;left: 15px">
          <div class="num"  style="color: #56d3c5;font-weight: bold">{{detail?.numberOne}}</div>
          <div class="text" style="font-size: 13px;color: #9a9a9a;margin-top: 8px">当前客流</div>
        </div>
        <div class="cart-top-number-two" style="position: relative;left:110px;">
          <div class="num" style="color: #56d3c5;font-weight: bold">{{detail?.numberTwo}}</div>
          <div class="text" style="font-size: 13px;color: #9a9a9a;margin-top: 8px">今日累计客流</div>
        </div>
        <div class="cart-top-number-three" style="position: absolute;left:230px;top: 126px">
          <div class="num"  style="color: #56d3c5;font-weight: bold">{{detail?.numberThree}}</div>
          <div class="text" style="font-size: 13px;color: #9a9a9a;margin-top: 8px">入园高峰</div>
        </div>
      </div>
      <div class="cart-top-time" style="margin-left: 15px">
        <h5>营业时间</h5>
        <p style="font-size: 12px;color: #353b45">8:00-17:30(夏令：5月1日-10月31日)</p>
        <p style="font-size: 12px;color: #353b45">8:00-17:00(冬令：11月1日-4月30日)</p>
      </div>
      <div class="cart-top-phone" style="margin-left: 15px">
        <h5>咨询电话</h5>
        <p style="font-size: 12px;color: #353b45">{{detail?.phoneNumber}}</p>
      </div>
      <div class="cart-top-address" style="margin-left: 15px">
        <h5>景区地址</h5>
        <p style="font-size: 12px;color: #353b45">{{detail?.spotname}}</p>
      </div>
    </div>
    <div class="cart-button">

    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {BaseUtil} from "../../../../utils/base-util";
import {SpotVo} from "../../../../entity/home/part/spot";
import requestMethodSpot from '../../../../api/home/part/spot'
import router from "../../../../router";
const route =useRoute()
const detail=ref<SpotVo>()
onMounted(async ()=>{
  await getDetailById()
})
async function getDetailById(){
  if(route.query.id){
    const {data} =await requestMethodSpot.getById(route.query.id as string)
    // const { data } = await requestMethodPost.page()
    data.photo = data.photo ? BaseUtil.getUploadPath(data.photo as string) : ''
    // return data
    detail.value=data
  }
}

const onSpotDetail=(id:string)=>{
  router.push({
    path:'/spotTalk',
    query:{
      id:id
    }
  })
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/mixin.scss';
.cart-top{
  width: 350px;
  border-radius: 10px;
  position: absolute;
  top: 265px;
  right: 13px;
  background-color: #ffffff;
  &-title{
    margin-left: 20px;
  }

}


</style>