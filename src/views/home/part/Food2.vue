<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item @click="onFoodItem(item.id)" v-for="(item, index) in foodList" :key="item.id">
        <div style="margin-bottom: 30px;">
          <van-image :src="item.foodPic"/>
          <div style="top: 360px;right: 160px;position: absolute;font-weight: bold">{{item.foodName}}</div>
          <div>
            <van-button style="top: 400px;right: 155px;position: absolute;opacity:0.5">点击详情</van-button>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import requestFood from '../../../api/home/food'
import {FoodVo} from "../../../entity/home/food";
import {BaseUtil} from "../../../utils/base-util";
import router from "../../../router";
const foodList = ref<FoodVo[]>([])
onMounted(() => {
  requestFood.page({pageNum:1,pageSize: 10}).then(res => {
    console.log(res.data.list)
    foodList.value = res.data.list.map(item => {
      item.foodPic = item.foodPic ? BaseUtil.getUploadPath(item.foodPic) : ''
      return item
    })
  })
})

const onFoodItem=(id:string)=>{
  router.push({
    path:'/foodDetail',
    query:{
      id:id
    }
  })
}
</script>