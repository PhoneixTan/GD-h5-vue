<template>
  <div class="page">
    <van-image :src="villageDetail?.villagePic"/>
    <div class="tabBox">
      <div class="title">
        <h3>{{villageDetail?.villageName}}</h3>
      </div>
      <div class="grade">
        {{villageDetail?.villageGrade}}
      </div>
      <div class="statistics">
        <van-row gutter="20">
          <van-col span="8">
            <p class="num">{{villageDetail?.villageVisitor}}</p>
            <p class="text">当前客流</p>
          </van-col>
          <van-col span="8">
            <p class="num">{{villageDetail?.villageTotal}}</p>
            <p class="text">今日累计客流</p>
          </van-col>
          <van-col span="8">
            <p class="num">{{villageDetail?.villagePeak}}</p>
            <p class="text">入园高峰</p>
          </van-col>
        </van-row>
      </div>
      <div class="address">
        <h5>景区村地址</h5>
        <p>{{villageDetail?.villageAddress}}</p>
      </div>
    </div>
    <div class="introduce">
      <img src="../../../../assets/images/home/part/icon.png"/>
      <div class="content-title">景区村介绍</div>
      <div class="content">
        {{villageDetail?.villageIntroduce}}
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
import requestMethodVillage from '../../../../api/home/part/village'
import {VillageVo} from "../../../../entity/home/part/village";
const route =useRoute()
const villageDetail=ref<VillageVo>()
onMounted(async ()=>{
  await getVillageDetailById()
})
async function getVillageDetailById(){
  if(route.query.id){
    const {data} =await requestMethodVillage.getVillageId(route.query.id as string)
    // const { data } = await requestMethodPost.page()
    data.villagePic = data.villagePic ? BaseUtil.getUploadPath(data.villagePic as string) : ''
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
    .grade{
      position: absolute;right: 130px;top: 25px;color: #ffcf7d
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