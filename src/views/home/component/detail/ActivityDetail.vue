<template>
  <div class="page">
    <div class="activityPic">
      <van-image :src="ActivityDetail?.activityCover"/>
    </div>
    <div class="activity-top">
      <div class="activity-title">
        <h3>{{ActivityDetail?.activityTitle}}</h3>
      </div>
      <div class="activity-time">
        活动时间：
        <span class="times">
          {{ActivityDetail?.activityEnrollStartTime}}~{{ActivityDetail?.activityEnrollEndTime}}
        </span>
      </div>
      <div class="activity-location">
        活动地点：
        <span class="location">
          {{ActivityDetail?.activityPlace}}
        </span>
      </div>
    </div>
    <div class="activity-down">
      <img src="../../../../assets/images/district/title_pic.png"/>
      <div class="content-title">活动介绍</div>
      <div class="content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ActivityDetail?.activityIntroduction}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import requestMethodActive from '../../../../api/home/part/activity'
import {ActivityVo} from "../../../../entity/home/activity";
import {BaseUtil} from "../../../../utils/base-util";
const route=useRoute()
const ActivityDetail=ref<ActivityVo>()
onMounted(async ()=>{
  await getActiveDetailId()
})
async function getActiveDetailId(){
  if (route.query.id){
    const {data}=await requestMethodActive.getActivityId(route.query.id as string)
    data.activityCover=data.activityCover?BaseUtil.getUploadPath(data.activityCover as string):''
    ActivityDetail.value=data
  }
}
</script>

<style scoped lang="scss">
.page{
  background-color: #f6f6f6;
  .activity-top{
    background-color: #ffffff;
    border-radius: 15px;
    width: 350px;
    position: relative;
    top: -50px;
    left: 12px;
    .activity-title{
      margin-left: 20px;
    }
    //.activity-introduction{
    //  margin-left: 20px;
    //  margin-bottom: 20px;
    //}
    .activity-time{
      position: relative;
      top: -10px;
      margin-left: 20px;
      font-size: 15px;
      .times{
        font-size: 12px;
      }
    }
    .activity-location{
      font-size: 15px;
      margin-left: 20px;
      margin-bottom: 7px;
      .location{
        font-size: 12px;
      }
    }
  }
  .activity-down{
    width: 350px;
    position: relative;
    top: -40px;
    left: 12px;
    img{
      width: 350px;
      height: 55px;
    }
    .content-title{
      margin-bottom: 10px;
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