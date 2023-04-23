<template>
  <div class="page">
    <van-image :src="venusDetail?.venuesPic"/>
    <div class="tabOne">
      <div class="statistics">
        <van-row gutter="20">
          <van-col span="10">
            <p class="num">{{venusDetail?.venuesTotal}}<span class="min">(人)</span></p>
            <p class="text">在馆人数</p>
          </van-col>
          <van-col>
            <p class="num">{{venusDetail?.venuesMaxpeak}}<span class="min">(人)</span></p>
            <p class="text">客流最高峰值</p>
          </van-col>
        </van-row>
      </div>

    </div>
    <div class="tabTwo">
      <div class="title">
        <h3>{{venusDetail?.venuesName}}</h3>
      </div>
      <div class="time">
        <h4>开放时间</h4>
        <p>周二至周日（周一闭馆）9:00-11:30，13：30-16：30</p>
      </div>
      <div class="phone">
        <h4>咨询电话</h4>
        <p>{{venusDetail?.venuesPhone}}</p>
      </div>
      <div class="address">
        <h4>文化场馆地址</h4>
        <p>{{venusDetail?.venuesAddress}}</p>
      </div>
    </div>
    <div class="introduce">
      <img src="../../../../assets/images/home/part/icon.png"/>
      <div class="content-title">文化场馆介绍</div>
      <div class="content">
        {{venusDetail?.venuesIntroduce}}
      </div>
    </div>
    <div>

    </div>


  </div>

</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {CulturalVenusVo} from "../../../../entity/home/part/culturalVenus";
import requestMethodVenus from "../../../../api/home/part/culturalVenus";
import {BaseUtil} from "../../../../utils/base-util";
const route=useRoute()
const venusDetail=ref<CulturalVenusVo>()
onMounted(async ()=>{
  await getVenusDetailId()
})
async function getVenusDetailId(){
  if(route.query.id){
    const {data} =await requestMethodVenus.getVenusId(route.query.id as string)
    // const { data } = await requestMethodPost.page()
    data.venuesPic = data.venuesPic ? BaseUtil.getUploadPath(data.venuesPic as string) : ''
    // return data
    venusDetail.value=data
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: #f5f5f5;
  .tabOne{
    background-color: #ffffff;
    border-radius: 15px;
    width: 350px;
    position: relative;
    top: -50px;
    left: 12px;
    margin-bottom: 12px;
    .statistics{
      margin-left: 60px;
      .num{
        color: #56d3c5;
        font-weight: bold;
        .min{
          font-size:10px
        }
      }
      .text{
        font-size: 13px;color: #9a9a9a
      }
    }

  }
  .tabTwo{
    background-color: #ffffff;
    border-radius: 15px;
    width: 350px;
    position: relative;
    top: -50px;
    left: 12px;
    .title{
      margin-left: 20px;
    }
    .add{
      position: absolute;right: 5px;top: 15px
    }
    .time{
      margin-left: 20px;
      p{
        font-size: 12px;color: #3c3c3c
      }
    }
    .phone{
      margin-left: 20px;
      p{
        font-size: 12px;color: #3c3c3c
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