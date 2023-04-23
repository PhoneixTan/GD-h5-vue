<template>
  <div class="page">
    <van-image :src="villageDetail?.bbPic"/>
    <div class="tabBox">
      <div class="title">
        <h3>{{villageDetail?.bbTitle}}</h3>
      </div>
      <div class="price">
        {{villageDetail?.bbPrice}}
      </div>
      <div class="address">
        <h5>咨询电话</h5>
        <p>{{villageDetail?.bbPhone}}</p>
      </div>
      <div class="address">
        <h5>酒店地址</h5>
        <p>{{villageDetail?.bbAddress}}</p>
      </div>
    </div>
    <div class="introduce">
      <img src="../../../../assets/images/home/part/icon.png"/>
      <div class="content-title">酒店介绍</div>
      <div class="content">
        {{villageDetail?.bbIntroduce}}
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
import requestMethodBB from '../../../../api/home/part/part-bb'
import {PartBb} from "../../../../entity/home/part/part-bb";
const route =useRoute()
const villageDetail=ref<PartBb>()

onMounted(async ()=>{
  await getVillageDetailById()
})
async function getVillageDetailById(){
  if(route.query.id){
    const {data} =await requestMethodBB.getById(route.query.id as string)
    // const { data } = await requestMethodPost.page()
    data.bbPic = data.bbPic ? BaseUtil.getUploadPath(data.bbPic as string) : ''
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