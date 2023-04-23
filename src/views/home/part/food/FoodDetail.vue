<template>
  <div class="page">
    <van-image :src="foodDetail?.foodDetailPic"></van-image>
    <div class="text">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;{{foodDetail?.foodPractice}}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>主料:</b>{{foodDetail?.foodMain}}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>辅调料:</b>{{foodDetail?.foodAssist}}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>菜品做法:</b>{{foodDetail?.foodMake}}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>成品特色:</b>{{foodDetail?.foodFeatures}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import requestMethodFood from '../../../../api/home/food'
import {FoodVo} from "../../../../entity/home/food";
import {BaseUtil} from "../../../../utils/base-util";
const route=useRoute()
const foodDetail=ref<FoodVo>()
onMounted(async ()=>{
  await getFoodDetailId()
})
async function getFoodDetailId(){
  if (route.query.id){
    const {data}=await requestMethodFood.getFoodId(route.query.id as string)
    data.foodDetailPic=data.foodDetailPic?BaseUtil.getUploadPath(data.foodDetailPic as string):''
    foodDetail.value=data
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.van-image{
  @include widthMixer(100%,200px)
}
.text{
  background: #ffffff;
  border-radius: 20px;
  position: relative;
  top: -80px;
  height: 70%;
}
p{
  font-size: 2px;
  margin: 10px;
}
</style>