<template>
  <div class="page">
    <van-image :src="villageDetail?.hotelPic"/>
    <div class="tabBox">
      <div class="title">
        <h3>{{villageDetail?.hotelTitle}}</h3>
      </div>
      <div class="price">
        {{villageDetail?.hotelPrice}}
      </div>
      <div class="address">
        <h5>咨询电话</h5>
        <p>{{villageDetail?.hotelPhone}}</p>
      </div>
      <div class="address">
        <h5>酒店地址</h5>
        <p>{{villageDetail?.hotelAddress}}</p>
      </div>
    </div>
    <div class="introduce">
      <img src="../../../../assets/images/home/part/icon.png"/>
      <div class="content-title">酒店介绍</div>
      <div class="content">
        {{villageDetail?.hotelIntroduce}}
      </div>
    </div>
    <div>

    </div>

  </div>

</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {BaseUtil} from "../../../../utils/base-util";
import requestMethodHotel from '../../../../api/home/part/part-hotel'
import {hotelVo} from "../../../../entity/home/part/part-hotel";
const route =useRoute()
const villageDetail=ref<hotelVo>()
onMounted(async ()=>{
  await getVillageDetailById()
})
async function getVillageDetailById(){
  if(route.query.id){
    const {data} =await requestMethodHotel.getById(route.query.id as string)
    // const { data } = await requestMethodPost.page()
    data.hotelPic = data.hotelPic ? BaseUtil.getUploadPath(data.hotelPic as string) : ''
    // return data
    villageDetail.value=data
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: #f5f5f5;
  .tabBox{
    background-color: #ffffff;
    border-radius: 15px;
    width: 350px;
    position: relative;
    top: -50px;
    left: 12px;
    .title{
      margin-left: 20px;
    }
    .price{
      position: absolute;right: 130px;top: 25px;color: #ff0404
    }
    .add{
      position: absolute;right: 5px;top: 15px
    }
    .statistics{
      margin-left: 20px;
      .num{
        color: #56d3c5;font-weight: bold
      }
      .text{
        font-size: 13px;color: #9a9a9a
      }
    }
    .address{
      margin-left: 20px;
      p{
        font-size: 12px;color: #3c3c3c
      }
    }

  }
  .introduce{
    width: 350px;
    position: relative;
    top: -40px;
    left: 12px;
    img{
      width: 350px;
      height: 55px;
    }
    .content-title{
      text-align: center;
      font-weight: 700;
    }
    .content{
      font-size: 13px;
      color: #686868;
    }

  }

}
</style>